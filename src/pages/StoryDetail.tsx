import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Globe, Building, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";

interface StoryData {
  id: string;
  title: string;
  subtitle: string;
  theme: string;
  themeColor: string;
  location: string;
  year: string;
  heroImage?: string;
  heroImageCaption: string;
  sections: {
    title: string;
    content: string[];
    contributors?: string[];
  }[];
  stats?: {
    value: string;
    label: string;
  }[];
  closingNote: string;
  relatedStories?: {
    id: string;
    title: string;
    teaser: string;
  }[];
}

const storiesDatabase: Record<string, StoryData> = {
  vizhinjam: {
    id: "vizhinjam",
    title: "A Meaningful Return: HISP India Visits Vizhinjam Community Health Centre",
    subtitle: "Revisiting the birthplace of the world's first DHIS2 pilot",
    theme: "Our Roots & Legacy",
    themeColor: "bg-amber-500",
    location: "Vizhinjam, Kerala, India",
    year: "2005 - Present",
    heroImageCaption: "Vizhinjam Community Health Centre / Coastal Kerala",
    sections: [
      {
        title: "Introduction",
        content: [
          "Vizhinjam, a historically significant coastal town in Thiruvananthapuram, Kerala, is widely recognised today for its international deep-water port—India's first transshipment terminal.",
          "But for the global Free and Open Source Software (#FOSS) community—and especially the #DHIS2 family—Vizhinjam carries a different legacy.",
          "It is here that the first-ever global pilot of DHIS2 was conducted in 2005, marking a milestone in public health informatics."
        ]
      },
      {
        title: "The Beginning of a Global Movement",
        content: [
          "In 2005, the Vizhinjam Primary Health Centre became the first site worldwide to pilot DHIS2—the open-source health information platform now used in over 80 countries.",
          "The pilot began with the development of the DHIS2 prototype in Kovalam, a coastal town near Vizhinjam. What started as a small initiative quickly expanded across Kerala through an MoU with the State Government.",
          "Kerala's long-standing commitment to open-source principles—reinforced by strong support from open-source advocate Richard Stallman—provided the ideal environment for this pioneering work."
        ],
        contributors: [
          "Prof. Sundeep Sahay, Founder & President of HISP India",
          "Colleagues from the University of Oslo",
          "The Government of Kerala",
          "Sri Chitra Tirunal Institute of Medical Science and Technology"
        ]
      },
      {
        title: "A Centre That Grew With Time",
        content: [
          "The primary health centre that piloted DHIS2 has since evolved into a Community Health Centre, with strengthened infrastructure and expanded services.",
          "In 2025, the HISP India team made an unexpected yet nostalgic visit to the facility—reconnecting with the roots of a journey that went on to impact billions globally."
        ]
      }
    ],
    stats: [
      { value: "80+", label: "Countries using DHIS2" },
      { value: "3.2B", label: "People supported globally" },
      { value: "40%", label: "of world's population" }
    ],
    closingNote: "For HISP India, Vizhinjam is not just a location—it is a landmark of collaboration, innovation, and a philosophy that continues to shape digital public health systems worldwide.",
    relatedStories: [
      {
        id: "calle-hedberg",
        title: "Remembering Calle Hedberg",
        teaser: "A heartfelt tribute to a mentor, innovator, and early champion of the global HISP movement."
      }
    ]
  }
};

export default function StoryDetail() {
  const { id } = useParams<{ id: string }>();
  const story = id ? storiesDatabase[id] : null;

  if (!story) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Story Not Found</h1>
          <p className="text-muted-foreground">The story you're looking for doesn't exist.</p>
          <Link to="/research/digital-stories">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Digital Stories
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section with Image Placeholder */}
      <section className="relative min-h-[60vh] flex items-end">
        {/* Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground/30">
            <div className="w-24 h-24 border-4 border-dashed border-current rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-12 h-12" />
            </div>
            <p className="text-sm font-medium">{story.heroImageCaption}</p>
            <p className="text-xs mt-1">Image placeholder - upload coming soon</p>
          </div>
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative container pb-12 pt-32 text-white z-10">
          <Link
            to="/research/digital-stories"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Digital Stories
          </Link>
          
          <Badge className={`${story.themeColor} text-white mb-4`}>
            {story.theme}
          </Badge>
          
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight mb-4">
            {story.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            {story.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-white/80">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {story.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {story.year}
            </span>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {story.sections.map((section, index) => (
        <section
          key={section.title}
          className={`py-16 md:py-20 ${index % 2 === 0 ? "bg-background" : "bg-muted"}`}
        >
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-foreground">
                {section.title}
              </h2>
              
              <div className="space-y-5">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-lg leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Contributors */}
              {section.contributors && (
                <div className="mt-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    This effort was led by:
                  </h3>
                  <ul className="space-y-2">
                    {section.contributors.map((contributor, cIndex) => (
                      <li key={cIndex} className="text-muted-foreground flex items-start gap-2">
                        <Award className="h-4 w-4 text-primary mt-1 shrink-0" />
                        {contributor}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Impact Statistics */}
      {story.stats && (
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                A Legacy That Lives On
              </h2>
              <p className="text-primary-foreground/80">Today, the impact speaks for itself:</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {story.stats.map((stat, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      <Globe className="h-8 w-8 text-primary-foreground/70" />
                    </div>
                    <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-primary-foreground/80 text-sm">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing Note */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Building className="h-12 w-12 text-primary mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic">
              "{story.closingNote}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Related Stories */}
      {story.relatedStories && story.relatedStories.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8 text-center">
              Related Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {story.relatedStories.map((related) => (
                <Card key={related.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <Badge className={`${story.themeColor} text-white mb-3`}>
                      {story.theme}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-2">{related.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{related.teaser}</p>
                    <Link
                      to={`/research/digital-stories/${related.id}`}
                      className="text-primary font-medium text-sm hover:underline"
                    >
                      Read Story →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        title="Explore More Stories"
        description="Discover more transformative journeys from HISP India's work across India, Nepal, and beyond."
        variant="primary"
      >
        <Link to="/research/digital-stories">
          <Button size="lg" variant="secondary">
            View All Digital Stories
          </Button>
        </Link>
        <Link to="/contact">
          <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Share Your Story
          </Button>
        </Link>
      </CTASection>
    </main>
  );
}