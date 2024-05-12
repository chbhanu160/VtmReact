import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
     
      
       
          <div className="d-flex justify-content-center align-items-center">
          
          <div className="row">
          <div className="col-lg-2 col-sm-12 col-md-4">
            <img src={require("./logo.png")} id="vtm_flogo" alt="vtm" />
            
            <div id="f-social">
              <a
                href="https://www.linkedin.com/company/visionary-techmate/mycompany/?viewAsMember=true"
                target="_new"
              >
                <i className="fab fa-linkedin-in icon"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100088829731631"
                target="_new"
              >
                <i className="fab fa-facebook-f icon"></i>
              </a>
              <a
                href="https://www.instagram.com/cloud__talk/?igshid=OGU0MmVlOWVjOQ%3D%3D"
                target="_new"
              >
               
                <i className="fab fa-instagram icon"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UC0xHeCcMjsHoPqup193_nNw"
                target="_new"
              >
                <i className="fab fa-youtube icon"></i>
              </a>
            </div>
          </div>
  <div className="col-lg-3 col-sm-12 col-md-4">
    <h3>Explore</h3>
    <ul>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
  <div className="col-lg-3 col-sm-12 col-md-4">
    <h3>Quick Links</h3>
    <ul>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        <Link to="/testimonials">Testimonial</Link>
      </li>
    </ul>
  </div>
  <div className="col-lg-3 col-sm-12 col-md-4">
    <h3>Contact Us </h3>
    <ul>
      <li className="my-0">
        <i className="fa fa-location-arrow"></i>
        <p>Sahkar Nagar,Khatipura road, jhotwara, Jaipur, Rajasthan - 302012</p>
      </li>
      <li className="my-0">
        <i className="fa fa-phone-alt"></i>
        <p>+91 6375597272</p>
      </li>
      <li className="my-0">
        {/* <i className="fa fa-envelope"></i> */}
        <p>visionarytechmate@gmail.com</p>
      </li>
    </ul>
  </div>
</div>
          </div>
        


          
        
      
      <div className="legal">
        <p>
          Copyright ©2024 All rights reserved | VisionaryTechMate{" "}
          <i className="fa fa-heart"></i>
        </p>
      </div>
    </div>
  );
};

export default Footer;
