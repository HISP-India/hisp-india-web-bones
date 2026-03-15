import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { ScheduleCallDialog } from "@/components/ScheduleCallDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const componentsOfIHOSP = [
  "Patient Record Management",
  "Clinical Workflow Automation",
  "Interoperability",
  "ABFM Compliance",
  "Deployment in Himachal Pradesh",
  "Enhanced Efficiency and Care",
];

const keyFeatures = [
  {
    title: "Integrated Modular Design",
    description:
      "Offers 50 built-in modules to manage patient records and hospital activities under a unified platform.",
  },
  {
    title: "Interoperable with Global Standards",
    description:
      "Adheres to SNOMED CT, ICD-10, LOINC, HL7, coding standards and integrates with national and state-level health systems.",
  },
  {
    title: "Certified and Future-Ready",
    description:
      "ABFM M1 certified and progressing towards ABDM with FHIR integration for digital health compliance in India.",
  },
  {
    title: "Powerful Reporting Capabilities, Reports & Dashboards",
    description:
      "Provides clinical analytics and in-built configurable reports to support data-driven decision-making.",
  },
  {
    title: "Scalable and Adaptable Deployment",
    description:
      "Supports both digital and paper-based workflows, enabling it to suit diverse healthcare settings.",
  },
  {
    title: "Proven Impact in Public Health",
    description:
      "Deployed in 275 health and wellness centres in Himachal Pradesh, managing over 50 million patient records with high daily usage.",
  },
];

const systemFeatures = [
  { label: "Comprehensive Hospital Management", color: "bg-emerald-500" },
  { label: "Interoperability & Compliance", color: "bg-sky-500" },
  { label: "Hybrid System for Paper & Digital", color: "bg-yellow-400" },
  { label: "Scalable Architecture", color: "bg-orange-500" },
];

const impactItems = [
  {
    title: "Established Presence Since 2012",
    description:
      "The system has been in continuous use across diverse healthcare settings in Himachal Pradesh's health facilities for over a decade.",
  },
  {
    title: "Wide Deployment Across Facility Types",
    description:
      "Implementations in 22+ healthcare institutions, including 1 tertiary hospital, district hospitals, block-level hospitals, and CHCs.",
  },
  {
    title: "High Patient Volume Handling",
    description:
      "Each facility handles an average of 267 outpatients visits daily, contributing to a cumulative registration of over 50 million patients.",
  },
  {
    title: "Robust Infrastructure Utilization",
    description:
      "Manages approximately 275 units and supports 35 active users per facility, indicating strong operational capacity.",
  },
  {
    title: "Proven Long-Term Reliability",
    description:
      "A decade of uninterrupted service highlights the system's resilience, stability, and ongoing relevance.",
  },
  {
    title: "Flexible Hybrid Workflow Support",
    description:
      "Maintains continuity through both online and offline modes, and supports both digital and paper-driven processes, allowing for smooth operations in diverse environments.",
  },
];

const keyLearnings = [
  {
    title: "Start with a Grounded Assessment",
    content:
      "Understand the existing workflows, infrastructure, and user capabilities before designing or deploying a hospital information system. A ground-up assessment ensures the solution fits real-world conditions.",
  },
  {
    title: "No One-Size-Fits-All Solution",
    content:
      "Every healthcare facility has unique needs. Customization and flexibility in system design are essential to accommodate varying scales, specialties, and resource levels.",
  },
  {
    title: "Enhance Existing Workflows",
    content:
      "Rather than replacing established processes, integrate digital solutions that complement and improve current clinical and administrative workflows for smoother adoption.",
  },
  {
    title: "Respect Legacy Systems",
    content:
      "Legacy systems often contain valuable historical data and institutional knowledge. Ensure interoperability and smooth data migration rather than abrupt system replacements.",
  },
  {
    title: "Adopt Hybrid Approaches",
    content:
      "Support both paper-based and digital workflows during transition phases. Hybrid approaches reduce disruption and allow gradual digital adoption at the facility's pace.",
  },
  {
    title: "Design for Diverse Contexts",
    content:
      "Healthcare settings vary widely — from tertiary hospitals to community health centres. Design systems that scale and adapt to different facility types, connectivity conditions, and user skill levels.",
  },
];

const otherOfferings = [
  {
    title: "Community Information Systems",
    description:
      "Empowering communities with digital tools for local health information management and mobile-first platforms.",
    link: "/offerings/community-info-systems",
  },
  {
    title: "Routine Health Information Systems",
    description:
      "Comprehensive digital solutions for routine health data management, reporting, and analysis using DHIS2.",
    link: "/offerings/routine-health-info-systems",
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
  {
    title: "Climate & Health Data Analytics",
    description:
      "Innovative analytics linking climate data with health outcomes for better preparedness.",
    link: "/offerings/climate-health-analytics",
  },
];

export default function OfferingOpenMRS() {
  return (
    <div className="flex flex-col">
      <Hero title="OpenMRS Integrated Hospital Information Systems" />

      {/* Components of iHOSP + Introduction */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h3 className="text-sm font-semibold text-muted-foreground mb-8 text-center uppercase tracking-wider">
            Components of iHOSP
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Components Diagram */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md">
                {componentsOfIHOSP.map((item, i) => {
                  const colors = [
                    "bg-sky-100 text-sky-800 border-sky-200",
                    "bg-emerald-100 text-emerald-800 border-emerald-200",
                    "bg-amber-100 text-amber-800 border-amber-200",
                    "bg-rose-100 text-rose-800 border-rose-200",
                    "bg-violet-100 text-violet-800 border-violet-200",
                    "bg-cyan-100 text-cyan-800 border-cyan-200",
                  ];
                  return (
                    <div
                      key={i}
                      className={`${colors[i]} border rounded-xl px-4 py-3 text-center text-sm font-medium shadow-sm`}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Introduction */}
            <div>
              <div className="flex items-center mb-6">
                <div className="inline-block bg-primary text-primary-foreground px-8 py-2.5 rounded-full text-lg font-semibold shadow-md">
                  Introduction
                </div>
              </div>
              <div className="space-y-5">
                <p className="text-muted-foreground leading-relaxed">
                  The Integrated Hospital Information System is built on the open-source
                  OpenMRS platform and is available in two variants. <strong className="text-foreground">iHOSP</strong>, its offline variant,
                  provides a cost-effective, scalable, and customisable solution for efficiently
                  managing hospital and patient information. <strong className="text-foreground">iHOSP-Lite</strong>, its online variant,
                  includes additional features such as online appointment booking, scheduling, provider
                  scheduling, a Master Patient Index (MPI), and a patient portal. It also supports
                  integration with ABIS and FHIR, ensuring SNOMED and HL7 interoperability
                  standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container">
          <div className="flex items-center justify-center mb-4">
            <p className="text-sm text-muted-foreground">iHOSP System Features Overview</p>
          </div>
          <div className="flex items-center justify-center mb-12">
            <div className="inline-block bg-primary text-primary-foreground px-8 py-2.5 rounded-full text-lg font-semibold shadow-md">
              Key Features
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Feature List */}
            <div className="lg:col-span-3 space-y-8">
              {keyFeatures.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center shadow-md text-sm font-bold">
                      {i + 1}
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

            {/* Right: System Features Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 bg-card border border-border rounded-2xl p-6 shadow-lg">
                <h3 className="text-center font-heading font-bold text-foreground mb-6">
                  iHOSP System Features Overview
                </h3>
                <div className="space-y-4">
                  {systemFeatures.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <h4 className="text-xs uppercase text-muted-foreground font-semibold mb-3 tracking-wider">
                    Technology Stack
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {["AngularJS", "REST", "Spring", "Hibernate", "MySQL", "Java"].map((tech) => (
                      <div
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-md bg-muted text-muted-foreground text-center font-medium"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABFM M1 Certified */}
      <section className="py-12 bg-secondary/30">
        <div className="container text-center">
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-8 py-5 shadow-sm">
            <div className="bg-primary text-primary-foreground w-12 h-12 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground text-lg">ABFM M1 Certified</h3>
              <p className="text-muted-foreground text-sm">
                iHOSP / iHIS is certified with ABFM M1 set for progressing towards M2 and M3 certifications using FHIR.
              </p>
            </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Impact Diagram Description */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 bg-card border border-border rounded-2xl p-6 shadow-lg">
                <h3 className="text-center font-heading font-bold text-foreground mb-6">
                  Factors Contributing to Healthcare Systems Impact
                </h3>
                <div className="space-y-3">
                  {[
                    "Long-Term Stability",
                    "Patient Care Management",
                    "Workflow Efficiency",
                    "Scalability",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Impact Items */}
            <div className="lg:col-span-3 space-y-8">
              {impactItems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-accent text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center shadow-md text-sm font-bold">
                      {i + 1}
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
        </div>
      </section>

      {/* Key Learnings from iHOSP Implementation */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-5xl">
          <div className="flex items-center justify-center mb-10">
            <div className="inline-block bg-primary text-primary-foreground px-8 py-2.5 rounded-full text-lg font-semibold shadow-md">
              Key Learnings from iHOSP Implementation
            </div>
          </div>
          <Accordion type="multiple" className="space-y-3">
            {keyLearnings.map((item, i) => (
              <AccordionItem
                key={i}
                value={`learning-${i}`}
                className="border rounded-xl bg-card shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                  <span className="font-semibold text-foreground">{item.title}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA: See How We Turn Solutions Into Impact */}
      <section className="bg-secondary py-12">
        <div className="container max-w-4xl">
          <p className="text-secondary-foreground/80 text-sm mb-2">
            Explore real-world projects where HISP India's innovations and partnerships are transforming public health systems.
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
        description="Let's discuss how we can help strengthen your hospital information systems."
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
