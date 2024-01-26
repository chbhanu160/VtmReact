// ServiceSlider.jsx
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import "./ServiceSlider.css";

const ServiceSlider = ({ services, serviceName }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + services.length) % services.length
    );
  };

  return (
    <div className="service-slider">
      <h3>{serviceName} Services</h3>
      <div className="slider-content">
        <div
          className={`slide ${currentSlide === 0 ? "active" : ""}`}
        >
          <ServiceCard {...services[currentSlide]} />
        </div>
      </div>
      <div className="slider-buttons">
        <button onClick={handlePrevSlide}>&#8249; Prev</button>
        <button onClick={handleNextSlide}>Next &#8250;</button>
      </div>
    </div>
  );
};

export default ServiceSlider;
