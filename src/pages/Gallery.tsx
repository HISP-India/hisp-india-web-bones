import { useState } from "react";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { GooglePhotosEmbed } from "@/components/GooglePhotosEmbed";
import { Calendar, MapPin, Images, Sparkles, Camera, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

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
    id: "annual-conference-2024",
    title: "HISP India Annual Conference 2024",
    description: "Highlights from our annual gathering of health informatics professionals, featuring keynote sessions, workshops, and networking events.",
    date: "March 2024",
    location: "New Delhi, India",
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
    googlePhotosUrl: "https://photos.app.goo.gl/R8NVeEmob4e173sUA",
    category: "Conference",
  },
  {
    id: "dhis2-workshop-2024",
    title: "DHIS2 Implementation Workshop",
    description: "Hands-on training sessions for state health officials on DHIS2 platform customization and data management.",
    date: "February 2024",
    location: "Bangalore, India",
    coverImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop",
    googlePhotosUrl: "https://photos.google.com/share/AF1QipNHbWZBbAG3YvLQwZ5C0xVdEZBxWUBQlNs7nJb8IuGU1IEV8bLiQPwHLJl8ZUyQjA?key=placeholder",
    category: "Workshop",
  },
  {
    id: "chw-training-2024",
    title: "Community Health Worker Training",
    description: "Empowering frontline health workers with digital tools and data collection techniques for better community health outcomes.",
    date: "January 2024",
    location: "Lucknow, India",
    coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
    googlePhotosUrl: "https://photos.google.com/share/AF1QipNHbWZBbAG3YvLQwZ5C0xVdEZBxWUBQlNs7nJb8IuGU1IEV8bLiQPwHLJl8ZUyQjA?key=placeholder",
    category: "Training",
  },
  {
    id: "team-retreat-2023",
    title: "Team Building Retreat 2023",
    description: "A memorable gathering of the HISP India family, celebrating our achievements and strengthening bonds.",
    date: "December 2023",
    location: "Jaipur, India",
    coverImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop",
    googlePhotosUrl: "https://photos.google.com/share/AF1QipNHbWZBbAG3YvLQwZ5C0xVdEZBxWUBQlNs7nJb8IuGU1IEV8bLiQPwHLJl8ZUyQjA?key=placeholder",
    category: "Team Event",
  },
  {
    id: "global-summit-2023",
    title: "Global Health Summit Participation",
    description: "HISP India's representation at the international health informatics summit, sharing insights and learning best practices.",
    date: "November 2023",
    location: "Geneva, Switzerland",
    coverImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop",
    googlePhotosUrl: "https://photos.google.com/share/AF1QipNHbWZBbAG3YvLQwZ5C0xVdEZBxWUBQlNs7nJb8IuGU1IEV8bLiQPwHLJl8ZUyQjA?key=placeholder",
    category: "Conference",
  },
  {
    id: "state-rollout-2023",
    title: "State-Level HMIS Rollout",
    description: "Documentation of our successful health management information system deployment across multiple districts.",
    date: "October 2023",
    location: "Multiple States, India",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    googlePhotosUrl: "https://photos.google.com/share/AF1QipNHbWZBbAG3YvLQwZ5C0xVdEZBxWUBQlNs7nJb8IuGU1IEV8bLiQPwHLJl8ZUyQjA?key=placeholder",
    category: "Implementation",
  },
];

const categories = ["All", "Conference", "Workshop", "Training", "Team Event", "Implementation"];

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
        <DialogContent className="max-w-5xl w-[95vw] h-[85vh] p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-4 border-b">
            <div className="flex items-start justify-between">
              <div>
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
              </div>
            </div>
          </DialogHeader>
          <div className="flex-1 h-[calc(85vh-120px)]">
            {selectedAlbum && (
              <GooglePhotosEmbed
                albumUrl={selectedAlbum.googlePhotosUrl}
                title={selectedAlbum.title}
                className="h-full rounded-none"
              />
            )}
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
