import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import "./Hero.css";


const Hero = () => {
  return (
    
      <section className="my-5" id="main_page">
        <div className="row">
          
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="heading" id="hero_heading" >
              <h1 className="h_wel">Welcome to Visionary TechMate!</h1>
              <h2 className="h_bes">Beyond Boundaries: Where Vision Meets Innovation.</h2>
            </div>

            <div  className="hero-text" >
            <p >Embark on a journey into the Future of Tech Excellence with Visionary Techmate, where we transcend boundaries to seamlessly deliver cutting-edge knowledge through our comprehensive range of cloud-based courses and services. Elevate your skills and empower your career with the flexibility and innovation that define our digital learning experience. Join a community dedicated to pushing the boundaries of technology, fostering creativity, and shaping the next generation of tech leaders. At Visionary Techmate, we don't just teach tech, we shape futures.</p>
            </div>
            <Link to="/services/learning" >
            <Button className="mx-5 my-5" variant="primary">GET STARTED NOW<i className="fa fa-long-arrow-alt-right"></i></Button>
            </Link>
            
            <Link to="/courses">
  <Button className="primary mx-5 my-5">
    VIEW COURSE<i className="fa fa-long-arrow-alt-right"></i>
  </Button>
</Link>

            
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12" id="image_col" >

          </div>
        </div>
      </section>
      
    
  );
};

export default Hero;