// Gallery.jsx
import React, { useState, useEffect } from 'react';
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

  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  const handleNextSlide1 = () => {
    setCurrentSlide1((prevSlide) => (prevSlide + 1) % galleryImages.length);
  };

  const handlePrevSlide1 = () => {
    setCurrentSlide1(
      (prevSlide) => (prevSlide - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const handleNextSlide2 = () => {
    setCurrentSlide2((prevSlide) => (prevSlide + 2) % galleryImages.length);
  };

  const handlePrevSlide2 = () => {
    setCurrentSlide2(
      (prevSlide) => (prevSlide - 2 + galleryImages.length) % galleryImages.length
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

    <div className="gallery-section text-center">
  
    <div className="gallery-container">

{/*  1st slider */}

      
      <div className="gallery-slider">

      <div className="gallery-buttons">
      <button onClick={handlePrevSlide1}>&#8249;</button>
            <button onClick={handleNextSlide1}>&#8250;</button>
      </div>
        {galleryImages.map((item, index) => (
          <div key={index} className={`G-slide ${currentSlide1 === index ? 'active' : ''}`}>
            <img src={item.image} alt={`Image ${item.id}`} />
            <div className="G-caption">{item.caption}</div>
          </div>
        ))}
      </div>


    {/* 2nd slider */}

      
      <div className="gallery-slider">

      <div className="gallery-buttons">
      <button onClick={handlePrevSlide2}>&#8249;</button>
            <button onClick={handleNextSlide2}>&#8250;</button>
      </div>

        {galleryImages.map((item, index) => (
          <div key={index} className={`G-slide ${currentSlide2 === index ? 'active' : ''}`}>
            <img src={item.image} alt={`Image ${item.id}`} />
            <div className="G-caption">{item.caption}</div>
          </div>
        ))}
      </div>

    </div>

    </div>
    
  );
};

export default Gallery;
