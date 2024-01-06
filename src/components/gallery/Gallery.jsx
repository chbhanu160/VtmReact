// Gallery.jsx

import React from 'react';
import "./gallery.css";
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap

// Import your image files
import image1 from './Training/photo1688534084.jpeg';
import image2 from './Training/photo1691981526.jpeg';
import image3 from './Training/photo1695879399.jpeg';
import image4 from './Training/photo1695879402.jpeg';
import image5 from './Training/photo1695879407.jpeg';
import image6 from './Training/photo1697629102 (2).jpeg';

const Gallery = () => {
  // Array of imported image files
  const galleryImages = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="gallery">
      <Carousel>
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
