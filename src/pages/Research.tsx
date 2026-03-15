import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, BookOpen, Microscope, Search, ExternalLink, ShoppingCart } from "lucide-react";
import digitalDevelopment from "@/assets/books/digital-development.jpg";
import publicHealthInformatics from "@/assets/books/public-health-informatics.jpg";
import integratedHealthInfoArch from "@/assets/books/integrated-health-info-architecture.jpg";
import globalItOutsourcing from "@/assets/books/global-it-outsourcing.jpg";
import gisDevelopingCountries from "@/assets/books/gis-developing-countries.jpg";
import { publications } from "@/data/publications";

const ITEMS_PER_PAGE = 20;

const publicationTypes = [
  "All Types",
  "Journal Publication",
  "Conference Publication",
  "Special Issue",
  "Special Article",
  "Workshop",
  "Review Article",
  "Book Review",
];

const years = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a);

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

const books = [
  {
    title: "Digital Development: Stories of Hope from Health and Development",
    authors: "Sundeep Sahay, Arunima Mukherjee, Geoff Walsham, Thomas Hylland Eriksen",
    cover: digitalDevelopment,
    url: "https://www.amazon.in/Digital-Development-Stories-health-development/dp/1788532066",
  },
  {
    title: "Public Health Informatics: A Developing Country Perspective",
    authors: "Sundeep Sahay, T. Sundararaman, Jorn Braa",
    cover: publicHealthInformatics,
    url: "https://www.amazon.in/Public-Health-Informatics-developing-perspective-ebook/dp/B01MSE5TEK",
  },
  {
    title: "Integrated Health Information Architecture: Power to the Users",
    authors: "Jorn Braa, Sundeep Sahay",
    cover: integratedHealthInfoArch,
    url: "https://www.amazon.in/Integrated-Health-Information-Architecture-Power/dp/9381320063",
  },
  {
    title: "Global IT Outsourcing: Software Development Across Borders",
    authors: "Sundeep Sahay, Brian Nicholson, S. Krishna",
    cover: globalItOutsourcing,
    url: "https://www.amazon.in/Global-Outsourcing-Software-Development-Borders/dp/0521039487",
  },
  {
    title: "The Use of GIS in Developing Countries",
    authors: "Sundeep Sahay, Geoff Walsham",
    cover: gisDevelopingCountries,
    url: "",
  },
];

export default function Research() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedYear, setSelectedYear] = useState("all");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        !searchQuery ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.publicationName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === "All Types" || pub.type === selectedType;
      const matchesYear = selectedYear === "all" || pub.year === parseInt(selectedYear);
      return matchesSearch && matchesType && matchesYear;
    });
  }, [searchQuery, selectedType, selectedYear]);

  const visiblePublications = filteredPublications.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPublications.length;

  // Reset visible count when filters change
  const handleFilterChange = (setter: (v: string) => void) => (value: string) => {
    setter(value);
    setVisibleCount(ITEMS_PER_PAGE);
  };

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
          <h2 className="font-heading text-3xl font-bold mb-8">Publications</h2>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by title or publication name..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(ITEMS_PER_PAGE);
                }}
                className="pl-10"
              />
            </div>
            <Select value={selectedType} onValueChange={handleFilterChange(setSelectedType)}>
              <SelectTrigger className="w-full md:w-[220px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                {publicationTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedYear} onValueChange={handleFilterChange(setSelectedYear)}>
              <SelectTrigger className="w-full md:w-[160px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={String(year)}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Result count */}
          <p className="text-sm text-muted-foreground mb-4">
            Showing {visiblePublications.length} of {filteredPublications.length} publications
          </p>

          {/* Publication cards */}
          <div className="space-y-4">
            {visiblePublications.map((pub, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-snug mb-1">{pub.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {pub.publicationName}, {pub.year}
                      </p>
                    </div>
                    <Badge variant="secondary" className="shrink-0 text-xs">
                      {pub.type}
                    </Badge>
                  </div>
                </CardHeader>
                {pub.url && (
                  <CardContent className="pt-0">
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      View Publication
                    </a>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="mt-8 text-center">
              <Button variant="outline" onClick={() => setVisibleCount((v) => v + ITEMS_PER_PAGE)}>
                Load More Publications
              </Button>
            </div>
          )}

          {filteredPublications.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No publications found matching your criteria.
            </p>
          )}
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

      {/* Books Published */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold mb-8">Books Published</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {books.map((book, index) => (
              <Card key={index} className="overflow-hidden flex flex-col">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-col flex-1 p-4">
                  <h3 className="font-semibold text-sm leading-snug mb-1">{book.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{book.authors}</p>
                  {book.url && (
                    <a
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center text-xs text-primary hover:underline font-medium"
                    >
                      <ShoppingCart className="mr-1 h-3.5 w-3.5" />
                      Buy on Amazon
                    </a>
                  )}
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
