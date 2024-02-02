import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import "./ServiceSlider.css";

const ServiceSlider = ({ services, serviceName }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % (services.length - 2));
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + (services.length - 2)) % (services.length - 2)
    );
  };

  return (
    <div className="service-slider-container">
      <div className="service-slider">
        <h3>{serviceName} Services</h3>
        <div className="slider-content">
          {services.slice(currentSlide, currentSlide + 3).map((service, index) => (
            <div key={index} className="slide">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        <div className="slider-buttons">
          <button onClick={handlePrevSlide}>&#8249; Prev</button>
          <button onClick={handleNextSlide}>Next &#8250;</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
