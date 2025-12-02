import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Handshake, Award } from "lucide-react";

const philosophyCards = [
  {
    icon: Heart,
    title: "Sovereignty",
    description: "We believe in data sovereignty and the right of communities to own and control their health information. Our systems are designed to empower local decision-making and strengthen health system governance.",
  },
  {
    icon: Handshake,
    title: "Reciprocity & Mutuality",
    description: "Our work is grounded in principles of partnership and mutual learning. We collaborate with governments, communities, and institutions to co-create sustainable solutions that benefit all stakeholders.",
  },
  {
    icon: Award,
    title: "Competence & Trust",
    description: "We are committed to technical excellence and building trustworthy systems. Through rigorous implementation, capacity building, and ongoing support, we ensure systems that communities can rely on.",
  },
];

const timeline = [
  { year: "2005", event: "HISP India established as a collaborative initiative" },
  { year: "2008", event: "First state-wide DHIS2 implementation in Himachal Pradesh" },
  { year: "2012", event: "National Health Mission adopts DHIS2 for program monitoring" },
  { year: "2015", event: "Launch of capacity building academy" },
  { year: "2018", event: "Expansion to community information systems" },
  { year: "2020", event: "COVID-19 response with rapid digital solutions" },
  { year: "2023", event: "Integration of climate and health data analytics" },
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Hero
        title="About HISP India"
        subtitle="Our Story"
        description="Building health information systems that strengthen public health and empower communities since 2005."
      />

      {/* Who We Are */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-center">Who We Are</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p>
              HISP India is a collaborative initiative working to strengthen health information systems across India and globally. We are part of the global Health Information Systems Programme (HISP) network, which originated at the University of Oslo in the 1990s.
            </p>
            <p>
              Our team comprises public health professionals, software developers, researchers, and educators who are passionate about using technology to improve health outcomes. We work closely with governments, NGOs, academic institutions, and communities to design, implement, and sustain health information systems that are locally owned and globally connected.
            </p>
            <p>
              Based in India, we serve as a regional center of excellence for health information systems in South Asia, with projects spanning multiple states and countries. Our approach combines technical expertise with deep understanding of local health systems and community needs.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-center">Our Philosophy</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Our work is guided by three core principles that shape how we design, implement, and support health information systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyCards.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                A future where all communities have access to robust, locally-owned health information systems that enable evidence-based decision making, strengthen health service delivery, and contribute to health equity.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To design, implement, and strengthen sustainable health information systems through participatory approaches, capacity building, research, and innovation that empower communities and health systems to achieve better health outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey/Timeline */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-24">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="h-full border-l-2 border-primary/20 pl-6 pb-8">
                    <p className="text-lg">{item.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want to Learn More or Partner With Us?"
        description="We're always eager to connect with organizations and individuals who share our vision."
      >
        <Button size="lg" variant="secondary" asChild>
          <Link to="/contact">Get in Touch</Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
          <Link to="/team">Meet Our Team</Link>
        </Button>
      </CTASection>
    </div>
  );
}
