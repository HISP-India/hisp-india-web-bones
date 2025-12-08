import { Hero } from "@/components/Hero";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Import available images
import vizhinjamImage from "@/assets/vizhinjam-health-centre.jpg";
import calleHedbergImage from "@/assets/calle-hedberg.jpg";

interface Story {
  id: string;
  title: string;
  teaser: string;
  image: string;
  link?: string;
}

interface ThemeSection {
  theme: string;
  color: string;
  icon: string;
  stories: Story[];
}

const storiesData: ThemeSection[] = [
  {
    theme: "Our Roots & Legacy",
    color: "bg-amber-500",
    icon: "🌳",
    stories: [
      {
        id: "vizhinjam",
        title: "A Meaningful Return: Vizhinjam Community Health Centre",
        teaser: "A nostalgic journey to Vizhinjam, the site of the world's first DHIS2 pilot in 2005. A reminder of where the global digital health movement began.",
        image: vizhinjamImage,
      },
      {
        id: "calle-hedberg",
        title: "Remembering Calle Hedberg",
        teaser: "A heartfelt tribute by Prof. Sundeep Sahay to a mentor, innovator, and one of the early champions of the global HISP movement.",
        image: calleHedbergImage,
      },
    ],
  },
  {
    theme: "Leadership & Thought Contributions",
    color: "bg-violet-500",
    icon: "💡",
    stories: [
      {
        id: "rv-university",
        title: "Prof. Sundeep Sahay Joins RV University's Board of Studies",
        teaser: "Celebrating Prof. Sahay's role in shaping the next generation of public health professionals and strengthening academic engagement.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop",
      },
      {
        id: "contemporary-challenges",
        title: "Contemporary Challenges & Opportunities in Public Health Informatics",
        teaser: "Insights from Prof. Sahay's distinguished talk covering biosocial gaps, inequities, and the deep links between information and health.",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop",
      },
      {
        id: "philosophy-digital-health",
        title: "Understanding the Philosophy Behind Digital Health – Q&A with Prof. Sahay",
        teaser: "A candid conversation exploring India's digital health trajectory and why context and reciprocity matter.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    theme: "Country Implementations & Case Studies",
    color: "bg-teal-500",
    icon: "🌍",
    stories: [
      {
        id: "india-tibet",
        title: "India–Tibet Collaboration: Strengthening Health Informatics Across Borders",
        teaser: "A decade-long partnership supporting Tibetan health systems across India and Nepal using OpenMRS, DHIS2, and Android-based innovations.",
        image: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=800&auto=format&fit=crop",
      },
      {
        id: "dmch-ludhiana",
        title: "Building a Patient-Centric IT System at DMCH Ludhiana",
        teaser: "How a community-oriented, open-source digital platform transformed data use and patient care for 50,000 people.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop",
      },
      {
        id: "himachal-openmrs",
        title: "OpenMRS-Based Hospital Information System in Himachal Pradesh",
        teaser: "A 10-year journey of implementing a statewide hospital information system across 22 hospitals.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
      },
      {
        id: "nepal-hiv",
        title: "HIV Care & ART Tracking System – Nepal Case Study",
        teaser: "A national-level HIV tracking system blending biometrics, SMS, and DHIS2 Tracker—improving ART coverage in Nepal.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
      },
      {
        id: "uphmis",
        title: "UPHMIS – Health Information System for Uttar Pradesh",
        teaser: "One of India's most complex digital health missions—integrating massive data volumes across 75 districts.",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    theme: "Research & Impact Stories",
    color: "bg-blue-500",
    icon: "📊",
    stories: [
      {
        id: "antimicrobial-stewardship",
        title: "Reframing Antimicrobial Stewardship – North India Study",
        teaser: "A powerful biosocial study revealing why antibiotics are over-prescribed—social, cultural, and systemic drivers.",
        image: "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?w=800&auto=format&fit=crop",
      },
      {
        id: "uhc-information-systems",
        title: "Institutionalising Information Systems for Universal Health Coverage",
        teaser: "An in-depth exploration of UHC-HIS implementation, unpacking tensions between institutional practices and digital design.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    theme: "Conferences, Culture & Community",
    color: "bg-emerald-500",
    icon: "🤝",
    stories: [
      {
        id: "hdca-2024",
        title: "HISP India at HDCA Conference 2024",
        teaser: "Beyond technology—how HISP India blended culture, field insights, and community engagement at HDCA Kolkata.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
      },
    ],
  },
];

function StoryCard({ 
  story, 
  themeColor, 
  themeLabel,
  index 
}: { 
  story: Story; 
  themeColor: string;
  themeLabel: string;
  index: number;
}) {
  return (
    <Link
      to={`/research/digital-stories/${story.id}`}
      className={cn(
        "group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer block",
        "animate-fade-in"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Cover Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={story.image} 
          alt={story.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
        
        {/* Theme Badge on image */}
        <Badge className={cn(themeColor, "absolute top-4 left-4 text-white shadow-lg")}>
          {themeLabel}
        </Badge>
        
        {/* Hover Overlay with Read Story Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="bg-background/95 backdrop-blur-sm text-foreground px-6 py-3 rounded-full font-medium shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            Read Story <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 relative">
        <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {story.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {story.teaser}
        </p>
      </div>
    </Link>
  );
}

export default function DigitalStories() {
  const totalStories = storiesData.reduce((acc, section) => acc + section.stories.length, 0);
  const totalThemes = storiesData.length;

  return (
    <main>
      {/* Hero Section */}
      <Hero
        variant="gradient"
        title="Digital Stories"
        subtitle="Real experiences, field insights, and transformative journeys from HISP India's work across India, Nepal, and beyond."
        description="At HISP India, every project is more than technology—it's a story of people, context, collaboration, and change. Explore our collection of digital stories capturing more than two decades of work in strengthening public health systems."
        className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground"
      />

      {/* Stats Section */}
      <section className="py-12 bg-muted border-b border-border">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="font-heading text-3xl md:text-4xl font-bold text-foreground">{totalStories}+</span>
              </div>
              <p className="text-muted-foreground text-sm">Stories Shared</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-heading text-3xl md:text-4xl font-bold text-foreground">{totalThemes}</span>
              </div>
              <p className="text-muted-foreground text-sm">Thematic Areas</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="font-heading text-3xl md:text-4xl font-bold text-foreground">20+</span>
              </div>
              <p className="text-muted-foreground text-sm">Years of Impact</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="font-heading text-3xl md:text-4xl font-bold text-foreground">10+</span>
              </div>
              <p className="text-muted-foreground text-sm">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories by Theme */}
      {storiesData.map((section, sectionIndex) => (
        <section
          key={section.theme}
          className={cn(
            "py-20 relative overflow-hidden",
            sectionIndex % 2 === 0 ? "bg-background" : "bg-muted"
          )}
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl opacity-5 pointer-events-none" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl opacity-5 pointer-events-none" />
          
          <div className="container relative">
            {/* Section Header */}
            <div className="mb-12 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
                <span className="text-lg">{section.icon}</span>
                <span className="text-sm font-medium">{section.theme}</span>
              </div>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
                {section.theme}
              </h2>
            </div>
            
            {/* Stories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.stories.map((story, storyIndex) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  themeColor={section.color}
                  themeLabel="Story"
                  index={storyIndex}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground/20 rounded-full" />
          <div className="absolute bottom-10 right-20 w-48 h-48 border border-primary-foreground/10 rounded-full" />
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-primary-foreground/5 rounded-full blur-2xl" />
        </div>
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Have a Story to Share?
            </h2>
            <p className="text-lg opacity-90">
              We believe every implementation journey has lessons worth sharing.
              If you've been part of a HISP India project and would like to
              contribute your story, we'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-full font-medium hover:bg-background/90 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
