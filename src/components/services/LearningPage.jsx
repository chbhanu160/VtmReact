// LearningPage.jsx
import React from "react";
import ServiceCard from "./ServiceCard";
import "./services.css";
const LearningPage = () => {
  const learningServices = [
    {
      id: 1,
      icon:'fa-graduation-cap',
      name: "Training Programs:",
      bulletPoints: ["Technical Training: Courses covering programming languages, software development methodologies, database management, networking, cybersecurity, etc.","Certification Training: Preparation courses for industry-recognized certifications such as CompTIA, Cisco, Microsoft, AWS, etc."],
    },
    {
      id: 2,
      icon:'fa-globe',
      name: "Workshops and Seminars:",
      bulletPoints: ["Customized workshops and seminars on specific technologies or industry trends.","Hands-on training sessions to provide practical experience." ],
    },
    {
      id: 3,
      icon:'fa-earth-oceania',
      name: "E-Learning Solutions:",
      bulletPoints: ["Online courses and modules for remote learning.Interactive e-learning platforms with multimedia content." ],
    },
    {
      id: 4,
      icon:'fa-file-circle-exclamation',
      name: "Corporate Training:",
      bulletPoints: ["Tailored training programs for businesses to enhance the skills of their employees.","Corporate workshops on topics like project management, Agile methodologies, etc." ],
    },
    {
      id: 5,
      icon:'fa-cloud',
      name: "Consulting Services:",
      bulletPoints: ["Advisory services to help businesses identify and address their specific IT learning needs. ","Guidance on technology adoption, skill development, and IT strategy." ],
    },
    {
      id: 6,
      icon:'fa-pen-nib',
      name: "Learning Management Systems (LMS):",
      bulletPoints: ["Development and implementation of customized learning management systems to track and manage training programs. " ],
    },
    {
      id: 7,
      icon:'fa-bars',
      name: "Custom Content Development:",
      bulletPoints: ["Creation of custom training materials, including e-books, videos, simulations, and assessments." ],
    },
    {
      id: 8,
      icon:'fa-bolt',
      name: "Skill Assessments and Testing:",
      bulletPoints: ["Pre-assessment of skills to identify knowledge gaps.Certification exams and assessments to validate acquired skills." ],
    },
    {
      id: 9,
      icon:'fa-circle-info',
      name: "Career Development Services:",
      bulletPoints: ["Career counseling and guidance for individuals looking to advance in their IT careers.Job placement assistance and resume building workshops." ],
    },
    {
      id: 10,
      icon:'fa-file',
      name: "Technology Workforce Solutions: ",
      bulletPoints: ["Providing skilled IT professionals to organizations on a temporary or permanent basis.IT recruitment services." ],
    },

  ];

  return (
    <div className="page-container">
      <div className="head_service">
        <h1 id="learn_title">Learning Services</h1>
      </div>
      <div className="Learn_container grid">
        {learningServices.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default LearningPage;