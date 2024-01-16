import React from "react"
// import Back from "../common/back/Back"
import ServiceCard from "./ServiceCard"
import "./services.css"
// import Faq from "./Faq"

const Services = () => {
  const learningServices = [
    {
      id: 1,
      name: "Training Programs:",
      bulletPoints: ["Technical Training: Courses covering programming languages, software development methodologies, database management, networking, cybersecurity, etc.","Certification Training: Preparation courses for industry-recognized certifications such as CompTIA, Cisco, Microsoft, AWS, etc."],
    },
    {
      id: 2,
      name: "Workshops and Seminars:",
      bulletPoints: ["Customized workshops and seminars on specific technologies or industry trends.","Hands-on training sessions to provide practical experience." ],
    },
    {
      id: 3,
      name: "E-Learning Solutions:",
      bulletPoints: ["Online courses and modules for remote learning.Interactive e-learning platforms with multimedia content." ],
    },
    {
      id: 4,
      name: "Corporate Training:",
      bulletPoints: ["Tailored training programs for businesses to enhance the skills of their employees.","Corporate workshops on topics like project management, Agile methodologies, etc." ],
    },
    {
      id: 5,
      name: "Consulting Services:",
      bulletPoints: ["Advisory services to help businesses identify and address their specific IT learning needs. ","Guidance on technology adoption, skill development, and IT strategy." ],
    },
    {
      id: 6,
      name: "Learning Management Systems (LMS):",
      bulletPoints: ["Development and implementation of customized learning management systems to track and manage training programs. " ],
    },
    {
      id: 7,
      name: "Custom Content Development:",
      bulletPoints: ["Creation of custom training materials, including e-books, videos, simulations, and assessments." ],
    },
    {
      id: 8,
      name: "Skill Assessments and Testing:",
      bulletPoints: ["Pre-assessment of skills to identify knowledge gaps.Certification exams and assessments to validate acquired skills." ],
    },
    {
      id: 9,
      name: "Career Development Services:",
      bulletPoints: ["Career counseling and guidance for individuals looking to advance in their IT careers.Job placement assistance and resume building workshops." ],
    },
    {
      id: 10,
      name: "Technology Workforce Solutions: ",
      bulletPoints: ["Providing skilled IT professionals to organizations on a temporary or permanent basis.IT recruitment services." ],
    },
  ];

  const consultingServices = [
    {
      id: 1,
      name: "IT Strategy and Planning:",
      bulletPoints:[ "Developing and aligning IT strategies with overall business objectives."," Creating technology roadmaps for future growth and innovation."]
    },
    {
      id: 2,
      name: "Digital Transformation:",
      bulletPoints:[ "Assisting organizations in adopting and integrating digital technologies.","  Implementing solutions for automation, IoT, and other digital initiatives."]
    },
    {
      id: 3,
      name: "IT Infrastructure Management:",
      bulletPoints:[ "Assessing and optimizing the existing IT infrastructure.","Planning and implementing upgrades, migrations, or transitions to new technologies."]
    },
    {
      id: 4,
      name: "Cybersecurity Consulting:",
      bulletPoints:[ "Assessing and enhancing security postures to protect against cyber threats.","  Developing and implementing cybersecurity policies and protocols."]
    },
    {
      id: 5,
      name: "Cloud Computing Services:",
      bulletPoints:[ "Advising on cloud adoption strategies (public, private, or hybrid). "," Migration of applications and data to cloud platforms."," Managing and optimizing cloud resources."]
    },
    {
      id: 6,
      name: "Enterprise Resource Planning (ERP):",
      bulletPoints:[ "Implementing and customizing ERP solutions for streamlined business processes."," Upgrading or optimizing existing ERP systems."]
    },
    {
      id: 7,
      name: "Data Analytics and Business Intelligence:",
      bulletPoints:[ "Helping organizations derive insights from data.  ","  Implementing analytics tools and platforms."]
    },
    {
      id: 8,
      name: "Project Management and Implementation:",
      bulletPoints:[ "Overseeing and managing IT projects from initiation to completion. "," Providing project management methodologies and best practices."]
    },
    {
      id: 9,
      name: "Software Development and Integration:",
      bulletPoints:[ "Custom software development to meet specific business needs.","  Integration of third-party applications and systems."]
    },
    {
      id: 10,
      name: "Business Continuity and Disaster Recovery:",
      bulletPoints:[ "Designing and implementing plans to ensure business continuity. ","  Developing disaster recovery strategies and solutions."]
    },
    {
      id: 11,
      name: "IT Governance and Compliance:",
      bulletPoints:[ "Ensuring compliance with industry regulations and standards."," Establishing governance frameworks for IT operations."]
    },
    {
      id: 12,
      name: "Vendor Management:",
      bulletPoints:[ "Evaluating and selecting technology vendors."," Managing relationships with technology suppliers."]
    },
    {
      id: 13,
      name: "Managed IT Services:",
      bulletPoints:[ "Offering ongoing IT support, maintenance, and monitoring.  "," Proactive management of IT systems to prevent issues."]
    },

  ];

  return (
    <>
      <section className='services padding'>
        <h3>Learning Services:</h3>
        <div className='container grid'>
          {learningServices.map((service) => (
            <ServiceCard
          key={service.id}
          name={service.name}
          bulletPoints={service.bulletPoints}
        />
          ))}
        </div>

        <h3 id="consult" >Consulting Services:</h3>
        <div className='container grid'>
          {consultingServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;