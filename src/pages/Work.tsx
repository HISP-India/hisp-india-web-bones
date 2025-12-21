import { useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { FilterBar } from "@/components/FilterBar";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Calendar, 
  LayoutGrid, 
  Users, 
  User, 
  Target, 
  TrendingUp, 
  MapPin, 
  Handshake,
  BarChart3,
  Monitor,
  Search,
  GraduationCap,
  Settings,
  Smartphone
} from "lucide-react";

const filterConfig = [
  {
    id: "status",
    label: "Status",
    options: [
      { value: "all", label: "All Status" },
      { value: "Ongoing", label: "Ongoing" },
      { value: "Support", label: "Support" },
      { value: "Closed", label: "Closed" },
    ],
  },
  {
    id: "category",
    label: "Category",
    options: [
      { value: "all", label: "All Categories" },
      { value: "Routine Health Information Systems", label: "Routine HIS" },
      { value: "Community Information Systems", label: "Community IS" },
      { value: "Data Analytics, Integration & Data Management", label: "Data Analytics" },
      { value: "Capacity Building on Digital Health Skills", label: "Capacity Building" },
      { value: "AMR Research", label: "AMR Research" },
      { value: "Action & Implementation Research", label: "Implementation Research" },
      { value: "OpenMRS", label: "OpenMRS" },
    ],
  },
];

// Status colors no longer needed here - moved to ProjectCard component

const allProjects = [
  // ============ ONGOING PROJECTS ============
  {
    id: "humanitarian-data-nepal",
    title: "Inclusion of Data reporting forms for Humanitarian Collection",
    excerpt: "Support FPAN in enhancing humanitarian data collection and reporting, integrating client-based program data into trackers, aggregating indicators, building dashboards, and providing remote technical support. Scheduled June 1, 2025 – Sept 30, 2025.",
    tags: ["Routine HIS", "Nepal", "2025"],
    status: "Ongoing",
    category: "Routine Health Information Systems",
    location: "Nepal",
    year: "2025",
    client: "Family Planning Association of Nepal (FPAN)",
  },
  {
    id: "ippf-uin",
    title: "IPPF Unique Identification Number (UIN)",
    excerpt: "Develop and implement a unique identification number system for IPPF to improve member-level data management and tracking across member associations.",
    tags: ["Data Analytics", "Global", "2025"],
    status: "Ongoing",
    category: "Data Analytics, Integration & Data Management",
    location: "Global",
    year: "2025",
    client: "IPPF Global",
  },
  {
    id: "pmnp-philippines",
    title: "Philippines Multisectoral Nutrition Project (PMNP)",
    excerpt: "Cloud-based platform to streamline data collection and monitoring of nutrition interventions for children under five and target populations. Includes RBAC, encryption, audit trails, and multi-stakeholder data management.",
    tags: ["Community IS", "Philippines", "2025"],
    status: "Ongoing",
    category: "Community Information Systems",
    location: "Philippines (South East Asia)",
    year: "2025",
    client: "Department of Health, Philippines",
  },
  {
    id: "public-health-informatics",
    title: "Fundamentals of Public Health Informatics",
    excerpt: "Hybrid workshop series to equip public health professionals with HIS concepts, surveillance, analytics, and decision-making. Includes interactive sessions and practical exercises.",
    tags: ["Capacity Building", "India", "2024"],
    status: "Ongoing",
    category: "Capacity Building on Digital Health Skills",
    location: "India",
    year: "2024",
    client: "Digital Bharat Collaborative – Piramal Foundation",
  },
  {
    id: "ippf-bpr-portal",
    title: "IPPF Business Planning and Reporting Portal",
    excerpt: "Portal for strategic planning, budgeting and performance reporting across Member Associations, with tailored training, SOPs and adoption support.",
    tags: ["Data Analytics", "Global", "2024"],
    status: "Ongoing",
    category: "Data Analytics, Integration & Data Management",
    location: "Global",
    year: "2024",
    client: "IPPF Global / IPPF Secretariat",
  },
  {
    id: "se-asia-rhis",
    title: "Strengthening routine health information system in SE Asia Region countries",
    excerpt: "Assessment and strengthening of communicable disease surveillance and strategic information sources within the WHO SEAR region (2024).",
    tags: ["Routine HIS", "SE Asia", "2024"],
    status: "Ongoing",
    category: "Routine Health Information Systems",
    location: "Vietnam, Indonesia, Thailand",
    year: "2024",
    client: "Swiss Tropical and Public Health Institute",
  },
  {
    id: "fpa-india-fpamis",
    title: "Technical Support to the FPA India for Implementation, Updating the FPAMIS",
    excerpt: "12 months technical support to enhance functionality and performance of FPA India's management information system (FPAMIS).",
    tags: ["Data Analytics", "India", "2024"],
    status: "Ongoing",
    category: "Data Analytics, Integration & Data Management",
    location: "India",
    year: "2024",
    client: "Family Planning Association of India (FPA India)",
  },
  {
    id: "vaccination-tracking-afghanistan",
    title: "Vaccination tracking tool design, Development & implementation",
    excerpt: "Design and development of a vaccination tracking solution for migrants in collaboration with IOM.",
    tags: ["Community IS", "Afghanistan", "2024"],
    status: "Ongoing",
    category: "Community Information Systems",
    location: "Afghanistan",
    year: "2024",
    client: "IOM (International Organization for Migration)",
  },
  {
    id: "who-leprosy-lpta",
    title: "WHO Global Leprosy Statistics (DHIS2 for LPTA)",
    excerpt: "Evidence-based framework to assess leprosy transmission trends and identify priority intervention areas globally.",
    tags: ["Data Analytics", "Global", "2025"],
    status: "Ongoing",
    category: "Data Analytics, Integration & Data Management",
    location: "Global",
    year: "2025",
    client: "WHO SEARO (Global Leprosy Programme)",
  },
  {
    id: "relight-amr",
    title: "RELIGHT",
    excerpt: "Digital AMR literacy initiative to strengthen AMR monitoring and research capacity using digital tools.",
    tags: ["AMR Research", "India", "2022"],
    status: "Ongoing",
    category: "AMR Research",
    location: "India",
    year: "2022",
    client: "Faculty of Medicine & Centre for Global Health (University of Oslo)",
  },
  {
    id: "amr-one-health",
    title: "Surveillance system for Antimicrobial Resistance with One Health approach",
    excerpt: "Development of integrated AMR surveillance platform aligned with One Health to coordinate monitoring across human, animal and environmental sectors.",
    tags: ["AMR Research", "Global", "2024"],
    status: "Ongoing",
    category: "AMR Research",
    location: "Global",
    year: "2024",
    client: "Not specified",
  },
  {
    id: "who-leprosy-lemt",
    title: "WHO Global Leprosy Statistics (DHIS2 for LEMT)",
    excerpt: "Framework to assess transmission trends and enhance programme responses for leprosy elimination monitoring.",
    tags: ["Data Analytics", "Global", "2023"],
    status: "Ongoing",
    category: "Data Analytics, Integration & Data Management",
    location: "Global",
    year: "2023",
    client: "WHO SEARO (Global Leprosy Programme)",
  },
  {
    id: "timor-hiv-malaria-tb",
    title: "Situational Assessment of HIV, Malaria and Tuberculosis Programs",
    excerpt: "Comprehensive review to assess availability of TB, HIV and malaria services and program readiness.",
    tags: ["Community IS", "Timor", "2022"],
    status: "Ongoing",
    category: "Community Information Systems",
    location: "Timor",
    year: "2022",
    client: "WHO Timor",
  },
  {
    id: "timor-icbs",
    title: "Timor Integrated Case Based Surveillance System",
    excerpt: "ICBS-TL digital platform for disease surveillance and strengthening case reporting in Timor-Leste.",
    tags: ["Community IS", "Timor", "2022"],
    status: "Ongoing",
    category: "Community Information Systems",
    location: "Timor",
    year: "2022",
    client: "WHO Timor",
  },
  {
    id: "amr-india",
    title: "AMR Surveillance (India)",
    excerpt: "Digital transformation of India's AMR surveillance systems to strengthen public health response.",
    tags: ["AMR Research", "India", "2021"],
    status: "Ongoing",
    category: "AMR Research",
    location: "India",
    year: "2021",
    client: "The Research Council of Norway",
  },
  {
    id: "combat-amr-africa",
    title: "COMBAT AMR",
    excerpt: "Digital AMR surveillance strengthening initiative across African regions using One Health principles.",
    tags: ["AMR Research", "Africa", "2021"],
    status: "Ongoing",
    category: "AMR Research",
    location: "Africa",
    year: "2021",
    client: "The Research Council of Norway",
  },
  {
    id: "equity-amr",
    title: "Equity AMR",
    excerpt: "Interdisciplinary research to study equity dimensions in AMR and inform policy and interventions.",
    tags: ["AMR Research", "India", "2021-2025"],
    status: "Ongoing",
    category: "AMR Research",
    location: "India",
    year: "2021-2025",
    client: "The Research Council of Norway",
  },
  {
    id: "yes-plan-international",
    title: "Youth Employment Solutions System, Plan International",
    excerpt: "DHIS2-based system to monitor youth training progress and program outcomes for employment initiatives.",
    tags: ["Data Analytics", "SE Asia", "2019"],
    status: "Ongoing",
    category: "Data Analytics, Integration & Data Management",
    location: "Western Pacific Region, Philippines, Indonesia",
    year: "2019",
    client: "Plan International",
  },
  {
    id: "hmis-afghanistan",
    title: "HMIS Afghanistan Capacity Building Program",
    excerpt: "DHIS2 Level 1 Academies and training to strengthen national HIS capacity and staff skills.",
    tags: ["Capacity Building", "Afghanistan", "2018"],
    status: "Ongoing",
    category: "Capacity Building on Digital Health Skills",
    location: "Afghanistan (Eastern Mediterranean Region)",
    year: "2018",
    client: "Palladium & MoPH Afghanistan",
  },
  {
    id: "nepal-hiv-surveillance",
    title: "Nepal HIV Case Surveillance Program",
    excerpt: "DHIS2 Tracker implemented to enhance differentiated HIV treatment services and client-level care.",
    tags: ["Community IS", "Nepal", "2017"],
    status: "Ongoing",
    category: "Community Information Systems",
    location: "Nepal",
    year: "2017",
    client: "Save the Children / NCASC",
  },
  {
    id: "global-yes",
    title: "Global Youth Employment Solutions System",
    excerpt: "DHIS2 system for registration and monitoring of youth development and employment programs.",
    tags: ["Data Analytics", "Global", "2015"],
    status: "Ongoing",
    category: "Data Analytics, Integration & Data Management",
    location: "South East Asia, African Region, American Region",
    year: "2015",
    client: "Plan International Asia",
  },
  {
    id: "ippf-srh-system",
    title: "DHIS2-based Service Delivery and Data Management System for SRH",
    excerpt: "System developed to support SRH service delivery, data management and regional coordination.",
    tags: ["Data Analytics", "South Asia", "2014"],
    status: "Ongoing",
    category: "Data Analytics, Integration & Data Management",
    location: "South Asia & ESAR (East & South Asia Regions)",
    year: "2014",
    client: "IPPF SARO & ESARO",
  },
  // ============ SUPPORT PROJECTS ============
  {
    id: "intpart-pgimer",
    title: "INTPART (PGIMER & UiO)",
    excerpt: "Community- and facility-level case-based data management for Maternal Health, Immunisation, NCDs and communicable disease notification; situation assessment, system design, development, capacity building and technical support.",
    tags: ["Community IS", "India", "2018"],
    status: "Support",
    category: "Community Information Systems",
    location: "India",
    year: "2018",
    client: "PGIMER and UiO",
  },
  {
    id: "intpart-dmch",
    title: "INTPART (DMCH Ludhiana)",
    excerpt: "INTPART initiative focusing on community and facility case-based data management and technical strengthening at DMCH Ludhiana.",
    tags: ["Community IS", "India", "2020"],
    status: "Support",
    category: "Community Information Systems",
    location: "India",
    year: "2020",
    client: "DMCH, Ludhiana",
  },
  {
    id: "openmrs-tvha",
    title: "Open MRS with TVHA (Tibetan Voluntary Health Association)",
    excerpt: "Integrated Health Information System for Tibetan refugee population covering data collection, validation, reporting and analytics with participatory design and ongoing support.",
    tags: ["OpenMRS", "India & Nepal", "2017"],
    status: "Support",
    category: "OpenMRS",
    location: "India & Nepal",
    year: "2017",
    client: "Department of Health, CTA funded by USAID",
  },
  {
    id: "openmrs-hp",
    title: "Open MRS in Hospitals of Himachal Pradesh",
    excerpt: "Integrated Hospital Information System based on OpenMRS with modules for registration, billing, OPD/IPD, pharmacy, labs, radiology, blood bank and HMIS integration.",
    tags: ["OpenMRS", "Himachal Pradesh", "2010"],
    status: "Support",
    category: "OpenMRS",
    location: "Himachal Pradesh, India",
    year: "2010",
    client: "NHM HP",
  },
  {
    id: "dhis2-states",
    title: "DHIS2 States: Maharashtra, Bihar, Himachal Pradesh, Odisha",
    excerpt: "Long-term DHIS2 implementations to digitize facility data across states, covering RMNCH+A, NCDs, maternal health and many program areas; training and capacity building.",
    tags: ["Routine HIS", "India", "2008"],
    status: "Support",
    category: "Routine Health Information Systems",
    location: "India",
    year: "2008",
    client: "NHM / State Health Departments",
  },
  // ============ CLOSED PROJECTS ============
  {
    id: "amrit-dashboards",
    title: "AMRIT – Integrated Data Analytics Dashboards",
    excerpt: "AMRIT dashboards for AMR surveillance and antibiotic resistance, supporting program decision-making.",
    tags: ["Data Analytics", "India", "2023"],
    status: "Closed",
    category: "Data Analytics, Integration & Data Management",
    location: "India",
    year: "2023",
    client: "Piramal BDC",
  },
  {
    id: "covid-analytics",
    title: "COVID-19 Data Analytics Platforms",
    excerpt: "COVID-19 dashboard integrating multiple data streams for real-time insights to support pandemic response.",
    tags: ["Data Analytics", "India", "2021"],
    status: "Closed",
    category: "Data Analytics, Integration & Data Management",
    location: "India (Mizoram & Manipur)",
    year: "2021",
    client: "Jhpiego India",
  },
  {
    id: "aes-meningitis-nepal",
    title: "DHIS2 for Acute Encephalitis Syndrome / Meningitis Surveillance",
    excerpt: "AES/Meningitis surveillance system to strengthen patient monitoring, treatment adherence and reporting.",
    tags: ["Community IS", "Nepal", "2017"],
    status: "Closed",
    category: "Community Information Systems",
    location: "Nepal",
    year: "2017",
    client: "Save the Children Nepal",
  },
  {
    id: "hmis-libya",
    title: "DHIS2 for National Health Management Information System (HMIS)",
    excerpt: "Support for Libya HMIS design, deployment, capacity building, server installation and technical support.",
    tags: ["Routine HIS", "Libya", "2019"],
    status: "Closed",
    category: "Routine Health Information Systems",
    location: "Eastern Mediterranean Region (Libya)",
    year: "2019",
    client: "WHO Libya",
  },
  {
    id: "malaria-tracker-bhutan",
    title: "DHIS2-based WHO Malaria tracker system, Bhutan",
    excerpt: "WHO Malaria Tracker implementation for case management and surveillance in Bhutan.",
    tags: ["Community IS", "Bhutan", "2021"],
    status: "Closed",
    category: "Community Information Systems",
    location: "Bhutan",
    year: "2021",
    client: "Ministry of Health, Bhutan",
  },
  {
    id: "interoperability-searo",
    title: "Enhancing data interoperability using DHIS2 Tracker, mHealth and biometrics",
    excerpt: "Interoperability solutions integrating biometric data for maternal and health record management.",
    tags: ["Data Analytics", "SE Asia", "2015"],
    status: "Closed",
    category: "Data Analytics, Integration & Data Management",
    location: "South East Asia",
    year: "2015",
    client: "WHO SEARO",
  },
  {
    id: "ccmp-malaria-odisha",
    title: "Comprehensive Case Management Programme (CCMP) – Malaria in Odisha",
    excerpt: "DHIS2-based case management program for malaria interventions tailored to local transmission patterns.",
    tags: ["Community IS", "Odisha", "2015"],
    status: "Closed",
    category: "Community Information Systems",
    location: "India (Odisha)",
    year: "2015",
    client: "Medicine for Malaria Venture, Switzerland",
  },
  {
    id: "tb-tracker-peru",
    title: "Design and Development of DHIS2 TB Patient Tracker, Peru",
    excerpt: "DHIS2-based TB patient tracker to improve treatment monitoring and case management.",
    tags: ["Routine HIS", "Peru", "2015"],
    status: "Closed",
    category: "Routine Health Information Systems",
    location: "Peru",
    year: "2015",
    client: "American Region",
  },
  {
    id: "unfpa-data-systems",
    title: "Strengthening Data and Accountability Systems for Advocacy and Action (UNFPA)",
    excerpt: "Support for DHIS2-based systems to improve reproductive health data, accountability and advocacy.",
    tags: ["Routine HIS", "SE Asia", "2022"],
    status: "Closed",
    category: "Routine Health Information Systems",
    location: "South East Asia & Indian Subcontinent",
    year: "2022",
    client: "UNFPA – Asia Pacific Regional Office",
  },
  {
    id: "nutrition-wash-hki",
    title: "DHIS2 for Nutrition, WASH and Health Data Management",
    excerpt: "System to manage data from nutrition and WASH interventions for improved decision-making.",
    tags: ["Routine HIS", "India", "2016"],
    status: "Closed",
    category: "Routine Health Information Systems",
    location: "India",
    year: "2016",
    client: "Helen Keller International",
  },
  {
    id: "global-fund-data-si",
    title: "Global Fund DATA SI Project",
    excerpt: "Regional data strengthening initiative with HMIS and DHIS2 enhancements for Global Fund programs.",
    tags: ["Routine HIS", "South Asia", "2018"],
    status: "Closed",
    category: "Routine Health Information Systems",
    location: "South Asia & Afghanistan",
    year: "2018",
    client: "The Global Fund",
  },
  {
    id: "hmis-imc-turkey-syria",
    title: "Health Management Information System, IMC Turkey/Syria",
    excerpt: "Humanitarian HMIS strengthening and implementation for refugee health services.",
    tags: ["Routine HIS", "Turkey & Syria", "2020"],
    status: "Closed",
    category: "Routine Health Information Systems",
    location: "Turkey & Syria (Humanitarian)",
    year: "2020",
    client: "International Medical Corps (IMC)",
  },
  {
    id: "ncd-mental-health-myanmar",
    title: "NCD & Mental Health Self-Screening App",
    excerpt: "Self-screening mobile app for NCDs and mental health in vulnerable groups.",
    tags: ["Community IS", "Myanmar", "2021"],
    status: "Closed",
    category: "Community Information Systems",
    location: "Myanmar",
    year: "2021",
    client: "HelpAge International Myanmar / UNFPA",
  },
  {
    id: "vhsnd-manipur",
    title: "Village Health, Sanitation and Nutrition Days – Manipur",
    excerpt: "Android app to support reporting and monitoring of VSHND activities by frontline workers.",
    tags: ["Community IS", "Manipur", "2021"],
    status: "Closed",
    category: "Community Information Systems",
    location: "Manipur, India",
    year: "2021",
    client: "Jhpiego India",
  },
  {
    id: "his-egypt",
    title: "HIS Strengthening Regional Strategy Design, Egypt",
    excerpt: "Design support for national HIS strengthening strategy with academic partners.",
    tags: ["Implementation Research", "Egypt", "2020"],
    status: "Closed",
    category: "Action & Implementation Research",
    location: "Egypt",
    year: "2020",
    client: "WHO EMRO",
  },
  {
    id: "icmr-nikusth-partograph",
    title: "ICMR – Nikusth & Partograph (Android)",
    excerpt: "Partograph and Nikusth app for pregnancy monitoring integrating maternal health indicators.",
    tags: ["Routine HIS", "India", "2021"],
    status: "Closed",
    category: "Routine Health Information Systems",
    location: "India",
    year: "2021",
    client: "ICMR / IPE Global",
  },
  {
    id: "who-leprosy-global",
    title: "WHO Global Leprosy Statistics (DHIS2 for Global Data Management)",
    excerpt: "Global leprosy reporting platform to standardize case reporting and analysis.",
    tags: ["Data Analytics", "Global", "2023"],
    status: "Closed",
    category: "Data Analytics, Integration & Data Management",
    location: "Global",
    year: "2023",
    client: "WHO SEARO (Global Leprosy Programme)",
  },
  {
    id: "community-surveillance-mp",
    title: "Participatory Community-Based Disease Surveillance Model in MP",
    excerpt: "Community-based reporting platform enabling citizens to report health events digitally.",
    tags: ["Community IS", "Madhya Pradesh", "2021"],
    status: "Closed",
    category: "Community Information Systems",
    location: "Madhya Pradesh, India",
    year: "2021",
    client: "Jhpiego India",
  },
  {
    id: "rabies-ibcm",
    title: "Integrated Bite Case Management Application (Rabies)",
    excerpt: "Application for tracking animal bites, cases, vaccinations and follow-up for rabies control.",
    tags: ["Community IS", "India", "2018"],
    status: "Closed",
    category: "Community Information Systems",
    location: "India",
    year: "2018",
    client: "Mission Rabies, WHO India & CDC",
  },
  {
    id: "aes-surveillance-india",
    title: "Acute Encephalitis Syndrome Surveillance App",
    excerpt: "Android-based AES surveillance tool used across multiple states for case reporting and monitoring.",
    tags: ["Routine HIS", "India", "2015"],
    status: "Closed",
    category: "Routine Health Information Systems",
    location: "India (8 states)",
    year: "2015",
    client: "CDC India & NIMHANS Bangalore",
  },
  {
    id: "ncd-tracking-msf",
    title: "DHIS2 for Disaggregated Data Projects – NCD Tracking",
    excerpt: "Tracker for NCD patients and management using DHIS2 Tracker platform.",
    tags: ["Community IS", "Lebanon & Kenya", "2021"],
    status: "Closed",
    category: "Community Information Systems",
    location: "Lebanon & Kenya",
    year: "2021",
    client: "MSF Belgium",
  },
  {
    id: "ncd-tracking-bhutan",
    title: "Participatory NCD Tracking – Bhutan",
    excerpt: "NCD & maternal health tracking system implemented using DHIS2 in Bhutan.",
    tags: ["Community IS", "Bhutan", "2014"],
    status: "Closed",
    category: "Community Information Systems",
    location: "Bhutan",
    year: "2014",
    client: "Ministry of Health Bhutan",
  },
  {
    id: "ippf-nepal",
    title: "International Plan Parenthood Federation (IPPF), Nepal",
    excerpt: "Analytics and reporting strengthening for reproductive health programs.",
    tags: ["Data Analytics", "SE Asia", "2015"],
    status: "Closed",
    category: "Data Analytics, Integration & Data Management",
    location: "South East Asia",
    year: "2015",
    client: "Plan International Asia",
  },
  {
    id: "his-assessment-afghanistan",
    title: "National HIS Assessment, Afghanistan (with WHO)",
    excerpt: "Comprehensive national HIS assessment and recommendations for strengthening.",
    tags: ["Implementation Research", "Afghanistan", "2015"],
    status: "Closed",
    category: "Action & Implementation Research",
    location: "Afghanistan",
    year: "2015",
    client: "WHO EMRO",
  },
  {
    id: "mch-tracker-bhutan",
    title: "Mother and Child Health Tracker – Bhutan",
    excerpt: "DHIS2-based mother and child tracking system supporting facility reporting.",
    tags: ["Community IS", "Bhutan", "2014"],
    status: "Closed",
    category: "Community Information Systems",
    location: "Bhutan",
    year: "2014",
    client: "Ministry of Health Bhutan",
  },
  {
    id: "regional-indicators-emro",
    title: "Regional Indicators Reporting System – WHO EMRO",
    excerpt: "DHIS2-based regional reporting system for standardized health indicators across countries.",
    tags: ["Routine HIS", "EMRO", "2020"],
    status: "Closed",
    category: "Routine Health Information Systems",
    location: "Eastern Mediterranean Region",
    year: "2020",
    client: "WHO EMRO",
  },
  {
    id: "ssi-bihar",
    title: "Supporting Sustainable Sanitation Improvements Program (SSI) – Bihar",
    excerpt: "Digital monitoring and community-health solutions to support sanitation improvements and outcomes.",
    tags: ["Community IS", "Bihar", "2018"],
    status: "Closed",
    category: "Community Information Systems",
    location: "Bihar, India",
    year: "2018",
    client: "Government / Program partners",
  },
];
// Helper to determine location category for filtering
const getLocationCategory = (location: string): string => {
  if (location.toLowerCase().includes("india") || ["Bihar", "Odisha", "Manipur", "Madhya Pradesh", "Himachal Pradesh"].some(s => location.includes(s))) return "India";
  if (location.toLowerCase().includes("global")) return "Global";
  if (location.toLowerCase().includes("south east asia") || location.toLowerCase().includes("se asia") || ["Vietnam", "Indonesia", "Thailand", "Philippines", "Myanmar", "Timor"].some(s => location.includes(s))) return "South East Asia";
  if (location.toLowerCase().includes("africa")) return "Africa";
  return "Other";
};

export default function Work() {
  const [filters, setFilters] = useState<Record<string, string>>({
    status: "all",
    category: "all",
    location: "all",
  });

  const filteredProjects = allProjects.filter((project) => {
    if (filters.status !== "all" && project.status !== filters.status) return false;
    if (filters.category !== "all" && project.category !== filters.category) return false;
    if (filters.location !== "all" && getLocationCategory(project.location) !== filters.location) return false;
    return true;
  });

  // Stats data
  const statsData = [
    { icon: Globe, value: "15", label: "Countries Served", subtitle: "Across 4 continents", color: "bg-blue-500" },
    { icon: Calendar, value: "18", label: "Years of Experience", subtitle: "2008 - 2025", color: "bg-teal-500" },
    { icon: LayoutGrid, value: "8", label: "Unique Offerings", subtitle: "Service categories", color: "bg-cyan-600" },
    { icon: Users, value: "38", label: "Partner Organizations", subtitle: "Global partnerships", color: "bg-purple-500" },
    { icon: User, value: "12", label: "WHO Collaborations", subtitle: "Global health impact", color: "bg-indigo-500" },
  ];

  // Key highlights data
  const keyHighlights = [
    { icon: Target, title: "Technology Leadership", description: "28 DHIS2 implementations and 2 OpenMRS systems deployed globally" },
    { icon: Smartphone, title: "Mobile Innovation", description: "8 Android applications developed for field data collection and patient tracking" },
    { icon: MapPin, title: "Global Reach", description: "Active in 15 countries across Asia, Africa, Middle East, and Latin America" },
    { icon: Handshake, title: "Strategic Partnerships", description: "12 WHO collaborations and 1 Global Fund supported initiatives" },
  ];

  // Digital health solutions data
  const digitalHealthSolutions = [
    { 
      icon: BarChart3, 
      title: "Routine Health Information Systems", 
      description: "Structured systems for regular health data collection, processing, and dissemination supporting decision-making at all healthcare levels",
      bgColor: "bg-blue-500"
    },
    { 
      icon: Users, 
      title: "Community Information Systems", 
      description: "Technology-enabled community participation for improved public health surveillance and primary care with participatory data collection",
      bgColor: "bg-teal-500"
    },
    { 
      icon: Monitor, 
      title: "OpenMRS", 
      description: "Electronic Medical Record Systems based on OpenMRS platform - a low-cost, scalable, and sustainable software solution",
      bgColor: "bg-cyan-600"
    },
    { 
      icon: TrendingUp, 
      title: "Data Analytics & Integration", 
      description: "Open-source data management platforms like DHIS2 with advanced analytics and management dashboards",
      bgColor: "bg-gradient-to-br from-purple-500 to-indigo-600"
    },
    { 
      icon: Search, 
      title: "Action & Implementation Research", 
      description: "Real-world application of health information systems focusing on AMR surveillance, antibiotic practices, and environmental AMR",
      bgColor: "bg-red-500"
    },
    { 
      icon: GraduationCap, 
      title: "Capacity Building", 
      description: "Specialized courses on Public Health, Disease Surveillance, and AMR in collaboration with leading universities",
      bgColor: "bg-orange-500"
    },
    { 
      icon: Globe, 
      title: "Climate & Health Data Analytics", 
      description: "Enhanced HIS for climate-sensitive health risks with analytics tools and data visualization dashboards",
      bgColor: "bg-gradient-to-br from-pink-500 to-rose-500"
    },
    { 
      icon: Settings, 
      title: "AMR Research", 
      description: "Antimicrobial resistance surveillance systems with One Health approach for coordinated monitoring across human, animal, and environmental sectors",
      bgColor: "bg-purple-600"
    },
  ];

  return (
    <div className="flex flex-col">
      <Hero 
        title="Our Work"
        subtitle="Projects"
        description="Strengthening health information systems across the globe through innovative digital solutions, capacity building, and collaborative partnerships."
        variant="gradient"
        className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground"
      />

      {/* Stats Overview Section */}
      <section className="py-12 bg-muted/30 border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {statsData.map((stat, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <p className="text-sm md:text-base font-semibold text-foreground mb-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-8">
        <div className="container">
          <div className="bg-cyan-500 rounded-2xl p-8 max-w-6xl mx-auto">
            <h3 className="text-white text-center text-lg font-semibold mb-6">Key Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {keyHighlights.map((highlight, index) => (
                <div key={index} className="text-center text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <highlight.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-white/90">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Digital Health Solutions Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Digital Health Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              Empowering global health through innovative technology, research, and capacity building initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {digitalHealthSolutions.map((solution, index) => (
              <div 
                key={index} 
                className={`${solution.bgColor} rounded-2xl p-6 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform`}
              >
                {/* Background decorative icon */}
                <solution.icon className="absolute -top-4 -right-4 w-24 h-24 text-white/10" />
                
                {/* Main icon */}
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 relative z-10">
                  <solution.icon className="w-6 h-6" />
                </div>
                
                <h3 className="font-semibold text-lg mb-3 relative z-10">{solution.title}</h3>
                <p className="text-sm text-white/90 relative z-10 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-8">
            <FilterBar
              filterConfig={filterConfig}
              filters={filters}
              onFilterChange={setFilters}
            />
          </div>

          <div className="mb-8 text-center">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> of{" "}
              <span className="font-semibold text-foreground">{allProjects.length}</span> projects
            </p>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  excerpt={project.excerpt}
                  category={project.category}
                  status={project.status}
                  location={project.location}
                  client={project.client}
                  year={project.year}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No projects found matching your filters.</p>
              <Button variant="outline" onClick={() => setFilters({ status: "all", category: "all", location: "all" })} className="mt-4">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Have a Project in Mind?"
        description="We'd love to discuss how we can support your health information system needs."
        variant="default"
      >
        <Button asChild size="lg" variant="default">
          <Link to="/contact">Start a Conversation</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/offerings">Explore Our Services</Link>
        </Button>
      </CTASection>
    </div>
  );
}
