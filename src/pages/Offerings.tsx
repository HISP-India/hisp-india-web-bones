import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
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
    </div>
  );
}
