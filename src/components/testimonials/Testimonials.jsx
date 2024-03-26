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
    { id: 6, image: require('./feedback/6.jpeg') },
    { id: 7, image: require('./feedback/7.jpeg') },
    { id: 8, image: require('./feedback/8.jpeg') },
    { id: 9, image: require('./feedback/9.jpeg') },
    { id: 10, image: require('./feedback/10.jpeg') },
    { id: 11, image: require('./feedback/11.jpeg') },
    { id: 12, image: require('./feedback/12.jpeg') },
    { id: 13, image: require('./feedback/13.jpeg') },
    { id: 14, image: require('./feedback/14.jpeg') },
    { id: 15, image: require('./feedback/15.jpeg') },
    { id: 16, image: require('./feedback/16.jpeg') },
    { id: 17, image: require('./feedback/17.jpeg') },
    { id: 18, image: require('./feedback/18.jpeg') },
    { id: 19, image: require('./feedback/19.jpeg') },
    { id: 20, image: require('./feedback/20.jpeg') },
    { id: 21, image: require('./feedback/21.jpeg') },
    { id: 22, image: require('./feedback/22.jpeg') },
    { id: 23, image: require('./feedback/23.jpeg') },
    { id: 24, image: require('./feedback/24.jpeg') },
    { id: 25, image: require('./feedback/25.jpeg') },
    { id: 26, image: require('./feedback/26.jpeg') },
    { id: 27, image: require('./feedback/27.jpeg') },
    { id: 28, image: require('./feedback/28.jpeg') },
    { id: 29, image: require('./feedback/29.jpeg') },
    { id: 30, image: require('./feedback/30.jpeg') },
    { id: 31, image: require('./feedback/31.jpeg') },
    { id: 32, image: require('./feedback/32.jpeg') },
    { id: 33, image: require('./feedback/33.jpeg') },
    { id: 34, image: require('./feedback/34.jpeg') },
    { id: 35, image: require('./feedback/35.jpeg') },
    { id: 36, image: require('./feedback/36.jpeg') },
    { id: 37, image: require('./feedback/37.jpeg') },
    { id: 38, image: require('./feedback/38.jpeg') },
    { id: 39, image: require('./feedback/39.jpeg') },
    { id: 40, image: require('./feedback/40.jpeg') },
    { id: 41, image: require('./feedback/41.jpeg') },
    { id: 42, image: require('./feedback/42.jpeg') },
    { id: 43, image: require('./feedback/43.jpeg') },
    { id: 44, image: require('./feedback/44.jpeg') },
    { id: 45, image: require('./feedback/45.jpeg') },
    { id: 46, image: require('./feedback/46.jpeg') },
    { id: 47, image: require('./feedback/47.jpeg') },
    { id: 48, image: require('./feedback/48.jpeg') },
    { id: 49, image: require('./feedback/49.jpeg') },
    { id: 50, image: require('./feedback/50.jpeg') },
    { id: 51, image: require('./feedback/51.jpeg') },
    { id: 52, image: require('./feedback/52.jpeg') },
    { id: 53, image: require('./feedback/53.jpeg') },
    { id: 54, image: require('./feedback/54.jpeg') },
    { id: 55, image: require('./feedback/55.jpeg') },
    { id: 56, image: require('./feedback/56.jpeg') },
    { id: 57, image: require('./feedback/57.jpeg') },
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