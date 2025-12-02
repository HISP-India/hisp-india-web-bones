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
        name: "Dr. Arunima Singh",
        role: "Executive Director",
        bio: "Dr. Arunima Singh brings over 20 years of experience in public health informatics and health systems strengthening. She has led multiple national-scale DHIS2 implementations and pioneered community-centered approaches to health information systems. Her research focuses on data governance, participatory design, and the intersection of health equity and technology. She holds a PhD in Health Informatics from the University of Oslo and has published extensively on health information system implementation in low-resource settings. Under her leadership, HISP India has grown to become a leading center of excellence for health information systems in South Asia.",
      },
      {
        id: "2",
        name: "Rajesh Kumar",
        role: "Deputy Director",
        bio: "Rajesh Kumar has been instrumental in scaling HISP India's operations across multiple states and countries. With a background in computer science and public health, he bridges technical innovation with practical implementation needs. He oversees program management, strategic partnerships, and operational excellence across all HISP India initiatives. Rajesh has led the design and deployment of over 50 health information system projects, ranging from district-level implementations to national programs. His expertise includes system integration, data architecture, and building sustainable technical teams. He is passionate about mentoring the next generation of health informaticians and regularly teaches at academic institutions.",
      },
    ],
  },
  {
    name: "Program & Technical Management",
    members: [
      {
        id: "3",
        name: "Priya Sharma",
        role: "Senior Program Manager",
        bio: "Priya Sharma specializes in managing complex, multi-stakeholder health information system programs. With 12 years of experience in program management and public health, she ensures seamless coordination between technical teams, government partners, and implementing organizations. She has successfully managed DHIS2 implementations across 8 Indian states, covering diverse health programs including maternal and child health, disease surveillance, and health facility management. Priya excels at stakeholder engagement, change management, and building strong relationships with government officials and community partners. She holds a Master's in Public Health and project management certifications, bringing structured methodology to complex health system challenges.",
      },
      {
        id: "4",
        name: "Amit Patel",
        role: "Technical Lead",
        bio: "Amit Patel leads technical architecture and development across HISP India's portfolio of projects. With expertise in DHIS2, OpenMRS, and data integration platforms, he designs scalable and sustainable health information system architectures. Amit has contributed to DHIS2 core development and has deep knowledge of health information exchange standards including FHIR and HL7. He works closely with implementation teams to translate user requirements into technical solutions and ensures adherence to software development best practices. His focus areas include interoperability, data quality frameworks, and performance optimization of large-scale health information systems. Amit is also active in the global HISP developer community and contributes to open-source health information system tools.",
      },
    ],
  },
  {
    name: "Project Support (Implementation)",
    members: [
      {
        id: "5",
        name: "Sneha Reddy",
        role: "Implementation Specialist",
        bio: "Sneha Reddy brings grassroots implementation expertise to HISP India's projects. She works directly with health workers, data managers, and district health officials to deploy and support health information systems. With a background in social work and information technology, Sneha excels at understanding user needs and designing context-appropriate solutions. She has supported DHIS2 implementations in over 30 districts across India, conducting user training, system configuration, and ongoing technical support. Sneha is skilled at troubleshooting field-level challenges and building strong relationships with frontline health workers. Her user-centered approach ensures that systems are not only technically sound but also practically useful for end users in diverse settings.",
      },
      {
        id: "6",
        name: "Vijay Desai",
        role: "Implementation Specialist",
        bio: "Vijay Desai specializes in configuring and customizing DHIS2 and OpenMRS systems to meet specific program requirements. He works closely with state health departments and implementing partners to translate health program indicators and workflows into system configurations. With 8 years of experience in health information system implementation, Vijay has expertise in metadata design, data validation rules, and dashboard development. He conducts comprehensive training sessions for system administrators and data managers, ensuring local capacity for system maintenance and support. Vijay's analytical mindset and attention to detail ensure that implementations are technically robust and aligned with program monitoring and evaluation needs. He also contributes to developing implementation toolkits and best practice documentation.",
      },
    ],
  },
  {
    name: "Project Support (Development & Infrastructure)",
    members: [
      {
        id: "7",
        name: "Kavita Menon",
        role: "Senior Software Developer",
        bio: "Kavita Menon is a full-stack developer with expertise in health information system technologies including DHIS2, React, Java, and PostgreSQL. She develops custom applications, integrations, and analytical tools to extend the functionality of core health information systems. Kavita has built mobile applications for community health workers, data integration pipelines connecting multiple health systems, and advanced analytics dashboards for health program managers. She is passionate about writing clean, maintainable code and follows test-driven development practices. Kavita also mentors junior developers and conducts technical training workshops. Her work ensures that HISP India's technical solutions are scalable, secure, and performant. She actively contributes to open-source health informatics projects and stays current with emerging technologies.",
      },
      {
        id: "8",
        name: "Arjun Nair",
        role: "DevOps Engineer",
        bio: "Arjun Nair manages infrastructure, deployment, and system reliability for HISP India's health information systems. He ensures high availability, security, and performance of production systems serving millions of users across India. With expertise in cloud platforms (AWS, Azure), containerization (Docker, Kubernetes), and monitoring tools, Arjun implements robust infrastructure solutions that scale with growing user demands. He has designed and deployed infrastructure for national-scale DHIS2 instances processing millions of data records daily. Arjun's proactive monitoring and incident response ensure minimal downtime and rapid resolution of technical issues. He also implements security best practices, backup strategies, and disaster recovery plans. His work provides the stable technical foundation that allows health programs to rely on data systems for critical decision-making.",
      },
    ],
  },
  {
    name: "Capacity Building",
    members: [
      {
        id: "9",
        name: "Dr. Meera Iyer",
        role: "Head of Capacity Building",
        bio: "Dr. Meera Iyer leads HISP India's training and education initiatives, building sustainable local capacity for health information systems. With a PhD in Education Technology and extensive experience in health informatics training, she designs comprehensive capacity building programs for diverse audiences from community health workers to senior health officials. Dr. Iyer has trained over 500 professionals across India and neighboring countries in DHIS2, data analysis, and health information system management. She develops training curricula, e-learning materials, and certification programs that combine technical skills with understanding of health systems and data use for decision making. Her teaching philosophy emphasizes hands-on learning, peer support, and building communities of practice. Dr. Iyer's work ensures long-term sustainability of health information systems through capable, confident local teams.",
      },
      {
        id: "10",
        name: "Sandeep Joshi",
        role: "Training Coordinator",
        bio: "Sandeep Joshi coordinates and delivers training programs for health information system users across HISP India's projects. He conducts needs assessments, develops training schedules, and facilitates workshops ranging from basic data entry to advanced system administration. With 10 years of experience in adult education and health information systems, Sandeep excels at making complex technical concepts accessible to non-technical audiences. He has trained thousands of health workers, data entry operators, and program managers in using DHIS2 and other health information tools. Sandeep develops context-specific training materials in multiple languages and adapts teaching methods to different learning styles and technical literacy levels. His patient, supportive approach builds confidence in system users and reduces resistance to technology adoption. He also provides ongoing mentoring and follow-up support after formal training sessions.",
      },
    ],
  },
  {
    name: "Research",
    members: [
      {
        id: "11",
        name: "Dr. Anjali Verma",
        role: "Senior Research Scientist",
        bio: "Dr. Anjali Verma leads research initiatives exploring health information systems, digital health, and health equity. With a PhD in Public Health and postdoctoral training in implementation science, she designs and conducts rigorous research studies examining the design, implementation, and impact of health information systems. Her current research focuses on data governance, participatory design methodologies, and addressing health inequities through improved data systems. Dr. Verma has published over 30 peer-reviewed articles and serves as a reviewer for leading health informatics journals. She collaborates with academic institutions globally and mentors graduate students conducting health informatics research. Her work bridges academic research with practical implementation, ensuring HISP India's approaches are evidence-based and contribute to the broader knowledge base in the field.",
      },
      {
        id: "12",
        name: "Rohan Gupta",
        role: "Research Associate",
        bio: "Rohan Gupta supports research projects and conducts data analysis to evaluate health information system implementations and their impact on health outcomes. With a background in statistics and epidemiology, he designs data collection instruments, analyzes complex datasets, and produces research reports and manuscripts. Rohan's analytical work helps identify best practices, understand implementation challenges, and demonstrate the value of health information systems to stakeholders and funders. He has contributed to studies on data quality, system usability, and the relationship between data use and health service delivery. Rohan is proficient in statistical software including R, Python, and STATA, and applies advanced analytical methods including multilevel modeling and causal inference techniques. His work provides the evidence base that informs continuous improvement of HISP India's approaches and contributes to the global health informatics literature.",
      },
    ],
  },
  {
    name: "HR & Accounts",
    members: [
      {
        id: "13",
        name: "Lakshmi Rao",
        role: "HR Manager",
        bio: "Lakshmi Rao manages human resources, talent acquisition, and organizational development for HISP India. She oversees recruitment processes, employee onboarding, performance management, and professional development programs. With 15 years of HR experience in the nonprofit and social enterprise sectors, Lakshmi has built a people-centered culture that attracts and retains talented professionals committed to public good. She implements HR policies that promote work-life balance, diversity and inclusion, and continuous learning. Lakshmi works closely with team leads to understand staffing needs, develop job descriptions, and conduct recruitment drives. She also manages employee benefits, grievance redressal, and compliance with labor regulations. Her focus on employee wellbeing and professional growth has contributed to high team satisfaction and low turnover at HISP India.",
      },
      {
        id: "14",
        name: "Suresh Nambiar",
        role: "Finance & Accounts Manager",
        bio: "Suresh Nambiar oversees financial management, budgeting, and accounting for HISP India's operations and projects. He ensures financial transparency, compliance with donor requirements, and efficient use of resources. With a CA qualification and 12 years of experience in nonprofit financial management, Suresh manages project budgets ranging from small grants to multi-million dollar programs. He prepares financial reports for donors, conducts financial monitoring of field operations, and provides financial analysis to support strategic decision making. Suresh implements robust internal controls, manages banking and treasury operations, and ensures timely audit completion. He works closely with program managers to develop realistic budgets and provides training on financial management to project staff. His meticulous financial stewardship enables HISP India to maintain donor confidence and sustain impactful programs.",
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

      {departments.map((department, deptIndex) => (
        <section key={deptIndex} className={deptIndex % 2 === 0 ? "py-16 md:py-20" : "py-16 md:py-20 bg-muted"}>
          <div className="container">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">{department.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
      ))}

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
