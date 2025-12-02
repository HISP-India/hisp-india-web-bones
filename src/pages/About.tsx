import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { Gallery } from "@/components/Gallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { Sprout, Target, Eye, Award, Shield, Handshake, CheckCircle } from "lucide-react";

const coreValues = [
  {
    icon: Sprout,
    title: "Our Philosophy",
    description: "Technologies on their own can do little if they are not supported by networks of people, practices, and institutions within frameworks of solidarity and collaboration.",
  },
  {
    icon: Target,
    title: "Anchoring Philosophies",
    description: "Anchoring philosophies guide HISP India to maintain the philosophical position on which we were designed to exist.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "HISP India envisions a world where advanced health informatics, driven by community collaboration and innovation, ensures global public health equity.",
  },
  {
    icon: Award,
    title: "Our Mission",
    description: "HISP India's objective is to empower countries, organisations, and stakeholders by leveraging innovative health informatics and sustainable open-source solutions.",
  },
];

const timeline = [
  {
    year: "1992",
    title: "Early 1990s – Inspiration and Vision",
    description: "Prof. Sundeep Sahay, inspired by HISP's practical approach and driven to address India's public health challenges, set the vision for HISP India.",
  },
  {
    year: "2000",
    title: "Establishment of HISP India",
    description: "HISP India began in 2000 in Kuppam, Andhra Pradesh, founded by Prof. Sundeep Sahay. Initially a small group, it evolved into an NGO and expanded to Gujarat and Jharkhand.",
  },
  {
    year: "2005",
    title: "DHIS2 and India",
    description: "A landmark development in HISP India's history was the birth of DHIS2 in 2005, which was globally first piloted in Kerala, a Southern State in India. This was a significant milestone, marking the conceptualisation and testing of DHIS2 within India.",
  },
];

const anchoringPhilosophies = [
  {
    icon: Shield,
    title: "Sovereignty",
    description: "HISP India places a strong emphasis on sovereignty, both in terms of funding and data management. Distinct from many organisations that rely on donor funding, HISP India is self-sustaining, deriving all of its funding from project-based work with organisations. This independence extends to data sovereignty as well; HISP India acts solely as a curator of data for governments, maintaining strict confidentiality and never owning or sharing the data. This ensures that all data remains the property of the state and its citizens, reinforcing our commitment to respecting and protecting data integrity.",
  },
  {
    icon: Handshake,
    title: "Reciprocity and Mutuality",
    description: "In our research collaborations, HISP India strongly emphasises the principles of reciprocity and mutuality, ensuring that we engage as equal partners in the outcomes, not merely as data managers. These principles are deeply interwoven with our core values of sovereignty, self-reliance, and state ownership, and they are actively safeguarded in our daily operations. Upholding these values is fundamental to our approach, fostering a collaborative environment where mutual respect and shared benefits drive our engagements and contribute to sustainable, impactful results.",
  },
  {
    icon: CheckCircle,
    title: "Competence and Trust",
    description: "In our 25 years of operation, HISP India embodies competence and professionalism. We have established robust governance, budgeting, and accounting systems, all underscored by stringent quality certifications. Our organisation holds government certification for research and upholds a dedicated research ethics committee, ensuring that all engagements are managed with the utmost integrity. These well-founded systems cultivate deep trust among our partners and stakeholders, making HISP India a recurrent choice for health informatics management. Systems bring in trust.",
  },
];

// Placeholder images for gallery
const galleryImages = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero with diagonal design */}
      <Hero
        title="About us"
        variant="gradient"
        className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground"
      />

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
            Empowering Public Health Through Data-Driven Solutions and Innovation
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Over the last two decades, HISP India has sought to firmly establish itself as a leading public health informatics partner. It uniquely blends rigorous research and education, advanced digital solutions based on free and open-source software platforms, and targeted capacity-building initiatives to tackle public health challenges in India and globally, focussing on South Asia.
            </p>
            <p>
              As a non-profit organization, HISP India has successfully developed engagement models while operating in a market increasingly dominated by large IT companies. The distinctive model, which integrates health system strengthening, research, and education, has enabled HISP India to establish a unique position and become a model for how non-profit organizations can contribute to the strengthening of public systems. This model is underpinned by the principle of upholding sovereignty in funding and data management, prioritizing data confidentiality and state ownership, which reduces dependencies on donor grants and the associated challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Work in Action
          </h2>
          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* Core Values Cards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((item, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Journey
          </h2>
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {timeline.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="pt-6 flex flex-col h-full">
                      <div className="inline-block mb-4">
                        <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="font-heading font-semibold text-lg mb-3">{item.title}</h3>
                      <p className="text-sm text-muted-foreground flex-1">{item.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Anchoring Philosophies Detailed Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            Anchoring Philosophies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {anchoringPhilosophies.map((item, index) => (
              <div key={index} className="space-y-4">
                <div className="h-14 w-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading font-semibold text-2xl">{item.title}</h3>
                <p className="text-primary-foreground/90 leading-relaxed">{item.description}</p>
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
        <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
          <Link to="/team">Meet Our Team</Link>
        </Button>
      </CTASection>
    </div>
  );
}
