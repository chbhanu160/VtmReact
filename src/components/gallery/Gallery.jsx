import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './gallery.css';

import image1 from './Training/1.jpeg';
import image2 from './Training/2.jpeg';
import image3 from './Training/3.jpeg';
import image4 from './Training/4.jpeg';
import image5 from './Training/5.jpeg';
import image6 from './Training/6.jpeg';
import image7 from './Training/7.jpeg';
import image8 from './Training/8.jpeg';
import image9 from './Training/9.jpeg';
import image10 from './Training/10.jpeg';
import image11 from './Training/11.jpeg';

const Gallery = () => {
  const galleryImages = [
    { id: 1, image: image1, caption: 'Image 1 Caption' },
    { id: 2, image: image2, caption: 'Image 2 Caption' },
    { id: 3, image: image3, caption: 'Image 3 Caption' },
    { id: 4, image: image4, caption: 'Image 4 Caption' },
    { id: 5, image: image5, caption: 'Image 5 Caption' },
    { id: 6, image: image6, caption: 'Image 6 Caption' },
    { id: 7, image: image7, caption: 'Image 7 Caption' },
    { id: 8, image: image8, caption: 'Image 8 Caption' },
    { id: 9, image: image9, caption: 'Image 9 Caption' },
    { id: 10, image: image10, caption: 'Image 10 Caption' },
    { id: 11, image: image11, caption: 'Image 11 Caption' },
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
    <div className="gallery-section text-center">
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
        containerClass="G-carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="G-carousel-item-padding-40-px"
      >
        {galleryImages.map((item, index) => (
          <div key={index} className="G-slide">
            <img src={item.image} alt={`Image ${item.id}`} />
            <div className="G-caption">{item.caption}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
