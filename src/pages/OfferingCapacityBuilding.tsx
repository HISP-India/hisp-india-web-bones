import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { ScheduleCallDialog } from "@/components/ScheduleCallDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const buildingSteps = [
  { step: "01", title: "Identify Needs" },
  { step: "02", title: "Develop Courses" },
  { step: "03", title: "Deliver Training" },
  { step: "04", title: "Empower Stakeholders" },
  { step: "05", title: "Strengthen Capacities" },
  { step: "06", title: "Foster Ecosystem" },
];

const partners = [
  { name: "University of Oslo, Norway", logo: "/placeholder.svg" },
  { name: "PGIMER, Chandigarh", logo: "/placeholder.svg" },
  { name: "SCTIMST, Kerala", logo: "/placeholder.svg" },
  { name: "Jawaharlal Nehru University, New Delhi", logo: "/placeholder.svg" },
];

const galleryItems = [
  { caption: "HISP India team with DKC Team during Capacity Building Workshop", image: "/placeholder.svg" },
  { caption: "Prof. Sundeep Sahay delivering a session to DKC Leadership Team", image: "/placeholder.svg" },
  { caption: "Participants during Workshop", image: "/placeholder.svg" },
  { caption: "Participants during Workshop", image: "/placeholder.svg" },
  { caption: "Dr. Shirin Saini from HISP India delivering a session", image: "/placeholder.svg" },
  { caption: "DigiTasia team during a two week workshop in University of Oslo", image: "/placeholder.svg" },
  { caption: "DigiTasia team during a two week workshop in University of Oslo", image: "/placeholder.svg" },
  { caption: "DigiTasia team during a two week workshop in University of Oslo", image: "/placeholder.svg" },
  { caption: "DigiTasia team during a two week workshop in University of Oslo", image: "/placeholder.svg" },
];

const otherOfferings = [
  {
    title: "Routine Health Information Systems",
    description: "Comprehensive digital solutions for routine health data management, reporting, and analysis using DHIS2.",
    link: "/offerings/routine-health-info-systems",
  },
  {
    title: "Community Information Systems",
    description: "Empowering communities with digital tools for local health information management and mobile-first platforms.",
    link: "/offerings/community-info-systems",
  },
  {
    title: "OpenMRS Integrated Hospital Information Systems",
    description: "Open-source hospital management systems for seamless patient care coordination and electronic medical records.",
    link: "/offerings/openmrs-his",
  },
  {
    title: "Data Analytics, Integration & Data Management",
    description: "Advanced analytics and data integration solutions for evidence-based decision making.",
    link: "/offerings/data-analytics",
  },
  {
    title: "Action & Implementation Research",
    description: "Research-driven approaches to implement and evaluate health information systems effectively.",
    link: "/offerings/research",
  },
  {
    title: "Climate & Health Data Analytics",
    description: "Innovative analytics linking climate data with health outcomes for better preparedness.",
    link: "/offerings/climate-health-analytics",
  },
];

export default function OfferingCapacityBuilding() {
  return (
    <div className="flex flex-col">
      <Hero title="Capacity Building and Education" />

      {/* Introduction with Steps */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Steps Pyramid */}
            <div>
              <p className="text-sm text-muted-foreground mb-6">Building a Digital Health Ecosystem</p>
              <div className="flex flex-col items-start gap-2">
                {[...buildingSteps].reverse().map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg px-5 py-3 bg-primary/10 text-primary font-semibold"
                    style={{ width: `${60 + (5 - i) * 8}%` }}
                  >
                    <span className="text-xs font-bold bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center shrink-0">
                      {item.step}
                    </span>
                    <span className="text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Introduction Text */}
            <div>
              <div className="inline-block bg-accent text-accent-foreground px-8 py-2.5 rounded-full text-lg font-semibold shadow-md mb-6">
                Introduction
              </div>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  At HISP India, we believe that technology alone cannot drive transformation—people and
                  their skills are at the heart of every successful public health system. Our Capacity Building
                  initiatives are designed to empower stakeholders at all levels—governments, healthcare
                  institutions, and frontline health workers—with the knowledge and tools they need to make
                  data-driven decisions.
                </p>
                <p>
                  Through structured training programs, workshops, and digital learning modules, we provide
                  expertise in public health informatics, digital disease surveillance, antimicrobial resistance,
                  and climate health analytics. Our courses, developed in collaboration with leading
                  institutions like the University of Oslo, Jawaharlal Nehru University, Sree Chitra Tirunal
                  Institute for Medical Sciences & Technology and PGIMER Chandigarh, cater to diverse
                  learning needs, offering flexible delivery modes—online, hybrid, and in-person.
                </p>
                <p>
                  By strengthening local capacities, we foster sustainable digital health ecosystems where
                  stakeholders can effectively manage and leverage health information systems. Our
                  approach ensures that public health interventions are data-driven, community-centric, and
                  aligned with global health priorities.
                </p>
                <p>
                  Join us in building a future where technology and knowledge work together to transform
                  healthcare systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container">
          <div className="flex items-center justify-center mb-12">
            <div className="inline-block bg-accent text-accent-foreground px-8 py-2.5 rounded-full text-lg font-semibold shadow-md">
              Our Work
            </div>
          </div>

          {/* DigiTasia Project */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="aspect-[4/3] bg-muted-foreground/10 rounded-lg overflow-hidden">
                <img src="/placeholder.svg" alt="DigiTasia Project" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                  Digital Platforms for Disease Surveillance and Control
                </h3>
                <p className="text-xs text-muted-foreground border-b border-t py-2 mb-4 font-medium">DigiTasia Project</p>
                <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    The DigiTasia Project under HISP India focuses on building digital health
                    capacity through education modules on disease surveillance and control.
                    Supported by NORPART funding, the initiative collaborates with leading
                    institutions in Norway, India, and South Korea to design and digitize five key
                    course modules.
                  </p>
                  <p>
                    The project emphasizes experiential learning by engaging master's and PhD
                    students for fieldwork and collaborative module development. The digitized
                    modules aim to enhance digital health education globally and support health
                    workers and institutions in addressing public health challenges.
                  </p>
                </div>
                <Button asChild size="sm" className="mt-4">
                  <Link to="/work">
                    Know more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Public Health Informatics */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                  Public Health Informatics
                </h3>
                <p className="text-xs text-muted-foreground border-b border-t py-2 mb-4 font-medium">Project</p>
                <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    HISP India in collaboration with the Digital Bharat Collaborative (DBC),
                    successfully conducted the first batch of the <strong>Fundamentals of Public Health
                    Informatics</strong> course from April 1st to July 12th, 2024. This hybrid-mode
                    workshop was meticulously designed to equip health professionals with the
                    skills to implement public health informatics concepts effectively in their work
                    environments.
                  </p>
                  <p>
                    This workshop reflects HISP India's commitment to capacity building, fostering
                    innovation, and advancing digital health education to strengthen public
                    health systems.
                  </p>
                </div>
                <Button asChild size="sm" className="mt-4">
                  <Link to="/work">
                    Know more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
              <div className="aspect-[4/3] bg-muted-foreground/10 rounded-lg overflow-hidden">
                <img src="/placeholder.svg" alt="Public Health Informatics" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="flex items-center justify-center mb-12">
            <div className="inline-block bg-accent text-accent-foreground px-8 py-2.5 rounded-full text-lg font-semibold shadow-md">
              Our Partners
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <img src={partner.logo} alt={partner.name} className="w-16 h-16 object-contain" />
                </div>
                <p className="text-xs text-muted-foreground font-medium">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container">
          <div className="flex items-center justify-center mb-12">
            <div className="inline-block bg-accent text-accent-foreground px-8 py-2.5 rounded-full text-lg font-semibold shadow-md">
              Gallery
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryItems.map((item, i) => (
              <div key={i} className="flex flex-col">
                <div className="aspect-[4/3] bg-muted-foreground/10 rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Other Offerings */}
      <section className="py-16 md:py-20">
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
                  <h3 className="font-heading font-bold text-foreground mb-3 text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs mb-5 leading-relaxed">{item.description}</p>
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
