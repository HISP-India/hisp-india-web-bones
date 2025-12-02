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

const allProjects = [
  {
    id: "nhm-dhis2",
    title: "National Health Mission DHIS2 Implementation",
    excerpt: "Nationwide implementation of DHIS2 for health program monitoring and evaluation, covering all states and union territories with comprehensive training and ongoing support.",
    tags: ["DHIS2", "National", "Health Programs"],
    region: "national",
    technology: "dhis2",
    category: "mch",
  },
  {
    id: "chw-platform",
    title: "Community Health Workers Digital Platform",
    excerpt: "Mobile-first platform for community health workers to track maternal and child health indicators at the community level with offline data capture capabilities.",
    tags: ["Mobile", "Community Health", "MCH"],
    region: "kerala",
    technology: "mobile",
    category: "community",
  },
  {
    id: "openmrs-karnataka",
    title: "OpenMRS Hospital System Integration",
    excerpt: "Integrated hospital information system deployment across 50+ district and community health centers in Karnataka for improved patient care coordination.",
    tags: ["OpenMRS", "Hospital", "Integration"],
    region: "karnataka",
    technology: "openmrs",
    category: "hospital",
  },
  {
    id: "disease-surveillance",
    title: "State Disease Surveillance System",
    excerpt: "Real-time disease surveillance platform with outbreak detection algorithms and automated alert systems for rapid public health response.",
    tags: ["DHIS2", "Surveillance", "Early Warning"],
    region: "himachal",
    technology: "dhis2",
    category: "surveillance",
  },
  {
    id: "climate-health",
    title: "Climate-Sensitive Disease Monitoring",
    excerpt: "Integration of meteorological data with disease surveillance to predict and prevent climate-sensitive disease outbreaks including vector-borne diseases.",
    tags: ["Analytics", "Climate", "Surveillance"],
    region: "northeast",
    technology: "analytics",
    category: "climate",
  },
  {
    id: "data-warehouse",
    title: "State Health Data Warehouse",
    excerpt: "Comprehensive data warehouse integrating data from multiple health programs for advanced analytics, cross-program insights, and strategic planning.",
    tags: ["DHIS2", "Analytics", "Integration"],
    region: "kerala",
    technology: "analytics",
    category: "mch",
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

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  excerpt={project.excerpt}
                  tags={project.tags}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No projects found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">28+</div>
              <p className="opacity-90">States & Union Territories</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">500,000+</div>
              <p className="opacity-90">Health Workers Supported</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="opacity-90">Successful Implementations</p>
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
