import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Database,
  Users,
  Hospital,
  BarChart,
  BookOpen,
  GraduationCap,
  Cloud,
  ArrowRight,
  Target,
  Award,
  Globe,
} from "lucide-react";

const offerings = [
  {
    id: "routine-health-info-systems",
    icon: Database,
    title: "Routine Health Information Systems",
    description: "Comprehensive digital solutions for routine health data management, reporting, and analysis. We implement DHIS2 and custom platforms for health program monitoring, disease surveillance, and health facility reporting.",
  },
  {
    id: "community-info-systems",
    icon: Users,
    title: "Community Information Systems",
    description: "Empowering communities with digital tools for local health information management. Mobile-first platforms for community health workers, participatory data collection, and community-centered health monitoring.",
  },
  {
    id: "openmrs-his",
    icon: Hospital,
    title: "OpenMRS Integrated Hospital Information Systems",
    description: "Open-source hospital management systems for seamless patient care coordination. Electronic medical records, pharmacy management, laboratory systems, and integrated hospital workflows.",
  },
  {
    id: "data-analytics",
    icon: BarChart,
    title: "Data Analytics, Integration & Data Management",
    description: "Advanced analytics and data integration solutions for evidence-based decision making. Data warehouses, business intelligence dashboards, predictive analytics, and health information exchange platforms.",
  },
  {
    id: "research",
    icon: BookOpen,
    title: "Action & Implementation Research",
    description: "Research-driven approaches to implement and evaluate health information systems. Implementation science studies, impact evaluations, participatory action research, and evidence generation for policy and practice.",
  },
  {
    id: "capacity-building",
    icon: GraduationCap,
    title: "Capacity Building & Education",
    description: "Training and education programs to build sustainable health information system capacity. DHIS2 academies, system administration training, data analysis courses, and long-term mentoring programs.",
  },
  {
    id: "climate-health-analytics",
    icon: Cloud,
    title: "Climate & Health Data Analytics",
    description: "Innovative analytics linking climate data with health outcomes for better preparedness. Climate-sensitive disease surveillance, environmental health monitoring, and climate adaptation planning for health systems.",
  },
];

export default function Offerings() {
  return (
    <div className="flex flex-col">
      <Hero
        title="Our Offerings"
        subtitle="What We Do"
        description="Comprehensive solutions for health information systems across diverse contexts and needs."
        variant="gradient"
        className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground"
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering) => (
              <Card key={offering.id} className="group hover:shadow-lg transition-all h-full flex flex-col">
                <CardHeader>
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <offering.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{offering.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1">{offering.description}</p>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={`/offerings/${offering.id}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Partner With HISP India
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">20+ Years Experience</h3>
              <p className="opacity-90">
                Deep expertise in health information systems across diverse contexts and scales.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Open Source Commitment</h3>
              <p className="opacity-90">
                Building sustainable solutions with open-source platforms and community-driven development.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">National Scale Impact</h3>
              <p className="opacity-90">
                Successfully implementing health information systems serving millions across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Health Information Systems?"
        description="Let's discuss how we can support your health programs with effective, sustainable digital solutions."
        variant="default"
      >
        <Button asChild size="lg" variant="default">
          <Link to="/contact">Get in Touch</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/work">View Our Work</Link>
        </Button>
      </CTASection>
    </div>
  );
}
