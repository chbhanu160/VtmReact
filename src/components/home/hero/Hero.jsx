import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import image1 from "./bg.svg"

const Hero = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero_container">
          
          <div className="row">
            <div className="heading" id="hero_heading" >
              <h1 className="h_wel">Welcome to Visionary TechMate!</h1>
              <h2 className="h_bes">Beyond Boundaries: Visionary Techmate - Where Vision Meets Innovation.</h2>
            </div>

            <div  className="hero-text" >
            <p >Pioneering the Future of Tech Excellence at Visionary Techmate, where we seamlessly deliver cutting-edge knowledge through our cloud-based courses and services. Elevate your skills with the flexibility and innovation that define our digital learning experience.</p>
            </div>
            
            <div className="hero_button">
              <Link to="/services/learning" className="get-started-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </Link>
              <Link to="/courses" className="view-course-btn">
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </div>
  );
};

export default Hero;
