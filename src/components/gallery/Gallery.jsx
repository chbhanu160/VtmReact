// Gallery.jsx

import React from 'react';
import "./gallery.css";
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap

// Import your image files
import image1 from './4.jpg';
import image2 from './5.jpg';
import image3 from './3.jpg';
import image4 from './6.jpg';
import image5 from './2.jpg';
import image6 from './1.jpg';

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
