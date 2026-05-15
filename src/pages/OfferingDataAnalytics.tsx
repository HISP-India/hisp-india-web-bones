import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { ScheduleCallDialog } from "@/components/ScheduleCallDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  Share2,
  Database,
  Globe,
  Lightbulb,
  TrendingUp,
  Link2,
  Eye,
  ArrowRight,
} from "lucide-react";

const keyFeatures = [
  {
    icon: BarChart3,
    title: "Integrated Data Dashboards",
    description:
      "Custom-built analytics dashboards for real-time insights and decision-making. Provides real-time internal insights with advanced integration across health programs.",
  },
  {
    icon: Share2,
    title: "DHIS2 and OpenMRS Interoperability",
    description:
      "Ensures seamless integration between national health systems and hospital data management platforms, enabling electronic data exchange with advanced health systems.",
  },
  {
    icon: Database,
    title: "Scalable Data Solutions",
    description:
      "Designed to handle diverse health datasets across different healthcare programs. Handles diverse internal datasets with basic scalability for growing data needs.",
  },
  {
    icon: Globe,
    title: "Public and Private Data Access",
    description:
      "Supports both internal and public-facing dashboards for broader data visibility. Offers basic external access for broader data visibility to stakeholders and researchers.",
  },
];

const impactItems = [
  {
    icon: Lightbulb,
    title: "Enhanced Data-Driven Decision-Making",
    description:
      "Supports informed policymaking through real-time health data analytics, enabling stakeholders to make evidence-based decisions at all levels of the health system.",
  },
  {
    icon: TrendingUp,
    title: "Improved Health System Efficiency",
    description:
      "Streamlines data integration for better health monitoring and service delivery, reducing duplication and improving resource allocation.",
  },
  {
    icon: Link2,
    title: "Strengthened Interoperability",
    description:
      "Facilitates seamless data exchange between different health information systems, breaking down data silos across programs and institutions.",
  },
  {
    icon: Eye,
    title: "Greater Transparency and Accessibility",
    description:
      "Provides open access to key health data for stakeholders and researchers, promoting accountability and collaborative improvement.",
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
    title: "Action & Implementation Research",
    description:
      "Research-driven approaches to implement and evaluate health information systems effectively.",
    link: "/offerings/research",
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

export default function OfferingDataAnalytics() {
  return (
    <div className="flex flex-col">
      <Hero title="Data Analytics, Integration and Data Management" />

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-10">
              <div className="inline-block bg-primary text-primary-foreground px-8 py-2.5 rounded-full text-lg font-semibold shadow-md">
                Introduction
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base">
              HISP India's Data Analytics, Integration, and Data Management initiative leverages
              open-source platforms like DHIS2 to provide comprehensive data solutions for public
              health systems. By developing advanced data analytics tools, integrated dashboards,
              and interoperability solutions, this initiative enhances data-driven decision-making
              at both national and state levels. The approach ensures seamless data collection,
              management, and analysis, enabling policymakers, healthcare providers, and researchers
              to derive meaningful insights for better health outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container">
          <div className="flex items-center justify-center mb-12">
            <div className="inline-block bg-primary text-primary-foreground px-8 py-2.5 rounded-full text-lg font-semibold shadow-md">
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
            <div className="inline-block bg-primary text-primary-foreground px-8 py-2.5 rounded-full text-lg font-semibold shadow-md">
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

      {/* CTA: See How We Turn Solutions Into Impact */}
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
            <div className="inline-block bg-primary text-primary-foreground px-8 py-2.5 rounded-full text-lg font-semibold shadow-md">
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
