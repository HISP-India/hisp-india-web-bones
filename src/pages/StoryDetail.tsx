import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Globe, Building, Award, User, Heart, Quote, BookOpen, Target, Link2, Scale, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import vizhinjamHeroImage from "@/assets/vizhinjam-health-centre.jpg";
import calleHedbergImage from "@/assets/calle-hedberg.jpg";

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
  heroIcon?: "location" | "person";
  openingQuote?: {
    text: string;
    author: string;
    title?: string;
  };
  sections: {
    title: string;
    icon?: string;
    content: string[];
    contributors?: string[];
  }[];
  stats?: {
    value: string;
    label: string;
  }[];
  legacyItems?: string[];
  closingNote: string;
  closingTribute?: {
    quote: string;
    author: string;
  };
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
    heroImage: vizhinjamHeroImage,
    heroImageCaption: "Vizhinjam Community Health Centre / Coastal Kerala",
    heroIcon: "location",
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
  },
  "calle-hedberg": {
    id: "calle-hedberg",
    title: "Remembering Calle Hedberg",
    subtitle: "A tribute to a visionary of the global HISP movement",
    theme: "Our Roots & Legacy",
    themeColor: "bg-amber-500",
    location: "HISP South Africa",
    year: "In Memoriam",
    heroImage: calleHedbergImage,
    heroImageCaption: "Calle Hedberg / HISP South Africa archive",
    heroIcon: "person",
    openingQuote: {
      text: "Calle was a friend, mentor, and a strong source of inspiration. We offer condolences on his sad passing away and celebrate the rich legacy he left behind, beyond just the DHIS.",
      author: "Prof. Sundeep Sahay",
      title: "Founder & President, HISP India"
    },
    sections: [
      {
        title: "A Pioneer of Public Health Informatics",
        content: [
          "Calle Hedberg was among the earliest champions of the global HISP movement. His contributions shaped both the technical foundations and the philosophical underpinnings of DHIS, the predecessor to DHIS2.",
          "For more than three decades, he worked tirelessly to advance public health informatics across the developing world.",
          "His deep commitment to equity, localisation, and open systems was felt in every initiative he touched."
        ],
        contributors: [
          "HISP South Africa",
          "University of Oslo's DHIS2 core team",
          "Country programs across Africa"
        ]
      },
      {
        title: "A Critical Voice Who Challenged Norms",
        content: [
          "Calle's sharp intellect and bold thinking stood out in every room he entered.",
          "One of his iconic gestures was depicting the world map inverted, placing South Africa at the top—symbolising his challenge to entrenched power structures and dominant worldviews.",
          "He believed technology should empower the marginalised, not reinforce hierarchies."
        ]
      },
      {
        title: "His Influence on HISP India",
        content: [
          "Calle's guidance played a significant role in shaping the HISP network's approach to community-centred systems, open-source advocacy, decentralised architectures, and pragmatic, context-sensitive implementations.",
          "His relationship with Prof. Sahay—and the broader HISP community—was built on mutual respect, shared purpose, and intellectual honesty."
        ]
      }
    ],
    legacyItems: [
      "Every DHIS2 implementation",
      "Every open-source system that respects local context",
      "Every community empowered through better information"
    ],
    closingNote: "HISP India joins colleagues worldwide in honouring his memory.",
    closingTribute: {
      quote: "A rare critical voice… he held no inhibitions in challenging established orders. Rest in peace dear Calle.",
      author: "Prof. Sahay"
    },
    relatedStories: [
      {
        id: "vizhinjam",
        title: "A Meaningful Return: Vizhinjam Community Health Centre",
        teaser: "Revisiting the birthplace of the world's first DHIS2 pilot in Kerala, India."
      }
    ]
  },
  "rv-university": {
    id: "rv-university",
    title: "Prof. Sundeep Sahay Joins Board of Studies at RV University",
    subtitle: "Bridging academia and practice in health informatics education",
    theme: "Leadership & Thought Contributions",
    themeColor: "bg-violet-500",
    location: "RV University, Bengaluru, India",
    year: "August 2024",
    heroImage: undefined,
    heroImageCaption: "Dr. Ranjini C R presenting the letter of honour to Prof. Sahay",
    heroIcon: "person",
    openingQuote: {
      text: "It is an honour to have Prof. Sundeep Sahay on our Board of Studies! We look forward to his guidance and mentorship.",
      author: "Dr. Ranjini C R",
      title: "Professor and Executive Director, Centre for Global Health and Development, SoEPP"
    },
    sections: [
      {
        title: "A Prestigious Recognition",
        content: [
          "Prof. Sundeep Sahay, Founder and President of HISP India, has been appointed as a Member of the Board of Studies at the School of Economics and Public Policy (SoEPP), RV University, Bengaluru.",
          "This prestigious role is a recognition of his extensive experience in health informatics and his unwavering commitment to nurturing the next generation of public health professionals.",
          "Nominated from the Centre for Health Informatics, University of Oslo, Norway, Prof. Sahay's involvement is expected to bridge the gap between theoretical knowledge and its practical application in public health systems."
        ]
      },
      {
        title: "25 Years of Transformative Leadership",
        content: [
          "For the past 25 years, Prof. Sahay has been instrumental in driving HISP India's mission—strengthening health systems using open-source digital solutions like DHIS2 and OpenMRS.",
          "His unique expertise in public health informatics, especially across low and medium-income countries, has helped build sustainable, inclusive, and community-centred digital health ecosystems.",
          "This academic partnership represents a natural extension of his philosophy: that public health without the proper application of health informatics won't give the best results to communities."
        ]
      },
      {
        title: "A New Course Inspires 38 Students",
        content: [
          "Following this collaboration, RV University introduced a new course on Health Informatics as part of strengthening its interdisciplinary and research-driven academic offerings.",
          "HISP India partnered with the School of Economics and Public Policy, with the curriculum developed in collaboration with the Department of Health Informatics, University of Oslo.",
          "The response exceeded all expectations—38 students enrolled in the course during the September 2024 semester, affirming the growing importance of health informatics in public health education."
        ],
        contributors: [
          "Prof. Sundeep Sahay, Founder & President, HISP India",
          "Dr. Ranjini C R, Professor and Executive Director, Centre for Global Health and Development, SoEPP",
          "Department of Health Informatics, University of Oslo"
        ]
      }
    ],
    stats: [
      { value: "38", label: "Students enrolled in first semester" },
      { value: "25+", label: "Years of HISP India leadership" },
      { value: "80+", label: "Countries using DHIS2 globally" }
    ],
    closingNote: "Such a positive response from the students underlines that they realise the importance of health informatics in public health and the role it is going to play in their careers. It comes with more responsibilities and paves the way for productive collaborations for the future.",
    closingTribute: {
      quote: "Such a positive response from the students underlines that they realise the importance of health informatics in public health and the role it is going to play in their careers.",
      author: "Dr. Ranjini C R"
    },
    relatedStories: [
      {
        id: "contemporary-challenges",
        title: "Contemporary Challenges & Opportunities in Public Health Informatics",
        teaser: "Insights from Prof. Sahay's distinguished talk on biosocial gaps, inequities, and health information systems."
      },
      {
        id: "vizhinjam",
        title: "A Meaningful Return: Vizhinjam Community Health Centre",
        teaser: "Revisiting the birthplace of the world's first DHIS2 pilot in Kerala, India."
      }
    ]
  },
  "contemporary-challenges": {
    id: "contemporary-challenges",
    title: "Reflecting on a Powerful Exchange: Prof. Sundeep Sahay's Distinguished Talk at RV University",
    subtitle: "Contemporary Challenges and Opportunities Around Public Health Informatics in Low and Medium-Income Countries",
    theme: "Leadership & Thought Contributions",
    themeColor: "bg-violet-500",
    location: "Senate Hall, RV University, Bengaluru, India",
    year: "August 2024",
    heroImage: undefined,
    heroImageCaption: "Prof. Sundeep Sahay addressing students and faculty at RV University",
    heroIcon: "person",
    openingQuote: {
      text: "What sets HISP India apart is the philosophy of reciprocity and mutuality—a commitment to shared learning rather than one-way knowledge transfer.",
      author: "Prof. Sundeep Sahay",
      title: "Founder & President, HISP India"
    },
    sections: [
      {
        title: "An Engaging Session on Public Health Informatics",
        icon: "BookOpen",
        content: [
          "Prof. Sundeep Sahay's session at RV University was more than a lecture—it was a thoughtful dialogue with students and faculty on what it truly means to harness information for public health.",
          "Hosted by the School of Economics and Public Policy (SoEPP) at the prestigious Senate Hall, the talk explored how health informatics can bridge the gap between data and real-world health outcomes.",
          "This session preceded the formal launch of the Health Informatics course that has since welcomed 38 students—a testament to the growing recognition of the field's importance."
        ]
      },
      {
        title: "Three Pivotal Challenges Shaping Public Health Informatics",
        icon: "Target",
        content: [
          "At the core of Prof. Sahay's presentation were three pivotal and interrelated challenges that public health informatics must address:",
          "First, the Biosocial Analysis Gap—health information systems traditionally focus on disease patterns and service delivery but often miss the social determinants that shape health outcomes. Bridging this gap is essential for meaningful intervention.",
          "Second, the challenge of Health Inequities—data often masks the structural inequalities in healthcare access and outcomes across regions, communities, and marginalised groups. Informatics must evolve to surface and address these disparities.",
          "Third, addressing the Wrong Problems—too often, public health initiatives focus on symptoms rather than root causes. Prof. Sahay emphasised the importance of asking the right questions before designing interventions."
        ]
      },
      {
        title: "Can Information Bridge the Divide?",
        icon: "Link2",
        content: [
          "Prof. Sahay explored a fundamental question: Can information systems bring together biomedical data and social context to create more equitable healthcare strategies?",
          "The answer lies in integrating diverse data sources—clinical records, community surveys, social indicators—to develop a holistic picture of population health.",
          "This approach enables policymakers and health workers to design interventions that address not just illness, but the conditions that create vulnerability in the first place."
        ]
      },
      {
        title: "Structural Violence and the Intersectional Approach",
        icon: "Scale",
        content: [
          "One of the most thought-provoking segments of the talk centred on the distinction between inequalities and inequities—and how health systems must move beyond surface-level metrics.",
          "Prof. Sahay discussed how structural violence—embedded in systems, policies, and social norms—perpetuates health disparities that data alone cannot capture.",
          "An intersectional approach, he argued, is essential: understanding how factors like gender, caste, geography, and economic status combine to shape health outcomes in complex ways."
        ]
      },
      {
        title: "A Philosophy Rooted in Reciprocity and Mutuality",
        icon: "Heart",
        content: [
          "What sets HISP India apart is the philosophy of reciprocity and mutuality—a commitment to shared learning rather than one-way knowledge transfer.",
          "Prof. Sahay reflected on 25 years of HISP India's journey, emphasising that sustainable health systems emerge from genuine partnerships with governments, communities, and local institutions.",
          "This collaborative ethos has been the foundation of HISP India's work across India, Sri Lanka, Ethiopia, and other countries—always learning as much as contributing."
        ],
        contributors: [
          "Prof. Sundeep Sahay, Founder & President, HISP India",
          "School of Economics and Public Policy, RV University",
          "Centre for Global Health and Development, SoEPP"
        ]
      }
    ],
    stats: [
      { value: "25+", label: "Years of HISP India leadership" },
      { value: "80+", label: "Countries using DHIS2 globally" },
      { value: "3", label: "Key challenges identified" }
    ],
    closingNote: "Such a positive response from the students underlines that they realise the importance of health informatics in public health and the role it is going to play in their careers. It comes with more responsibilities and paves the way for productive collaborations for the future.",
    closingTribute: {
      quote: "Such a positive response from the students underlines that they realise the importance of health informatics in public health and the role it is going to play in their careers.",
      author: "Dr. Ranjini C R"
    },
    relatedStories: [
      {
        id: "rv-university",
        title: "Prof. Sundeep Sahay Joins Board of Studies at RV University",
        teaser: "A prestigious recognition of 25 years of leadership in health informatics education."
      },
      {
        id: "vizhinjam",
        title: "A Meaningful Return: Vizhinjam Community Health Centre",
        teaser: "Revisiting the birthplace of the world's first DHIS2 pilot in Kerala, India."
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

  const HeroIcon = story.heroIcon === "person" ? User : MapPin;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end">
        {/* Hero Background */}
        <div className="absolute inset-0">
          {story.heroImage ? (
            <>
              <img 
                src={story.heroImage} 
                alt={story.heroImageCaption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground/30">
                <div className="w-24 h-24 border-4 border-dashed border-current rounded-full flex items-center justify-center mb-4">
                  <HeroIcon className="w-12 h-12" />
                </div>
                <p className="text-sm font-medium">{story.heroImageCaption}</p>
                <p className="text-xs mt-1">Image placeholder - upload coming soon</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
          )}
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

      {/* Opening Quote Section (for tribute stories) */}
      {story.openingQuote && (
        <section className="py-16 md:py-20 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6 rotate-180" />
              <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic mb-6">
                "{story.openingQuote.text}"
              </blockquote>
              <div className="text-muted-foreground">
                <p className="font-semibold text-foreground">— {story.openingQuote.author}</p>
                {story.openingQuote.title && (
                  <p className="text-sm">{story.openingQuote.title}</p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content Sections */}
      {story.sections.map((section, index) => {
        // Adjust background alternation based on whether there's an opening quote
        const adjustedIndex = story.openingQuote ? index + 1 : index;
        return (
          <section
            key={section.title}
            className={`py-16 md:py-20 ${adjustedIndex % 2 === 0 ? "bg-background" : "bg-muted"}`}
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
                      {story.openingQuote ? "He worked closely with:" : "This effort was led by:"}
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
        );
      })}

      {/* Impact Statistics (for non-tribute stories) */}
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

      {/* Legacy Section (for tribute stories) */}
      {story.legacyItems && (
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                A Legacy That Continues
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                {story.closingNote}
              </p>
              <p className="text-lg font-medium mb-6">His legacy lives on through:</p>
              <ul className="space-y-4 text-left max-w-md mx-auto">
                {story.legacyItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-amber-400 mt-1 shrink-0 fill-amber-400" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Closing Note (for non-tribute stories) */}
      {!story.legacyItems && (
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
      )}

      {/* Closing Tribute (for tribute stories) */}
      {story.closingTribute && (
        <section className="py-16 md:py-20 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic mb-4">
                "{story.closingTribute.quote}"
              </blockquote>
              <p className="text-muted-foreground font-medium">
                — {story.closingTribute.author}
              </p>
            </div>
          </div>
        </section>
      )}

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
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Share Your Story
          </Button>
        </Link>
      </CTASection>
    </main>
  );
}
