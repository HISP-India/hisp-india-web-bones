import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResumeSubmitDialog } from "@/components/ResumeSubmitDialog";

export default function Careers() {

  return (
    <div className="flex flex-col">
      <Hero
        title="Join Our Team"
        subtitle="Careers at HISP India"
        description="Be part of a mission-driven team building health information systems for public good."
        variant="gradient"
        className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground"
      />

      {/* Why Join Us */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">Why Join HISP India</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-heading font-semibold mb-2">Meaningful Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Work on projects that directly improve public health outcomes and strengthen health systems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-heading font-semibold mb-2">Learning & Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous learning opportunities, exposure to diverse projects, and professional development support.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-heading font-semibold mb-2">Collaborative Culture</h3>
                <p className="text-sm text-muted-foreground">
                  Work with a diverse, passionate team committed to public good and mutual support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">Our Hiring Process</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Application Review", description: "We review your application and assess alignment with position requirements." },
              { step: "2", title: "Initial Screening", description: "Selected candidates participate in an initial phone or video screening." },
              { step: "3", title: "Technical/Skills Assessment", description: "Depending on the role, complete a technical assessment or case study." },
              { step: "4", title: "Team Interview", description: "Meet with team members and hiring managers to discuss experience and fit." },
              { step: "5", title: "Offer & Onboarding", description: "Successful candidates receive an offer and begin comprehensive onboarding." },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                  <p className="opacity-90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See the Right Role?"
        description="We're always interested in hearing from talented individuals passionate about public health technology."
        variant="default"
      >
        <ResumeSubmitDialog>
          <Button size="lg" variant="default">Send Us Your Resume</Button>
        </ResumeSubmitDialog>
        <Button asChild size="lg" variant="outline">
          <Link to="/about">Learn More About Us</Link>
        </Button>
      </CTASection>
    </div>
  );
}
