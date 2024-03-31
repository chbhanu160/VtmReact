// ConsultingPage.jsx
import React from "react";
import ServiceCard from "./ServiceCard";
import "./services.css";

const ConsultingPage = () => {
  const consultingServices = [
    {
      id: 1,
      icon:'fa-gear',
      name: "IT Strategy and Planning:",
      bulletPoints:[ "Developing and aligning IT strategies with overall business objectives."," Creating technology roadmaps for future growth and innovation."]
    },
    {
      id: 2,
      icon:'fa-layer-group',
      name: "Digital Transformation:",
      bulletPoints:[ "Assisting organizations in adopting and integrating digital technologies.","  Implementing solutions for automation, IoT, and other digital initiatives."]
    },
    {
      id: 3,
      icon:'fa-lock',
      name: "IT Infrastructure Management:",
      bulletPoints:[ "Assessing and optimizing the existing IT infrastructure.","Planning and implementing upgrades, migrations, or transitions to new technologies."]
    },
    {
      id: 4,
      icon:'fa-bookmark',
      name: "Cybersecurity Consulting:",
      bulletPoints:[ "Assessing and enhancing security postures to protect against cyber threats.","  Developing and implementing cybersecurity policies and protocols."]
    },
    {
      id: 5,
      icon:'fa-cloud',
      name: "Cloud Computing Services:",
      bulletPoints:[ "Advising on cloud adoption strategies (public, private, or hybrid). "," Migration of applications and data to cloud platforms."," Managing and optimizing cloud resources."]
    },
    {
      id: 6,
      icon:'fa-share-from-square',
      name: "Enterprise Resource Planning (ERP):",
      bulletPoints:[ "Implementing and customizing ERP solutions for streamlined business processes."," Upgrading or optimizing existing ERP systems."]
    },
    {
      id: 7,
      icon:'fa-magnet',
      name: "Data Analytics and Business Intelligence:",
      bulletPoints:[ "Helping organizations derive insights from data.  ","  Implementing analytics tools and platforms."]
    },
    {
      id: 8,
      icon:'fa-key',
      name: "Project Management and Implementation:",
      bulletPoints:[ "Overseeing and managing IT projects from initiation to completion. "," Providing project management methodologies and best practices."]
    },
    {
      id: 9,
      icon:'fa-code',
      name: "Software Development and Integration:",
      bulletPoints:[ "Custom software development to meet specific business needs.","  Integration of third-party applications and systems."]
    },
    {
      id: 10,
      icon:'fa-binoculars',
      name: "Business Continuity and Disaster Recovery:",
      bulletPoints:[ "Designing and implementing plans to ensure business continuity. ","  Developing disaster recovery strategies and solutions."]
    },
    {
      id: 11,
      icon:'fa-handshake',
      name: "IT Governance and Compliance:",
      bulletPoints:[ "Ensuring compliance with industry regulations and standards."," Establishing governance frameworks for IT operations."]
    },
    {
      id: 12,
      icon:'fa-snowflake',
      name: "Vendor Management:",
      bulletPoints:[ "Evaluating and selecting technology vendors."," Managing relationships with technology suppliers."]
    },
    {
      id: 13,
      icon:'fa-cloud-arrow-up',
      name: "Managed IT Services:",
      bulletPoints:[ "Offering ongoing IT support, maintenance, and monitoring.  "," Proactive management of IT systems to prevent issues."]
    },
    {
      id: 14,
      icon:'fa-globe',
      name: "Web Development & Hosting Services:",
      bulletPoints:[ "We craft stunning and functional websites using the MERN stack, taking care of design, development, and secure hosting for your online success."]
    },
  ];

  return (
    <>
    <div className="page-container" >
      
    <div className="head_service">
      <h1 id="con_title" >Consulting Services</h1>
    </div>

    <div className="Consult_container grid">
      {consultingServices.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
    </div>
    </>
    
  );
};

export default ConsultingPage;