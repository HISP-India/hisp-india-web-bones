import { useParams, Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, Users } from "lucide-react";

const projectsData: Record<string, any> = {
  "nhm-dhis2": {
    title: "National Health Mission DHIS2 Implementation",
    hero: "Nationwide implementation of DHIS2 for comprehensive health program monitoring",
    region: "All States & Union Territories, India",
    duration: "2012 - Ongoing",
    beneficiaries: "30,000+ health facilities, 200,000+ users",
    tags: ["DHIS2", "National", "Health Programs", "Capacity Building"],
    challenge: "India's National Health Mission needed a unified platform to monitor and evaluate diverse health programs across all states. Fragmented data systems, limited interoperability, and varied capacity across states presented significant challenges. The scale of implementation required robust technical infrastructure, comprehensive training programs, and ongoing support mechanisms.",
    solution: "We implemented DHIS2 as a national platform, providing end-to-end support including system architecture design, state-level deployments, comprehensive training academies, and ongoing technical assistance. We developed customized modules for maternal and child health, immunization, disease surveillance, and health facility reporting. Our approach emphasized building local capacity through train-the-trainer programs and establishing state-level support teams.",
    impact: [
      "Unified health information platform serving all states and union territories",
      "Improved data completeness from 60% to 95% across health programs",
      "Enabled evidence-based planning and resource allocation at national and state levels",
      "Trained 500+ state-level master trainers and system administrators",
      "Real-time monitoring of 50+ health indicators across 30,000+ facilities",
      "Strengthened data use for decision making at district and sub-district levels",
    ],
    relatedProjects: ["State Disease Surveillance System", "Community Health Workers Digital Platform", "State Health Data Warehouse"],
  },
  "chw-platform": {
    title: "Community Health Workers Digital Platform",
    hero: "Empowering frontline health workers with mobile technology",
    region: "Kerala, India",
    duration: "2019 - 2023",
    beneficiaries: "5,000 community health workers, 500,000 beneficiaries",
    tags: ["Mobile", "Community Health", "MCH", "Offline-First"],
    challenge: "Community health workers in rural Kerala needed digital tools to track maternal and child health indicators, but faced connectivity challenges and limited technical literacy. Paper-based tracking was time-consuming, error-prone, and provided no real-time visibility. Coordination between community health workers and primary health centers was fragmented.",
    solution: "We developed a mobile-first application with offline data capture capabilities, intuitive interface designed with community health workers, and automatic synchronization when connectivity available. The platform tracks antenatal care visits, immunizations, growth monitoring, and high-risk pregnancies. We conducted extensive user testing and iterative design improvements based on frontline worker feedback. Comprehensive training and ongoing mentoring support ensured successful adoption.",
    impact: [
      "Increased antenatal care coverage by 25% in project districts",
      "Reduced time spent on documentation by 40%, allowing more time for community engagement",
      "Improved early identification of high-risk pregnancies through automated flagging",
      "Real-time dashboards enabling timely supportive supervision",
      "Enhanced coordination between community health workers and health facilities",
      "High user satisfaction and sustained adoption beyond pilot phase",
    ],
    relatedProjects: ["Community Health Monitoring System", "Mobile Training Platform", "MCH Dashboard"],
  },
  "openmrs-karnataka": {
    title: "OpenMRS Hospital System Integration",
    hero: "Transforming hospital information systems for better patient care",
    region: "Karnataka, India",
    duration: "2020 - 2024",
    beneficiaries: "50+ health facilities, 500,000+ patients annually",
    tags: ["OpenMRS", "Hospital", "Integration", "EMR"],
    challenge: "District and community health centers in Karnataka lacked integrated hospital information systems, resulting in fragmented patient records, inefficient workflows, and limited visibility into hospital operations. Implementing electronic medical records in resource-constrained settings required addressing infrastructure limitations, workflow changes, and staff capacity building.",
    solution: "We implemented OpenMRS-based hospital information systems customized for district hospital contexts. Our solution integrated patient registration, outpatient and inpatient management, pharmacy, laboratory, and basic radiology. We worked closely with hospital staff to map workflows and configure the system to match existing processes while introducing improvements. Phased implementation with comprehensive training and on-site support ensured smooth transition from paper-based systems.",
    impact: [
      "Reduced patient wait times by 35% through streamlined workflows",
      "Improved clinical documentation quality by 60%",
      "Enabled continuity of care through accessible patient history",
      "Better inventory management reducing medicine stockouts by 45%",
      "Hospital management dashboards supporting operational decision making",
      "Successful replication model adopted by additional facilities",
    ],
    relatedProjects: ["Hospital Dashboard System", "Laboratory Information System", "Pharmacy Management Integration"],
  },
  "disease-surveillance": {
    title: "State Disease Surveillance System",
    hero: "Early detection and rapid response to disease outbreaks",
    region: "Himachal Pradesh, India",
    duration: "2018 - Ongoing",
    beneficiaries: "15 districts, 7 million population covered",
    tags: ["DHIS2", "Surveillance", "Early Warning", "Public Health"],
    challenge: "Timely detection and response to disease outbreaks required real-time surveillance data, but existing systems relied on delayed paper-based reporting. Limited analytical capacity and lack of automated alert mechanisms hindered rapid public health response. Coordination between health facilities, district health offices, and state surveillance unit needed strengthening.",
    solution: "We implemented an integrated disease surveillance platform using DHIS2 with custom outbreak detection algorithms and automated SMS alert systems. The system enables real-time reporting from health facilities, automatic threshold-based alerts for outbreak-prone diseases, and dashboards for monitoring disease trends. We integrated laboratory data for outbreak confirmation and built capacity for data analysis and outbreak investigation at district and state levels.",
    impact: [
      "Reduced outbreak detection time from weeks to 2-3 days",
      "Enabled rapid public health response reducing outbreak duration by 40%",
      "Real-time visibility of disease trends across all districts",
      "Strengthened laboratory-surveillance integration",
      "Improved inter-sectoral coordination for outbreak response",
      "Enhanced capacity for epidemiological analysis at state and district levels",
    ],
    relatedProjects: ["Laboratory Information System", "Mobile Outbreak Investigation App", "Epidemic Preparedness Dashboard"],
  },
  "climate-health": {
    title: "Climate-Sensitive Disease Monitoring",
    hero: "Linking climate and health data for better preparedness",
    region: "Northeast India",
    duration: "2021 - Ongoing",
    beneficiaries: "8 states, focus on vector-borne and climate-sensitive diseases",
    tags: ["Analytics", "Climate", "Surveillance", "Predictive Modeling"],
    challenge: "Climate change is influencing disease patterns, but health systems lacked tools to anticipate and prepare for climate-related health risks. Vector-borne diseases like dengue and malaria show strong associations with rainfall and temperature, but surveillance systems didn't integrate climate data. Predictive approaches were needed to enable proactive interventions.",
    solution: "We developed an integrated platform combining disease surveillance data with meteorological and environmental data. Using machine learning models, we predict disease outbreak risk based on climate patterns and historical disease trends. The system provides early warnings to health authorities, enabling proactive vector control and public health messaging. We built capacity for climate-health analysis and established partnerships with meteorological departments.",
    impact: [
      "Early warning system predicting dengue outbreaks 4-6 weeks in advance",
      "Enabled proactive vector control interventions reducing outbreak magnitude",
      "Identified geographic areas at highest climate-health risk for targeted preparedness",
      "Strengthened inter-sectoral collaboration between health and meteorology departments",
      "Generated evidence for climate adaptation planning in health sector",
      "Approach being scaled to additional states and disease conditions",
    ],
    relatedProjects: ["Vector-Borne Disease Dashboard", "Heat Health Early Warning System", "Climate-Health Research Study"],
  },
  "data-warehouse": {
    title: "State Health Data Warehouse",
    hero: "Integrated analytics for strategic health planning",
    region: "Kerala, India",
    duration: "2020 - 2023",
    beneficiaries: "State health department, district health offices, program managers",
    tags: ["DHIS2", "Analytics", "Integration", "Business Intelligence"],
    challenge: "Health data from multiple programs existed in separate systems with limited interoperability, preventing comprehensive analysis and cross-program insights. Strategic planning required integrated view of health system performance, but technical and governance barriers limited data sharing. Advanced analytical capacity was limited at state level.",
    solution: "We designed and implemented a state health data warehouse integrating data from 12 health programs including maternal and child health, disease surveillance, hospital services, and health infrastructure. We developed ETL processes for data integration, business intelligence dashboards for different user groups, and predictive analytics for resource planning. We established data governance mechanisms and built analytical capacity through training and ongoing mentorship.",
    impact: [
      "Unified platform providing comprehensive view of state health system",
      "Enabled cross-program analysis identifying service delivery gaps and opportunities",
      "Improved strategic planning through evidence-based resource allocation",
      "Reduced time for report generation from weeks to minutes",
      "Enhanced analytical capacity at state and district levels",
      "Data-driven insights supporting policy decisions and program improvements",
    ],
    relatedProjects: ["Data Quality Assessment System", "Predictive Analytics Dashboard", "Geographic Analysis Platform"],
  },
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Button asChild>
          <Link to="/work">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Hero title={project.title} description={project.hero} />

      {/* Back Button */}
      <div className="container py-6">
        <Button variant="ghost" asChild>
          <Link to="/work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Project Meta */}
      <section className="py-8 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-muted-foreground">Region</p>
                <p className="font-medium">{project.region}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">{project.duration}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-muted-foreground">Beneficiaries</p>
                <p className="font-medium">{project.beneficiaries}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-6">Our Solution</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
        </div>
      </section>

      {/* Impact */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-6">Impact & Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.impact.map((item: string, index: number) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">{item}</p>
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
            {project.relatedProjects.map((relatedProject: string, index: number) => (
              <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                {relatedProject}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Interested in Similar Solutions?"
        description="Let's discuss how we can help your organization achieve similar impact."
      >
        <Button size="lg" variant="secondary" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
          <Link to="/offerings">View Our Services</Link>
        </Button>
      </CTASection>
    </div>
  );
}
