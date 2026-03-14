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
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const countries = [
  "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Bangladesh",
  "Belgium", "Bhutan", "Bolivia", "Brazil", "Cambodia", "Cameroon", "Canada",
  "Chad", "Chile", "China", "Colombia", "Congo", "Denmark", "Egypt",
  "Ethiopia", "Finland", "France", "Germany", "Ghana", "Greece", "Guatemala",
  "Haiti", "Honduras", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kenya", "Laos",
  "Lebanon", "Liberia", "Libya", "Madagascar", "Malawi", "Malaysia", "Mali",
  "Mexico", "Mongolia", "Morocco", "Mozambique", "Myanmar", "Nepal",
  "Netherlands", "New Zealand", "Niger", "Nigeria", "Norway", "Pakistan",
  "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
  "Poland", "Portugal", "Rwanda", "Saudi Arabia", "Senegal", "Sierra Leone",
  "Singapore", "Somalia", "South Africa", "South Korea", "South Sudan",
  "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland", "Syria",
  "Tanzania", "Thailand", "Togo", "Tunisia", "Turkey", "Uganda", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
  "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
  "Other",
];

const domainOptions = [
  "Health",
  "Climate and Health",
  "Logistics",
  "Education",
  "Other",
];

const serviceOptions = [
  "Routine Health Information Systems",
  "Community Information Systems",
  "OpenMRS Integrated Hospital Information Systems",
  "Data Analytics, Integration & Data Management",
  "Action & Implementation Research",
  "Capacity Building & Education",
  "Climate & Health Data Analytics",
  "Other",
];

const formSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  country: z.string().min(1, "Country is required"),
  url: z.string().trim().max(500).optional(),
  phone: z.string().trim().max(20).optional(),
  dhis2Interest: z.string().trim().max(1000).optional(),
  domain: z.string().min(1, "Please select a domain"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
});

type FormData = z.infer<typeof formSchema>;

interface ScheduleCallDialogProps {
  children: React.ReactNode;
}

export function ScheduleCallDialog({ children }: ScheduleCallDialogProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    url: "",
    phone: "",
    dhis2Interest: "",
    domain: "",
    services: [],
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleServiceToggle = (service: string, checked: boolean) => {
    setForm((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, service]
        : prev.services.filter((s) => s !== service),
    }));
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // For now, just show success toast
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Request Submitted!",
        description: "We'll get back to you shortly to schedule a call.",
      });
      setForm({
        firstName: "", lastName: "", email: "", country: "",
        url: "", phone: "", dhis2Interest: "", domain: "", services: [],
      });
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
          <DialogTitle className="font-heading text-2xl">Schedule a Call</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="font-semibold">First Name *</Label>
              <Input id="firstName" placeholder="Enter Your First Name" value={form.firstName} onChange={handleChange} />
              {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="font-semibold">Last Name *</Label>
              <Input id="lastName" placeholder="Enter Your Last Name" value={form.lastName} onChange={handleChange} />
              {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email & Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-semibold">Email *</Label>
              <Input id="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <Label className="font-semibold">Country *</Label>
              <Select value={form.country} onValueChange={(val) => { setForm((p) => ({ ...p, country: val })); setErrors((p) => ({ ...p, country: undefined })); }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {countries.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.country && <p className="text-sm text-destructive">{errors.country}</p>}
            </div>
          </div>

          {/* URL & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="url" className="font-semibold">URL</Label>
              <Input id="url" placeholder="https://" value={form.url} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-semibold">Phone/Mobile</Label>
              <Input id="phone" placeholder="Mobile Number" value={form.phone} onChange={handleChange} />
            </div>
          </div>

          {/* DHIS2 Interest */}
          <div className="space-y-2">
            <Label htmlFor="dhis2Interest" className="font-semibold">
              What are you interested in using DHIS2 for?
            </Label>
            <Textarea id="dhis2Interest" rows={3} value={form.dhis2Interest} onChange={handleChange} />
          </div>

          {/* Domain */}
          <div className="space-y-2">
            <Label className="font-semibold">Indicate the domain of your DHIS2 project: *</Label>
            <Select value={form.domain} onValueChange={(val) => { setForm((p) => ({ ...p, domain: val })); setErrors((p) => ({ ...p, domain: undefined })); }}>
              <SelectTrigger>
                <SelectValue placeholder="- Select -" />
              </SelectTrigger>
              <SelectContent>
                {domainOptions.map((d) => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.domain && <p className="text-sm text-destructive">{errors.domain}</p>}
          </div>

          {/* Services (multi-select checkboxes) */}
          <div className="space-y-3">
            <Label className="font-semibold">
              Which services of HISP India are you interested in? (select all that apply) <span className="text-destructive">*</span>
            </Label>
            <div className="space-y-2 border rounded-md p-4 bg-muted/30">
              {serviceOptions.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={`service-${service}`}
                    checked={form.services.includes(service)}
                    onCheckedChange={(checked) => handleServiceToggle(service, !!checked)}
                  />
                  <label htmlFor={`service-${service}`} className="text-sm cursor-pointer">
                    {service}
                  </label>
                </div>
              ))}
            </div>
            {errors.services && <p className="text-sm text-destructive">{errors.services}</p>}
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
