// Testimonials.jsx
import React, { useState, useEffect } from 'react';
import './testimonials.css';

const Testimonials = () => {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  const testimonials = [
    { id: 1, image: require('./feedback/WhatsApp Image 2024-01-08 at 12.39.29 AM (1).jpeg') },
    { id: 2, image: require('./feedback/WhatsApp Image 2024-01-08 at 12.39.30 AM.jpeg') },
    { id: 3, image: require('./feedback/WhatsApp Image 2024-01-08 at 12.39.29 AM.jpeg') },
    { id: 4, image: require('./feedback/WhatsApp Image 2024-01-08 at 12.39.31 AM.jpeg') },
    { id: 5, image: require('./feedback/WhatsApp Image 2024-01-08 at 12.39.32 AM (1).jpeg') },
    { id: 6, image: require('./feedback/WhatsApp Image 2024-01-08 at 12.39.32 AM.jpeg') },
    { id: 7, image: require('./feedback/WhatsApp Image 2024-01-08 at 12.39.33 AM (1).jpeg') },
    { id: 8, image: require('./feedback/WhatsApp Image 2024-01-08 at 12.39.33 AM.jpeg') },
    { id: 9, image: require('./feedback/WhatsApp Image 2024-01-08 at 12.39.35 AM.jpeg') },
    { id: 10, image: require('./feedback/WhatsApp Image 2024-01-08 at 12.39.36 AM (1).jpeg') },
    { id: 11, image: require('./feedback/WhatsApp Image 2024-01-08 at 12.39.36 AM.jpeg') },
    { id: 12, image: require('./feedback/WhatsApp Image 2024-01-08 at 12.39.37 AM.jpeg') },
  ];

  const handleNextSlide1 = () => {
    setCurrentSlide1((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const handlePrevSlide1 = () => {
    setCurrentSlide1(
      (prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNextSlide2 = () => {
    setCurrentSlide2((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const handlePrevSlide2 = () => {
    setCurrentSlide2(
      (prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length
    );
  };

  const autoSlide = () => {
    handleNextSlide1();
    handleNextSlide2();
  };

  useEffect(() => {
    const timer = setInterval(autoSlide, 5000);

    return () => clearInterval(timer);
  }, [currentSlide1, currentSlide2]);

  return (
    <div className="testimonials-section text-center">
      <h2>Student Testimonials</h2>
      <div className="testimonial-sliders">
        {/* First Testimonial Slider */}
        <div className="testimonial-slider">
          <div className="slider-content">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`slide ${currentSlide1 === index ? 'active' : ''}`}
              >
                <div className="testimonial-screenshot">
                  <img
                    src={testimonial.image}
                    alt={`Screenshot ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="slider-buttons">
            <button onClick={handlePrevSlide1}>&#8249;</button>
            <button onClick={handleNextSlide1}>&#8250;</button>
          </div>
        </div>

        {/* Second Testimonial Slider */}
        <div className="testimonial-slider">
          <div className="slider-content">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`slide ${currentSlide2 === index ? 'active' : ''}`}
              >
                <div className="testimonial-screenshot">
                  <img
                    src={testimonial.image}
                    alt={`Screenshot ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="slider-buttons">
            <button onClick={handlePrevSlide2}>&#8249;</button>
            <button onClick={handleNextSlide2}>&#8250;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;