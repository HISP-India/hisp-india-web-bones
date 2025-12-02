import { useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { Users, Award, Heart } from "lucide-react";

const departments = [
  {
    name: "Leadership",
    members: [
      {
        id: "1",
        name: "Sundeep Sahay",
        role: "Founder/Mentor",
        bio: "Sundeep Sahay is a pioneer in health informatics in India, having started his engagement with HISP since 1999, when he was a Professor at IIM Ahmedabad. He is currently a Professor at the Indian Institute of Management Bangalore (IIMB) and University of Oslo, Norway. With over 150 publications and having supervised 15+ PhD students, he is a leading expert in participatory design and action research approaches in health information systems. He has been instrumental in establishing and growing HISP India as a leading center of excellence for health information systems in South Asia. His work focuses on information systems for development, participatory design, and sustainable implementation of digital health solutions in low-resource settings.",
      },
      {
        id: "2",
        name: "Saurabh Leekha",
        role: "CEO",
        bio: "Saurabh Leekha joined HISP India in 2012 and has been serving as the CEO, leading the organization's strategic direction and operations. A graduate from IIHMR Delhi, he is a DHIS2 specialist with extensive experience in over 60 implementations across India and internationally. He has led large-scale projects in India, Bangladesh, Sri Lanka, and Myanmar, working closely with Ministries of Health and international organizations. His expertise spans DHIS2 customization, system integration, and building sustainable digital health ecosystems. Under his leadership, HISP India has expanded its footprint significantly and established partnerships with multiple state governments and international agencies. He is passionate about using technology to strengthen health systems and improve health outcomes in underserved communities.",
      },
      {
        id: "3",
        name: "Gitika Arora",
        role: "Head – Health Systems",
        bio: "Gitika Arora has been with HISP India since 2013, bringing her expertise in dental sciences (BDS) and postgraduate training in Healthcare Information Technology. She specializes in DHIS2 Android applications and has led numerous implementations for the Ministry of Health & Family Welfare. Her work focuses on system design, metadata configuration, and ensuring that digital health solutions are user-centered and context-appropriate. She currently leads the AMR (Antimicrobial Resistance) digitisation efforts and has played a key role in strengthening health information systems across multiple states. Her deep understanding of health program requirements combined with technical expertise makes her invaluable in bridging the gap between health system needs and technology solutions.",
      },
    ],
  },
  {
    name: "Program & Technical Management",
    members: [
      {
        id: "4",
        name: "Chahat Narula Thakur",
        role: "Head – Project Operations",
        bio: "Chahat Narula Thakur brings over 12 years of experience in program management and health informatics. She holds an MBA from IIHMR Delhi and a B.Tech in Biotechnology. She has been instrumental in leading India's first state-owned Hospital Information System (HIS) platform in Jharkhand. Her expertise spans project planning, stakeholder management, system implementation, and building sustainable operational frameworks. She oversees multiple complex projects simultaneously, ensuring quality delivery, budget management, and alignment with organizational goals. Her strong leadership and ability to navigate complex government partnerships have been crucial to HISP India's success in state-level implementations. She is passionate about building robust health information systems that serve the needs of health workers and improve patient care.",
      },
      {
        id: "5",
        name: "Sumit Kumar Tripathi",
        role: "Program Manager – DHIS2",
        bio: "Sumit Kumar Tripathi has been with HISP India since 2014, bringing expertise in both Healthcare Information Technology (Masters) and Physiotherapy. He has led HMIS and MCTS implementations across 6 states and is known for his strong analytical skills and attention to detail. His work includes system configuration, data analytics, dashboard development, and capacity building of state health department staff. He has played a key role in ensuring data quality and supporting data-driven decision making in multiple state health programs. His dual background in healthcare and technology enables him to understand clinical workflows and translate them into effective digital solutions. He is committed to building sustainable systems that empower health program managers with timely and accurate information.",
      },
      {
        id: "6",
        name: "Sumit Poudel",
        role: "Technical Manager – DHIS2",
        bio: "Sumit Poudel brings over 4 years of web development experience and specializes in core DHIS2 development and custom application design. He has been instrumental in building national health platforms including the Jharkhand State Health Information System and the National NCD (Non-Communicable Diseases) platform. His technical expertise includes full-stack development, system integration, and building scalable applications. He works closely with program managers and implementation teams to translate user requirements into robust technical solutions. His focus on code quality, performance optimization, and user experience ensures that the systems developed are both powerful and user-friendly. He is passionate about open-source technologies and contributes to the global HISP developer community.",
      },
    ],
  },
  {
    name: "Project Support (Implementation)",
    members: [
      {
        id: "7",
        name: "Diksha Saklani",
        role: "Sr. Executive – DHIS2 Implementation",
        bio: "Diksha Saklani has a background in Healthcare Information Technology and specializes in DHIS2 implementation and support. She has worked extensively on HMIS and MCTS implementations in Bihar and Jharkhand, managing system configuration, user training, and ongoing technical support. Her work also includes Bahmni-DHIS2 interoperability projects, enabling seamless data exchange between hospital information systems and state health management information systems. She excels at understanding user needs, troubleshooting field-level challenges, and ensuring smooth system operations. Her patient and methodical approach makes her effective in working with diverse users from frontline health workers to district health officials.",
      },
      {
        id: "8",
        name: "Sandhya Singh",
        role: "Sr. Executive – DHIS2 Implementation",
        bio: "Sandhya Singh brings over 9 years of experience in public health and has worked as a community research coordinator before joining HISP India. She holds an MPhil in Public Health and brings strong understanding of health program operations. Her work focuses on system implementation support, user training, data quality monitoring, and coordination with state health departments. She has supported multiple DHIS2 implementations and is skilled at conducting needs assessments, developing training materials, and building capacity of state health teams. Her public health background enables her to align technology solutions with program monitoring needs and ensure systems are used effectively for decision making.",
      },
      {
        id: "9",
        name: "Tejas Manekar",
        role: "Sr. Executive – DHIS2 Implementation",
        bio: "Tejas Manekar holds a PGDHM from IIHMR Jaipur and has specialized experience in blood surveillance systems and non-communicable disease (NCD) platforms. He has worked on the blood surveillance implementation in Odisha and the NCD platform in Bihar. His responsibilities include metadata configuration, system customization, user training, and ongoing technical support. He is proficient in understanding complex health program workflows and translating them into effective DHIS2 configurations. His systematic approach and strong problem-solving skills make him effective in managing implementations across diverse health programs. He is committed to ensuring that health information systems truly serve the needs of health programs and contribute to improved health outcomes.",
      },
      {
        id: "10",
        name: "Anshul Sharma",
        role: "Sr. Executive – DHIS2 Implementation",
        bio: "Anshul Sharma holds a Masters in Healthcare Information Technology and specializes in Android application support and blood services implementations. He has worked on the Bihar Blood services platform, providing technical support, system maintenance, and user training. His expertise includes Android app configuration, troubleshooting mobile application issues, and ensuring smooth operations of DHIS2 Android deployments. He works closely with field teams to understand challenges faced by mobile users and implements solutions that improve user experience and data quality. His technical skills combined with his ability to communicate effectively with non-technical users make him valuable in supporting mobile health information systems.",
      },
      {
        id: "11",
        name: "Vivek Kirti",
        role: "Sr. Executive – DHIS2 Implementation",
        bio: "Vivek Kirti has a BSc in Information Technology and brings strong technical skills to DHIS2 implementation support. His work includes metadata development, data validation rule configuration, user training, and system troubleshooting. He is detail-oriented and ensures that system configurations are accurate and aligned with program requirements. He has supported multiple implementations and is skilled at identifying data quality issues and implementing solutions. His ability to break down complex technical concepts into simple explanations makes him effective in training users with varying levels of technical literacy. He is passionate about ensuring that health information systems are reliable and produce high-quality data for decision making.",
      },
      {
        id: "12",
        name: "Megha Dhasmana",
        role: "Executive – DHIS2 Implementation",
        bio: "Megha Dhasmana has a background in Healthcare Information Technology and supports the Jharkhand Health Information System (JSHIS) implementation. Her work includes system configuration, user support, data reconciliation, and coordination with district health offices. She is skilled at managing data quality issues, conducting user training sessions, and providing responsive technical support to system users. Her patient and supportive approach helps build confidence among health workers in using digital systems. She works diligently to ensure that data flows smoothly through the system and that health program managers have access to timely and accurate information for monitoring program performance.",
      },
      {
        id: "13",
        name: "Shraddha Thakur",
        role: "Executive – DHIS2 Implementation",
        bio: "Shraddha Thakur joined HISP India in 2023 and supports the NCD platform in Bihar. Her responsibilities include user training, system configuration, data validation, and administrative support for the Jharkhand Medical Recruitment System (JMRS). She is quick to learn and has developed strong skills in DHIS2 configuration and user support. Her attention to detail ensures that system setups are accurate and complete. She is committed to providing excellent support to system users and helping them leverage technology to improve their work. Her enthusiasm and willingness to take on new challenges make her a valuable member of the implementation team.",
      },
      {
        id: "14",
        name: "Raghav Tiwari",
        role: "Executive – DHIS2 Implementation",
        bio: "Raghav Tiwari joined HISP India in 2024 with a BCA background. He supports the Jharkhand State Health Information System (JSHIS), providing technical support, user management, and system troubleshooting. Despite being relatively new to the team, he has quickly developed strong skills in DHIS2 administration and user support. He is proactive in learning and takes initiative in solving problems. His technical aptitude and positive attitude make him effective in supporting system users and resolving technical issues. He is building expertise in health information systems and is committed to growing his skills to contribute more significantly to HISP India's mission.",
      },
      {
        id: "15",
        name: "Ayush Singh",
        role: "Executive – DHIS2 Implementation",
        bio: "Ayush Singh has a BCA background and provides technical support for DHIS2 implementations. His work includes troubleshooting user issues, data validation, system testing, and user training support. He is developing expertise in DHIS2 configuration and is eager to expand his knowledge of health information systems. His technical skills and problem-solving abilities make him effective in identifying and resolving system issues. He is committed to providing responsive support to system users and ensuring smooth system operations. His fresh perspective and enthusiasm bring positive energy to the team.",
      },
      {
        id: "16",
        name: "Govind Yadav",
        role: "Sr. Executive – DHIS2 Implementation",
        bio: "Govind Yadav holds an MHA (Master of Hospital Administration) and brings specialized experience in disease surveillance systems, particularly malaria programs. His work focuses on configuring surveillance systems, training health workers on data reporting, and monitoring data quality for disease control programs. His understanding of epidemiology and public health program requirements enables him to design effective surveillance systems that meet the needs of disease control teams. He is skilled at working with diverse stakeholders including medical officers, program managers, and field health workers. His commitment to strengthening disease surveillance contributes to better outbreak detection and response capabilities in the states where HISP India works.",
      },
    ],
  },
  {
    name: "Project Support (Development & Infrastructure)",
    members: [
      {
        id: "17",
        name: "Mahender Pal",
        role: "Sr. Executive – IT & Web Development",
        bio: "Mahender Pal holds an MCA and brings expertise in DevOps, system administration, and DHIS2 application development. He manages server infrastructure, ensures system security and performance, and develops custom DHIS2 applications to extend system functionality. His responsibilities include server setup and maintenance, deployment automation, monitoring system performance, and troubleshooting infrastructure issues. He has strong skills in Linux administration, database management, and cloud technologies. His work ensures that HISP India's production systems are stable, secure, and performant. He is proactive in identifying potential issues and implementing solutions before they impact users. His technical expertise is crucial to maintaining reliable health information systems serving millions of users.",
      },
      {
        id: "18",
        name: "Pankaj Kumar",
        role: "Executive – IT & Web Development",
        bio: "Pankaj Kumar has a BCA and is pursuing an MCA while working at HISP India. He specializes in cloud operations and full-stack web development. His work includes managing cloud infrastructure, developing web applications, system integration, and providing technical support. He is proficient in modern web technologies and is continuously expanding his skill set. His ability to quickly learn new technologies and apply them to solve practical problems makes him a valuable asset to the development team. He is passionate about building user-friendly applications and ensuring reliable system operations. His commitment to professional growth and technical excellence contributes to the team's capabilities.",
      },
      {
        id: "19",
        name: "Tushar Goyal",
        role: "Executive – Web Development",
        bio: "Tushar Goyal holds a B.Tech and is a skilled full-stack developer with expertise in FHIR integration and interoperability. He has worked on the NCD platform and specializes in building integrations between different health information systems. His technical skills include modern JavaScript frameworks, RESTful APIs, and health information exchange standards. He focuses on writing clean, maintainable code and follows software development best practices. His work on interoperability enables seamless data exchange between systems, reducing data entry burden and improving data consistency. He is passionate about leveraging technology to improve health system efficiency and is committed to building robust, scalable solutions.",
      },
      {
        id: "20",
        name: "Nikhil Verma",
        role: "Sr. Executive – Web Development",
        bio: "Nikhil Verma holds a B.Tech and is a full-stack developer with extensive experience in government system integrations. He develops custom applications, builds integration pipelines, and implements complex business logic to meet specific program requirements. His expertise includes database design, API development, and front-end frameworks. He has successfully delivered multiple integration projects connecting DHIS2 with other government systems including e-Hospital and other state platforms. His ability to understand both technical requirements and government processes makes him effective in delivering solutions that work within complex government IT ecosystems. He is detail-oriented and committed to delivering high-quality, well-tested code.",
      },
      {
        id: "21",
        name: "Ram Kumar",
        role: "Associate – Web Development",
        bio: "Ram Kumar holds a B.Tech and is receiving web development training while contributing to DHIS2 dashboard development. He is learning full-stack development skills and applying them to build analytical dashboards and data visualizations. His work includes dashboard configuration, report development, and learning system administration. He is enthusiastic about building his technical skills and transitioning into a full-fledged developer role. His willingness to learn and take on new challenges makes him a promising member of the development team. He is committed to mastering the technologies used at HISP India and contributing meaningfully to project delivery.",
      },
      {
        id: "22",
        name: "Sushil",
        role: "Associate – Web Development",
        bio: "Sushil holds a B.Tech and focuses on DHIS2 configuration and dashboard development. His work includes configuring DHIS2 instances, developing data visualizations, creating analytical dashboards, and supporting data analysis needs of health programs. He is building his expertise in DHIS2's analytical capabilities and learning to translate program monitoring needs into effective dashboards. His attention to detail ensures that dashboards are accurate and meaningful. He is developing both technical skills and understanding of health program indicators, which enables him to create dashboards that truly serve the needs of health program managers. He is committed to growing into a dashboard and analytics specialist.",
      },
    ],
  },
  {
    name: "Research",
    members: [
      {
        id: "23",
        name: "Parag Wagh",
        role: "Project Coordinator",
        bio: "Parag Wagh is a microbiologist leading the AMR (Antimicrobial Resistance) surveillance project at HISP India. He manages coordination across 11 participating laboratory sites, oversees sample collection and testing protocols, and ensures quality control in laboratory processes. His scientific expertise combined with project management skills enables effective coordination of this complex multi-site research project. He works closely with laboratory staff, microbiologists, and hospital administrators to ensure smooth project operations. His work contributes to building evidence on antimicrobial resistance patterns in India, which is crucial for developing effective antibiotic stewardship programs and infection control policies. He is passionate about using data to improve patient care and combat the growing threat of antimicrobial resistance.",
      },
      {
        id: "24",
        name: "Rishi Dass",
        role: "Research Associate",
        bio: "Rishi Dass holds a BPT (Bachelor of Physiotherapy) and brings unique cross-disciplinary skills to the AMR project. He manages AMR data collection, DHIS2 implementation for laboratory data, and coordinates with participating laboratory sites. His work includes training laboratory staff on data reporting, monitoring data quality, troubleshooting system issues, and supporting data analysis. His ability to bridge clinical/laboratory work with data systems makes him effective in understanding laboratory workflows and implementing appropriate digital solutions. He is committed to strengthening laboratory information systems and ensuring that AMR surveillance data is timely, accurate, and useful for clinical decision making and policy development.",
      },
      {
        id: "25",
        name: "Amita",
        role: "Sr. Research Associate",
        bio: "Amita holds an MPharm and specializes in AMR surveillance and pharmaceutical data analysis. Her work includes analyzing antimicrobial susceptibility testing data, identifying resistance patterns, studying diagnostic trends, and contributing to research publications. Her pharmaceutical background enables deep understanding of antibiotic mechanisms, resistance mechanisms, and appropriate laboratory testing methodologies. She conducts detailed analysis of AMR data to identify trends, emerging resistance patterns, and areas of concern. Her analytical work provides valuable insights that inform antibiotic prescribing practices, infection control policies, and public health interventions. She is passionate about contributing to the fight against antimicrobial resistance through rigorous data analysis and evidence generation.",
      },
      {
        id: "26",
        name: "Meena Sharma",
        role: "Data Entry Operator",
        bio: "Meena Sharma has a Commerce background and plays a crucial role in ensuring accurate data entry and validation for the AMR project. Her work includes entering patient and laboratory data, validating data quality, maintaining patient records, and ensuring data completeness. Her attention to detail ensures that the research database is accurate and reliable. She works diligently to meet data entry deadlines while maintaining high quality standards. Her systematic approach and commitment to accuracy are essential to the integrity of the research data. She takes pride in her work and understands the importance of accurate data for research and patient care.",
      },
      {
        id: "27",
        name: "Praveen Kumar",
        role: "Data Entry Operator",
        bio: "Praveen Kumar has a Commerce background and supports AMR data management activities. His responsibilities include data entry, sample tracking, maintaining laboratory logs, and ensuring data quality. He is meticulous in his work and ensures that all data is entered accurately and completely. He works closely with laboratory staff to ensure smooth data flow from laboratory testing to the research database. His organized approach and reliability make him a valuable member of the research team. He understands the importance of his role in supporting research activities and takes his responsibilities seriously.",
      },
      {
        id: "28",
        name: "Raj Kumar",
        role: "Data Entry Operator",
        bio: "Raj Kumar provides research support and data management for the AMR surveillance project. His work includes data entry, data verification, maintaining research records, and supporting data analysis activities. He is detail-oriented and ensures accuracy in all his work. He is learning about research data management practices and is committed to contributing to the success of the research project. His positive attitude and willingness to support team needs make him a valuable team member. He takes pride in ensuring that the data he manages is accurate and well-organized.",
      },
    ],
  },
  {
    name: "Capacity Building & Digital Operations",
    members: [
      {
        id: "29",
        name: "Sahil Bhardwaj",
        role: "Head – Capacity Building & Digital Operations",
        bio: "Sahil Bhardwaj brings 14 years of experience combining psychology and information technology expertise. He leads HISP India's training and e-learning initiatives, having conducted over 200 training programs for health workers, program managers, and system administrators across India and neighboring countries. His background in psychology informs his approach to adult learning, behavior change, and building user confidence in technology adoption. He manages the organization's mobile applications, social media presence, and digital communications. He develops comprehensive training curricula, e-learning materials, and certification programs. His teaching philosophy emphasizes hands-on learning, peer support, and building communities of practice. His work ensures sustainable capacity building and effective communication of HISP India's work.",
      },
      {
        id: "30",
        name: "Rashi Banta",
        role: "Associate – Training & E-content",
        bio: "Rashi Banta holds an MA in Psychology and specializes in creating engaging e-learning content and training materials. Her work includes developing training videos, infographics, user guides, social media content, and presentations for various audiences. She has a creative approach to content development and focuses on making complex technical concepts accessible and engaging. She manages HISP India's social media presence and creates content that effectively communicates the organization's work and impact. Her understanding of adult learning principles informs her content development approach. She is passionate about using creative communication to build awareness about health information systems and support user learning. Her work enhances the quality and accessibility of HISP India's training and communication materials.",
      },
    ],
  },
  {
    name: "HR & Accounts",
    members: [
      {
        id: "31",
        name: "Megha Jolly",
        role: "Manager – HR & Admin",
        bio: "Megha Jolly brings over 6 years of human resources experience to HISP India. She manages the full employee lifecycle including recruitment, onboarding, performance management, employee engagement, and compliance with labor regulations. She develops HR policies that promote a positive work culture, work-life balance, and professional development. She partners with team leads to understand staffing needs, conducts recruitment drives, and ensures new employees have smooth onboarding experiences. She also manages payroll, benefits administration, and grievance redressal. Her people-centered approach and commitment to employee wellbeing contribute to high team morale and retention. She is passionate about building an organizational culture where talented professionals can thrive and contribute meaningfully to public health.",
      },
      {
        id: "32",
        name: "Shweta Karki",
        role: "Executive – Admin & Accounts",
        bio: "Shweta Karki has a background in Commerce and Human Resources and supports administrative and accounting functions at HISP India. Her responsibilities include administrative coordination, basic bookkeeping, supporting HR processes, and ensuring smooth office operations. She manages vendor relationships, office supplies, and facility management. She supports payroll processing and maintains administrative records. Her organizational skills and attention to detail ensure that administrative processes run smoothly. She is proactive in identifying operational issues and implementing solutions. Her positive attitude and willingness to support various functions make her valuable in maintaining efficient office operations. She is committed to providing excellent administrative support that enables the team to focus on programmatic work.",
      },
      {
        id: "33",
        name: "Roshan Maurya",
        role: "Office Assistant",
        bio: "Roshan Maurya provides essential administrative support ensuring smooth daily office operations. His responsibilities include handling errands, maintaining office facilities, coordinating with vendors for office supplies and maintenance, and supporting various administrative needs. He ensures that the office environment is clean, organized, and functional. He coordinates with housekeeping staff and manages facility-related issues. His reliability and proactive approach ensure that team members have a comfortable work environment. He takes pride in his work and understands the importance of maintaining good office operations. His cheerful demeanor and willingness to help make him a valued member of the team.",
      },
      {
        id: "34",
        name: "Khushboo",
        role: "Executive – Accounts",
        bio: "Khushboo has a Commerce background and manages bookkeeping, GST compliance, and financial record-keeping for HISP India. Her work includes maintaining accounts, processing invoices, reconciling transactions, managing GST filings, and ensuring compliance with financial regulations. She is detail-oriented and ensures accuracy in all financial records. She works closely with the finance manager to support project budgeting and financial reporting. Her systematic approach and understanding of accounting principles contribute to maintaining clean financial records and ensuring regulatory compliance. She is committed to maintaining financial accuracy and transparency in all transactions.",
      },
      {
        id: "35",
        name: "Sumit Kumar",
        role: "Account Assistant",
        bio: "Sumit Kumar holds a B.Com and supports accounting and financial documentation activities. His responsibilities include data entry for financial transactions, maintaining supporting documentation, assisting with invoice processing, and supporting audit preparation. He is learning accounting practices and is developing skills in financial management. His attention to detail ensures accuracy in financial record-keeping. He is reliable and completes assigned tasks efficiently. He is building his expertise in accounting and is committed to growing into a more senior accounting role. His positive attitude and willingness to learn make him a promising member of the accounts team.",
      },
      {
        id: "36",
        name: "Kavita",
        role: "Support Staff",
        bio: "Kavita plays an essential role in maintaining a clean, comfortable, and welcoming office environment for the HISP India team. Her responsibilities include office maintenance, preparing refreshments for team meetings and visitors, coordinating with housekeeping services, and ensuring that common areas are clean and organized. She takes pride in her work and ensures that the office is always presentable. Her warm and friendly demeanor makes visitors feel welcome and contributes to a positive office atmosphere. She understands the importance of a clean and comfortable work environment in supporting the team's productivity and wellbeing. Her dedication and reliability are greatly appreciated by the entire team.",
      },
    ],
  },
];

export default function Team() {
  const [expandedMemberId, setExpandedMemberId] = useState<string | null>(null);

  const handleToggle = (memberId: string) => {
    setExpandedMemberId(expandedMemberId === memberId ? null : memberId);
  };

  return (
    <div className="flex flex-col">
      <Hero
        title="Our Team"
        subtitle="Meet the People"
        description="A diverse team of public health professionals, technologists, researchers, and educators dedicated to strengthening health information systems."
        variant="gradient"
        className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground"
      />

      {departments.map((department, deptIndex) => {
        // Adjust grid layout based on number of members
        const memberCount = department.members.length;
        let gridCols = "lg:grid-cols-3";
        if (memberCount === 2) {
          gridCols = "lg:grid-cols-2";
        } else if (memberCount >= 10) {
          gridCols = "lg:grid-cols-4";
        }

        return (
          <section key={deptIndex} className={deptIndex % 2 === 0 ? "py-16 md:py-20" : "py-16 md:py-20 bg-muted"}>
            <div className="container">
              <h2 className="font-heading text-3xl font-bold mb-8 text-center">{department.name}</h2>
              <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-6 max-w-7xl mx-auto`}>
                {department.members.map((member) => (
                  <TeamMemberCard
                    key={member.id}
                    name={member.name}
                    role={member.role}
                    bio={member.bio}
                    isExpanded={expandedMemberId === member.id}
                    onToggle={() => handleToggle(member.id)}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Team Culture */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Team Culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Collaborative</h3>
              <p className="opacity-90">
                We work together across disciplines to solve complex health system challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Excellence-Driven</h3>
              <p className="opacity-90">
                We strive for the highest quality in everything we do, from code to partnerships.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Mission-Focused</h3>
              <p className="opacity-90">
                Our work is driven by commitment to public health and health equity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Team"
        description="Interested in being part of our mission? Explore career opportunities and join us in transforming health systems."
        variant="default"
      >
        <Button asChild size="lg" variant="default">
          <Link to="/careers">View Open Positions</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/about">Learn About HISP India</Link>
        </Button>
      </CTASection>
    </div>
  );
}
