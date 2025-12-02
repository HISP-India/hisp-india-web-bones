import { useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, BookOpen, Microscope } from "lucide-react";

const publications = [
  {
    title: "Participatory Design of Health Information Systems in Low-Resource Settings",
    authors: "Singh A, Kumar R, Verma A",
    year: 2023,
    journal: "Journal of Health Informatics",
    category: "Implementation",
    abstract: "This study examines participatory design approaches in implementing health information systems...",
  },
  {
    title: "Data Use for Decision Making: Evidence from District Health Offices",
    authors: "Verma A, Sharma P, Singh A",
    year: 2022,
    journal: "Health Policy and Planning",
    category: "Data Use",
    abstract: "Multi-year mixed methods research exploring factors influencing data use by district health managers...",
  },
  {
    title: "Sustainability of Health Information Systems: A Framework",
    authors: "Kumar R, Patel A, Singh A",
    year: 2022,
    journal: "Implementation Science",
    category: "Sustainability",
    abstract: "Evidence-based framework identifying critical factors for long-term sustainability of health information systems...",
  },
  {
    title: "Climate-Health Data Integration for Outbreak Prediction",
    authors: "Gupta R, Verma A, Singh A",
    year: 2023,
    journal: "International Journal of Medical Informatics",
    category: "Climate & Health",
    abstract: "Machine learning approaches to integrate climate and epidemiological data for early outbreak detection...",
  },
];

const ongoingStudies = [
  {
    title: "Community Health Worker Digital Tool Adoption and Impact",
    description: "Mixed methods study examining factors influencing adoption of mobile health tools by community health workers and impact on service delivery.",
    duration: "2023-2025",
  },
  {
    title: "Health Data Governance in Federated Systems",
    description: "Research on data governance models for health information systems spanning multiple jurisdictions and institutions.",
    duration: "2024-2026",
  },
  {
    title: "AI and Machine Learning in Health Information Systems",
    description: "Exploring applications of artificial intelligence for predictive analytics, data quality improvement, and clinical decision support in resource-limited settings.",
    duration: "2024-2025",
  },
];

const researchThemes = [
  {
    icon: Microscope,
    title: "Antimicrobial Resistance",
    description: "Health information systems for AMR surveillance, monitoring antibiotic prescribing patterns, and supporting stewardship programs.",
  },
  {
    icon: BookOpen,
    title: "Health Inequities",
    description: "Using health data to identify and address disparities in health service access and outcomes across different populations.",
  },
  {
    icon: FileText,
    title: "Climate & Health",
    description: "Integration of climate and health data for understanding climate-sensitive disease patterns and improving preparedness.",
  },
  {
    icon: Microscope,
    title: "Implementation Science",
    description: "Research on effective strategies for implementing, scaling, and sustaining health information systems in diverse contexts.",
  },
];

const resources = [
  { title: "HISP India Annual Report 2023", type: "Report", size: "2.5 MB" },
  { title: "DHIS2 Implementation Guidelines", type: "Guide", size: "1.8 MB" },
  { title: "Data Quality Assessment Framework", type: "Toolkit", size: "3.2 MB" },
  { title: "Community Health Information Systems: Best Practices", type: "Guide", size: "2.1 MB" },
];

export default function Research() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPublications = selectedCategory === "all" 
    ? publications 
    : publications.filter(pub => pub.category === selectedCategory);

  return (
    <div className="flex flex-col">
      <Hero
        title="Research & Publications"
        subtitle="Evidence & Innovation"
        description="Generating evidence to inform health information system design, implementation, and policy."
        variant="gradient"
        className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground"
      />

      {/* Publications */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="font-heading text-3xl font-bold">Publications</h2>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Implementation">Implementation</SelectItem>
                <SelectItem value="Data Use">Data Use</SelectItem>
                <SelectItem value="Sustainability">Sustainability</SelectItem>
                <SelectItem value="Climate & Health">Climate & Health</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {filteredPublications.map((pub, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{pub.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{pub.authors}</p>
                      <p className="text-sm text-muted-foreground">
                        {pub.journal}, {pub.year}
                      </p>
                    </div>
                    <Badge>{pub.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{pub.abstract}</p>
                  <Button variant="link" className="p-0 h-auto">
                    <FileText className="mr-2 h-4 w-4" />
                    View Publication
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Studies */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold mb-8">Ongoing Research Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ongoingStudies.map((study, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                  <Badge variant="outline">{study.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Themes */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">Key Research Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchThemes.map((theme, index) => (
              <div key={index} className="text-center">
                <div className="h-12 w-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                  <theme.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{theme.title}</h3>
                <p className="text-sm opacity-90">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8">Downloadable Resources</h2>
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <Card key={index}>
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {resource.type} • {resource.size}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in Research Collaboration?"
        description="We welcome partnerships with academic institutions, research organizations, and health systems for collaborative research."
        variant="default"
      >
        <Button asChild size="lg" variant="default">
          <Link to="/contact">Discuss Research Opportunities</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/about">Learn More About Us</Link>
        </Button>
      </CTASection>
    </div>
  );
}
