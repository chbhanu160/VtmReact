import React, { useState, useEffect } from "react";
import "./events.css"; 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import CustomCalendar from "./calendar"; 

import event1 from './event/1.png';
import event2 from './event/2.png';
import event3 from './event/3.jpeg';
import event4 from './event/4.jpeg';
import event5 from './event/5.jpeg';
import event6 from './event/6.jpeg';
import event7 from './event/7.jpeg';
import event8 from './event/8.jpeg';
import event9 from './event/9.jpeg';
import event10 from './event/10.jpeg';
import event11 from './event/11.jpeg';
import event12 from './event/12.jpeg';
import event13 from './event/13.jpeg';
import event14 from './event/14.jpeg';
import event15 from './event/15.jpeg';
import event16 from './event/16.jpeg';
import event17 from './event/17.jpeg';
import event18 from './event/18.jpeg';
import event19 from './event/19.jpeg';

const Events = () => {
  // const [selectedDate, setSelectedDate] = useState(new Date());

  const eventImages = [

    { id: 1, image: event1, caption: 'Image 1 Caption' },
    { id: 2, image: event2, caption: 'Image 2 Caption' },
    { id: 3, image: event3, caption: 'Image 3 Caption' },
    { id: 4, image: event4, caption: 'Image 4 Caption' },
    { id: 5, image: event5, caption: 'Image 5 Caption' },
    { id: 6, image: event6, caption: 'Image 6 Caption' },
    { id: 7, image: event7, caption: 'Image 7 Caption' },
    { id: 8, image: event8, caption: 'Image 8 Caption' },
    { id: 9, image: event9, caption: 'Image 9 Caption' },
    { id: 10, image: event10, caption: 'Image 10 Caption' },
    { id: 11, image: event11, caption: 'Image 11 Caption' },
    { id: 12, image: event12, caption: 'Image 12 Caption' },
    { id: 13, image: event13, caption: 'Image 13 Caption' },
    { id: 14, image: event14, caption: 'Image 14 Caption' },
    { id: 15, image: event15, caption: 'Image 15 Caption' },
    { id: 16, image: event16, caption: 'Image 16 Caption' },
    { id: 17, image: event17, caption: 'Image 17 Caption' },
    { id: 18, image: event18, caption: 'Image 18 Caption' },
    { id: 19, image: event19, caption: 'Image 19 Caption' },

  
  ];

 //upcoming event section
  // const upcomingEventImage = require(`./6.jpg`);

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  //   // You can add logic here to filter and display events for the selected date
  // };

  // slider section

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
    <>
      {/* <section className="calendar-section padding">
        <div className="calendar-container">
          <CustomCalendar onChange={handleDateChange} value={selectedDate} />
        </div>

        <div className="upcoming-event-container">
          <h2>Upcoming Event</h2>
          <img src={upcomingEventImage} alt="Upcoming Event" />
        </div>
      </section> */}

      {/* slider */}
      
      <div className="events-section text-center">
      <h1 className="events_h1">Connecting Moments, Inspiring Journeys – Where Every Event Tells a Unique Story!</h1>
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
      containerClass="E-carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="E-custom-dot-list-style"
      itemClass="E-carousel-item-padding-40-px"
    >
      {eventImages.map((item, index) => (
        <div key={index} className="E-slide">
          <img src={item.image} alt={`Image ${item.id}`} />
          <div className="E-caption">{item.caption}</div>
        </div>
      ))}
    </Carousel>
  </div>

    </>
  );
};

export default Events;