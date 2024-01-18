// ConsultingPage.jsx
import React from "react";
import ServiceCard from "./ServiceCard";
import "./services.css";

const ConsultingPage = () => {
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
    <div className="Consult_container grid">
      {consultingServices.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
};

export default ConsultingPage;