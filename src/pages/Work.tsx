import { useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { FilterBar } from "@/components/FilterBar";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Users, MapPin, TrendingUp } from "lucide-react";

const filterConfig = [
  {
    id: "region",
    label: "Region",
    options: [
      { value: "all", label: "All Regions" },
      { value: "national", label: "National" },
      { value: "kerala", label: "Kerala" },
      { value: "karnataka", label: "Karnataka" },
      { value: "himachal", label: "Himachal Pradesh" },
      { value: "northeast", label: "Northeast" },
    ],
  },
  {
    id: "technology",
    label: "Technology",
    options: [
      { value: "all", label: "All Technologies" },
      { value: "dhis2", label: "DHIS2" },
      { value: "openmrs", label: "OpenMRS" },
      { value: "mobile", label: "Mobile Apps" },
      { value: "analytics", label: "Analytics" },
    ],
  },
  {
    id: "category",
    label: "Category",
    options: [
      { value: "all", label: "All Categories" },
      { value: "mch", label: "Maternal & Child Health" },
      { value: "surveillance", label: "Disease Surveillance" },
      { value: "hospital", label: "Hospital Systems" },
      { value: "community", label: "Community Health" },
      { value: "climate", label: "Climate & Health" },
    ],
  },
];

const categoryColors: Record<string, string> = {
  dhis2: "bg-blue-500",
  openmrs: "bg-emerald-500",
  mobile: "bg-purple-500",
  analytics: "bg-teal-500",
  training: "bg-orange-500",
  implementation: "bg-pink-500",
  integration: "bg-indigo-500",
};

const allProjects = [
  {
    id: "nhm-dhis2",
    title: "National Health Mission DHIS2 Implementation",
    excerpt: "Comprehensive nationwide implementation of DHIS2 for health program monitoring and evaluation across all states and union territories, providing continuous technical support and capacity building.",
    tags: ["DHIS2", "National", "HMIS"],
    region: "national",
    technology: "dhis2",
    category: "mch",
    categoryColor: "dhis2",
  },
  {
    id: "rch-dhis2",
    title: "Reproductive and Child Health (RCH) Portal",
    excerpt: "National RCH portal on DHIS2 platform tracking maternal and child health indicators, antenatal care, immunization, and family planning services across India.",
    tags: ["DHIS2", "MCH", "National"],
    region: "national",
    technology: "dhis2",
    category: "mch",
    categoryColor: "dhis2",
  },
  {
    id: "idsp-surveillance",
    title: "Integrated Disease Surveillance Programme (IDSP)",
    excerpt: "Real-time disease surveillance system for early outbreak detection and rapid response, integrating data from all states for epidemic-prone diseases monitoring.",
    tags: ["DHIS2", "Surveillance", "IDSP"],
    region: "national",
    technology: "dhis2",
    category: "surveillance",
    categoryColor: "dhis2",
  },
  {
    id: "hmis-bihar",
    title: "Bihar Health Management Information System",
    excerpt: "State-wide HMIS implementation covering district hospitals, CHCs, PHCs, and sub-centers with comprehensive training and data quality improvement initiatives.",
    tags: ["DHIS2", "State HMIS", "Bihar"],
    region: "national",
    technology: "dhis2",
    category: "hospital",
    categoryColor: "dhis2",
  },
  {
    id: "kerala-disease-surveillance",
    title: "Kerala Integrated Disease Surveillance System",
    excerpt: "Advanced disease surveillance platform with real-time dashboards, outbreak prediction models, and mobile-based field data collection for all 14 districts.",
    tags: ["DHIS2", "Kerala", "Surveillance"],
    region: "kerala",
    technology: "dhis2",
    category: "surveillance",
    categoryColor: "dhis2",
  },
  {
    id: "openmrs-bahmni-karnataka",
    title: "Bahmni Hospital System - Karnataka",
    excerpt: "OpenMRS-based Bahmni implementation across 50+ district and community health centers, providing integrated OPD, IPD, laboratory, and pharmacy management.",
    tags: ["OpenMRS", "Bahmni", "Hospital"],
    region: "karnataka",
    technology: "openmrs",
    category: "hospital",
    categoryColor: "openmrs",
  },
  {
    id: "openmrs-jharkhand",
    title: "Jharkhand TB-HIV Integration Platform",
    excerpt: "OpenMRS implementation for TB-HIV integration across district TB units, enabling coordinated care, treatment tracking, and patient outcome monitoring.",
    tags: ["OpenMRS", "TB-HIV", "Integration"],
    region: "national",
    technology: "openmrs",
    category: "hospital",
    categoryColor: "openmrs",
  },
  {
    id: "chw-mobile-app",
    title: "Community Health Workers Mobile Platform",
    excerpt: "Mobile-first application for ASHAs and ANMs to track home visits, maternal care, immunization schedules, and newborn care with offline-first architecture.",
    tags: ["Mobile", "Community Health", "Offline"],
    region: "kerala",
    technology: "mobile",
    category: "community",
    categoryColor: "mobile",
  },
  {
    id: "asha-soft",
    title: "ASHA-Soft Digital Platform",
    excerpt: "Comprehensive digital platform for ASHA workers supporting service delivery tracking, incentive management, and community health monitoring.",
    tags: ["Mobile", "ASHA", "Community"],
    region: "national",
    technology: "mobile",
    category: "community",
    categoryColor: "mobile",
  },
  {
    id: "covid-tracking",
    title: "COVID-19 Surveillance & Tracking System",
    excerpt: "Rapid response platform for COVID-19 case tracking, contact tracing, testing management, and vaccination monitoring across multiple states.",
    tags: ["DHIS2", "COVID-19", "Emergency"],
    region: "national",
    technology: "dhis2",
    category: "surveillance",
    categoryColor: "dhis2",
  },
  {
    id: "climate-health",
    title: "Climate-Sensitive Disease Monitoring System",
    excerpt: "Integration of meteorological data with disease surveillance to predict and prevent climate-sensitive disease outbreaks including vector-borne diseases.",
    tags: ["Analytics", "Climate", "Prediction"],
    region: "northeast",
    technology: "analytics",
    category: "climate",
    categoryColor: "analytics",
  },
  {
    id: "data-warehouse-kerala",
    title: "Kerala State Health Data Warehouse",
    excerpt: "Comprehensive data warehouse integrating program data from HMIS, RCH, IDSP, and other systems for advanced analytics and strategic decision-making.",
    tags: ["Analytics", "Data Warehouse", "Kerala"],
    region: "kerala",
    technology: "analytics",
    category: "mch",
    categoryColor: "analytics",
  },
  {
    id: "npcchh-dhis2",
    title: "National Programme for Climate Change and Human Health",
    excerpt: "DHIS2-based monitoring system for climate-related health impacts, heat wave surveillance, and vector-borne disease tracking linked to climate indicators.",
    tags: ["DHIS2", "Climate", "National"],
    region: "national",
    technology: "dhis2",
    category: "climate",
    categoryColor: "dhis2",
  },
  {
    id: "training-dhis2-academy",
    title: "DHIS2 Regional Academy - India",
    excerpt: "Comprehensive training program for DHIS2 implementation, customization, and administration, training 1000+ health information officers and developers.",
    tags: ["Training", "DHIS2", "Capacity Building"],
    region: "national",
    technology: "dhis2",
    category: "mch",
    categoryColor: "training",
  },
  {
    id: "nhm-training-program",
    title: "National Health Mission Training Programme",
    excerpt: "Multi-level training program covering data collection, HMIS operations, data analysis, and dashboard development for state and district health officials.",
    tags: ["Training", "Capacity Building", "HMIS"],
    region: "national",
    technology: "dhis2",
    category: "mch",
    categoryColor: "training",
  },
  {
    id: "hp-health-info-system",
    title: "Himachal Pradesh State Health Information System",
    excerpt: "State-wide health information system implementation with customized modules for mountain health programs and telemedicine integration.",
    tags: ["DHIS2", "Himachal Pradesh", "State HMIS"],
    region: "himachal",
    technology: "dhis2",
    category: "hospital",
    categoryColor: "dhis2",
  },
  {
    id: "immunization-tracking",
    title: "Electronic Immunization Registry",
    excerpt: "Comprehensive immunization tracking system covering routine immunization, mission indradhanush, and vaccine stock management with SMS alerts.",
    tags: ["DHIS2", "Immunization", "National"],
    region: "national",
    technology: "dhis2",
    category: "mch",
    categoryColor: "dhis2",
  },
  {
    id: "ayush-hmis",
    title: "AYUSH Health Management Information System",
    excerpt: "Specialized HMIS for AYUSH facilities tracking Ayurveda, Yoga, Unani, Siddha, and Homeopathy services, practitioners, and patient outcomes.",
    tags: ["DHIS2", "AYUSH", "Integration"],
    region: "national",
    technology: "dhis2",
    category: "hospital",
    categoryColor: "integration",
  },
  {
    id: "blood-bank-management",
    title: "Blood Bank Management System",
    excerpt: "Integrated blood bank management system for inventory tracking, donor management, and transfusion services across state blood banks.",
    tags: ["OpenMRS", "Blood Bank", "Hospital"],
    region: "karnataka",
    technology: "openmrs",
    category: "hospital",
    categoryColor: "openmrs",
  },
  {
    id: "tribal-health",
    title: "Tribal Health Information System",
    excerpt: "Specialized health information system for tribal areas addressing unique health challenges, mobile health camps, and outreach services.",
    tags: ["DHIS2", "Tribal Health", "Community"],
    region: "northeast",
    technology: "dhis2",
    category: "community",
    categoryColor: "dhis2",
  },
  {
    id: "ncd-screening",
    title: "Non-Communicable Disease Screening Platform",
    excerpt: "Mobile and web-based platform for NCD screening, risk assessment, and follow-up management for diabetes, hypertension, and cancer screening.",
    tags: ["Mobile", "NCD", "Screening"],
    region: "national",
    technology: "mobile",
    category: "community",
    categoryColor: "mobile",
  },
  {
    id: "laboratory-information",
    title: "Laboratory Information Management System",
    excerpt: "Comprehensive LIMS for district and sub-district laboratories supporting sample tracking, test results, quality control, and reporting.",
    tags: ["OpenMRS", "Laboratory", "Integration"],
    region: "karnataka",
    technology: "openmrs",
    category: "hospital",
    categoryColor: "integration",
  },
  {
    id: "maternal-death-review",
    title: "Maternal Death Surveillance and Response",
    excerpt: "DHIS2-based system for maternal death reporting, review, and response tracking to improve maternal health outcomes and reduce mortality.",
    tags: ["DHIS2", "Maternal Health", "Surveillance"],
    region: "national",
    technology: "dhis2",
    category: "mch",
    categoryColor: "dhis2",
  },
  {
    id: "facility-registry",
    title: "Master Health Facility Registry",
    excerpt: "Comprehensive registry of all health facilities from sub-centers to medical colleges with infrastructure, services, and human resource data.",
    tags: ["DHIS2", "Registry", "National"],
    region: "national",
    technology: "dhis2",
    category: "hospital",
    categoryColor: "dhis2",
  },
];

export default function Work() {
  const [filters, setFilters] = useState<Record<string, string>>({
    region: "all",
    technology: "all",
    category: "all",
  });

  const filteredProjects = allProjects.filter((project) => {
    if (filters.region !== "all" && project.region !== filters.region) return false;
    if (filters.technology !== "all" && project.technology !== filters.technology) return false;
    if (filters.category !== "all" && project.category !== filters.category) return false;
    return true;
  });

  return (
    <div className="flex flex-col">
      <Hero
        title="Our Work"
        subtitle="Projects & Impact"
        description="Explore our portfolio of health information system implementations across India and beyond."
        variant="gradient"
        className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground"
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-8">
            <FilterBar
              filterConfig={filterConfig}
              filters={filters}
              onFilterChange={setFilters}
            />
          </div>

          <div className="mb-8 text-center">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> of{" "}
              <span className="font-semibold text-foreground">{allProjects.length}</span> projects
            </p>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  excerpt={project.excerpt}
                  tags={project.tags}
                  categoryColor={categoryColors[project.categoryColor]}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No projects found matching your filters.</p>
              <Button variant="outline" onClick={() => setFilters({ region: "all", technology: "all", category: "all" })} className="mt-4">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Impact Across India
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="opacity-90 text-sm">Live Projects</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">28+</div>
              <p className="opacity-90 text-sm">States & UTs</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="opacity-90 text-sm">Countries</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="opacity-90 text-sm">Training Programs</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="opacity-90 text-sm">Personnel Trained</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Project in Mind?"
        description="We'd love to discuss how we can support your health information system needs."
        variant="default"
      >
        <Button asChild size="lg" variant="default">
          <Link to="/contact">Start a Conversation</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/offerings">Explore Our Services</Link>
        </Button>
      </CTASection>
    </div>
  );
}
