// Testimonials.jsx
import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './testimonials.css';

const Testimonials = () => {

  const testimonials = [
    { id: 1, image: require('./feedback/1.jpg') },
    { id: 2, image: require('./feedback/2.jpg') },
    { id: 3, image: require('./feedback/3.jpg') },
    { id: 4, image: require('./feedback/4.jpg') },
    { id: 5, image: require('./feedback/5.jpg') },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="testimonial-section text-center">
    <h1 className="testimonial_h1">Voices of Success & Echoes of Satisfaction – Our Testimonials Speak Louder than Words.</h1>
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="T-carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="T-custom-dot-list-style"
      itemClass="T-carousel-item-padding-40-px"
    >
      {testimonials.map((item, index) => (
        <div key={index} className="T-slide">
          <img src={item.image} alt={`Image ${item.id}`} />
          <div className="T-caption">{item.caption}</div>
        </div>
      ))}
    </Carousel>
  </div>
  );
};

export default Testimonials;