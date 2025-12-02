import { useParams, Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, MapPin, Briefcase, Clock, Upload } from "lucide-react";

const jobsData: Record<string, any> = {
  "sr-dhis2-dev": {
    title: "Senior DHIS2 Developer",
    department: "Technology",
    location: "Delhi",
    type: "Full-time",
    description: "We are seeking an experienced DHIS2 Developer to lead implementation projects, develop custom applications and integrations, and mentor junior team members. You will work on challenging projects implementing DHIS2 at scale for government health programs.",
    responsibilities: [
      "Lead technical implementation of DHIS2 projects including system architecture design and configuration",
      "Develop custom DHIS2 applications using Web API, App Platform, and integration with external systems",
      "Design and implement data integration solutions connecting DHIS2 with other health information systems",
      "Provide technical leadership and mentoring to junior developers",
      "Collaborate with program managers and implementation teams to translate requirements into technical solutions",
      "Contribute to DHIS2 core development and global community",
      "Conduct technical training and workshops for system administrators",
      "Ensure code quality, documentation, and adherence to best practices",
    ],
    requirements: [
      "5+ years of software development experience with at least 3 years working with DHIS2",
      "Strong proficiency in Java, JavaScript/TypeScript, React",
      "Deep understanding of DHIS2 architecture, Web API, metadata, and data model",
      "Experience with PostgreSQL and database optimization",
      "Familiarity with health information exchange standards (FHIR, HL7)",
      "Experience with Linux server administration and deployment",
      "Strong problem-solving skills and ability to work independently",
      "Excellent communication skills and ability to work with non-technical stakeholders",
      "Bachelor's degree in Computer Science or related field",
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health insurance",
      "Professional development opportunities and conference attendance",
      "Work-life balance and flexible work arrangements",
      "Opportunity to contribute to public health impact",
    ],
    culture: "At HISP India, you'll join a mission-driven team passionate about using technology for public good. We foster a collaborative, learning-oriented culture where innovation is encouraged and impact is celebrated.",
  },
  "program-manager": {
    title: "Program Manager - Health Information Systems",
    department: "Program Management",
    location: "Bangalore",
    type: "Full-time",
    description: "We are looking for an experienced Program Manager to lead health information system implementation projects, coordinate with government partners, and ensure successful project delivery. You will manage complex, multi-stakeholder projects across multiple states.",
    responsibilities: [
      "Lead end-to-end management of health information system implementation projects",
      "Coordinate with government officials, implementing partners, and internal teams",
      "Develop project plans, budgets, and monitoring frameworks",
      "Conduct stakeholder engagement and change management activities",
      "Monitor project progress and address implementation challenges",
      "Ensure quality of deliverables and timely project completion",
      "Prepare project reports and presentations for donors and partners",
      "Support business development and proposal writing activities",
    ],
    requirements: [
      "7+ years of program management experience, preferably in health or technology sectors",
      "Experience managing health information system or digital health projects",
      "Strong understanding of public health systems in India",
      "Proven ability to work with government partners and navigate bureaucratic processes",
      "Excellent project management skills including planning, budgeting, and risk management",
      "Strong communication and presentation skills",
      "Master's degree in Public Health, Management, or related field preferred",
      "Willingness to travel to project sites",
    ],
    benefits: [
      "Competitive salary commensurate with experience",
      "Comprehensive health and life insurance",
      "Professional development and training opportunities",
      "Travel allowances for field visits",
      "Supportive work environment focused on work-life balance",
    ],
    culture: "Join a team committed to strengthening public health systems through technology. We value collaboration, continuous learning, and making meaningful impact in communities across India.",
  },
};

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const job = id ? jobsData[id] : null;

  if (!job) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
        <Button asChild>
          <Link to="/careers">Back to Careers</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Hero title={job.title} />

      {/* Back Button & Job Meta */}
      <div className="container py-6">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/careers">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Careers
          </Link>
        </Button>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Badge variant="secondary" className="text-base py-2 px-4">
            <Briefcase className="mr-2 h-4 w-4" />
            {job.department}
          </Badge>
          <Badge variant="secondary" className="text-base py-2 px-4">
            <MapPin className="mr-2 h-4 w-4" />
            {job.location}
          </Badge>
          <Badge variant="secondary" className="text-base py-2 px-4">
            <Clock className="mr-2 h-4 w-4" />
            {job.type}
          </Badge>
        </div>
      </div>

      {/* Job Description */}
      <section className="py-8">
        <div className="container max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed">{job.description}</p>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-12 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6">Key Responsibilities</h2>
          <ul className="space-y-3">
            {job.responsibilities.map((item: string, index: number) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6">Requirements</h2>
          <ul className="space-y-3">
            {job.requirements.map((item: string, index: number) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6">What We Offer</h2>
          <ul className="space-y-3">
            {job.benefits.map((item: string, index: number) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Culture */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6">Our Culture</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{job.culture}</p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-muted">
        <div className="container max-w-2xl">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">Apply for This Position</h2>
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Resume/CV *</Label>
                  <div className="flex items-center gap-3">
                    <Input id="resume" type="file" accept=".pdf,.doc,.docx" required />
                    <Upload className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">PDF or Word document (Max 5MB)</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
