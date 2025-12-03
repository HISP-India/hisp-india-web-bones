import { Hero } from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Story {
  id: string;
  title: string;
  teaser: string;
  link?: string;
}

interface ThemeSection {
  theme: string;
  color: string;
  stories: Story[];
}

const storiesData: ThemeSection[] = [
  {
    theme: "Our Roots & Legacy",
    color: "bg-amber-500",
    stories: [
      {
        id: "vizhinjam",
        title: "A Meaningful Return: Vizhinjam Community Health Centre",
        teaser: "A nostalgic journey to Vizhinjam, the site of the world's first DHIS2 pilot in 2005. A reminder of where the global digital health movement began and how Kerala shaped the open-source foundation.",
      },
      {
        id: "calle-hedberg",
        title: "Remembering Calle Hedberg",
        teaser: "A heartfelt tribute by Prof. Sundeep Sahay to a mentor, innovator, and one of the early champions of the global HISP movement.",
      },
    ],
  },
  {
    theme: "Leadership & Thought Contributions",
    color: "bg-violet-500",
    stories: [
      {
        id: "rv-university",
        title: "Prof. Sundeep Sahay Joins RV University's Board of Studies",
        teaser: "Celebrating Prof. Sahay's role in shaping the next generation of public health professionals and strengthening academic engagement in health informatics.",
      },
      {
        id: "contemporary-challenges",
        title: "Contemporary Challenges & Opportunities in Public Health Informatics",
        teaser: "Insights from Prof. Sahay's distinguished talk at RV University—covering biosocial gaps, inequities, and the deep links between information and health outcomes.",
      },
      {
        id: "philosophy-digital-health",
        title: "Understanding the Philosophy Behind Digital Health – Q&A with Prof. Sahay",
        teaser: "A candid conversation exploring India's digital health trajectory, the shrinking open-source space, and why context and reciprocity matter.",
      },
    ],
  },
  {
    theme: "Country Implementations & Case Studies",
    color: "bg-teal-500",
    stories: [
      {
        id: "india-tibet",
        title: "India–Tibet Collaboration: Strengthening Health Informatics Across Borders",
        teaser: "A decade-long partnership supporting Tibetan health systems across India and Nepal using OpenMRS, DHIS2, and Android-based innovations.",
      },
      {
        id: "dmch-ludhiana",
        title: "Building a Patient-Centric IT System at DMCH Ludhiana",
        teaser: "How a community-oriented, open-source digital platform transformed data use, household registration, and patient care for 50,000 people.",
      },
      {
        id: "himachal-openmrs",
        title: "OpenMRS-Based Hospital Information System in Himachal Pradesh",
        teaser: "A 10-year journey of implementing a statewide hospital information system across 22 hospitals—rooted in local adaptation and sustained partnerships.",
      },
      {
        id: "nepal-hiv",
        title: "HIV Care & ART Tracking System – Nepal Case Study",
        teaser: "A national-level HIV tracking system blending biometrics, SMS, and DHIS2 Tracker—improving ART coverage, retention, and patient-centric care in Nepal.",
      },
      {
        id: "uphmis",
        title: "UPHMIS – Health Information System for Uttar Pradesh",
        teaser: "One of India's most complex digital health missions—integrating massive data volumes, Android apps, and real-time analytics across 75 districts.",
      },
    ],
  },
  {
    theme: "Research & Impact Stories",
    color: "bg-blue-500",
    stories: [
      {
        id: "antimicrobial-stewardship",
        title: "Reframing Antimicrobial Stewardship – North India Study",
        teaser: "A powerful biosocial study revealing why antibiotics are over-prescribed—not just clinical issues, but deep social, cultural, and systemic drivers.",
      },
      {
        id: "uhc-information-systems",
        title: "Institutionalising Information Systems for Universal Health Coverage",
        teaser: "An in-depth exploration of UHC-HIS implementation, unpacking tensions between institutional practices, care continuity, and digital system design.",
      },
    ],
  },
  {
    theme: "Conferences, Culture & Community",
    color: "bg-emerald-500",
    stories: [
      {
        id: "hdca-2024",
        title: "HISP India at HDCA Conference 2024",
        teaser: "Beyond technology—how HISP India blended culture, field insights, and community engagement at HDCA Kolkata through curated city walks and discussions.",
      },
    ],
  },
];

function StoryCard({ story, themeColor }: { story: Story; themeColor: string }) {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <Badge className={`${themeColor} text-white w-fit mb-2`}>Story</Badge>
        <CardTitle className="text-lg leading-tight">{story.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-muted-foreground text-sm flex-1">{story.teaser}</p>
        <Link
          to="#"
          className="inline-flex items-center gap-1 text-primary font-medium text-sm mt-4 hover:underline"
        >
          Read Story <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

export default function DigitalStories() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        variant="gradient"
        title="Digital Stories"
        subtitle="Real experiences, field insights, and transformative journeys from HISP India's work across India, Nepal, and beyond."
        description="At HISP India, every project is more than technology—it's a story of people, context, collaboration, and change. Explore our collection of digital stories capturing more than two decades of work in strengthening public health systems through open-source innovation, capacity building, and community partnerships."
      />

      {/* Stories by Theme */}
      {storiesData.map((section, index) => (
        <section
          key={section.theme}
          className={`py-16 ${index % 2 === 0 ? "bg-background" : "bg-muted"}`}
        >
          <div className="container">
            <div className="mb-8">
              <Badge className={`${section.color} text-white mb-3`}>
                {section.theme}
              </Badge>
              <h2 className="font-heading text-2xl md:text-3xl font-bold">
                {section.theme}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.stories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  themeColor={section.color}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
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
              className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-md font-medium hover:bg-background/90 transition-colors"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
