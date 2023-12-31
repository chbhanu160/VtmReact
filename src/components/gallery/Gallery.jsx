// Gallery.jsx

import React from 'react';
import "./gallery.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// Import your image files
import image1 from './4.jpg';
import image2 from './5.jpg';
import image3 from './3.jpg';
import image4 from './6.jpg';
import image5 from './2.jpg';
import image6 from './1.jpg';

const Gallery = () => {
  // Array of imported image files
  const galleryImages = [image1, image2, image3,image4,image5,image6];

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {galleryImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
