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

const otherOfferings = [
  {
    title: "Routine Health Information Systems",
    description: "Comprehensive digital solutions for routine health data management, reporting, and analysis using DHIS2.",
    link: "/offerings/routine-health-info-systems",
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
    title: "Capacity Building & Education",
    description: "Training and education programs to build sustainable health information system capacity.",
    link: "/offerings/capacity-building",
  },
  {
    title: "Climate & Health Data Analytics",
    description: "Innovative analytics linking climate data with health outcomes for better preparedness.",
    link: "/offerings/climate-health-analytics",
  },
];

const pccdsFeatures = [
  "Community-Oriented Reporting — Enables data collection and reporting at the community level, bridging the gap between grassroots health activities and formal health information systems.",
  "Adaptable Data Model — Flexible architecture that can be customized to capture diverse community health indicators across different programmatic contexts.",
  "Hotspot Identification Using GIS — Geographic information system integration for spatial analysis, enabling identification of disease hotspots and targeted interventions.",
  "Real-Time Data Analysis — Supports immediate data processing and visualization, enabling timely decision-making at the community and district levels.",
  "User-Friendly Dashboards — Intuitive visualization tools designed for use by community health workers and local health managers with varying levels of technical expertise.",
];

const pccdsImpact = [
  "Pilot Implementation — Successfully piloted in multiple states, demonstrating scalability and adaptability across diverse community health contexts.",
  "Empowerment of Local Health Systems — Strengthened the capacity of community health workers and local health committees to use data for planning and action.",
  "Community Engagement — Enhanced community participation in health monitoring and decision-making through accessible data tools.",
  "Improved Public Health Outcomes — Contributed to measurable improvements in maternal and child health indicators in pilot areas.",
];

const patientFeatures = [
  "Longitudinal Health Records — Comprehensive patient records that track health data over time, enabling continuity of care across different health facilities.",
  "Integrated Reporting — Seamless integration of patient-level data with aggregate reporting systems, reducing duplicate data entry and improving data quality.",
  "Programmatic Relevance — Designed to support specific health programs including maternal health, tuberculosis, HIV/AIDS, and non-communicable diseases.",
];

const patientImpact = [
  "Enhanced Care Delivery — Improved quality of patient care through better access to complete health records and clinical decision support.",
  "Improved Data Accessibility — Made health data more accessible to healthcare providers at the point of care, supporting informed clinical decisions.",
  "Streamlined Operations — Reduced administrative burden on health facilities through automated reporting and integrated workflow management.",
];

export default function OfferingCIS() {
  return (
    <div className="flex flex-col">
      <Hero title="Community Information Systems" />

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              We empower communities with digital tools for local health information management. Our mobile-first platforms support community health workers in collecting, managing, and using health data at the community level. We adopt participatory design approaches to ensure systems meet community needs and strengthen community ownership of health data and health programs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our Community Information Systems work focuses on two key areas: the <strong className="text-foreground">Patient-Centric Community Data System (PCCDS) Model</strong> and <strong className="text-foreground">Patient-Centric Systems</strong> for longitudinal care tracking. Both approaches bridge the gap between community-level health activities and formal health information infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container max-w-5xl">
          <Accordion type="multiple" defaultValue={["pccds", "patient-centric"]} className="space-y-6">
            {/* PCCDS Model */}
            <AccordionItem value="pccds" className="border rounded-2xl bg-card shadow-sm overflow-hidden">
              <AccordionTrigger className="px-6 py-5 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                    01
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground text-left">
                    Patient-Centric Community Data System (PCCDS) Model
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6">
                {/* Introduction */}
                <div className="mb-10">
                  <h3 className="inline-block bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-sm font-semibold mb-4">
                    Introduction
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The PCCDS Model enables data collection and reporting at the community level, bridging the gap between grassroots health activities and formal health information systems. It is built on an adaptable data model with a flexible architecture that can be customized to capture diverse community health indicators across different programmatic contexts.
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-10">
                  <h3 className="inline-block bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-sm font-semibold mb-6">
                    Key Features
                  </h3>
                  <div className="space-y-4">
                    {pccdsFeatures.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                        <p className="text-muted-foreground text-sm leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-4">
                  <h3 className="inline-block bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-sm font-semibold mb-6">
                    Impact
                  </h3>
                  <div className="space-y-4">
                    {pccdsImpact.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                        <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Patient-Centric Systems */}
            <AccordionItem value="patient-centric" className="border rounded-2xl bg-card shadow-sm overflow-hidden">
              <AccordionTrigger className="px-6 py-5 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                    02
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground text-left">
                    Patient-Centric Systems
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6">
                {/* Introduction */}
                <div className="mb-10">
                  <h3 className="inline-block bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-sm font-semibold mb-4">
                    Introduction
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Patient-Centric Systems focus on longitudinal health record management and integrated reporting, designed to support specific health programs while maintaining continuity of care across different health facilities. These systems ensure that patient data flows seamlessly between community health workers, primary care facilities, and referral hospitals.
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-10">
                  <h3 className="inline-block bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-sm font-semibold mb-6">
                    Key Features
                  </h3>
                  <div className="space-y-4">
                    {patientFeatures.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                        <p className="text-muted-foreground text-sm leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-4">
                  <h3 className="inline-block bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-sm font-semibold mb-6">
                    Impact
                  </h3>
                  <div className="space-y-4">
                    {patientImpact.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                        <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl text-center">
          <p className="text-muted-foreground leading-relaxed text-lg">
            Through our Community Information Systems initiatives, HISP India continues to pioneer approaches that place communities at the center of health data ecosystems — ensuring that health information serves those who need it most while strengthening the overall health system.
          </p>
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
        description="Let's discuss how we can help strengthen your community health information systems."
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
