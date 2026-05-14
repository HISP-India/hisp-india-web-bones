import { Hero } from "@/components/Hero";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { storiesData, type Story } from "@/data/stories";

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
      {/* Combined Intro & Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Real experiences, field insights, and transformative journeys from HISP India's work across India, Nepal, and beyond. Every project is more than technology—it's a story of people, context, collaboration, and change.
            </p>
          </div>
          
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
