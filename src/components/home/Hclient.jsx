import React, { useState, useEffect } from 'react';
import './Hclient.css';

const Hclient = () => {
  const clients = [
    { id: 1,  cover: "./images/client/c1.png" },
    { id: 2, cover: "./images/client/c2.png" },
    { id: 3, cover: "./images/client/c3.png" },
    { id: 4, cover: "./images/client/c4.png" },
    { id: 6, cover: "./images/client/c6.png" },
    { id: 7, cover: "./images/client/c7.jpeg" },
    { id: 8, cover: "./images/client/c8.png" },
    { id: 9, cover: "./images/client/c9.png" },
    { id: 10, cover: "./images/client/c10.jpeg" },
    { id: 12, cover: "./images/client/c12.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === clients.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="H_client-section text-center mx-2 my-2">
      <h1 className="H_clnt-h1">OUR VALUED CLIENTS</h1>
      <div className="slider-container">
        
        <div className="slider">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className={`slide ${index === currentIndex ? "active" : ""}`}
            >
              <div className="H_clnt-caption">
                {client.cover && (
                  <img
                    src={client.cover}
                    className="H_clnt-icon"
                    alt={`Client ${client.name || "Image"}`}
                  />
                )}
                {client.name && <h3>{client.name}</h3>}
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default Hclient;
