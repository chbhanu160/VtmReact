// LearningPage.jsx
import React from "react";
import ServiceCard from "./ServiceCard";
import "./services.css";
import Heading from "../common/heading/Heading"
const LearningPage = () => {
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

  return (
   <>
     <div className="head_service">
      <h1>Learning Services</h1>
    </div>
    <div className="Learn_container grid">
    
      {learningServices.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
    
   </>
   
  );
};

export default LearningPage;
