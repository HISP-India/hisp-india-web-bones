import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const positionOptions = [
  "General / Open Application",
  "Senior DHIS2 Developer",
  "Program Manager - Health Information Systems",
  "Research Associate - Implementation Science",
  "Training Coordinator",
  "Implementation Specialist",
];

const formSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  position: z.string().min(1, "Please select a position"),
  coverLetter: z.string().trim().max(5000).optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ResumeSubmitDialogProps {
  children: React.ReactNode;
}

export function ResumeSubmitDialog({ children }: ResumeSubmitDialogProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData | "resume", string>>>({});
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(file.type)) {
      setErrors((prev) => ({ ...prev, resume: "Only PDF, DOC, and DOCX files are accepted" }));
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, resume: "File size must be under 5 MB" }));
      return;
    }

    setResumeFile(file);
    setErrors((prev) => ({ ...prev, resume: undefined }));
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1]); // strip data URI prefix
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData | "resume", string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      if (!resumeFile) fieldErrors.resume = "Please upload your resume";
      setErrors(fieldErrors);
      return;
    }

    if (!resumeFile) {
      setErrors({ resume: "Please upload your resume" });
      return;
    }

    setIsSubmitting(true);
    try {
      const resumeBase64 = await fileToBase64(resumeFile);

      const { data, error } = await supabase.functions.invoke("send-resume-email", {
        body: {
          ...result.data,
          resumeBase64,
          resumeFileName: resumeFile.name,
          resumeContentType: resumeFile.type,
        },
      });

      if (error) throw error;
      if (data && !data.success) throw new Error(data.error || "Failed to send");

      toast({
        title: "Application Submitted!",
        description: "We've sent you a confirmation email. Our team will review your application.",
      });
      setForm({ firstName: "", lastName: "", email: "", phone: "", position: "", coverLetter: "" });
      setResumeFile(null);
      setOpen(false);
    } catch {
      toast({
        title: "Failed to submit",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Submit Your Resume</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="font-semibold">First Name *</Label>
              <Input id="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
              {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="font-semibold">Last Name *</Label>
              <Input id="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
              {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-semibold">Email *</Label>
              <Input id="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-semibold">Phone</Label>
              <Input id="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
            </div>
          </div>

          {/* Position */}
          <div className="space-y-2">
            <Label className="font-semibold">Position of Interest *</Label>
            <Select value={form.position} onValueChange={(val) => { setForm((p) => ({ ...p, position: val })); setErrors((p) => ({ ...p, position: undefined })); }}>
              <SelectTrigger>
                <SelectValue placeholder="Select a position" />
              </SelectTrigger>
              <SelectContent>
                {positionOptions.map((p) => (
                  <SelectItem key={p} value={p}>{p}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.position && <p className="text-sm text-destructive">{errors.position}</p>}
          </div>

          {/* Resume Upload */}
          <div className="space-y-2">
            <Label className="font-semibold">Upload Resume * <span className="text-muted-foreground font-normal">(PDF, DOC, DOCX — max 5 MB)</span></Label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => document.getElementById("resume-upload")?.click()}
            >
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              {resumeFile ? (
                <p className="text-sm font-medium">{resumeFile.name}</p>
              ) : (
                <p className="text-sm text-muted-foreground">Click to upload your resume</p>
              )}
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            {errors.resume && <p className="text-sm text-destructive">{errors.resume}</p>}
          </div>

          {/* Cover Letter */}
          <div className="space-y-2">
            <Label htmlFor="coverLetter" className="font-semibold">Cover Letter / Message</Label>
            <Textarea id="coverLetter" rows={4} placeholder="Tell us why you'd be a great fit..." value={form.coverLetter} onChange={handleChange} />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
