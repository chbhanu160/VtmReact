// Events.jsx

import React, { useState } from "react";
import "./events.css"; // Make sure to create and import the corresponding CSS file
import { Carousel } from 'react-bootstrap';
import CustomCalendar from "./calendar"; // Import Calendar from calendar.jsx


const Events = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const eventImages = [
    {
      src: require(`./event/1.png`),
      caption: "Caption for Image 1",
    },
    {
      src: require(`./event/2.png`),
      caption: "Caption for Image 2",
    },
    {
      src: require(`./event/3.jpeg`),
      caption: "Caption for Image 2",
    },
    {
      src: require(`./event/4.jpeg`),
      caption: "Caption for Image 2",
    },
    {
      src: require(`./event/5.jpeg`),
      caption: "Caption for Image 2",
    },
    {
      src: require(`./event/6.jpeg`),
      caption: "Caption for Image 2",
    },
    {
      src: require(`./event/7.jpeg`),
      caption: "Caption for Image 2",
    },
    {
      src: require(`./event/8.jpeg`),
      caption: "Caption for Image 2",
    },
    {
      src: require(`./event/9.jpeg`),
      caption: "Caption for Image 3",
    },
    {
      src: require(`./event/10.jpeg`),
      caption: "Caption for Image 2",
    },
    {
      src: require(`./event/11.jpeg`),
      caption: "Caption for Image 2",
    },
    {
      src: require(`./event/12.jpeg`),
      caption: "Caption for Image 2",
    },
    {
      src: require(`./event/13.jpeg`),
      caption: "Caption for Image 2",
    },
    {
      src: require(`./event/14.jpeg`),
      caption: "Caption for Image 2",
    },
    {
      src: require(`./event/15.jpeg`),
      caption: "Caption for Image 2",
    },
    {
      src: require(`./event/16.jpeg`),
      caption: "Caption for Image 2",
    },
    {
      src: require(`./event/17.jpeg`),
      caption: "Caption for Image 2",
    },
    {
      src: require(`./event/18.jpeg`),
      caption: "Caption for Image 2",
    },
    {
      src: require(`./event/19.jpeg`),
      caption: "Caption for Image 2",
    },
  

    // Add more event images with captions as needed
  ];

  // Upcoming event image
  const upcomingEventImage = require(`./6.jpg`);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // You can add logic here to filter and display events for the selected date
  };

  return (
    <>
      <section className="calendar-section padding">
        <div className="calendar-container">
          <CustomCalendar onChange={handleDateChange} value={selectedDate} />
        </div>
        
        <div className="upcoming-event-container">
          <h2>Upcoming Event</h2>
          <img src={upcomingEventImage} alt="Upcoming Event" />
        </div>
      </section>
      
      <section className="events padding">
        <div className="events_container">
          <Carousel className="event-carousel">
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
