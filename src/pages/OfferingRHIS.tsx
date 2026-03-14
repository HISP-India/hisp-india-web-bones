import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { ScheduleCallDialog } from "@/components/ScheduleCallDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  BarChart3,
  Share2,
  Server,
  Layers,
  Network,
  Maximize,
  GraduationCap,
  Brain,
  Shield,
  Wallet,
  HeartPulse,
  FileSearch,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const components = [
  { icon: Database, title: "Data Collection", description: "Collecting/capturing health data", color: "bg-primary" },
  { icon: BarChart3, title: "Data Analysis", description: "Interpreting data for insights", color: "bg-secondary" },
  { icon: Share2, title: "Data Dissemination", description: "Sharing information with stakeholders", color: "bg-accent" },
  { icon: Server, title: "DHIS2 Platform", description: "Supporting RHIS globally", color: "bg-primary" },
];

const keyFeatures = [
  {
    icon: Layers,
    title: "Comprehensive Data Management",
    description:
      "DHIS2-based RHIS solutions provide end-to-end data management capabilities, from collection to visualization. The system supports various data capture methods—including mobile data collection, online and offline entry, ensuring accessibility even in resource-constrained settings. Real-time dashboards and reporting tools transform raw data into actionable insights for decision-makers at all levels.",
  },
  {
    icon: Network,
    title: "Interoperability",
    description:
      "Modern RHIS implementations prioritize interoperability with existing health information systems. DHIS2 supports open standards like FHIR and implements robust APIs, enabling seamless data exchange with electronic medical records, laboratory systems, and other digital health tools. This integration eliminates data silos and provides a more complete picture of population health.",
  },
  {
    icon: Maximize,
    title: "Scalability and Customisation",
    description:
      "DHIS2-based systems can be configured to meet the unique needs of different health systems. From community health programs to national health services, the platform scales effectively while allowing for customized data elements, indicators, and workflows that align with local priorities and reporting requirements.",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building and Sustainability",
    description:
      "Successful RHIS implementation extends beyond technology to include comprehensive training and mentorship. Long-term sustainability depends on building local capacity for system administration, data analysis, and evidence-based decision-making. Training programs for health workers, managers, and IT staff ensure systems can be maintained and optimized locally.",
  },
];

const enhancingItems = [
  { title: "Data Management", description: "Efficient handling of health data across systems" },
  { title: "Interoperability", description: "Real-time data exchange between health systems" },
  { title: "Scalability", description: "Ability to adapt to diverse health care settings" },
  { title: "Capacity Building", description: "Training and support for sustained system use" },
];

const impactItems = [
  {
    icon: Brain,
    title: "Enhanced Decision-Making & Health System Performance",
    description:
      "RHIS provides accurate and timely data that enables policymakers and health managers to make informed, evidence-based decisions. By continuously monitoring healthcare services, it helps identify bottlenecks and areas for improvement, ensuring a more responsive and effective health system.",
  },
  {
    icon: Shield,
    title: "Improved Disease Surveillance & Public Health Response",
    description:
      "By systematically collecting and analyzing health data, RHIS plays a crucial role in early disease detection and outbreak control. It strengthens public health surveillance, allowing health authorities to implement timely interventions and prevent the spread of infectious diseases.",
  },
  {
    icon: Wallet,
    title: "Efficient Resource Allocation & Accountability",
    description:
      "With reliable health data, RHIS helps optimize the allocation of medical supplies, human resources, and financial investments in healthcare. It promotes transparency in health governance by ensuring that resources are directed where they are needed most, reducing waste and improving service delivery.",
  },
  {
    icon: HeartPulse,
    title: "Better Patient Care & Health Outcomes",
    description:
      "The use of RHIS allows healthcare providers to track patient data more effectively, leading to improved diagnosis, treatment, and follow-up care. It also supports universal health coverage by identifying underserved populations, ensuring that healthcare services are equitably distributed and accessible to all.",
  },
  {
    icon: FileSearch,
    title: "Supports Research, Policy Development & Program Monitoring",
    description:
      "By generating high-quality data, RHIS facilitates health research and informs policy decisions that shape public health priorities. It enables continuous assessment of health programs, helping to measure their impact and effectiveness while guiding investments to achieve better health outcomes.",
  },
];

export default function OfferingRHIS() {
  return (
    <div className="flex flex-col">
      <Hero title="Routine Health Information Systems" />

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="flex items-center justify-center mb-10">
            <div className="inline-block bg-primary text-primary-foreground px-8 py-2.5 rounded-full text-lg font-semibold shadow-md">
              Introduction
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Components Diagram */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
                Components of RHIS and DHIS2
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {components.map((comp, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`${comp.color} text-primary-foreground p-2.5 rounded-lg flex-shrink-0`}>
                      <comp.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">{comp.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{comp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Introduction Text */}
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                Routine Health Information Systems (RHIS) serve as the backbone of evidence-based decision-making in healthcare systems worldwide. These systems enable the regular collection, analysis, and dissemination of health data, empowering healthcare managers, policymakers, and front-line workers to make informed decisions that improve health outcomes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                DHIS2 (District Health Information Software 2) has emerged as the world's largest health management information system platform, supporting RHIS implementation in over 100 countries. As an open-source, web-based platform, DHIS2 facilitates data collection, validation, analysis, and presentation, making it an ideal foundation for building comprehensive national health information systems.
              </p>
            </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: Feature Details */}
            <div className="lg:col-span-3 space-y-8">
              {keyFeatures.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                      <feature.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Enhancing HIS Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 bg-card border border-border rounded-2xl p-6 shadow-lg">
                <h3 className="text-center font-heading font-bold text-foreground mb-6">
                  Enhancing Health Information Systems
                </h3>
                <div className="space-y-4">
                  {enhancingItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
          <div className="max-w-4xl mx-auto space-y-8">
            {impactItems.map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-accent text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "OpenMRS Integrated Hospital Information Systems",
                description: "HISP offers a scalable, open-source solution for managing patient records and hospital operations efficiently.",
                link: "/offerings/openmrs-his",
              },
              {
                title: "Data Analytics, Integration, and Data Management",
                description: "Developing advanced dashboards on open-source platforms for better health data integration and decision-making.",
                link: "/offerings/data-analytics",
              },
              {
                title: "Action and Implementation Research",
                description: "HISP India strengthens health systems with evidence-driven research for impactful public health outcomes.",
                link: "/offerings/research",
              },
            ].map((item, i) => (
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
        <Button
          size="lg"
          variant="outline"
          asChild
          className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
        >
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
            Schedule a Call
          </a>
        </Button>
      </CTASection>
    </div>
  );
}
