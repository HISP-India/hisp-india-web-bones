import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import {
  Database,
  Users,
  Building2,
  BarChart3,
  Search,
  GraduationCap,
  Cloud,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const offerings = [
  {
    icon: Database,
    title: "Routine Health Information Systems",
    description: "Comprehensive DHIS2-based solutions for national and state-level health data management, reporting, and visualization.",
    link: "/offerings/routine-health-info-systems",
  },
  {
    icon: Users,
    title: "Community Information Systems",
    description: "Mobile and web-based platforms empowering community health workers with real-time data collection and decision support.",
    link: "/offerings/community-info-systems",
  },
  {
    icon: Building2,
    title: "OpenMRS Integrated Hospital Information Systems",
    description: "End-to-end hospital management solutions integrating patient records, pharmacy, laboratory, and billing systems.",
    link: "/offerings/openmrs-his",
  },
  {
    icon: BarChart3,
    title: "Data Analytics, Integration & Management",
    description: "Advanced analytics pipelines, data warehousing, and integration services connecting multiple health information systems.",
    link: "/offerings/data-analytics",
  },
  {
    icon: Search,
    title: "Action & Implementation Research",
    description: "Evidence-based research partnerships exploring health system strengthening, digital health adoption, and policy impact.",
    link: "/offerings/research",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building & Education",
    description: "Training programs, academic courses, and continuous learning initiatives for health informatics professionals.",
    link: "/offerings/capacity-building",
  },
  {
    icon: Cloud,
    title: "Climate & Health Data Analytics",
    description: "Innovative solutions linking climate data with health outcomes for climate-resilient public health planning.",
    link: "/offerings/climate-health-analytics",
  },
];

const expertise = [
  {
    icon: Database,
    title: "System Development",
    description: "Integrating health data solutions with DHIS2 and OpenMRS worldwide.",
    link: "/offerings",
  },
  {
    icon: Search,
    title: "Research",
    description: "Advancing health informatics through AMR, health inequities & climate studies",
    link: "/research",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building",
    description: "Empowering stakeholders with specialised digital courses and training",
    link: "/offerings/capacity-building",
  },
  {
    icon: TrendingUp,
    title: "Health Systems Assessments",
    description: "Systematic evaluations ensuring robust, efficient, and data-driven health systems.",
    link: "/offerings",
  },
];

export default function Home() {

  return (
    <div className="scroll-smooth">
      {/* Hero Section - Full Viewport Height */}
      <Hero
        variant="fullscreen"
        subtitle="HISP India"
        title="Building Health Information Systems for Public Good"
        description="Empowering nations with open-source solutions, research excellence, and capacity building for sustainable public health transformation"
        showScrollIndicator
      >
        <Button asChild size="lg" className="shadow-lg">
          <Link to="/about">Learn More</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="shadow-lg bg-background/20 border-primary-foreground/30 text-primary-foreground hover:bg-background/30">
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </Hero>

      {/* About Us in Brief */}
      <section className="py-20 md:py-32 bg-background scroll-snap-start">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">About HISP India</Badge>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Leading Public Health Informatics Partner
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Over the last two decades, HISP India has sought to firmly establish itself as a leading public health informatics partner. It uniquely blends rigorous research and education, advanced digital solutions based on free and open-source software platforms, and targeted capacity-building initiatives to tackle public health challenges in India and globally, focusing on South Asia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a non-profit organization, HISP India has successfully developed engagement models while operating in a market increasingly dominated by large IT companies. The distinctive model, which integrates health system strengthening, research, and education, has enabled HISP India to establish a unique position.
              </p>
              <Button asChild variant="default" className="group">
                <Link to="/about">
                  Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Database className="w-32 h-32 text-primary/40" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 md:py-32 bg-muted scroll-snap-start">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              OUR EXPERTISE
            </h2>
            <div className="w-full h-1 bg-primary mb-16" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card group"
                >
                  <CardHeader className="pb-4">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold mb-4">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed min-h-[4rem]">
                      {item.description}
                    </p>
                    <Button asChild variant="link" className="text-primary font-semibold p-0 h-auto group/link">
                      <Link to={item.link}>
                        Read more <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Offerings */}
      <section className="py-20 md:py-32 bg-card scroll-snap-start">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Offerings</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Health Informatics Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From grassroots community systems to national-level implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {offering.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 leading-relaxed">
                      {offering.description}
                    </CardDescription>
                    <Button asChild variant="ghost" size="sm" className="group/btn">
                      <Link to={offering.link}>
                        Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/offerings">View All Offerings</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <PartnersCarousel />

      {/* Testimonials */}
      <TestimonialCarousel />
    </div>
  );
}
