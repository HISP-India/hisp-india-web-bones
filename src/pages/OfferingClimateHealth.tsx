import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { ScheduleCallDialog } from "@/components/ScheduleCallDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  Brain,
  BarChart3,
  Layers,
  Activity,
  ShieldCheck,
  Target,
  Coins,
  Users,
  ArrowRight,
} from "lucide-react";

const keyFeatures = [
  {
    icon: Database,
    title: "Data Aggregation & Integration",
    description:
      "Allows flexible data aggregation at different geographic and temporal scales, enabling comprehensive analysis across regions and time periods.",
  },
  {
    icon: Brain,
    title: "Machine Learning & Predictive Analytics",
    description:
      "Utilizes AI-driven models to predict climate-related health outcomes, such as heatwaves, vector-borne diseases, and air pollution-related illnesses.",
  },
  {
    icon: BarChart3,
    title: "Visualization & Dashboards",
    description:
      "Develops interactive dashboards for triangulating health and climate data, making complex relationships more interpretable for decision-makers.",
  },
  {
    icon: Layers,
    title: "Interdisciplinary Data Fusion",
    description:
      "Combines health records, meteorological data, and environmental indicators to identify patterns and correlations in climate-health interactions.",
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description:
      "Enables continuous surveillance of climate-sensitive health conditions, improving early warning systems for outbreaks and extreme weather events.",
  },
];

const impactItems = [
  {
    icon: ShieldCheck,
    title: "Enhanced Public Health Preparedness",
    description:
      "Helps governments and organizations proactively address climate-induced health risks by leveraging predictive models.",
  },
  {
    icon: Target,
    title: "Improved Decision-Making",
    description:
      "Supports evidence-based policies by correlating climate variables with health outcomes, ensuring targeted interventions.",
  },
  {
    icon: Coins,
    title: "Informed Resource Allocation",
    description:
      "Guides health system preparedness by identifying vulnerable populations and high-risk regions, optimizing the allocation of medical resources and emergency response.",
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description:
      "Provides accessible data to local governments and communities, promoting resilience through knowledge-sharing and localized adaptation strategies.",
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
];

export default function OfferingClimateHealth() {
  return (
    <div className="flex flex-col">
      <Hero title="Climate and Health Data Analytics" />

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Introduction
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Climate and Health Data Analytics is a rapidly growing field that integrates
              environmental and health data to understand and mitigate climate-related health risks.
              By leveraging advanced data analytics, machine learning models, and predictive tools,
              this approach helps public health professionals and policymakers make informed decisions
              to safeguard populations from climate-sensitive diseases and environmental hazards. It
              enhances existing Health Information Systems (HIS) by providing timely insights into
              climate-related health threats, ensuring better preparedness and response strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            Key Features
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {keyFeatures.map((feature, i) => (
              <div key={i} className="flex gap-5">
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
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            Impact
          </h2>
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
          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-10 text-center">
            Explore our other Offerings
          </h2>
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
