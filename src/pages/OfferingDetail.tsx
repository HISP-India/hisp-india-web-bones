import { useParams, Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const offeringsData: Record<string, any> = {
  "routine-health-info-systems": {
    title: "Routine Health Information Systems",
    overview: "We design and implement comprehensive digital solutions for routine health data management, reporting, and analysis. Our implementations of DHIS2 and custom platforms support health program monitoring, disease surveillance, and health facility reporting at district, state, and national scales. We work with governments and health organizations to build systems that streamline data collection, improve data quality, and enable timely, evidence-based decision making.",
    features: [
      "DHIS2 implementation and customization",
      "Health program indicator tracking and reporting",
      "Disease surveillance systems",
      "Health facility reporting platforms",
      "Data quality assessment and improvement frameworks",
      "Mobile data collection applications",
      "Dashboard development and visualization",
      "Integration with national health management information systems",
    ],
    caseStudies: [
      {
        title: "National Health Mission DHIS2 Deployment",
        description: "Implemented DHIS2 across all states for maternal and child health program monitoring, reaching 30,000+ health facilities.",
        impact: "Improved data completeness from 60% to 95%",
      },
      {
        title: "State-level Disease Surveillance System",
        description: "Deployed integrated disease surveillance platform covering 15 districts with real-time outbreak alerts.",
        impact: "Reduced outbreak response time by 40%",
      },
    ],
    relatedProjects: ["National Health Mission Implementation", "State Disease Surveillance Platform", "District Health Facility Reporting"],
  },
  "community-info-systems": {
    title: "Community Information Systems",
    overview: "We empower communities with digital tools for local health information management. Our mobile-first platforms support community health workers in collecting, managing, and using health data at the community level. We adopt participatory design approaches to ensure systems meet community needs and strengthen community ownership of health data and health programs.",
    features: [
      "Mobile applications for community health workers",
      "Community-based health data collection",
      "Participatory health monitoring tools",
      "Local health dashboard and reporting",
      "Offline-first mobile data capture",
      "Community feedback and grievance mechanisms",
      "Integration with routine health information systems",
      "Community health worker performance monitoring",
    ],
    caseStudies: [
      {
        title: "Community Health Worker Digital Platform",
        description: "Developed mobile application for 5,000 community health workers tracking maternal and child health in rural areas.",
        impact: "Increased antenatal care coverage by 25%",
      },
      {
        title: "Participatory Community Health Monitoring",
        description: "Implemented community-led health monitoring system in 50 villages with local health committees.",
        impact: "Enhanced community engagement in health planning",
      },
    ],
    relatedProjects: ["Rural CHW Mobile Platform", "Community Health Monitoring System", "Village Health Dashboard"],
  },
  "openmrs-his": {
    title: "OpenMRS Integrated Hospital Information Systems",
    overview: "We implement and customize OpenMRS-based hospital information systems for seamless patient care coordination. Our solutions integrate electronic medical records, pharmacy management, laboratory systems, and hospital workflows into unified platforms that improve clinical care, operational efficiency, and patient safety. We work with hospitals of all sizes, from small district facilities to large tertiary care centers.",
    features: [
      "Electronic Medical Records (EMR) implementation",
      "Patient registration and management",
      "Clinical decision support systems",
      "Pharmacy and inventory management",
      "Laboratory information system integration",
      "Radiology and imaging management",
      "Billing and financial management integration",
      "Hospital dashboard and performance monitoring",
    ],
    caseStudies: [
      {
        title: "District Hospital OpenMRS Deployment",
        description: "Implemented comprehensive hospital information system across 30 district hospitals serving 500,000 patients annually.",
        impact: "Reduced patient wait times by 35%",
      },
      {
        title: "Tertiary Care Hospital Integration",
        description: "Integrated OpenMRS with existing hospital systems creating unified patient care platform at major teaching hospital.",
        impact: "Improved clinical documentation quality by 60%",
      },
    ],
    relatedProjects: ["Multi-Hospital HIS Implementation", "OpenMRS Customization for TB Care", "Integrated Hospital Dashboard"],
  },
  "data-analytics": {
    title: "Data Analytics, Integration & Data Management",
    overview: "We provide advanced analytics and data integration solutions that transform health data into actionable insights. Our services include designing data warehouses, developing business intelligence dashboards, implementing predictive analytics, and building health information exchange platforms. We help organizations make sense of complex health data from multiple sources to support evidence-based decision making and strategic planning.",
    features: [
      "Data warehouse design and implementation",
      "Business intelligence dashboards",
      "Predictive analytics and machine learning",
      "Health information exchange platforms",
      "Data integration across multiple systems",
      "Real-time data monitoring and alerts",
      "Geographic information system (GIS) integration",
      "Advanced statistical analysis and modeling",
    ],
    caseStudies: [
      {
        title: "State Health Data Warehouse",
        description: "Built integrated data warehouse combining data from 12 health programs for comprehensive state health analytics.",
        impact: "Enabled cross-program analysis identifying gaps in service delivery",
      },
      {
        title: "Predictive Analytics for Disease Outbreaks",
        description: "Developed machine learning models predicting disease outbreak risk using climate and health data.",
        impact: "Early warning system improving outbreak preparedness",
      },
    ],
    relatedProjects: ["National Data Integration Platform", "Predictive Analytics Dashboard", "Health Information Exchange"],
  },
  "research": {
    title: "Action & Implementation Research",
    overview: "We conduct rigorous research to understand how health information systems can be designed, implemented, and sustained effectively. Our research employs implementation science, participatory action research, and mixed methods approaches to generate evidence that informs policy and practice. We collaborate with academic institutions and publish in peer-reviewed journals while ensuring research findings directly improve our implementation approaches.",
    features: [
      "Implementation science studies",
      "Impact evaluations and effectiveness research",
      "Participatory action research",
      "Qualitative research on user experiences",
      "Data quality and data use research",
      "Health system strengthening research",
      "Research-practice partnerships",
      "Policy-relevant evidence generation",
    ],
    caseStudies: [
      {
        title: "Data Use for Decision Making Study",
        description: "Multi-year research examining how district health officials use DHIS2 data for planning and management.",
        impact: "Published findings influenced national training curriculum",
      },
      {
        title: "Implementation Science Research on HIS Sustainability",
        description: "Mixed methods study identifying factors contributing to long-term sustainability of health information systems.",
        impact: "Developed evidence-based sustainability framework",
      },
    ],
    relatedProjects: ["DHIS2 Adoption Research", "Data Quality Improvement Study", "User Experience Research"],
  },
  "capacity-building": {
    title: "Capacity Building & Education",
    overview: "We build sustainable capacity for health information systems through comprehensive training and education programs. Our offerings range from short-term workshops to long-term academic programs, covering technical skills, data analysis, and health systems management. We operate DHIS2 academies, conduct system administration training, offer data analysis courses, and provide ongoing mentoring. Our capacity building approach emphasizes hands-on learning, peer support, and building communities of practice.",
    features: [
      "DHIS2 Academy training programs",
      "System administration certification courses",
      "Data analysis and visualization training",
      "Mobile data collection training",
      "Train-the-trainer programs",
      "E-learning and online courses",
      "Mentoring and on-the-job support",
      "Health informatics curriculum development",
    ],
    caseStudies: [
      {
        title: "National DHIS2 Academy Program",
        description: "Established training academy conducting regular courses for system administrators and data managers from all states.",
        impact: "Trained 500+ professionals, creating national pool of DHIS2 experts",
      },
      {
        title: "Community Health Worker Training Program",
        description: "Developed and delivered training for 10,000 community health workers on mobile data collection applications.",
        impact: "Improved data collection quality and timeliness",
      },
    ],
    relatedProjects: ["National Training Academy", "CHW Capacity Building", "Data Analysis Training Program"],
  },
  "climate-health-analytics": {
    title: "Climate & Health Data Analytics",
    overview: "We develop innovative analytics that link climate and environmental data with health outcomes to improve preparedness and adaptation. Our work supports climate-sensitive disease surveillance, environmental health monitoring, and climate adaptation planning for health systems. We integrate meteorological data, environmental indicators, and health data to identify climate-health relationships and support evidence-based interventions.",
    features: [
      "Climate-sensitive disease surveillance",
      "Environmental health monitoring systems",
      "Integration of climate and health data",
      "Predictive modeling for climate-related health risks",
      "Early warning systems for climate-related diseases",
      "Heat health action plan support",
      "Air quality and health impact analysis",
      "Climate adaptation planning for health systems",
    ],
    caseStudies: [
      {
        title: "Climate-Sensitive Disease Surveillance System",
        description: "Integrated climate data with disease surveillance to predict dengue and malaria outbreaks based on rainfall and temperature patterns.",
        impact: "Enabled proactive vector control interventions",
      },
      {
        title: "Heat Health Early Warning System",
        description: "Developed early warning system linking weather forecasts with heat-related illness reporting for urban areas.",
        impact: "Reduced heat-related hospitalizations during heat waves",
      },
    ],
    relatedProjects: ["Climate-Health Integration Platform", "Vector-Borne Disease Early Warning", "Urban Heat Health System"],
  },
};

export default function OfferingDetail() {
  const { id } = useParams<{ id: string }>();
  const offering = id ? offeringsData[id] : null;

  if (!offering) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Offering Not Found</h1>
        <Button asChild>
          <Link to="/offerings">Back to Offerings</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Hero title={offering.title} />

      {/* Back Button */}
      <div className="container py-6">
        <Button variant="ghost" asChild>
          <Link to="/offerings">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Offerings
          </Link>
        </Button>
      </div>

      {/* Overview */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{offering.overview}</p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {offering.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8">Case Studies</h2>
          <div className="space-y-6">
            {offering.caseStudies.map((study: any, index: number) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{study.description}</p>
                  <Badge className="bg-accent text-accent-foreground">{study.impact}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-6">Related Projects</h2>
          <div className="flex flex-wrap gap-3">
            {offering.relatedProjects.map((project: string, index: number) => (
              <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                {project}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Interested in This Service?"
        description="Let's discuss how we can help strengthen your health information systems."
      >
        <Button size="lg" variant="secondary" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
          <Link to="/work">View Our Projects</Link>
        </Button>
      </CTASection>
    </div>
  );
}
