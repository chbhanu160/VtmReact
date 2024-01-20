import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero_container">
          <div className="row">
            <div className="heading" id="hero_heading" >
              <Heading subtitle="Welcome to Visionary TechMate" title="Best Online Education Expertise" />
            </div>
            <p className="hero-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
    </>
  );
};

export default Hero;
