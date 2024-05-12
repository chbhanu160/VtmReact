// About.jsx

import React from "react";
import "./about.css";
import AboutCard from "./AboutCard";

const About = () => {
  const overviewText = `
    Visionary TechMate is to create a talent pool that will be equipped with requisite expertise 
    on cutting edge technologies, and be technically and professionally prepared to join the highly 
    specialized workforce at MNC's. Our mission is to show the right direction to the young and 
    experienced talent who are struggling in their careers. Our transformational learning programs 
    to young and experienced professionals on cutting edge technologies will help them to grow faster 
    in the fast-paced corporate environment. We assess the trainees, suggest the right course based on 
    their skills, we track the individual trainee performance, identifies the improvement areas on weekly 
    basis, perform the quality check on how effectively subject is reaching to the trainees, will help them 
    in clearing the external certification with the help of series of grand tests & mock interviews, thereby 
    achieve the excellence and will make them corporate sustainable and successful.
  `;

  const specialtiesList = [
    "Azure",
    "Cloud",
    "Security",
    "IT Services",
    "AWS",
    "ETL",
    "Admin",
    "Consultancy",
    "Job assistance",
    "GCP",
    "Cloud Computing",
    "Data modeling",
    "Machine learning",
    "Artificial Intelligence",
    "Data science",
    "Power BI",
    "Tableau",
    "Azure Data Factory",
    "Azure Cloud",
    "Data Engineer",
    "Data Analyst",
  ];

  return (
    <div className="about-container">
  
      <div className="about-overview-box">
        <h2>Overview</h2> <br />
        <p>{overviewText}</p>
      </div>
      <div className="specialties-box">
        <h2>Specialties</h2>
        <div className="specialties-cards">
          {specialtiesList.map((specialty, index) => (
            <div key={index} className="specialty-card">
              {specialty}
            </div>
          ))}
        </div>
      </div>
      {/* <AboutCard /> */}
    </div>
  );
};

export default About;
