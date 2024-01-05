// Events.jsx

import React from "react";
import "./events.css"; // Make sure to create and import the corresponding CSS file
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import Back from "../common/back/Back";

const Events = () => {
  const eventImages = [
    {
      src: require(`./event/5.jpeg`),
      caption: "Caption for Image 1",
    },
    {
      src: require(`./event/6.jpeg`),
      caption: "Caption for Image 2",
    },
    {
      src: require(`./event/10.jpeg`),
      caption: "Caption for Image 3",
    },
    // Add more event images with captions as needed
  ];

  return (
    <>
      {/* <Back title="Events" /> */}
      <section className="events padding">
        <div className="container">
          <Carousel>
            {eventImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={image.src} alt={`Event ${index + 1}`} />
                <Carousel.Caption>
                  <h5>{image.caption}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Events;
