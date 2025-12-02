import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    icon: Database,
    title: "Routine Health Information Systems",
    description: "Comprehensive digital solutions for routine health data management and reporting.",
    href: "/offerings/routine-health-info-systems",
  },
  {
    icon: Users,
    title: "Community Information Systems",
    description: "Empowering communities with digital tools for local health information management.",
    href: "/offerings/community-info-systems",
  },
  {
    icon: Hospital,
    title: "OpenMRS Integrated Hospital Information Systems",
    description: "Open-source hospital management systems for seamless patient care coordination.",
    href: "/offerings/openmrs-his",
  },
  {
    icon: BarChart,
    title: "Data Analytics, Integration & Management",
    description: "Advanced analytics and data integration solutions for evidence-based decision making.",
    href: "/offerings/data-analytics",
  },
  {
    icon: BookOpen,
    title: "Action & Implementation Research",
    description: "Research-driven approaches to implement and evaluate health information systems.",
    href: "/offerings/research",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building & Education",
    description: "Training and education programs to build sustainable health information system capacity.",
    href: "/offerings/capacity-building",
  },
  {
    icon: Cloud,
    title: "Climate & Health Data Analytics",
    description: "Innovative analytics linking climate data with health outcomes for better preparedness.",
    href: "/offerings/climate-health-analytics",
  },
];

const expertise = [
  { title: "DHIS2 Expertise", count: "200+", description: "Implementations Worldwide" },
  { title: "Years of Experience", count: "15+", description: "In Health Information Systems" },
  { title: "Training Programs", count: "500+", description: "Professionals Trained" },
  { title: "Research Publications", count: "100+", description: "Academic Papers" },
];

const featuredProjects = [
  {
    title: "National Health Mission DHIS2 Implementation",
    region: "India",
    description: "Nationwide implementation of DHIS2 for health program monitoring and evaluation.",
    tags: ["DHIS2", "National", "Health Programs"],
  },
  {
    title: "Community Health Workers Digital Platform",
    region: "Kerala",
    description: "Mobile-first platform for community health workers to track maternal and child health.",
    tags: ["Mobile", "Community Health", "MCH"],
  },
  {
    title: "OpenMRS Hospital System Integration",
    region: "Karnataka",
    description: "Integrated hospital information system deployment across 50+ facilities.",
    tags: ["OpenMRS", "Hospital", "Integration"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero
        title="Building Health Information Systems for Public Good"
        subtitle="HISP India"
        description="We design, implement, and strengthen sustainable health information systems that empower communities and improve public health outcomes across India and beyond."
        variant="gradient"
      >
        <Button size="lg" asChild>
          <Link to="/about">Learn About Us</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </Hero>

      {/* Offerings Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Offerings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for health information systems across diverse contexts and needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <offering.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{offering.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{offering.description}</p>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link to={offering.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/offerings">View All Offerings</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven track record in health information systems implementation and capacity building.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{item.count}</div>
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing our impact across diverse health information system implementations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">{project.region}</Badge>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/work">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Health Information Systems?"
        description="Let's work together to build sustainable, community-centered solutions."
      >
        <Button size="lg" variant="secondary" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
          <Link to="/offerings">Explore Our Services</Link>
        </Button>
      </CTASection>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container max-w-2xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest insights on health information systems, research updates, and project highlights.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
