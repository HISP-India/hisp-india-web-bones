import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { ScheduleCallDialog } from "@/components/ScheduleCallDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ClipboardCheck,
  Globe2,
  BarChart3,
  Shield,
  Lightbulb,
  Target,
  TrendingUp,
  Microscope,
  ArrowRight,
} from "lucide-react";

const keyFeatures = [
  {
    icon: ClipboardCheck,
    title: "Health System Research and HIS Evaluations",
    description:
      "Conducts comprehensive assessments of health information systems and their impact on healthcare delivery, generating actionable insights for system improvement.",
  },
  {
    icon: Globe2,
    title: "Global Evaluations",
    description:
      "Past evaluations conducted in Tajikistan, Bhutan, Sri Lanka, and Ethiopia to assess HIS effectiveness and identify opportunities for strengthening health systems.",
  },
  {
    icon: BarChart3,
    title: "DHIS2 Maturity Assessments",
    description:
      "Evaluations performed in Afghanistan, Nepal, Bhutan, and Lao PDR to assess the implementation and progression of DHIS2 across diverse health system contexts.",
  },
  {
    icon: Shield,
    title: "Antimicrobial Resistance Surveillance and Research",
    description:
      "Focuses on AMR surveillance, antibiotic prescription analysis, and capacity-building efforts to combat drug resistance at national and institutional levels.",
  },
];

const impactItems = [
  {
    icon: Lightbulb,
    title: "Enhancing Digital Health Interventions",
    description:
      "Provides evidence-based insights to improve the efficiency and scalability of health information systems, ensuring interventions are effective and sustainable.",
  },
  {
    icon: Target,
    title: "Strengthening Policy and Decision-Making",
    description:
      "Generates data-driven recommendations to support health policy formulation and strategic planning at national and sub-national levels.",
  },
  {
    icon: TrendingUp,
    title: "Improving Global Health Systems",
    description:
      "Identifies best practices and gaps through international evaluations, contributing to stronger digital health strategies across countries.",
  },
  {
    icon: Microscope,
    title: "Advancing Antimicrobial Stewardship",
    description:
      "Strengthens AMR surveillance and supports the development of targeted interventions at national and state levels to combat drug resistance.",
  },
];

const otherOfferings = [
  {
    title: "Routine Health Information Systems",
    description:
      "Comprehensive digital solutions for routine health data management, reporting, and analysis using DHIS2.",
    link: "/offerings/routine-health-info-systems",
  },
  {
    title: "Community Information Systems",
    description:
      "Empowering communities with digital tools for local health information management and mobile-first platforms.",
    link: "/offerings/community-info-systems",
  },
  {
    title: "OpenMRS Integrated Hospital Information Systems",
    description:
      "Open-source hospital management systems for seamless patient care coordination and electronic medical records.",
    link: "/offerings/openmrs-his",
  },
  {
    title: "Data Analytics, Integration & Data Management",
    description:
      "Advanced analytics and data integration solutions for evidence-based decision making.",
    link: "/offerings/data-analytics",
  },
  {
    title: "Capacity Building & Education",
    description:
      "Training and education programs to build sustainable health information system capacity.",
    link: "/offerings/capacity-building",
  },
  {
    title: "Climate & Health Data Analytics",
    description:
      "Innovative analytics linking climate data with health outcomes for better preparedness.",
    link: "/offerings/climate-health-analytics",
  },
];

export default function OfferingResearch() {
  return (
    <div className="flex flex-col">
      <Hero title="Action and Implementation Research" />

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-10">
              <div className="inline-block bg-accent text-accent-foreground px-8 py-2.5 rounded-full text-lg font-semibold shadow-md">
                Introduction
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base">
              HISP India's Action and Implementation Research focuses on evaluating and improving
              health information systems (HIS) and related digital health interventions. Through
              targeted research initiatives, the aim is to generate evidence-based insights that
              contribute to strengthening health systems. The research spans areas such as Health
              System Evaluations, DHIS2 Maturity Assessments, and Antimicrobial Resistance (AMR)
              Surveillance, ensuring that digital health interventions are effective, scalable, and
              contextually relevant.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container">
          <div className="flex items-center justify-center mb-12">
            <div className="inline-block bg-accent text-accent-foreground px-8 py-2.5 rounded-full text-lg font-semibold shadow-md">
              Key Features
            </div>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                    <feature.icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="flex items-center justify-center mb-12">
            <div className="inline-block bg-accent text-accent-foreground px-8 py-2.5 rounded-full text-lg font-semibold shadow-md">
              Impact
            </div>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {impactItems.map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-accent text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-12">
        <div className="container max-w-4xl">
          <p className="text-secondary-foreground/80 text-sm mb-2">
            Explore real-world projects where HISP India's innovations and partnerships are
            transforming public health systems.
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground mb-6">
            See How We Turn Solutions Into Impact
          </h2>
          <Button asChild variant="default" size="lg">
            <Link to="/work">
              View Our Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Explore Other Offerings */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container">
          <div className="flex items-center justify-center mb-10">
            <div className="inline-block bg-accent text-accent-foreground px-8 py-2.5 rounded-full text-lg font-semibold shadow-md">
              Explore our other Offerings
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {otherOfferings.map((item, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6 px-6">
                  <h3 className="font-heading font-bold text-foreground mb-3 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-5 leading-relaxed">
                    {item.description}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={item.link}>
                      Know More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <CTASection
        title="Interested in This Service?"
        description="Let's discuss how we can help strengthen your health information systems."
      >
        <Button size="lg" variant="secondary" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
        <ScheduleCallDialog>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white bg-white/20 hover:bg-white/30"
          >
            Schedule a Call
          </Button>
        </ScheduleCallDialog>
      </CTASection>
    </div>
  );
}
