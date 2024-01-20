import React from "react";
import Heading from "../common/heading/Heading";
import "./Hservices.css";
import { Link } from "react-router-dom";

const Hservices = () => {
  return (
    <section className="hprice padding">
      <Heading subtitle="OUR Services" />
      <div className="Service_container">
        <div className="category">
          <h2 className="category-title">Learning Services</h2>
          <div className="tile">Training Programs</div>
          <div className="tile">Workshops and Seminars</div>
          <div className="tile">E-Learning Solutions</div>
          <div className="tile">Corporate Training</div>
          <div className="tile">Consulting Services</div>
          <div className="tile">Learning Management Systems (LMS) </div>
          <div className="tile">Custom Content Development</div>
          <div className="tile">Skill Assessments and Testing</div>
          <div className="tile">Career Development Services</div>
          <div className="tile">Technology Workforce Solutions</div>
          <Link to="/services/learning" className="view-all-btn">
            View All
          </Link>
        </div>

        <div className="category">
          <h2 className="category-title">Consulting Services</h2>
          <div className="tile">IT Strategy and Planning</div>
          <div className="tile">Digital Transformation</div>
          <div className="tile">IT Infrastructure Management</div>
          <div className="tile">Cybersecurity Consulting</div>
          <div className="tile">Cloud Computing Services</div>
          <div className="tile">Enterprise Resource Planning (ERP)</div>
          <div className="tile">Data Analytics and Business Intelligence</div>
          <div className="tile">Project Management and Implementation</div>
          <div className="tile">Software Development and Integration</div>
          <div className="tile">Business Continuity and Disaster Recovery</div>
          <div className="tile">IT Governance and Compliance</div>
          <div className="tile">Vendor Management</div>
          <div className="tile">Managed IT Services</div>
      
          <Link to="/services/consulting" className="view-all-btn">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hservices;
