import { useState } from "react";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar, MapPin, Images, Sparkles, Camera, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import amrRoundtable2025 from "@/assets/amr-roundtable-2025.png";
import dataScienceWorkshop from "@/assets/data-science-workshop-2025.jpg";
import philippinesNutrition from "@/assets/philippines-nutrition-2025.jpg";
import hispIntegrationMeeting from "@/assets/hisp-integration-meeting-2024.jpg";
import hispAnnualRetreat from "@/assets/hisp-annual-retreat-2024.jpg";
import dmchTraining from "@/assets/dmch-training-2025.jpg";
import nepalHivWorkshop from "@/assets/nepal-hiv-workshop-2025.jpg";
import tvhaTrainingLeh from "@/assets/tvha-training-leh-2025.jpg";
interface EventAlbum {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  coverImage: string;
  googlePhotosUrl: string;
  category: string;
}

const eventAlbums: EventAlbum[] = [
  {
    id: "amr-roundtable-2025",
    title: "National AMR Roundtable 2025",
    description: "The National AMR Roundtable 2025 at Habitat World, New Delhi brought together researchers, practitioners, and policymakers to explore strengthening AMR responses through collaboration, equity, and innovation, concluding with a shared commitment to advancing equitable and sustainable strategies.",
    date: "November 2025",
    location: "New Delhi, India",
    coverImage: amrRoundtable2025,
    googlePhotosUrl: "https://photos.app.goo.gl/R8NVeEmob4e173sUA",
    category: "Conference",
  },
  {
    id: "data-science-workshop-2025",
    title: "Data Science for Public Health (ToT) Workshop",
    description: "Empowering public health leaders to teach and scale data-driven solutions for low- and middle-income countries—bridging the gap between public health practice and modern data analytics.",
    date: "October 2025",
    location: "India",
    coverImage: dataScienceWorkshop,
    googlePhotosUrl: "https://photos.app.goo.gl/placeholder1",
    category: "Workshop",
  },
  {
    id: "philippines-nutrition-2025",
    title: "Data for Nutrition: HISP India in the Philippines",
    description: "Supporting the Philippines' Multi-Sectoral Nutrition Project through the Household Convergence Scorecard. Strengthening primary health care in the first 1,000 days, advancing WASH and ECCD services, and scaling national capacity through a Train-the-Trainer model. Delivered hands-on DHIS2 workshops across four batches with real-time assessments to drive continuous learning and better health outcomes.",
    date: "August 2025",
    location: "Philippines",
    coverImage: philippinesNutrition,
    googlePhotosUrl: "https://photos.app.goo.gl/placeholder2",
    category: "International",
  },
  {
    id: "hisp-integration-meeting-2024",
    title: "HISP Integration Meeting 2024",
    description: "HISP India participated in the HISP Integration Meeting 2024 in Colombo, presenting impactful use cases that showcased scalable integrations between open-source tools and DHIS2. The workshop strengthened our capabilities in FHIR integration, API-based data extraction, and data pipeline development using Camel, SUSHI, and JBang. Equipped with these new insights and technologies, we're excited to advance future-ready, efficient, and scalable integration solutions for health systems worldwide.",
    date: "November 2024",
    location: "Colombo, Sri Lanka",
    coverImage: hispIntegrationMeeting,
    googlePhotosUrl: "https://photos.app.goo.gl/placeholder3",
    category: "Conference",
  },
  {
    id: "hisp-annual-retreat-2024",
    title: "HISP India Annual Retreat 2024",
    description: "HISP India Annual Retreat 2024 brought the team together for a year-end reflection and forward planning, celebrating our collective achievements and aligning on goals for the future. The retreat fostered collaboration, innovation, and renewed commitment as we continue strengthening digital health systems and driving impactful solutions across projects.",
    date: "2024",
    location: "India",
    coverImage: hispAnnualRetreat,
    googlePhotosUrl: "https://photos.app.goo.gl/placeholder4",
    category: "Team Event",
  },
  {
    id: "dmch-training-2025",
    title: "DMCH Training for the New Patient Centric Android App",
    description: "HISP India continues to advance its mission of strengthening public health systems through collaborative, context-driven digital innovations. One key initiative is the development of a patient-centric IT system for Dayanand Medical College and Hospital (DMCH) in Ludhiana, Punjab. Built on DHIS2 and guided by FOSS principles, the solution supports a population of 50,000 across both urban and rural communities through DMCH's network of 21 health centres.",
    date: "July 2025",
    location: "Ludhiana, Punjab, India",
    coverImage: dmchTraining,
    googlePhotosUrl: "https://photos.app.goo.gl/placeholder5",
    category: "Training",
  },
  {
    id: "nepal-hiv-workshop-2025",
    title: "Strengthening National HIV Information Systems through Collaboration & Interoperability",
    description: "HISP India participated in intensive technical workshops with NCASC, UNDP, FHI 360, AHF, and WHO to strengthen Nepal's DHIS2-based HIV Care and ART Tracking System. The sessions focused on interoperability between HIV Tracker and iHMIS, harmonising program indicators, and optimising system architecture and metadata quality—resulting in a more stable, interoperable, and program-responsive HIV information system.",
    date: "January 2025",
    location: "Kathmandu, Nepal",
    coverImage: nepalHivWorkshop,
    googlePhotosUrl: "https://photos.app.goo.gl/placeholder6",
    category: "Workshop",
  },
  {
    id: "tvha-training-leh-2025",
    title: "TVHA Training in Leh Ladakh",
    description: "HISP India conducted TVHA (Tracker for Voluntary Health Association) training in the high-altitude region of Leh, Ladakh. The workshop focused on strengthening digital health capacity and empowering local health workers with skills to effectively use health information systems.",
    date: "October 2025",
    location: "Leh, Ladakh, India",
    coverImage: tvhaTrainingLeh,
    googlePhotosUrl: "https://photos.app.goo.gl/placeholder7",
    category: "Training",
  },
];

const categories = ["All", "Conference", "Workshop", "Training", "Team Event", "International"];

export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState<EventAlbum | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredAlbums = activeCategory === "All" 
    ? eventAlbums 
    : eventAlbums.filter(album => album.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        variant="gradient"
        title="Gallery"
        subtitle="Capturing Moments of Impact"
        description="Explore our journey through images — from transformative workshops to global conferences, every moment tells a story of progress in health informatics."
      />

      {/* Floating Decorative Elements */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Event Albums</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Relive Our <span className="text-primary">Memorable Moments</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our collection of event photographs. Click on any album to view the full gallery on Google Photos.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Album Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlbums.map((album, index) => (
              <div
                key={album.id}
                className={cn(
                  "group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer",
                  "animate-fade-in",
                  index % 3 === 0 && "lg:col-span-1",
                )}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedAlbum(album)}
              >
                {/* Cover Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full">
                      {album.category}
                    </span>
                  </div>

                  {/* View Album Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 px-6 py-3 bg-background/95 backdrop-blur-sm rounded-full text-foreground font-medium shadow-xl">
                      <Images className="h-5 w-5 text-primary" />
                      View Album
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {album.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {album.description}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-primary" />
                      {album.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-primary" />
                      {album.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Photos Captured", icon: Camera },
              { number: "50+", label: "Events Documented", icon: Calendar },
              { number: "15+", label: "States Covered", icon: MapPin },
              { number: "1000+", label: "Memories Shared", icon: Images },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Album Modal */}
      <Dialog open={!!selectedAlbum} onOpenChange={() => setSelectedAlbum(null)}>
        <DialogContent className="max-w-2xl w-[95vw] p-0 overflow-hidden">
          {/* Cover Image with Gradient */}
          <div className="relative h-64 md:h-80">
            <img 
              src={selectedAlbum?.coverImage} 
              alt={selectedAlbum?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full">
                {selectedAlbum?.category}
              </span>
            </div>
          </div>
          
          {/* Album Info & CTA */}
          <div className="p-6 pt-4">
            <DialogHeader className="mb-4">
              <DialogTitle className="font-heading text-2xl font-bold">
                {selectedAlbum?.title}
              </DialogTitle>
              <DialogDescription className="flex items-center gap-4 mt-2">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {selectedAlbum?.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {selectedAlbum?.location}
                </span>
              </DialogDescription>
            </DialogHeader>
            
            <p className="text-muted-foreground mb-6">
              {selectedAlbum?.description}
            </p>
            
            <div className="flex flex-col items-center gap-3">
              <Button asChild size="lg" className="w-full sm:w-auto gap-2">
                <a href={selectedAlbum?.googlePhotosUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                  View Full Album on Google Photos
                </a>
              </Button>
              <p className="text-xs text-muted-foreground">
                Opens in a new tab
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <CTASection
        variant="primary"
        title="Have Photos to Share?"
        description="If you have photographs from any HISP India event, we'd love to add them to our collection."
      >
        <Button asChild size="lg" variant="secondary">
          <Link to="/contact">Share Your Photos</Link>
        </Button>
      </CTASection>
    </div>
  );
}
