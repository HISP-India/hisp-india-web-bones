// Shared stories data used by Digital Stories page and homepage Latest Stories section.
import vizhinjamImage from "@/assets/vizhinjam-health-centre.jpg";
import calleHedbergImage from "@/assets/calle-hedberg.jpg";
import sundeepSahayPhilosophyThumbnail from "@/assets/sundeep-sahay-philosophy-thumbnail.jpg";
import rvBosThumbnail from "@/assets/rv-bos-thumbnail.jpg";
import rvTalkThumbnail from "@/assets/rv-talk-thumbnail.jpg";
import dmchLudhianaCover from "@/assets/dmch-ludhiana-cover.jpg";
import uphmisCover from "@/assets/uphims-cover.jpg";
import indiaTibetCover from "@/assets/india-tibet-cover.jpg";
import himachalOpenmrsCover from "@/assets/himachal-openmrs-cover.jpg";

export interface Story {
  id: string;
  title: string;
  teaser: string;
  image: string;
  link?: string;
}

export interface ThemeSection {
  theme: string;
  color: string;
  icon: string;
  stories: Story[];
}

export const storiesData: ThemeSection[] = [
  {
    theme: "Our Roots & Legacy",
    color: "bg-amber-500",
    icon: "🌳",
    stories: [
      {
        id: "vizhinjam",
        title: "Revisiting the birthplace of the world's first DHIS2 pilot",
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
        image: rvBosThumbnail,
      },
      {
        id: "contemporary-challenges",
        title: "Contemporary Challenges & Opportunities in Public Health Informatics",
        teaser: "Insights from Prof. Sahay's distinguished talk covering biosocial gaps, inequities, and the deep links between information and health.",
        image: rvTalkThumbnail,
      },
      {
        id: "philosophy-digital-health",
        title: "Understanding the Philosophy Behind Digital Health – Q&A with Prof. Sahay",
        teaser: "A candid conversation exploring India's digital health trajectory and why context and reciprocity matter.",
        image: sundeepSahayPhilosophyThumbnail,
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
        image: indiaTibetCover,
      },
      {
        id: "dmch-ludhiana",
        title: "Building a Patient-Centric IT System at DMCH Ludhiana",
        teaser: "How a community-oriented, open-source digital platform transformed data use and patient care for 50,000 people.",
        image: dmchLudhianaCover,
      },
      {
        id: "himachal-openmrs",
        title: "OpenMRS-Based Hospital Information System in Himachal Pradesh",
        teaser: "A 10-year journey of implementing a statewide hospital information system across 22 hospitals.",
        image: himachalOpenmrsCover,
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
        image: uphmisCover,
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

export interface StoryWithTheme extends Story {
  themeLabel: string;
  themeColor: string;
  themeIcon: string;
}

/**
 * Returns the latest N stories flattened across all themes.
 * Picks one story per theme in round-robin order so the homepage shows
 * a mix of topics rather than only the first theme's entries.
 */
export function getLatestStories(n: number = 6): StoryWithTheme[] {
  const result: StoryWithTheme[] = [];
  const maxPerTheme = Math.max(...storiesData.map((s) => s.stories.length));
  for (let i = 0; i < maxPerTheme && result.length < n; i++) {
    for (const section of storiesData) {
      const story = section.stories[i];
      if (!story) continue;
      result.push({
        ...story,
        themeLabel: section.theme,
        themeColor: section.color,
        themeIcon: section.icon,
      });
      if (result.length >= n) break;
    }
  }
  return result;
}
