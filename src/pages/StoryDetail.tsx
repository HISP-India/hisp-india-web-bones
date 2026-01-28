import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Globe, Building, Award, User, Heart, Quote, BookOpen, Target, Link2, Scale, Lightbulb, Brain, Lock, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import vizhinjamHeroImage from "@/assets/vizhinjam-health-centre.jpg";
import calleHedbergImage from "@/assets/calle-hedberg.jpg";
import sundeepSahayPhilosophyHero from "@/assets/sundeep-sahay-philosophy-hero.jpg";
import rvTalkHero from "@/assets/rv-talk-hero.jpg";
import rvBosHero from "@/assets/rv-bos-hero.jpg";
import dmchLudhianaCover from "@/assets/dmch-ludhiana-cover.jpg";
import uphmisCover from "@/assets/uphims-cover.jpg";
import indiaTibetCover from "@/assets/india-tibet-cover.jpg";
import himachalOpenmrsCover from "@/assets/himachal-openmrs-cover.jpg";

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
  closingIcon?: "globe" | "heart" | "graduation-cap" | "lightbulb" | "brain" | "award";
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
    title: "Revisiting the birthplace of the world's first DHIS2 pilot",
    subtitle: "A Meaningful Return: HISP India Visits Vizhinjam Community Health Centre",
    theme: "Our Roots & Legacy",
    themeColor: "bg-amber-500",
    location: "Vizhinjam, Kerala, India",
    year: "2005 - Present",
    heroImage: vizhinjamHeroImage,
    heroImageCaption: "Vizhinjam Community Health Centre / Coastal Kerala",
    heroIcon: "location",
    closingIcon: "globe",
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
    closingIcon: "heart",
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
        title: "Revisiting the birthplace of the world's first DHIS2 pilot",
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
    heroImage: rvBosHero,
    heroImageCaption: "Dr. Ranjini C R presenting the letter of honour to Prof. Sahay",
    heroIcon: "person",
    closingIcon: "graduation-cap",
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
        ]
      }
    ],
    stats: [
      { value: "38", label: "Students enrolled in first semester" },
      { value: "25+", label: "Years of HISP India leadership" },
      { value: "80+", label: "Countries using DHIS2 globally" }
    ],
    closingNote: "Such a positive response from the students underlines that they realise the importance of health informatics in public health and the role it is going to play in their careers. It comes with more responsibilities and paves the way for productive collaborations for the future.",
    relatedStories: [
      {
        id: "contemporary-challenges",
        title: "Contemporary Challenges & Opportunities in Public Health Informatics",
        teaser: "Insights from Prof. Sahay's distinguished talk on biosocial gaps, inequities, and health information systems."
      },
      {
        id: "vizhinjam",
        title: "Revisiting the birthplace of the world's first DHIS2 pilot",
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
    heroImage: rvTalkHero,
    heroImageCaption: "Prof. Sundeep Sahay addressing students and faculty at RV University",
    heroIcon: "person",
    closingIcon: "lightbulb",
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
    relatedStories: [
      {
        id: "rv-university",
        title: "Prof. Sundeep Sahay Joins Board of Studies at RV University",
        teaser: "A prestigious recognition of 25 years of leadership in health informatics education."
      },
      {
        id: "vizhinjam",
        title: "Revisiting the birthplace of the world's first DHIS2 pilot",
        teaser: "Revisiting the birthplace of the world's first DHIS2 pilot in Kerala, India."
      }
    ]
  },
  "philosophy-digital-health": {
    id: "philosophy-digital-health",
    title: "Understanding the Philosophy Behind Digital Health",
    subtitle: "A Candid Conversation with Prof. Sundeep Sahay",
    theme: "Leadership & Thought Contributions",
    themeColor: "bg-violet-500",
    location: "HISP India",
    year: "July 2024",
    heroImage: sundeepSahayPhilosophyHero,
    heroImageCaption: "Prof. Sundeep Sahay reflecting on 30+ years in public health informatics",
    heroIcon: "person",
    closingIcon: "brain",
    openingQuote: {
      text: "Making a difference comes down to understanding the context. For me, that understanding is rooted, at least partially, in India.",
      author: "Prof. Sundeep Sahay",
      title: "Founder & President, HISP India"
    },
    sections: [
      {
        title: "Why India? A Personal Calling",
        icon: "Heart",
        content: [
          "For Prof. Sahay, choosing to dedicate his career to India was less about strategy and more about identity. 'For me, there was never really a question of why India,' he reflects. 'I am Indian—it would feel strange if I didn't contribute to my own country.'",
          "This deep-rooted sense of belonging is paired with a unique global perspective. 'Having lived and worked in the UK and now Norway, I bring a certain understanding of the Western context. But I've always believed that if you want to make a difference, you need to know the context—and I understand India.'",
          "This philosophy—grounded in lived experience rather than abstract expertise—has shaped every initiative HISP India has undertaken."
        ]
      },
      {
        title: "The Shrinking Space for Open Source",
        icon: "Lock",
        content: [
          "Over the past few years, the landscape of digital health has shifted dramatically. Prof. Sahay has observed a growing preference for proprietary platforms over open-source solutions—even in regions that once championed openness.",
          "'The space for open source is shrinking,' he notes. 'Many governments, including in Africa, are now opting for closed, vendor-driven systems. It's becoming increasingly difficult to find fertile ground for open-source implementations.'",
          "This shift is what made focusing on India even more compelling. 'The ABDM ecosystem in India is uniquely receptive,' Prof. Sahay explains. 'It's one of the few environments today where there's still openness to integrating systems, experimenting with interoperability, and building on open standards.'"
        ]
      },
      {
        title: "A Focused Commitment to India",
        icon: "Target",
        content: [
          "In 2017, a defining moment came when Prof. Sahay made a deliberate choice to stop all HISP India's work in Africa and redirect the team's energy entirely toward India.",
          "'It was a conscious decision,' he recalls. 'We had spread ourselves too thin. I wanted to focus on where we could have sustained impact—and that meant concentrating on India.'",
          "This decision also reflected a commitment to building local research capacity. 'As a researcher, I wanted to engage deeply with Indian PhD students, Indian institutions, and Indian problems. The more localized our engagement, the more meaningful our outcomes.'"
        ]
      },
      {
        title: "Beyond Software: A Philosophical Challenge",
        icon: "Brain",
        content: [
          "Prof. Sahay is candid about where mainstream digital health discourse often goes wrong. 'There's too much focus on software—whether it's DHIS2 or any other tool—and not enough on the real issues.'",
          "The 'real issues', he argues, are systemic. 'Architecturally, the dominant paradigm is centralization: all data flows upward, all logic is defined at the top. But this creates two problems. First, it renders grassroots workers invisible—they become data entry operators rather than informed actors. Second, it assumes a one-size-fits-all approach, ignoring local variation.'",
          "His concern extends to the practical burden placed on frontline workers. 'We've seen ANMs (Auxiliary Nurse Midwives) spending 60–70% of their time just collecting and entering data. That's not sustainable—and it's certainly not empowering.'"
        ]
      },
      {
        title: "Learning from Global Success Stories",
        icon: "Globe",
        content: [
          "Reflecting on decades of global work, Prof. Sahay highlights examples where open-source, community-led approaches have led to real transformation.",
          "'In Ghana, we worked closely with the Ministry of Health for nearly 15 years. The result was a generation of local experts who now lead the country's health informatics initiatives. In Sri Lanka, a single PhD student we mentored became the architect of the national DHIS2 rollout. In Mozambique, our partnership created lasting institutional capacity.'",
          "These successes share a common thread: reciprocity and mutual learning. 'It's never about us coming in with all the answers. It's about building together—learning from each other, respecting local knowledge, and staying engaged over the long term.'",
          "The challenge in India, he admits, is different. 'We haven't yet created that same depth of local capacity—partly because the scale is so large, and partly because the engagement models are different. But that's exactly why we're now so focused here.'"
        ],
        contributors: [
          "HISP Ghana",
          "Ministry of Health, Sri Lanka",
          "University of Oslo"
        ]
      }
    ],
    stats: [
      { value: "30+", label: "Years in health informatics" },
      { value: "70%", label: "Time ANMs spend on data collection" },
      { value: "4+", label: "Countries with capacity building success" }
    ],
    closingNote: "Effective changes in work practices should alleviate the burden on community health workers and allow them to focus more on care provision—not just data entry.",
    closingTribute: {
      quote: "If you want to make a difference, you need to know the context. I understand India—and that's where I can contribute.",
      author: "Prof. Sundeep Sahay"
    },
    relatedStories: [
      {
        id: "contemporary-challenges",
        title: "Contemporary Challenges & Opportunities in Public Health Informatics",
        teaser: "Insights from Prof. Sahay's distinguished talk on biosocial gaps, inequities, and health information systems."
      },
      {
        id: "rv-university",
        title: "Prof. Sundeep Sahay Joins Board of Studies at RV University",
        teaser: "A prestigious recognition of 25 years of leadership in health informatics education."
      }
    ]
  },
  "india-tibet": {
    id: "india-tibet",
    title: "India-Tibet Collaboration in Public Health and Health Informatics",
    subtitle: "Practical Solutions Beyond Political Context",
    theme: "Country Implementations & Case Studies",
    themeColor: "bg-teal-500",
    location: "India & Nepal",
    year: "2017 - Present",
    heroImage: indiaTibetCover,
    heroImageCaption: "TVHA Health Informatics System / Tibetan Healthcare Network",
    heroIcon: "location",
    closingIcon: "globe",
    sections: [
      {
        title: "A Unique Collaboration Beyond Politics",
        content: [
          "At a time when diplomatic relations between India and Tibet remain undefined, the two nations have quietly built something remarkable: a shared healthcare infrastructure that transcends political boundaries.",
          "This collaboration in public health and health informatics stands as a testament to what's possible when human welfare takes precedence over geopolitical constraints.",
          "While India does not officially recognize Tibet as a nation—maintaining diplomatic ties with China instead—it has consistently provided refuge, resources, and support to the Tibetan community for decades."
        ]
      },
      {
        title: "The Beginning: A Paper-Based System in Need of Transformation",
        content: [
          "The journey began in 2015 when Prof. Sundeep Sahay from the University of Oslo conducted an evaluation of the health information system used by the Tibetan Voluntary Health Association (TVHA) in Dharamshala.",
          "What he found was a system struggling under the weight of manual processes—paper-based records, fragmented data, and limited analytical capacity.",
          "The evaluation revealed significant challenges: data quality issues, delayed reporting, difficulty tracking mobile populations, and an inability to generate actionable insights for health planning.",
          "This assessment laid the groundwork for a comprehensive digital transformation that would take shape two years later."
        ],
        contributors: [
          "Prof. Sundeep Sahay, University of Oslo",
          "Tibetan Voluntary Health Association (TVHA)"
        ]
      },
      {
        title: "DHIS2 and OpenMRS: Building the Digital Foundation",
        content: [
          "In 2017, a formal partnership was established with funding support from USAID to implement modern health information systems across Tibetan healthcare facilities.",
          "The project introduced two complementary open-source platforms: DHIS2 for aggregate health data management and reporting, and OpenMRS for individual patient records at hospitals.",
          "DHIS2 was deployed across 45 health facilities—spanning both the settlements in India and the exile community in Nepal—creating a unified system for health surveillance and program monitoring.",
          "OpenMRS was implemented in 7 major hospitals, enabling comprehensive electronic medical records, appointment scheduling, and clinical decision support."
        ]
      },
      {
        title: "Customisation is the Beauty: Context-Sensitive Design",
        content: [
          "One of the project's defining strengths was its commitment to customisation. Rather than imposing a generic system, the team worked closely with Tibetan health workers to design interfaces and workflows that matched their specific needs.",
          "Three integrated platforms emerged: DHIS2 for population health data, OpenMRS for hospital information systems, and a dedicated COVID-19 management module developed during the pandemic.",
          "The COVID-19 response showcased the system's flexibility. Within weeks, new data collection forms, dashboards, and reporting mechanisms were deployed to track cases across the scattered Tibetan settlements.",
          "Regional comparisons became possible for the first time, allowing health administrators to identify disparities, allocate resources effectively, and benchmark performance across facilities."
        ]
      },
      {
        title: "The Technology Trail: Global Tools, Local Impact",
        content: [
          "The platforms chosen for this implementation carry a remarkable global legacy. DHIS2 is now used in over 80 countries, supporting health systems that serve 3.2 billion people—approximately 40% of the world's population.",
          "OpenMRS powers electronic medical records in low-resource settings worldwide, with implementations across Africa, Asia, and Latin America.",
          "By adopting these proven, open-source tools, the Tibetan health system gained access to continuous improvements, a global community of developers, and interoperability with international health standards.",
          "The choice of open-source was deliberate: it ensured sustainability, avoided vendor lock-in, and aligned with the collaborative ethos that defines this partnership."
        ]
      },
      {
        title: "Designing for a Mobile Population",
        content: [
          "Perhaps the most innovative aspect of the project was its approach to serving a highly mobile population. Tibetan refugees move frequently between settlements, travel for pilgrimages, and often seek healthcare far from their registered locations.",
          "The system was designed with this mobility in mind. Patient records in OpenMRS are accessible across all connected hospitals, ensuring continuity of care regardless of where someone seeks treatment.",
          "DHIS2's hierarchical structure was configured to aggregate data meaningfully despite population movement, allowing accurate health indicators even for scattered communities.",
          "Participatory design workshops with community health workers ensured that the final system reflected real-world workflows rather than theoretical ideals."
        ],
        contributors: [
          "Central Tibetan Administration (CTA)",
          "Community health workers across settlements",
          "HISP India technical team"
        ]
      },
      {
        title: "Offline Solutions for Remote Areas",
        content: [
          "Connectivity remains a challenge in many Tibetan settlements, particularly those in remote Himalayan regions. The project addressed this through innovative offline solutions.",
          "An Android-based mobile application was developed to allow data collection and patient registration even without internet connectivity. Data synchronizes automatically when connectivity is restored.",
          "This offline-first approach ensures that healthcare workers in the most remote areas can still maintain complete records and contribute to the unified health information system.",
          "The solution has proven particularly valuable during harsh winters when internet infrastructure often fails in mountainous areas."
        ]
      }
    ],
    stats: [
      { value: "45", label: "Facilities using DHIS2" },
      { value: "7", label: "Hospitals on OpenMRS" },
      { value: "3", label: "Integrated platforms" },
      { value: "2017", label: "Year of implementation" }
    ],
    closingNote: "This collaboration has become a global example of how governments can support communities seeking asylum and collaborate for their long-term health benefits. HISP India has become a trusted, long-term technical partner to the Tibetan government—demonstrating that practical solutions can flourish even in the most complex political contexts.",
    relatedStories: [
      {
        id: "vizhinjam",
        title: "Revisiting the birthplace of the world's first DHIS2 pilot",
        teaser: "How a small health centre in Kerala became the starting point for a global health information revolution."
      },
      {
        id: "philosophy-digital-health",
        title: "Understanding the Philosophy Behind Digital Health",
        teaser: "A candid conversation with Prof. Sundeep Sahay on context, commitment, and community-centred systems."
      }
    ]
  },
  "dmch-ludhiana": {
    id: "dmch-ludhiana",
    title: "Building a Patient-Centric IT System at DMCH Ludhiana",
    subtitle: "How a community-oriented, open-source digital platform transformed data use and patient care for 50,000 people",
    theme: "Country Implementations & Case Studies",
    themeColor: "bg-teal-500",
    location: "Ludhiana, Punjab, India",
    year: "2019 - Present",
    heroImage: dmchLudhianaCover,
    heroImageCaption: "DMCH Community Health Workers / Digital Health Implementation",
    heroIcon: "location",
    closingIcon: "globe",
    sections: [
      {
        title: "Introduction: A Commitment to Community-Centred Care",
        content: [
          "HISP India's engagement with Dayanand Medical College & Hospital (DMCH), Ludhiana, represents a model of how digital health systems can be designed with the community at the centre.",
          "This case study captures the journey of implementing DHIS2—an open-source platform—to transform the way primary healthcare data is collected, used, and shared across DMCH's 21 health centres.",
          "At the core of this initiative lies a philosophy that underpins all HISP India projects: that public health systems should be built on free and open-source software (FOSS), promoting accessibility, customisation, and local ownership.",
          "The result is a patient-centric IT ecosystem that now supports over 50,000 registered individuals and continues to grow."
        ]
      },
      {
        title: "Context and Project Inception",
        content: [
          "The National Medical Commission (NMC) mandates that medical colleges adopt a minimum of 50,000 population for their field practice area, and that data management be robust enough to support clinical learning, public health research, and community service.",
          "DMCH's Department of Community Medicine recognised early on that meeting this mandate required more than traditional paper-based methods. They needed a comprehensive, scalable, and interoperable health information system.",
          "In 2019, HISP India and DMCH entered a Memorandum of Understanding (MoU) to implement DHIS2 across DMCH's field practice areas. The initiative was guided by lessons learned from an earlier pilot at PGI Chandigarh's School of Public Health.",
          "That pilot had demonstrated the potential of community-level data capture but also revealed the need for tighter integration, better training protocols, and more intuitive user interfaces."
        ],
        contributors: [
          "DMCH Department of Community Medicine",
          "PGI School of Public Health, Chandigarh",
          "HISP India technical team"
        ]
      },
      {
        title: "Community-Based and Online Solutions",
        content: [
          "The project began with the customisation of DHIS2 version 2.32, tailored to DMCH's specific needs. Five core modules were developed: household registration, individual registration, programme enrolments, visit tracking, and referrals.",
          "However, the rollout faced an unexpected challenge: the COVID-19 pandemic. With lockdowns and restrictions, field activities were suspended, and the initial training programme had to be reimagined.",
          "Rather than halting progress, the team pivoted to virtual training. Online sessions were conducted with Community Health Workers (CHWs) and field supervisors, ensuring readiness for when in-person activities could resume.",
          "This adaptability became a hallmark of the project—responding to real-world constraints while staying true to the end goal of digitised, patient-centric care."
        ]
      },
      {
        title: "Key Objectives of the Implementation",
        content: [
          "The project was designed around five key objectives that continue to guide its evolution:",
          "First, establishing a baseline through comprehensive household and individual registration across the field practice area. Second, providing continuous technical support to ensure seamless adoption of the digital platform.",
          "Third, enabling advanced analytics and visualisation so that health data could inform decisions, not just reports. Fourth, customising the platform to match DMCH's workflows, terminology, and service delivery model.",
          "Fifth, creating dynamic dashboards that allow supervisors, medical officers, and policymakers to monitor health outcomes in near real-time."
        ]
      },
      {
        title: "Android Application Rollout",
        content: [
          "In May 2023, the project entered a new phase with the introduction of Android tablets for field-level data collection. Twelve Community Health Workers received devices preloaded with the DHIS2 Android app.",
          "This marked a decisive shift away from paper-based registers. Data could now be captured at the household level, synced in real time, and immediately available for analysis.",
          "The app was designed with simplicity in mind—large buttons, local language support, and offline capability for areas with poor connectivity.",
          "Training was hands-on and iterative. Workers practiced in real field conditions, and feedback was incorporated into subsequent updates to the app's interface and workflow."
        ]
      },
      {
        title: "Key Outcomes and System Features",
        content: [
          "By the end of 2023, the system had registered 11,528 households and 51,887 individuals across 21 health centres. Programme enrolments—for immunisation, antenatal care, chronic disease management, and more—were being tracked digitally.",
          "One significant innovation was the automated calculation of Socio-Economic Status (SES) based on household data. This replaced manual classification, reduced errors, and ensured that vulnerable populations were identified accurately.",
          "The platform also supported disease-specific interventions. Fever surveillance, tuberculosis case tracking, and maternal health indicators were all built into the system, enabling targeted public health responses.",
          "Dashboards provided an at-a-glance view of coverage, gaps, and trends—empowering local health teams to take data-driven action."
        ]
      },
      {
        title: "A Thoughtful, Incremental Implementation",
        content: [
          "What distinguished this project was its incremental, participatory approach. The team began with a detailed situation assessment, mapping existing workflows and identifying pain points.",
          "Each phase built on the last. Household registration came first, followed by individual registration, then programme modules. This ensured that users were not overwhelmed and that each layer of the system was stable before adding complexity.",
          "User feedback was central. Health workers were not just trained—they were consulted. Their insights shaped everything from form design to report formats.",
          "The result was a system that felt like their own, rather than an external imposition—a key factor in sustained adoption and data quality."
        ]
      },
      {
        title: "Conclusion: A Model for Patient-Centric Digital Health",
        content: [
          "The DMCH-Ludhiana implementation is more than a technical success. It is a demonstration of how public health systems can be transformed when technology is designed around people.",
          "By choosing open-source, DMCH ensured long-term sustainability and avoided vendor lock-in. By engaging community health workers as partners, the project secured buy-in and real-world relevance.",
          "As DMCH continues to expand and refine its digital infrastructure, this case stands as a model for medical colleges and public health institutions across India.",
          "This story is a testament to what can be achieved when institutions commit to building resilient, people-centred public health systems."
        ]
      }
    ],
    stats: [
      { value: "11,528", label: "Households registered" },
      { value: "51,887", label: "Individuals registered" },
      { value: "21", label: "Health centres connected" },
      { value: "12", label: "Health workers with tablets" }
    ],
    closingNote: "The DMCH-Ludhiana case stands as a model of how patient-centricity, digital innovation, and contextual relevance can come together to create meaningful change. This is a testament to what can be achieved when institutions commit to building resilient, people-centred public health systems.",
    relatedStories: [
      {
        id: "india-tibet",
        title: "India-Tibet Collaboration in Public Health and Health Informatics",
        teaser: "How practical healthcare solutions transcended political boundaries to serve the Tibetan refugee community."
      },
      {
        id: "vizhinjam",
        title: "Revisiting the birthplace of the world's first DHIS2 pilot",
        teaser: "How a small health centre in Kerala became the starting point for a global health information revolution."
      }
    ]
  },

  "himachal-openmrs": {
    id: "himachal-openmrs",
    title: "OpenMRS-Based Hospital Information System in Himachal Pradesh",
    subtitle: "A Decade of Lessons, Collaboration, and Impact",
    theme: "Country Implementations & Case Studies",
    themeColor: "bg-teal-500",
    location: "Himachal Pradesh, India",
    year: "2010 - Present",
    heroImage: himachalOpenmrsCover,
    heroImageCaption: "HP-HIS Implementation / Himachal Pradesh Hospital Network",
    heroIcon: "location",
    closingIcon: "globe",
    sections: [
      {
        title: "Introduction: The Vision for Digital Healthcare in the Himalayas",
        content: [
          "In 2010, the Government of Himachal Pradesh embarked on an ambitious e-Health initiative, partnering with HISP India and the National Health Systems Resource Centre (NHSRC) to modernise its healthcare delivery systems.",
          "A tripartite agreement was signed with the aim of digitising health information management across the state. The initiative encompassed four key components: state-level summary data management through DHIS2, individual patient-level data for hospitals through an OpenMRS-based system (HP-HIS), patient data management at primary health centres through an EHMIS, and equipment maintenance through a biomedical equipment management system.",
          "What followed was over a decade of innovation, adaptation, and learning—a story of how open-source philosophy, local capacity building, and on-ground engagement created a sustainable model for hospital information systems in a mountainous state."
        ]
      },
      {
        title: "HP-HIS: A Statewide Public Hospital Solution",
        content: [
          "The HP-HIS is based on OpenMRS, a globally trusted open-source platform for hospital information management. This system was designed for deployment across regional and civil hospitals in Himachal Pradesh.",
          "In its initial avatar, HP-HIS featured a central server hosted at the Directorate of Health Services in Shimla. The application was accessed via a Local Area Network (LAN), with modules covering registration, OPD management, inpatient admission, discharge, lab, radiology, pharmacy, store management, billing, and MIS reporting.",
          "HISP India customised the system extensively to meet the specific workflows and administrative requirements of Himachal's hospitals, including integration with DHIS2 for aggregate-level reporting."
        ]
      },
      {
        title: "The Pilot at DDU Hospital, Shimla",
        content: [
          "The journey began at DDU Hospital in Shimla, where the system was first piloted between 2010 and 2012. Implementation proceeded in carefully planned phases:",
          "Phase 1 (2010): A dedicated computer room was established within the hospital. Initial staff engagement involved administrators, registration clerks, and record-keepers. A key design principle was adopted early—'What You See Is What You Get'—ensuring the software closely mirrored existing paper registers to reduce resistance and training time.",
          "Phase 2 (2011): OPD and billing modules were rolled out. Training sessions were organised for nurses and doctors. Though initial engagement was limited—primarily from male nurses due to scheduling constraints—the system steadily gained traction.",
          "Phase 3 (2012 onwards): Inpatient and laboratory modules were introduced. Data operators were recruited to manage digitisation. A core group of 'champions' emerged among the nursing staff, driving internal adoption."
        ]
      },
      {
        title: "Navigating Challenges on the Ground",
        content: [
          "Implementing a hospital information system in a resource-constrained public hospital environment presented numerous obstacles:",
          "Resistance from doctors and nurses: Concerns about transparency, workload, and digital literacy made initial uptake slow. Many feared that digital systems would add rather than reduce their burden.",
          "Space and infrastructure constraints: Allocating physical space for computer terminals and ensuring reliable power and internet in high-altitude terrain proved difficult.",
          "Administrative instability: Frequent leadership changes at the hospital level meant that champions of the project were often transferred, disrupting continuity.",
          "Technical issues: Printers, barcode scanners, and LAN equipment required consistent maintenance—often a challenge in remote locations.",
          "Despite these hurdles, the project persisted. The HISP India team prioritised relationship building, on-site support, and iterative improvement—learning from each setback to refine both the software and the implementation approach."
        ]
      },
      {
        title: "Maintenance and Support (2016–2024)",
        content: [
          "Following the initial development and pilot phase, HISP India transitioned from receiving external technical support (initially from Vietnamese developers) to building a fully in-house capacity.",
          "Today, HP-HIS is deployed across 22 hospitals in 11 districts. HISP India continues to provide:",
          "Helpdesk support for troubleshooting software and hardware issues.",
          "Refresher training sessions, including onboarding new staff and running orientation programmes for newly transferred personnel.",
          "System upgrades and feature enhancements based on user feedback and evolving government requirements.",
          "This long-term, embedded model of support is central to HISP India's philosophy: digital transformation does not end with deployment—it requires consistent nurturing."
        ]
      },
      {
        title: "System Improvements and User Feedback",
        content: [
          "A hallmark of the HP-HIS project has been its responsiveness to user needs. For example:",
          "Registration interface fix: Originally, all patients were registered as 'new' by default, requiring clerks to manually check for returning patients. This was reversed—now, the system assumes patients are returning, and clerks click only once if the patient is new. This small design change, prompted by clerk feedback, significantly improved efficiency and data accuracy.",
          "Virtual queue system: A screen in the OPD waiting area now displays a live queue of patients, improving transparency and reducing perceived wait times.",
          "Support visits: HISP India's Shimla-based team, led by Rashi, regularly visits hospitals to provide hands-on assistance, understand emerging needs, and train users in new features."
        ]
      },
      {
        title: "A Decade of Learnings and Locally Rooted Innovation",
        content: [
          "The HP-HIS project is, at its heart, a story of long-term commitment. Over more than ten years, HISP India has remained embedded in the healthcare ecosystem of Himachal Pradesh—not as an external vendor, but as a partner in strengthening public health systems.",
          "The journey has reinforced several key lessons:",
          "Open-source ensures sustainability: By choosing OpenMRS, the state avoided vendor lock-in and retained the flexibility to adapt the system to changing needs.",
          "Contextual customisation matters: A system designed around the way frontline workers actually operate is far more likely to succeed than one that imposes new workflows.",
          "Technology is only part of the story: Building trust, nurturing local champions, and maintaining a consistent presence on the ground are just as crucial as writing good code.",
          "The Himachal Pradesh experience is a reminder that technology alone cannot transform systems—it is the people, processes, and philosophy behind it that truly create impact."
        ]
      }
    ],
    stats: [
      { value: "22", label: "Hospitals across the state" },
      { value: "11", label: "Districts covered" },
      { value: "10+", label: "Years of sustained operation" },
      { value: "10", label: "System modules deployed" }
    ],
    closingNote: "The HP-HIS project is a story of long-term commitment, contextual customisation, and relationship-driven implementation. The Himachal Pradesh experience is a reminder that technology alone cannot transform systems—it is the people, processes, and philosophy behind it that truly create impact.",
    relatedStories: [
      {
        id: "india-tibet",
        title: "India-Tibet Collaboration in Public Health and Health Informatics",
        teaser: "How practical healthcare solutions transcended political boundaries to serve the Tibetan refugee community."
      },
      {
        id: "dmch-ludhiana",
        title: "Building a Patient-Centric IT System at DMCH Ludhiana",
        teaser: "How a community-oriented, open-source digital platform transformed data use and patient care for 50,000 people."
      }
    ]
  },
  "nepal-hiv": {
    id: "nepal-hiv",
    title: "Digital Innovation and Collaborative Impact in HIV Care and ART Tracking System in Nepal",
    subtitle: "A national-level HIV tracking system blending biometrics, SMS, and DHIS2 Tracker—improving ART coverage in Nepal",
    theme: "Country Implementations & Case Studies",
    themeColor: "bg-teal-500",
    location: "Nepal",
    year: "2017 - Present",
    heroImage: undefined,
    heroImageCaption: "Nepal HIV Care and ART Tracking System / National Health Programme",
    heroIcon: "location",
    closingIcon: "globe",
    sections: [
      {
        title: "Introduction",
        content: [
          "The fight against HIV requires not only sustained clinical intervention but also strong systems for case tracking, data management, and patient support. In Nepal, where an estimated 30,300 people were living with HIV (PLHIV) as of 2021, the Government took major strides to ensure long-term care for those affected.",
          "A critical component of this effort is the HIV Care and ART Tracking System, a digital information platform designed and implemented with technical support from HISP India.",
          "Launched in 2017 by the National Centre for AIDS and STD Control (NCASC) under the Ministry of Health and Population (MoH), Nepal, the system was built on the DHIS2 Tracker platform and integrates biometric authentication, SMS notifications, and an Android-based app. It brought greater efficiency, data accuracy, and patient-centricity to Nepal's national HIV response."
        ],
        contributors: [
          "National Centre for AIDS and STD Control (NCASC), Nepal",
          "Ministry of Health and Population, Nepal",
          "HISP India",
          "Save the Children",
          "FHI360",
          "AIDS Health Care Foundation",
          "Global Fund Programme",
          "PEPFAR"
        ]
      },
      {
        title: "Background and Context",
        content: [
          "HIV prevalence in Nepal remains relatively low at 0.13%. However, effective long-term management was critical given the lifelong nature of HIV treatment.",
          "Prior to the digital system, case tracking relied on paper-based registers that lacked proper management of unique identifiers. This led to duplicate records, overestimation of indicators, and limited capability for data-driven decision-making.",
          "To respond to these challenges, NCASC partnered with HISP India, alongside Save the Children, FHI360, and AIDS Health Care Foundation, under the funding support of the Global Fund Programme and PEPFAR. Together, they designed a biometric-enabled, mobile-integrated HIV Tracker system that centralises longitudinal data for all PLHIV enrolled in care."
        ]
      },
      {
        title: "Project Overview",
        content: [
          "The project was piloted at three HIV treatment centres in Kathmandu. Following its success, a comprehensive user manual was developed by HISP India, translated into Nepali, and used to guide the national rollout.",
          "Training, on-site coaching, and participatory feedback loops enabled quick system adoption and adaptation.",
          "Over time, the system grew to incorporate: biometric integration using ZKFinger SDK-v5.3.0.21-Lite, SMS alerts for appointment reminders and health promotion, integration with the Nepali calendar, a new Android version of the application, and audio-visual tutorials for healthcare workers."
        ]
      },
      {
        title: "Key Features and Technical Interventions",
        content: [
          "The HIV Care and ART Tracking System was unique in its blend of interoperability, flexibility, and user-friendliness. Its core elements include:",
          "Individual-level tracking using the DHIS2 Tracker for longitudinal patient data management.",
          "Biometric registration and verification to prevent duplication and ensure accurate patient identification.",
          "SMS and email alerts for appointment and medication reminders, test notifications, and general health messages.",
          "Integration with mHealth tools for improved patient retention.",
          "Custom date configuration supporting both Nepali and Gregorian calendars.",
          "Data from the system was used for automated ART report generation, site-level dashboards, and harmonised planning across programme, logistics, and monitoring and evaluation departments. The integration of metadata across these domains resolved discrepancies in reporting and improved planning accuracy."
        ]
      },
      {
        title: "Impact and Outcomes",
        content: [
          "Since its inception, the system has demonstrated measurable improvements:",
          "ART coverage increased from 65% in 2017 to 84% by 2021.",
          "Sustained retention in care and patient adherence through systematic follow-up mechanisms.",
          "Improved data visibility and accessibility for healthcare providers at all levels.",
          "Use of dashboards to track key indicators such as viral suppression, on-time drug pickup, and follow-up visits.",
          "Enhanced ART procurement planning through harmonised data across all stakeholders.",
          "The system also supported one-click report generation in the national HMIS format, easing the workload on healthcare workers and ensuring compliance with reporting requirements."
        ]
      },
      {
        title: "Addressing Implementation Challenges",
        content: [
          "The project was not without obstacles. A major challenge involved transcribing 13 years of historical data into the new system. Many records were stored using the Nepali calendar, while the DHIS2 Tracker operates on the Gregorian calendar.",
          "HISP India resolved this by designing custom scripts that enabled the system to accept both formats on the front end, while storing data uniformly in the Gregorian format. The system is now configured to accept data for the next 100 years.",
          "Another challenge was the accurate classification of ART regimens. Previously, mismatches between reported drug types and regimens created inconsistencies across programme reports and procurement. With all stakeholders now using the same DHIS2 metadata, such mismatches have been resolved.",
          "Furthermore, the high patient load placed additional pressure on healthcare workers during the data transcription phase. The Android version of the application, though currently without biometric functionality, has helped to streamline field-level data entry and reduce administrative burden."
        ]
      },
      {
        title: "Innovations and Scalability",
        content: [
          "The solution integrated both state and non-state data sources, enabling a comprehensive view of the HIV care landscape in Nepal. Customisation of patient workflows, from diagnosis to follow-up, ensured personalised care delivery.",
          "PLHIV now receive messages that are not only medical in nature but also geared towards behavioural change and well-being, such as reminders for regular check-ups and safe sex practices.",
          "As part of its capacity-building approach, video-based tutorials and refresher materials have been developed for health workers. These tools function as a ready reckoner, ensuring sustainability beyond the initial implementation period."
        ]
      },
      {
        title: "Client Recognition and Global Visibility",
        content: [
          "The system has received appreciation from MoH Nepal and has been showcased at international forums.",
          "In 2021, Dr Keshab Deuba presented the system at the DHIS2 Tracker Use Academy, and again in 2022 at the Asia-Pacific Regional DHIS2 Conference.",
          "The HIV Care and ART Tracking System now stands as a globally referenced model for patient-centred HIV care, with its impact story featured on the official DHIS2 website."
        ]
      }
    ],
    stats: [
      { value: "84%", label: "ART coverage achieved by 2021" },
      { value: "30,300", label: "People living with HIV supported" },
      { value: "13", label: "Years of historical data transcribed" },
      { value: "2", label: "Global DHIS2 conferences featured" }
    ],
    closingNote: "The success of Nepal's HIV Care and ART Tracking System underscores the value of collaborative innovation, open-source platforms, and contextual adaptation. Technology alone is not enough—it is the alignment of tools with philosophy, systems with users, and data with action that delivers lasting change. The journey of this platform is not just about software. It is a reflection of what becomes possible when digital systems are built for, with, and around people.",
    relatedStories: [
      {
        id: "dmch-ludhiana",
        title: "Building a Patient-Centric IT System at DMCH Ludhiana",
        teaser: "How a community-oriented, open-source digital platform transformed data use and patient care."
      },
      {
        id: "himachal-openmrs",
        title: "OpenMRS-Based Hospital Information System in Himachal Pradesh",
        teaser: "A decade of lessons, collaboration, and impact in hospital information systems."
      }
    ]
  },
  "uphmis": {
    id: "uphmis",
    title: "UPHMIS: Building a Scalable and Integrated Health Information System for Uttar Pradesh",
    subtitle: "One of India's most ambitious digital health interventions—integrating massive data volumes across 75 districts",
    theme: "Country Implementations & Case Studies",
    themeColor: "bg-teal-500",
    location: "Uttar Pradesh, India",
    year: "2015 - 2021",
    heroImage: uphmisCover,
    heroImageCaption: "UPHMIS Implementation / State Health Information Portal",
    heroIcon: "location",
    closingIcon: "globe",
    sections: [
      {
        title: "Introduction",
        content: [
          "HISP India collaborated with India Health Action Trust (IHAT) to provide technical support for the Uttar Pradesh Health Management Information System (UPHMIS) under the National Health Mission (NHM), Uttar Pradesh.",
          "The project spanned four phases from October 2015 to April 2021, with support from the Bill and Melinda Gates Foundation.",
          "UPHMIS was developed on the DHIS2 platform version 2.30, providing a comprehensive state health information portal as a central data warehouse for routine health data.",
          "Alongside the core DHIS2 system, HISP India developed a suite of external web and mobile applications—including Raw Data App, Doctor Diary, Bulk Import App, and Sub-Centre Android App—to enable real-time data entry across all levels of the health system."
        ],
        contributors: [
          "HISP India",
          "India Health Action Trust (IHAT)",
          "National Health Mission, Uttar Pradesh",
          "Bill and Melinda Gates Foundation"
        ]
      },
      {
        title: "Project Background",
        content: [
          "The vision of UPHMIS was to create a unified State Health Information Portal serving as a central data warehouse for routine health data across Uttar Pradesh's vast health network.",
          "The system needed to accommodate over 25,000 public health facilities and more than 3,000 private facilities across 75 districts.",
          "External applications were developed to complement the core DHIS2 platform, enabling flexible data capture mechanisms including web-based tools and mobile applications.",
          "The Raw Data App, Doctor Diary, Bulk Import App, and Sub-Centre Android App were designed to facilitate real-time data entry and reduce the burden on healthcare workers."
        ]
      },
      {
        title: "System Development and Support",
        content: [
          "HISP India's support for UPHMIS was organised around five major domains: Application, Hardware, Data, Documentation, and Governance.",
          "Application support included development of user interfaces, mobile applications, dashboards, and integration with other health systems such as DVDMS and BCPM.",
          "Hardware support involved capacity planning, infrastructure management, and eventual migration to AWS cloud infrastructure in 2020.",
          "Data support focused on routine data integrity audits, redundancy cleanup, and ensuring high-quality health information across the system."
        ]
      },
      {
        title: "Application Development",
        content: [
          "The team developed multiple user interfaces and dashboards tailored to different user needs across the health system hierarchy.",
          "The Android application was scaled to cover all 75 districts, enabling field-level data capture at sub-centre and community levels.",
          "Integration work connected UPHMIS with other critical systems including DVDMS (Drug and Vaccine Distribution Management System) and BCPM (Birth and Death Registration).",
          "In 2020, the system was migrated to AWS cloud infrastructure to ensure scalability and reliability for the massive data volumes.",
          "Security audits were conducted in 2018 and 2020 to ensure data protection and system integrity."
        ]
      },
      {
        title: "Data Quality and Documentation",
        content: [
          "Routine data integrity audits were conducted to identify and resolve data quality issues across the system.",
          "Redundancy cleanup processes were implemented to maintain database efficiency and accuracy.",
          "Comprehensive documentation was developed including user manuals, test cases, FAQs, and Standard Operating Procedures (SOPs).",
          "Source code was managed through GitHub, ensuring version control and collaborative development practices.",
          "The documentation served as a knowledge repository for system administrators and end users alike."
        ]
      },
      {
        title: "Governance and Coordination",
        content: [
          "Weekly work plans were developed and tracked to ensure systematic progress across all project domains.",
          "JIRA was used for issue tracking and project management, enabling transparent coordination between HISP India and IHAT teams.",
          "Resource trackers were maintained to monitor capacity utilisation and identify gaps in staffing or skills.",
          "DHIS2 database optimisation was performed regularly to ensure system performance at scale.",
          "Metadata revisions and custom SQL views were developed to meet evolving reporting requirements."
        ]
      },
      {
        title: "Operational Innovations and Best Practices",
        content: [
          "A single project coordinator model was adopted to streamline communication and decision-making with the client.",
          "Vertical specialisations were established within the team—covering Android development, customisation, documentation, and testing—to build deep expertise.",
          "Structured requirement analysis processes ensured that client needs were thoroughly understood before development began.",
          "A WhatsApp-based escalation strategy was implemented to enable rapid response to critical issues and maintain high system availability.",
          "These practices enabled HISP India to manage the complexity of supporting one of India's largest health information systems."
        ]
      },
      {
        title: "Challenges and Adaptability",
        content: [
          "The project faced rapidly changing requirements as the state health system evolved and new programmes were introduced.",
          "Long turnaround times for approvals and feedback sometimes delayed development cycles.",
          "One of the most significant technical challenges was developing custom Excel import functionality for over 25,000 public and 3,000 private facilities.",
          "Bulk import innovations were created to handle the massive data volumes generated across the state's health network.",
          "The team demonstrated remarkable adaptability in responding to these challenges while maintaining system stability and data quality."
        ]
      },
      {
        title: "Client Feedback and Impact",
        content: [
          "IHAT acknowledged HISP India's contributions to the success of UPHMIS, recognising the technical expertise and collaborative approach.",
          "The array of applications developed—Raw Data App, Doctor Diary, Android App, Bulk Import Tools, and Excel Import Modules—transformed how health data was captured and used.",
          "Real-time analytics and dashboards enabled programme managers to monitor performance and make data-driven decisions.",
          "The system supported evidence-based planning for maternal and child health, immunisation, and other priority health programmes.",
          "UPHMIS became a reference implementation for large-scale DHIS2 deployments in India."
        ]
      },
      {
        title: "Conclusion",
        content: [
          "The UPHMIS project exemplified how strong governance, contextual customisation, and cross-functional teamwork can overcome systemic constraints in large-scale health system digitisation.",
          "The design practices developed during the project—single coordinator model, vertical specialisations, structured requirements analysis—offer valuable lessons for similar initiatives.",
          "Technical innovations in bulk import, custom Excel handling, and cloud migration demonstrated HISP India's capacity to solve complex challenges at scale.",
          "The collaborative governance model between HISP India and IHAT proved essential for navigating the complexities of working within a large state health system.",
          "UPHMIS stands as one of India's most ambitious digital health interventions, its impact extending beyond technology to influence how health data is valued and used for decision-making."
        ]
      }
    ],
    stats: [
      { value: "75", label: "Districts covered" },
      { value: "25,000+", label: "Public health facilities" },
      { value: "3,000", label: "Private facilities integrated" },
      { value: "4", label: "Project phases completed" }
    ],
    closingNote: "The UPHMIS project exemplified how strong governance, contextual customisation, and cross-functional teamwork can overcome systemic constraints in large-scale health system digitisation. Its design practices, technical innovations, and collaborative governance offer enduring lessons for future digital health initiatives across India and beyond.",
    relatedStories: [
      {
        id: "himachal-openmrs",
        title: "OpenMRS-Based Hospital Information System in Himachal Pradesh",
        teaser: "A decade of lessons, collaboration, and impact in hospital information systems."
      },
      {
        id: "dmch-ludhiana",
        title: "Building a Patient-Centric IT System at DMCH Ludhiana",
        teaser: "How a community-oriented, open-source digital platform transformed data use and patient care."
      }
    ]
  },
  "uhc-information-systems": {
    id: "uhc-information-systems",
    title: "Bridging Institutions and Information: HISP India's Work on Universal Health Coverage and HIS Reform",
    subtitle: "Insights from a Research Study on Institutionalising Health Information Systems",
    theme: "Research & Impact Stories",
    themeColor: "bg-blue-500",
    location: "Northern India",
    year: "2024",
    heroImage: undefined,
    heroImageCaption: "UHC-HIS Research Study / Northern India",
    heroIcon: "location",
    closingIcon: "lightbulb",
    sections: [
      {
        title: "Understanding Universal Health Coverage in Practice",
        icon: "Globe",
        content: [
          "Universal Health Coverage (UHC) stands as one of the most ambitious global mandates in public health. Its goals are clear: equity in access, quality of services, and protection against financial hardship. Central to achieving these outcomes is the health information system (HIS)—a critical but often under-discussed pillar of UHC.",
          "Yet, a key question remains: Can current HIS models, often designed for upward reporting and aggregate monitoring, support the patient-centric continuity of care that UHC demands?",
          "Prof. Sundeep Sahay, in collaboration with colleagues from the University of Oslo, IIIT Bangalore, and an Indian development NGO, explored this question through a published study examining the institutionalisation of HIS for UHC implementation.",
          "At HISP India, this research reflects our commitment to go beyond technology—towards building sustainable, people-centred, and context-responsive health systems."
        ]
      },
      {
        title: "The Study: Empirical Reflections from an Indian State",
        icon: "BookOpen",
        content: [
          "The study emerged from a UHC-HIS pilot in a northern Indian state, facilitated through a collaboration between Norwegian and Indian universities, an NGO, and HISP India. Employing living labs and participatory design, the pilot engaged health workers in the co-creation of digital systems.",
          "These living labs uncovered significant contradictions between new digital systems and existing institutional processes:",
          "Auxiliary Nurse Midwives (ANMs), often the first point of contact in rural health systems, were expected to track patients longitudinally for antenatal and postnatal care. Yet, infrastructure limitations—such as poor internet connectivity and insufficient devices—severely constrained their ability to do so.",
          "Doctors in primary care settings were observed to be highly pressed for time. Entering detailed patient information into a new system was seen as an additional burden, with limited immediate benefit to their workflow.",
          "Patients themselves were largely unfamiliar with the concept of longitudinal care. Many had no prior experience of being tracked across different health visits or being called back for follow-up.",
          "The study revealed that introducing a new HIS is not merely a technical challenge—it is an institutional one. Deeply embedded norms, belief systems, and professional identities must be engaged and transformed for new systems to take root."
        ]
      },
      {
        title: "The Institutional Layer Beyond Technology",
        icon: "Building",
        content: [
          "One of the study's central arguments is that HIS implementation must be understood not just as a technology deployment but as institutional work. New systems challenge old ways of working and require more than training—they require shifts in organisational culture, professional identity, and power dynamics.",
          "The study draws on institutional theory—specifically the concept of institutional work—to frame how health workers and administrators actively shape, resist, and adapt new systems. Recognising this dynamic is essential for designing systems that can be sustained in the long term.",
          "For HISP India, this insight aligns closely with our philosophy of 'learning by doing'. We believe sustainable systems emerge when frontline workers are not just trained to use a platform, but genuinely empowered to shape it.",
          "The research found that doctors often resisted longitudinal tracking not out of laziness, but because it conflicted with their understanding of their professional role and the realities of patient load."
        ]
      },
      {
        title: "From Contradictions to Design Opportunities",
        icon: "Lightbulb",
        content: [
          "Rather than viewing the contradictions uncovered as failures, the study reframes them as design opportunities. Several actionable guidelines emerged:",
          "Strengthening Existing Care Processes: Rather than replacing paper-based workflows overnight, digital systems should first strengthen what already works—improving continuity of care incrementally and building trust among users.",
          "Designing for Connectivity Gaps: In contexts where internet access is unreliable, systems must be designed to function offline or through hybrid paper-digital workflows.",
          "Enabling Interoperability: Systems must talk to each other. In the Indian context, this means linking sub-district health systems with district, state, and national platforms through open architecture and standard protocols.",
          "Empowering Health Workers: The burden on ANMs and frontline workers should not increase—systems should reduce data entry friction, offer actionable insights, and respect the constraints of their working environment."
        ]
      },
      {
        title: "A Vision Rooted in Reality",
        icon: "Target",
        content: [
          "What this study captures is a recurring theme in HISP India's journey: technology is not the answer—it is part of the answer. A system without context will remain an orphan; a system that listens, learns, and adapts can become a living part of the health ecosystem.",
          "As Prof. Sahay often emphasises, 'Aeroplanes don't fly, airlines do'—meaning the success of any system depends on the broader institutional infrastructure around it. This philosophy underpins all of HISP India's work, from DHIS2 implementations across 80+ countries to community-based health information initiatives in remote Indian states.",
          "The study concludes with a call for research that is not just theoretical but deeply engaged with real-world practice—research that learns from frontline experiences and contributes back to the communities it studies.",
          "This research offers a rare window into the institutional dynamics that shape HIS implementation in low-resource settings. The contradictions and tensions uncovered are not failures—they are starting points for more honest, grounded, and ultimately effective digital health strategies."
        ]
      }
    ],
    stats: [
      { value: "UHC-HIS", label: "Pilot implementation studied" },
      { value: "Multi-stakeholder", label: "Research collaboration" },
      { value: "Living Labs", label: "Participatory design approach" },
      { value: "Institutional", label: "Theory-informed analysis" }
    ],
    closingNote: "As UHC remains a global mandate, this study from HISP India adds critical insights for countries attempting to make information systems work at the frontlines. The way forward is not a shortcut. It is a layered and inclusive journey—one that acknowledges tensions while building pathways to more integrated, equitable, and people-centred health systems. For the full research paper, see: https://doi.org/10.17705/1CAIS.04403",
    relatedStories: [
      {
        id: "antimicrobial-stewardship",
        title: "Reframing Antimicrobial Stewardship through a Biosocial Lens",
        teaser: "Insights from a public health study on antibiotic prescribing practices in North India."
      },
      {
        id: "contemporary-challenges",
        title: "Contemporary Challenges & Opportunities in Public Health Informatics",
        teaser: "Insights from Prof. Sahay's distinguished talk on biosocial gaps, inequities, and health information systems."
      }
    ]
  },
  "antimicrobial-stewardship": {
    id: "antimicrobial-stewardship",
    title: "Reframing Antimicrobial Stewardship through a Biosocial Lens",
    subtitle: "Insights from a Public Health Study in North India",
    theme: "Research & Impact Stories",
    themeColor: "bg-blue-500",
    location: "North India",
    year: "2024",
    heroImage: undefined,
    heroImageCaption: "Antimicrobial Stewardship Research / North India Public Health Study",
    heroIcon: "location",
    closingIcon: "brain",
    sections: [
      {
        title: "Understanding the Issue: Antibiotic Overuse in Everyday Practice",
        icon: "Target",
        content: [
          "Antimicrobial Resistance (AMR) presents one of the most pressing public health challenges of our time. When antibiotics are overused or misused, bacteria evolve, rendering treatment ineffective and threatening the advances of modern medicine.",
          "In response to this challenge, Prof. Sundeep Sahay—Founder and President of HISP India—led a research initiative alongside colleagues from both Indian and Norwegian institutions. Their objective: to understand what truly drives antimicrobial prescriptions in public health settings in North India.",
          "This biosocial study emerged from HISP India's long-standing commitment to understanding health systems not merely through technological tools, but through the people, practices, and contexts that define them. The findings offer critical insights for policy, practice, and future health informatics interventions."
        ]
      },
      {
        title: "Why a Biosocial Perspective?",
        icon: "BookOpen",
        content: [
          "The study deliberately moved away from conventional biomedical assessments—those that examine only what is prescribed and whether it matches clinical guidelines.",
          "Instead, the research adopted a biosocial lens, examining how social, cultural, and systemic factors influence prescriber behaviour. This means looking beyond what is prescribed to asking: Why is it being prescribed? What shapes the prescriber's decision?",
          "By combining the analysis of 1,100+ prescriptions with in-depth interviews involving doctors, pharmacists, and patients, the study captured both quantitative patterns and the lived realities behind them.",
          "This dual lens enabled researchers to move from observation to explanation—a necessary step for meaningful intervention."
        ]
      },
      {
        title: "Key Findings from the Study",
        icon: "Target",
        content: [
          "The analysis of prescriptions revealed a striking picture of routine antimicrobial use in outpatient settings:",
          "98% of prescriptions contained at least one antimicrobial agent. This indicates that antibiotic prescribing is near-universal in this context, regardless of clinical indication.",
          "74% of prescribed antimicrobials were broad-spectrum antibiotics—powerful drugs intended for resistant or unknown infections, used often when narrower alternatives might suffice.",
          "Only 9% of prescriptions were preceded by Antimicrobial Sensitivity Testing (AST). This means the vast majority of antibiotics were prescribed without laboratory confirmation of the infection type or its susceptibility.",
          "In addition, many prescriptions lacked complete diagnostic information, with symptom-based prescribing prevailing over confirmed diagnoses."
        ]
      },
      {
        title: "Biosocial Themes: What Really Shapes Prescriptions",
        icon: "Brain",
        content: [
          "The qualitative component of the study unearthed several recurring biosocial themes that shape prescriber behaviour:",
          "Risk Avoidance Through Broad-Spectrum Drugs: Doctors often choose broad-spectrum antibiotics as a safety measure—to cover all possible pathogens when diagnostic tools are unavailable or results are delayed.",
          "Perceived Inferiority of Hospital Drugs for Children: Some caregivers believe antibiotics from private pharmacies are \"stronger\" or \"better\" than those dispensed at public facilities, pushing prescribers to respond to these expectations.",
          "\"Doctor Knows Best\" Culture: Patients and families often defer entirely to the clinician's judgement, reducing the scope for shared decision-making about whether antibiotics are truly necessary.",
          "Lack of Time for Counselling: Heavy patient loads limit the time prescribers have for educating patients about antibiotic use, potential resistance, and alternative treatments.",
          "Inconsistent Follow-Up Behaviour: Many patients do not return for follow-up consultations, making it difficult to track treatment outcomes and adjust therapy if needed.",
          "Symptom-Based Prescriptions: Given infrastructural limitations, many prescriptions are based on presenting symptoms rather than confirmed diagnoses—creating room for unnecessary or inappropriate antibiotic use."
        ]
      },
      {
        title: "Implications for Health Policy and Practice",
        icon: "Lightbulb",
        content: [
          "Drawing from these insights, the study outlined several implications for policymakers and practitioners working towards responsible antibiotic use:",
          "Strengthen Diagnostic Support and AST Access: Making antimicrobial sensitivity testing more accessible and affordable can reduce reliance on empirical prescribing.",
          "Empower Pharmacists through Antimicrobial Stewardship (AMS) Frameworks: Pharmacists are often the first point of contact for patients. Trained pharmacists can guide rational antibiotic use and reduce over-the-counter prescriptions.",
          "Foster Collaborative Care Through Interprofessional Engagement: Doctors, nurses, pharmacists, and lab technicians should be brought into dialogue to build integrated, team-based approaches to prescribing.",
          "Invest in Public Awareness Campaigns: Educating patients and caregivers on antibiotic resistance—and the dangers of self-medication—can shift demand-side behaviour.",
          "Enhance Drug Quality in Public Pharmacies: Addressing perceptions about \"inferior\" public sector medicines can rebuild trust and reduce demand for unnecessary prescriptions from private providers."
        ]
      },
      {
        title: "Grounded in HISP India's Philosophy",
        icon: "Heart",
        content: [
          "This research exemplifies HISP India's broader philosophy: that technology and systems are only as effective as their understanding of the people and contexts they serve.",
          "Just as DHIS2 or OpenMRS implementations are designed with local health workers and administrators, this AMR study was designed to centre the voices of those who prescribe, dispense, and consume antibiotics.",
          "For over 25 years, HISP India has worked on health systems strengthening—building not just platforms, but partnerships; not just tools, but understanding.",
          "This study is part of that commitment. It reflects a belief that health research should be practical, participatory, and geared towards action.",
          "The findings serve as a reminder: solutions to complex public health challenges must be grounded in context-sensitive research. What works elsewhere may not work here—and what works here must emerge from here."
        ]
      }
    ],
    stats: [
      { value: "1,100+", label: "Prescriptions analysed" },
      { value: "98%", label: "Contained antimicrobials" },
      { value: "74%", label: "Broad-spectrum antibiotics" },
      { value: "9%", label: "Preceded by AST testing" }
    ],
    closingNote: "The AMR study underscores what HISP India has always believed: lasting change comes from learning with and from the communities we serve. By listening to frontline healthcare workers and patients alike, we move closer to solutions that are not only effective—but also equitable and enduring. The findings serve as a reminder: solutions to complex public health challenges must be grounded in context-sensitive research.",
    relatedStories: [
      {
        id: "contemporary-challenges",
        title: "Contemporary Challenges & Opportunities in Public Health Informatics",
        teaser: "Insights from Prof. Sahay's distinguished talk on biosocial gaps, inequities, and health information systems."
      },
      {
        id: "philosophy-digital-health",
        title: "Understanding the Philosophy Behind Digital Health",
        teaser: "A candid conversation with Prof. Sundeep Sahay exploring HISP India's approach to health systems strengthening."
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
              {(() => {
                const closingIcons = {
                  globe: Globe,
                  heart: Heart,
                  "graduation-cap": GraduationCap,
                  lightbulb: Lightbulb,
                  brain: Brain,
                  award: Award
                };
                const IconComponent = closingIcons[story.closingIcon || "globe"];
                return <IconComponent className="h-12 w-12 text-primary mx-auto mb-6" />;
              })()}
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
              {(() => {
                const closingIcons = {
                  globe: Globe,
                  heart: Heart,
                  "graduation-cap": GraduationCap,
                  lightbulb: Lightbulb,
                  brain: Brain,
                  award: Award
                };
                const IconComponent = closingIcons[story.closingIcon || "heart"];
                return (
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                );
              })()}
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
