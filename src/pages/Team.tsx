import { useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { Users, Award, Heart } from "lucide-react";
import sundeepSahayImage from "@/assets/sundeep-sahay.png";
import arunimaImage from "@/assets/arunima-s-mukherjee.png";
import saurabhImage from "@/assets/saurabh-leekha.png";
import mithileshImage from "@/assets/mithilesh-kumar-thakur.png";
import rashiImage from "@/assets/rashi-banta.png";
import chahatImage from "@/assets/chahat-narula.png";
import gitikaImage from "@/assets/gitika-arora.png";
import sumitTripathiImage from "@/assets/sumit-kumar-tripathi.png";
import sumitPoudelImage from "@/assets/sumit-poudel.png";
import mohinderImage from "@/assets/mohinder-singh.png";
import deepikaImage from "@/assets/deepika.png";
import akshitaImage from "@/assets/akshita-pundir.png";
import kanavImage from "@/assets/kanav-banta.png";
import nehaChadhaImage from "@/assets/neha-chadha.png";
import nehaJoshiImage from "@/assets/neha-joshi.png";
import prakamyaImage from "@/assets/prakamya-arora.png";
import subhashImage from "@/assets/subhash-chand.png";
import sureshImage from "@/assets/suresh-kumar.png";
import vipinImage from "@/assets/vipin-kumar-gerlack.png";
import yogeshImage from "@/assets/yogesh-chand.png";
import bhuvneshwarImage from "@/assets/bhuvneshwar-thakur.png";
import shashikantImage from "@/assets/shashikant-sharma.png";
import mitushiImage from "@/assets/mitushi-kohli.png";
import nawazImage from "@/assets/mohd-nawaz.png";

const departments = [
  {
    name: "Leadership",
    members: [
      {
        id: "1",
        name: "Sundeep Sahay",
        role: "Founder/Mentor",
        imageUrl: sundeepSahayImage,
        bio: "Sundeep Sahay has been the Founder/Mentor of HISP India since its inception in 1999. With a specialization in information systems, he has worked in the domain of health information systems research and implementation for over a decade in India and in several other countries including South Africa, Mozambique, Ethiopia, Tanzania, Tajikistan, Bangladesh, Sri Lanka and Vietnam. He has authored more than 150 internationally peer-reviewed articles, supervised more than 15 doctoral students and various masters students. He holds post graduate degrees in Management (India), Engineering (India), Information Systems (USA), Philosophy (Canada) and Public Health (South Africa).",
      },
      {
        id: "4",
        name: "Arunima S Mukherjee",
        role: "Research Advisor",
        imageUrl: arunimaImage,
        bio: "Arunima has been working with HISP since 2008, as the lead of HISP India's Health Systems cluster. She has a background in Social Sciences with specializations in Geography and Development Communication for her bachelors and masters respectively. She has about 15 years professional experience including as a Journalist and a Programme Manager within the public health system in an Indian state. She has particular research interest in challenges pertaining to the scaling up of mobile based health information systems. She additionally serves as the Coordinator of the Himachal Pradesh project of HISP, where HISP is implementing an 'integrated e-health architecture' comprising of mobile HIS, Hospital IS, and tracking system for mother care and child immunization in addition to the routine health IS based on DHIS2. She has led the initiative to design, develop and implement an open source (on OpenMRS) hospital information system for the district hospital network, arguably the first of its kind in India.",
      },
      {
        id: "2",
        name: "Saurabh Leekha",
        role: "Chief Executive Officer",
        imageUrl: saurabhImage,
        bio: "Saurabh has joined HISP India in December 2012 and is currently working as CEO. He has done Post Graduation in Hospital and Healthcare Management with specialization in Health Information Technology Management from IIHMR, Delhi. He has 4 years of experience, has been involved in requirements management and customization of various public health systems based on DHIS2 such as Routine HMIS for Indian States, as well as health information systems for various organizations working in public health delivery sector.",
      },
      {
        id: "9",
        name: "Mithilesh Kumar Thakur",
        role: "Head - Technical Systems",
        imageUrl: mithileshImage,
        bio: "Mithilesh has been working in HISP-India since May 2010 as the head- technical systems focusing on development activities in DHIS2 and also taking care of the Dhis2 application servers, including server setup, Database optimization, Application optimization, manage applications on ownCloud. He is a post graduate in computer application with 2 years of experience as a software developer in a large public sector organization.",
      },
      {
        id: "29",
        name: "Rashi Banta",
        role: "Management/ISO/Research",
        imageUrl: rashiImage,
        bio: "Ms. Rashi Banta is a post graduate in management with over 20 years of valuable hands-on experience in MNCs, Corporate and NGOs. She is a versatile and experienced professional specializing in management, ISO coordination, compliance, and government liaison. Demonstrated expertise in business development, academic coordination, and organizing international academic conferences such as HDCA and IHIP. Skilled in research related to antimicrobial resistance (AMR) projects, with a strong focus on fostering collaboration across diverse stakeholders. Key Skills and Expertise: Project Management & Coordination - Proven ability to manage complex projects, streamline operations, and ensure successful execution of academic and business initiatives under openMRS & DHIS2. ISO Coordination & Compliance - Proficient in developing, implementing, and maintaining ISO standards to ensure operational excellence and regulatory compliance. Successfully coordinated high-profile international academic conferences, including HDCA and IFIP. Played a key role in AMR-related projects, contributing to impactful research and policy recommendations.",
      },
      {
        id: "5",
        name: "Chahat Narula Thakur",
        role: "Head – Project Operations",
        imageUrl: chahatImage,
        bio: "Chahat Narula is a driven and compassionate healthcare professional with over 12 years of experience in health systems strengthening, digital health, and project management. Currently serving as the Head of Project Operations at HISP India, she provides techno-managerial leadership to teams, oversees field-based interventions, and ensures the successful execution of health information system projects. Chahat is a post-graduate in Health and Hospital Management from IIHMR, New Delhi, and a B.Tech in Biotechnology. She has played a key role in preparing technical reports, stakeholder engagement, and knowledge dissemination across national and international projects. Her experience spans digital health implementations, immunization programs, and hospital information systems in India, Kenya, and Bangladesh. Chahat is committed to improving performance and productivity by setting realistic goals, enforcing deadlines, and driving impactful collaborations in the healthcare sector.",
      },
      {
        id: "3",
        name: "Gitika Arora",
        role: "Head - Health Systems",
        imageUrl: gitikaImage,
        bio: "Gitika is currently working as Head - Health Systems in HISP India since June 2013. She has done Bachelors in Dental Surgery and is a Post Graduate in Hospital and Healthcare Management with specialization in Healthcare IT. She has a good domain knowledge of design, customization, and implementation of DHIS2 in various national and international projects. Currently she is leading the digitisation activities under the domain of Antimicrobial Surveillance. She has been closely working with the World Health Organisation on various DHIS2 implementation projects globally.",
      },
    ],
  },
  {
    name: "Program & Technical Management",
    members: [
      {
        id: "7",
        name: "Sumit Kumar Tripathi",
        role: "Program Manager - DHIS2",
        imageUrl: sumitTripathiImage,
        bio: "Sumit Kr Tripathi has been working with HISP India since 2014. He has done Post Graduation in Hospital and Healthcare Management with specialization in Health IT along with a Graduation degree in Physiotherapy. He has been involved in requirements management and implementation of various public health systems based on DHIS2.",
      },
      {
        id: "8",
        name: "Sumit Poudel",
        role: "Technical Manager - DHIS2",
        imageUrl: sumitPoudelImage,
        bio: "A web developer with over four years of experience in building responsive web applications and working with DHIS2 implementations. He specializes in technical management and development of health information systems.",
      },
      {
        id: "10",
        name: "Mohinder Singh",
        role: "Head - Infrastructure Management",
        imageUrl: mohinderImage,
        bio: "Mohinder is working in Hisp India as an IT - Infrastructure management. He holds a B.Sc. and M.Sc. in information technology. He also holds the Red Hat Certified Engineer (RHCE). He has over 8+ years of experience as a server administrator. He managed a wide range of Linux and Window servers, including those from AWS, Linode, DigitalOcean, Google Cloud, Physical and other hostings. He is in charge of the Dhis2 application servers, which includes server configuration, database and application optimisation, daily backup management, application and server security patch updates. He also manages the team's and the client's troubleshooting of application-related problems. He is proficient with Kubernetes, Ansible and the LXC containerisation tools. He has experience working with states Himachal Pradesh, Maharashtra, Manipur, Mizoram, Odisha, Tamil Nadu etc, and countries Bhutan, Nepal, Libya, Rwanda, Kyrgyzstan, Sri Lanka, Bangladesh, Philippines and Myanmar (AMR Projects, FPOP, FHAI, WHO, Save the Children) ETC.",
      },
    ],
  },
  {
    name: "Project Support (Implementation)",
    members: [
      {
        id: "6",
        name: "Deepika",
        role: "Sr Advisor - DHIS2",
        imageUrl: deepikaImage,
        bio: "Deepika has been associated with HISP India for several years, working on various DHIS2 implementations. She has a graduate degree in Biomedical Sciences from Delhi University and did her masters in healthcare management (specialisation in Healthcare IT) from IIHMR, Delhi. She has been involved in multiple DHIS2 implementation projects Nationally and Internationally. Her major domain is Design and Customisation. She has around 7 years of working experience in healthcare industry.",
      },
      {
        id: "11",
        name: "Akshita Pundir",
        role: "Sr. Project Officer",
        imageUrl: akshitaImage,
        bio: "She worked with HISP India as a consultant before joining as a HIS Officer. She completed her M.E in Biotechnology from BITS, Pilani and has worked on two projects so far: 1) NIMR (B.tech Final year dissertation) - Detection of Dengue virus and Malarial parasite through molecular techniques. 2) BITS Pilani, Pilani (Research Practice, Sem-II) - To study polymorphism in Circumsporozoite Protein of Plasmodium falciparum.",
      },
      {
        id: "12",
        name: "Kanav Banta",
        role: "Sr. Project Coordinator - DHIS2",
        imageUrl: kanavImage,
        bio: "Kanav is a Senior Project Coordinator at HISP India, bringing over 11 years of experience to the customization and implementation of health information system initiatives. Specializing in DHIS2 customization and data management, he has effectively managed large-scale national and international projects, including those for IPPF SARO, IPPF ESEAOR, Save the Children-Nepal, FHI 360, PSTC Bangladesh, Tibetan Voluntary Health Association-India & Nepal, and Mizoram IPA. Kanav's responsibilities encompass comprehensive project management activities, from requirements gathering and system configuration to stakeholder coordination, capacity building, and troubleshooting. A graduate of Annamalai University with a Bachelor of Business Administration and a computer diploma, his contributions have positively impacted public health programs throughout India, Bhutan, Nepal, and Bangladesh, demonstrating his expertise in leading and executing complex health informatics projects.",
      },
      {
        id: "13",
        name: "Neha Chadha",
        role: "Sr. Project Officer",
        imageUrl: nehaChadhaImage,
        bio: "Neha completed her M.E in Biotechnology from BITS PILANI and has been working with HISP India since 2019. She started as an intern and has grown into her current role as a Senior Project Officer. While her core project focuses on Antimicrobial Resistance (AMR), she also plays an active role in the ISO compliance and Strategic Communication teams, further diversifying her contributions.",
      },
      {
        id: "14",
        name: "Neha Joshi",
        role: "Advisor - DHIS2",
        imageUrl: nehaJoshiImage,
        bio: "Neha Joshi has been an integral part of HISP-India since August 2009, initially joining as a Mobile Health Coordinator. In this role, she successfully implemented mobile health projects at the community level across various states. Drawing from her prior experiences at esteemed mobile operator giants like Airtel and TATA, Neha brought valuable insights to her work. Presently, Neha serves as an Advisor, primarily focusing on DHIS2 implementation in Indian states. Her responsibilities extend to managing DHIS2 implementation projects in Maharashtra and Odisha, as well as collaborating with DMCH, Ludhiana, for the implementation of community-based applications. Additionally, she plays a crucial role in the Piramal Swasthya project, where she is involved in designing interactive dashboards within DHIS2. Beyond her DHIS2 implementations, Neha actively participates as a team member in field-level research under the 'Equity AMR' project. Her academic qualifications include a postgraduate degree and a diploma in Health & Family Welfare, further enhancing her expertise and contributions to the field.",
      },
      {
        id: "15",
        name: "Prakamya Arora",
        role: "Project Officer",
        imageUrl: prakamyaImage,
        bio: "Dr. Prakamya joined the organization three years ago as a Health Information Officer and has since been promoted to Senior Project Officer. A BDS graduate with a Post Graduate Diploma in Health and Hospital Management from IIHMR, Delhi, she specializes in understanding client requirements, customization, and training. She has worked on major projects, including various countries under the IPPF project and IPA Mizoram.",
      },
      {
        id: "16",
        name: "Subhash Chand",
        role: "Sr. Project Coordinator - AMR",
        imageUrl: subhashImage,
        bio: "Joined HISP India in September 2013 and currently working as a Sr. Project Coordinator. Possesses over 11 years of experience in Hospital Projects and DHIS-2-based HMIS. Holds a Bachelor of Computer Applications (BCA) and a Master of Business Administration (MBA) in Information and Technology. Areas of Expertise: Requirements gathering, Configuration, Implementation, Documentation, Training, Testing. Support Projects Involved: Himachal e-Health Project, UIO-NFR INTPART CCC PGI, INTPART-HP, Tibetan Voluntary Health Association-Tibet, UPHMIS, Equity AMR RCN. Previous Experience: Worked with UIDAI as a Technical Administrator from September 2012 to September 2013, gaining 1 year of experience in the role.",
      },
      {
        id: "17",
        name: "Suresh Kumar",
        role: "Sr. Project Coordinator - OpenMRS",
        imageUrl: sureshImage,
        bio: "Suresh is a Senior Project Coordinator at HISP India since September 2013, bringing over 11 years of experience in hospital projects and DHIS-2-based HMIS. He holds an MBA from HP University and a diploma in IT from NIIT. His responsibilities include requirements gathering, configuration, implementation, documentation, training, testing, and support. He has contributed to projects such as Himachal e-Health Project, PGI INTPART-HP, Tibetan Voluntary Health Association-Tibet, Kenya EHR, Mizoram HMIS, NIPI, IPPF, Myanmar HMIS, and Piramal.",
      },
      {
        id: "18",
        name: "Vipin Kumar Gerlack",
        role: "Sr. Project Coordinator - DHIS2",
        imageUrl: vipinImage,
        bio: "Vipin Gerlack is a Senior Project Coordinator at HISP India with over 11 years of experience in health information systems. He specializes in end-to-end project execution, from conceptualization to implementation, with expertise in DHIS2 customization, capacity building, and troubleshooting. He has independently managed critical projects, including the DHIS2-based UPHMIS, and has contributed to national and international initiatives such as the IPPF Business Portal, NIPI IPHS, Myanmar TV & Plan International. With a strong technical and strategic vision, Vipin ensures the seamless implementation and sustainability of health information systems. He holds a post graduate degree in Business Administration with a one-year certification in computer programming.",
      },
      {
        id: "19",
        name: "Yogesh Chand",
        role: "Advisor - DHIS2",
        imageUrl: yogeshImage,
        bio: "Yogesh Chand is a Public Health Informatics professional with over seven years of experience, currently serving as a Senior Advisor at HISP India. He specializes in leading end-to-end project execution, from conceptualization to implementation, across various health information system initiatives. With expertise in DHIS2 customization, data management, GIS integration, and digital surveillance, he has successfully managed large-scale national and international projects. He has independently handled critical projects, including the DHIS2-based Leprosy Information System, the WHO-integrated TB, Malaria, and HIV DHIS2 system in East Timor and other Projects over the years. His role involves project management, requirements gathering, system configuration, stakeholder coordination, capacity building, and troubleshooting. With a strong technical and strategic vision, Yogesh ensures smooth implementation and sustainability of health information systems. He holds a Bachelor's in Biotechnology and a postgraduate diploma in Health Management (Health IT) from IIHMR, New Delhi. His work has impacted public health programs across India, Bhutan, Nepal, Bangladesh, and East Timor, reinforcing his ability to lead and execute complex health informatics projects.",
      },
    ],
  },
  {
    name: "Project Support (Development & Infrastructure)",
    members: [
      {
        id: "20",
        name: "Bhuvneshwar Thakur",
        role: "Sr. Infrastructure Administrator",
        imageUrl: bhuvneshwarImage,
        bio: "Bhuvneshwar is working as Sr. Infrastructure Administrator in our organization. Over 10 years of experience in the I.T industry with a variety of roles and responsibilities. He is responsible for supporting the development and implementation of the IT infrastructure strategy and roadmap to ensure that the organization's technology infrastructure is reliable, scalable, and secure including servers, end-user IT inventory, and storage/backup systems. Also, taking care of TVHA (which are part of our projects) which includes server hardening, database tuning, server management, and support. Prior to our organization, he was associated with Himachal Pradesh Secretariat Shimla (H.P). He also manages the team's and the client's troubleshooting of application-related problems. Also responsible for dhis2 states and openMRS servers.",
      },
      {
        id: "21",
        name: "Shashikant Sharma",
        role: "Software Developer",
        imageUrl: shashikantImage,
        bio: "I'm Shashikant Sharma, working as a Software Developer at HISP India. My main focus is on DHIS2-related projects, where I use React.js to build user-friendly and effective solutions for health programs.",
      },
      {
        id: "22",
        name: "Mitushi Kohli",
        role: "Jr. Software Developer",
        imageUrl: mitushiImage,
        bio: "Mitushi has completed her BTech in Computer Science and Engineering from Jaypee University of Information Technology, Waknaghat. She is currently the software intern. She has worked on innovative projects like a YouTube Summarizer using LLM, and MOOC Course Recommendation System. Her interpersonal skills include problem-solving, teamwork, and adaptability.",
      },
      {
        id: "23",
        name: "Mohd Nawaz",
        role: "Frontend Developer",
        imageUrl: nawazImage,
        bio: "Mohd Nawaz is a skilled Frontend Developer with expertise in React.js, JavaScript, and database management (MySQL). Proficient in C++, he has built scalable applications like a Doctor Appointment Web App and an Apartment Rental System. With strong problem-solving skills, he develops high-performance solutions and is always ready to learn new tech stacks.",
      },
    ],
  },
  {
    name: "Research Team",
    members: [
      {
        id: "25",
        name: "Jyotsna Sahay",
        role: "Researcher - HIS",
        bio: "Jyotsna is working as HIS- Researcher at HISP India aimed at evaluating ongoing DHIS2 implementation efforts in state governments in India, and trying to discern best practices which can strengthen these efforts. This work also feeds into the University of Oslo research efforts on DHIS2 evaluation research within the global HISP network.",
      },
      {
        id: "28",
        name: "Vinay Modgil",
        role: "Senior Data Scientist",
        bio: "Dr. Vinay Modgil has been working with HISP India as a Senior Data Scientist since June 16, 2023. He holds a Bachelor's degree in Medical Science and a Master's in Biotechnology from Himachal Pradesh University, Shimla, Himachal Pradesh. He qualified for the CSIR NET/JRF exam with an All-India Rank of 75th and completed his PhD from Post Graduate Institute of Medical sciences and Education (PGIMER), Chandigarh. Previously, he worked as a Senior Researcher at PGIMER, he worked on a DBT-funded project in collaboration with the University of Bristol, UK, studying antimicrobial resistance (AMR) in environmental contexts. His research provided key insights into the environmental factors influencing AMR spread. He has also been actively involved in teaching and academic discussions, leading weekly journal clubs and seminars on international publications and delivering bi-monthly seminars on various topics to residents, M.Sc. and Ph.D. students at PGIMER Chandigarh. He has a strong portfolio of research publications and extensive experience in analysing AMR data from clinical samples in hospital settings. He received the Best Published Paper award in Bacteriology (2019) from the Indian Association of Medical Microbiologists during the 44th National Conference of IAMM in Guwahati.",
      },
      {
        id: "24",
        name: "Gian Singh Negi",
        role: "Research Associate",
        bio: "Gian Singh Negi is working with HISP India from May 2023. He has done his Masters and Ph.D. in Anthropology from Panjab University, Chandigarh. In 2014, he was awarded Doctoral fellowship by University Grants Commission (UGC), New Delhi. He had more than 5 years of experience as research and teaching assistant in Panjab University, Chandigarh. He has expertise in qualitative & quantitative research, and his major area of research is Biological and Biosocial Anthropology. In the past, He has worked as a researcher with PGIMER, Chandigarh on a project focusing on Antimicrobial resistance (AMR) in environment in collaboration with University of Bristol, U.K. His role at HISP India is to conduct study on qualitative research for the EquityAMR project. His research focuses on socio-cultural drivers of Antimicrobial resistance (AMR), especially in the most vulnerable communities and AST-culture-positive patients of Civil Hospital Baddi.",
      },
      {
        id: "27",
        name: "Rashmi Surial",
        role: "Research Assistant",
        bio: "RASHMI is working as Research assistant in HISP India from August 2022. She has done Bachelors in Microbial Food Tech (MFT) from Panjab University and Masters in Microbiology from Himachal Pradesh University. In the past, she has done various Industrial trainings on dairy technology and fermentation in Verka milk plant and Bio-age lab, Mohali. She has earlier worked in PGIMER as Field Investigator under DBT project focusing on Environment and Anti-microbial resistance (AMR) in collaboration with University of Bristol, U.K. She has done environmental sampling of water and soil from Kangra. She has the experience of culturing urine, stool, water and soil samples. She has also gained experience in conducting qualitative research, in-depth interviews, maintaining field notes, and observations.",
      },
      {
        id: "26",
        name: "Oshin Sinha",
        role: "Junior Research Fellow",
        bio: "Oshin Sinha is working as a Junior research fellow with HISP India since August 2023. She holds a Bachelor's degree in Zoology from Himachal Pradesh University and a Master's degree in Microbiology from DAV University. She has gained practical laboratory training in microbiology lab from RPGMC Tanda and Fortis Hospital. She has extensive experience in medical microbiology research and specialized in synthesizing copper nanoparticles for plant protection. Previously, she worked as Lab technician in PGIMER under a DBT project focusing on Environment and Antimicrobial resistance (AMR) in collaboration with University of Bristol, U.K. She has hands-on experience in the collection and processing of various clinical samples including urine, stool, pus swab, throat swab, ear swab, nasal swab, water sample testing and performing antibiotic sensitivity testing. She also has experience in analysing AMR data from clinical samples.",
      },
    ],
  },
  {
    name: "HR & Accounts Team",
    members: [
      {
        id: "30",
        name: "Meenakshi Sharma",
        role: "Head - Human Resources",
        bio: "Meenakshi is a post graduate in Human Resource, currently working as Human Resource - Head with HISP India. She has over 15 + years of working experience in the field of HR. At HISP India, she is responsible for managing the HR department, Employment Life Cycle, formulating policies, ensuring ISO Compliance, handling Employee Provident fund and providing Mediclaim assistance to the employees. She is taking care of the HR Department, Policy formulation, ISO Compliance, Employee Provident Fund, Employee mediclaim, Employee data management, Employee engagement, Appraisal process etc.",
      },
      {
        id: "31",
        name: "Nisha Attery",
        role: "Head - Accounts and Finance",
        bio: "Nisha has joined HISP India in June 2020. She is a Commerce Graduate and also completed her CA Inter along with 3 Years of Articleship training. She has 9 years of work experience in the Finance & Accounts field, Her current designation is Head - Accounts and Finance and she is responsible for overall supervision in Accounts & Finance Deptt.",
      },
      {
        id: "34",
        name: "Aman Jindal",
        role: "Head - Office Administration",
        bio: "Aman is a Commerce graduate from CCS university. He is working as Head- Office Admin in HISP India. He is responsible for Admin work of HISP India since April 2016.",
      },
      {
        id: "32",
        name: "Prem Chandra Tiwari",
        role: "Manager - Accounts and Finance",
        bio: "Prem Tiwari has joined HISP India since April 2016. He is a Commerce Graduate and also completed MBA in Finance from IMT-Ghaziabad with 12 years experience in Accounting & Taxation field. He is working as Manager- Finance and Accounts in HISP INDIA. He is responsible for managing the all payable accounts & statutory payment like TDS, GST, EPF, Salary, All expenses and maintain all accounting documentation in HISP INDIA.",
      },
      {
        id: "33",
        name: "Abhijit Jena",
        role: "Accounts Officer",
        bio: "Abhijit has joined HISP India in August 2023 as Accounts officer. He is a B.Com graduate. He did his graduation from Utkal University in 2018. Abhijit boasts over 6 years of expertise in Accounting & Taxation. His role encompasses Invoice Raising, GST handling, Documentation, and precise Book Keeping. Abhijit has been an essential part of our financial operations, ensuring accuracy and compliance in all tasks.",
      },
      {
        id: "35",
        name: "Anil Kumar",
        role: "Office Supervisor",
        bio: "Currently working as Office Assistant in HISP India. His duty includes: Ensuring the office runs smoothly, Managing office outside work, Performing general clerical and administrative tasks, Keeping record of HR & Accounts office supplies and stock, Helping manage the office correspondence.",
      },
    ],
  },
  {
    name: "Capacity Building & Digital Operations",
    members: [
      {
        id: "36",
        name: "Sahil Bhardwaj",
        role: "Coordinator - Digital Operations",
        bio: "Sahil Bhardwaj is a Digital Media Professional with over 10 years of experience in Web Development, Social Media Marketing, and Learning Management Systems (LMS). As the Coordinator - Digital Operations at HISP India, he leads digital initiatives to strengthen the organization's online presence and technical capabilities. Currently, Sahil is working on the DMGtasia Project, contributing his expertise in digital media and web technologies to enhance project efficiency. Alongside this, he is spearheading web development for HISP India, ensuring user-friendly and impactful digital platforms. His proficiency in website architecture, content strategy, and digital engagement has been instrumental in optimizing capacity-building efforts and online learning solutions. Passionate about technology-driven impact, Sahil continuously explores innovative ways to enhance digital communication and streamline operations, aligning with HISP India's mission of empowering public health informatics through open-source and collaborative solutions.",
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
                    imageUrl={member.imageUrl}
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
