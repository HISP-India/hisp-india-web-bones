import { useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FilterBar } from "@/components/FilterBar";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";

const filterConfig = [
  {
    id: "location",
    label: "Location",
    options: [
      { value: "all", label: "All Locations" },
      { value: "delhi", label: "Delhi" },
      { value: "bangalore", label: "Bangalore" },
      { value: "remote", label: "Remote" },
    ],
  },
  {
    id: "department",
    label: "Department",
    options: [
      { value: "all", label: "All Departments" },
      { value: "tech", label: "Technology" },
      { value: "program", label: "Program Management" },
      { value: "research", label: "Research" },
      { value: "training", label: "Capacity Building" },
    ],
  },
];

const jobs = [
  {
    id: "sr-dhis2-dev",
    title: "Senior DHIS2 Developer",
    department: "Technology",
    location: "Delhi",
    type: "Full-time",
    description: "Lead DHIS2 implementation projects, develop custom applications and integrations, and mentor junior developers.",
    departmentId: "tech",
    locationId: "delhi",
  },
  {
    id: "program-manager",
    title: "Program Manager - Health Information Systems",
    department: "Program Management",
    location: "Bangalore",
    type: "Full-time",
    description: "Manage health information system implementation projects, coordinate with government partners, and ensure project delivery.",
    departmentId: "program",
    locationId: "bangalore",
  },
  {
    id: "research-associate",
    title: "Research Associate - Implementation Science",
    department: "Research",
    location: "Remote",
    type: "Full-time",
    description: "Conduct implementation research, data analysis, and contribute to research publications on health information systems.",
    departmentId: "research",
    locationId: "remote",
  },
  {
    id: "training-coordinator",
    title: "Training Coordinator",
    department: "Capacity Building",
    location: "Delhi",
    type: "Full-time",
    description: "Coordinate training programs, develop training materials, and deliver DHIS2 and health informatics training.",
    departmentId: "training",
    locationId: "delhi",
  },
  {
    id: "implementation-specialist",
    title: "Implementation Specialist",
    department: "Program Management",
    location: "Bangalore",
    type: "Full-time",
    description: "Support field-level implementation of health information systems, conduct user training, and provide technical support.",
    departmentId: "program",
    locationId: "bangalore",
  },
];

export default function Careers() {
  const [filters, setFilters] = useState<Record<string, string>>({
    location: "all",
    department: "all",
  });

  const filteredJobs = jobs.filter((job) => {
    if (filters.location !== "all" && job.locationId !== filters.location) return false;
    if (filters.department !== "all" && job.departmentId !== filters.department) return false;
    return true;
  });

  return (
    <div className="flex flex-col">
      <Hero
        title="Join Our Team"
        subtitle="Careers at HISP India"
        description="Be part of a mission-driven team building health information systems for public good."
      />

      {/* Why Join Us */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">Why Join HISP India</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-heading font-semibold mb-2">Meaningful Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Work on projects that directly improve public health outcomes and strengthen health systems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-heading font-semibold mb-2">Learning & Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous learning opportunities, exposure to diverse projects, and professional development support.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-heading font-semibold mb-2">Collaborative Culture</h3>
                <p className="text-sm text-muted-foreground">
                  Work with a diverse, passionate team committed to public good and mutual support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold mb-8">Open Positions</h2>
          
          <div className="mb-8">
            <FilterBar
              filterConfig={filterConfig}
              filters={filters}
              onFilterChange={setFilters}
            />
          </div>

          {filteredJobs.length > 0 ? (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {job.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.type}
                          </div>
                        </div>
                      </div>
                      <Badge>{job.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <Button asChild>
                      <Link to={`/careers/${job.id}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No positions found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">Our Hiring Process</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Application Review", description: "We review your application and assess alignment with position requirements." },
              { step: "2", title: "Initial Screening", description: "Selected candidates participate in an initial phone or video screening." },
              { step: "3", title: "Technical/Skills Assessment", description: "Depending on the role, complete a technical assessment or case study." },
              { step: "4", title: "Team Interview", description: "Meet with team members and hiring managers to discuss experience and fit." },
              { step: "5", title: "Offer & Onboarding", description: "Successful candidates receive an offer and begin comprehensive onboarding." },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
