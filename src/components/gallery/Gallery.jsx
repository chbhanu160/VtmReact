// Gallery.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./gallery.css";

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
  const galleryImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];

  return (
    <div className="gallery-container">
  
      <Carousel className="gallery-carousel">
        {galleryImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
