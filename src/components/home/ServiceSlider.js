// ServiceSlider.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ServiceSlider.css";

const ServiceSlider = ({ services, serviceName }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(services.length / 3));
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + Math.ceil(services.length / 3)) % Math.ceil(services.length / 3)
    );
  };
 // Function to automatically slide to the next one after 5 seconds
 const autoSlide = () => {
  handleNextSlide();
};

useEffect(() => {
  // Set up a timer to automatically slide every 5 seconds
  const timer = setInterval(autoSlide, 5000);

  // Clean up the timer when the component unmounts
  return () => clearInterval(timer);
}, [currentSlide]);


  return (
    <div className="service-slider-container">
      <h3>{serviceName} Services</h3>
      <div className="slider-content">
        {services.slice(currentSlide * 3, (currentSlide + 1) * 3).map((service, index) => (
          <div key={index} className="slide"id="Hslide" >
            <div className="service-content">
              <h4>{service.name}</h4>
              <ul>
                {service.bulletPoints.map((point, i) => (
                  <li key={i}>
                    <span className="bullet-icon">&#8226;</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-buttons">
        <button onClick={handlePrevSlide}>&#8249; Prev</button>
        <button onClick={handleNextSlide}>Next &#8250;</button>
      </div>
      <div className="view-more-button">
        <Link to={`/services/${serviceName.toLowerCase()}`}>View More</Link>
      </div>
    </div>
  );
};

export default ServiceSlider;
