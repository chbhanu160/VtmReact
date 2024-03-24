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
import event19 from './event/19.jfif';
import event20 from './event/20.jfif';
import event21 from './event/21.jfif';
import event22 from './event/22.jfif';



const Events = () => {
  // const [selectedDate, setSelectedDate] = useState(new Date());

  const eventImages = [

    { id: 1, image: event1, caption: '"Microsoft Office in Noida hosts Women in Tech Seminar' },
    { id: 2, image: event2, caption: '"Microsoft Office in Noida hosts Women in Tech Seminar' },
    { id: 3, image: event3, caption: '"Microsoft Office in Noida hosts Women in Tech Seminar' },
    { id: 4, image: event4, caption: 'Seminar on Generative AI at Microsoft Gurugram Office' },
    { id: 5, image: event5, caption: 'Seminar on Generative AI at Microsoft Gurugram Office' },
    { id: 6, image: event6, caption: 'Seminar on Generative AI at Microsoft Gurugram Office' },
    { id: 7, image: event7, caption: 'Guest Speaker on Open Source Tools at University of Engineering & Management, Jaipur' },
    { id: 8, image: event8, caption: 'Hackthon 2023 at Vivekananda Global University, Jaipur Campus' },
    { id: 9, image: event9, caption: 'Hackthon 2023 at Vivekananda Global University, Jaipur Campus' },
    { id: 10, image: event10, caption: 'Hackthon 2023 at Vivekananda Global University, Jaipur Campus' },
    { id: 11, image: event11, caption: 'Hackthon 2023 at Vivekananda Global University, Jaipur Campus' },
    { id: 12, image: event12, caption: 'Guest Speaker on Open Source Tools at University of Engineering & Management, Jaipur' },
    { id: 13, image: event13, caption: 'Banasthali Vidyapith University Hackathon 2023' },
    { id: 14, image: event14, caption: 'Banasthali Vidyapith University Hackathon 2023' },
    { id: 15, image: event15, caption: 'Banasthali Vidyapith University Hackathon 2023' },
    { id: 16, image: event16, caption: 'Banasthali Vidyapith University Hackathon 2023' },
    { id: 17, image: event17, caption: '18th Azure Open source tour at Arya College of Engineering' },
    { id: 18, image: event18, caption: 'Microsoft Certified Trainer Meet in Chennai' },
    { id: 19, image: event19, caption: 'Azure Data Engineering training at Deloitte Bangalore' },
    { id: 20, image: event20, caption: 'Banasthali Vidyapith University Hackathon 2023' },
    { id: 21, image: event21, caption: 'Banasthali Vidyapith University Hackathon 2023' },
    { id: 22, image: event22, caption: 'Banasthali Vidyapith University Hackathon 2023' },
  ];
   
  const poster = [
    {
      date: '22 March 2022',
      speaker: 'Deeksha Sharma',
      place: 'Indonesia, Thailand, Malaysia, Singapore, Korea',
      id:1,
      image: require('./Poster/1.jfif')
    },
    {
      date: '23 March 2022',
      speaker: 'Deeksha Sharma',
      place: 'Indonesia, Thailand, Malaysia, Singapore, Korea',
      image: require('./Poster/2.jfif')
    },
    {
      date: '11 Sep 2022',
      speaker: 'Deeksha Sharma',
      place: 'Indonesia, Thailand, Malaysia, Singapore, Korea',
      image: require('./Poster/3.jfif')
    },
  
    {
      date: '03 Oct 2022',
      speaker: 'Deeksha Sharma',
      place: 'Indonesia, Thailand, Malaysia, Singapore, Korea',
      image: require('./Poster/5.jfif')
    },
    {
      date: '03 Dec 2022',
      speaker: 'Deeksha Sharma',
      place: 'Indonesia, Thailand, Malaysia, Singapore, Korea',
      image: require('./Poster/6.jfif')
    },
    
    {
      date: '17 March 2023',
      speaker: 'Deeksha Sharma',
      place: 'RVCE, Bengaluru',
      image: require('./Poster/8.jfif')
    },
    {
      date: '27 May 2023',
      speaker: 'Deeksha Sharma',
      place: 'Indonesia,Vietnam,Thailand,Malaysia,Bangladesh,Singapore,Philippines',
      image: require('./Poster/10.jfif')
    },
    {
      date: '08 May 2023',
      speaker: 'Deeksha Sharma',
      place: 'Chandigarh University',
      image: require('./Poster/11.jfif')
    },
    {
      date: '19,20 August 2023',
      speaker: 'Deeksha Sharma',
      place: 'Banasthali Vidyapith',
      image: require('./Poster/12.jfif')
    },
    {
      date: '19 Sep 2023',
      speaker: 'Deeksha Sharma',
      place: 'UEm, Jaipur',
      image: require('./Poster/13.jfif')
    },
    {
      date: '28 Oct 2023',
      speaker: 'Deeksha Sharma',
      place: 'Online Meet',
      image: require('./Poster/14.jfif')
    },
    {
      date: '26 Oct 2023',
      speaker: 'Deeksha Sharma',
      place: 'Vivekananda Global University ,Jaipur',
      image: require('./Poster/15.jfif')
    },
    {
      // date: '2024-03-20',
      speaker: 'Deeksha Sharma',
      // place: '45 minutes',
      image: require('./Poster/16.jfif')
    },
    {
      // date: '2024-03-20',
      // speaker: 'Deeksha Sharma',
      // place: '45 minutes',
      image: require('./Poster/17.jfif')
    },
    {
      date: '23 Dec 2023',
      speaker: 'Deeksha Sharma',
      place: 'Indonesia,Vietnam,Thailand,Malaysia,Bangladesh,Singapore,Philippines',
      image: require('./Poster/18.jfif')
    },
    {
      date: '30 Dec 2023',
      speaker: 'Deeksha Sharma',
      place: 'Microsoft office, Gurgaon',
      image: require('./Poster/19.jfif')
    },
    {
      // date: '2024-03-20',
      speaker: 'Deeksha Sharma',
      // place: '45 minutes',
      image: require('./Poster/4.jfif')
    },
    {
      date: '20 Jan 2022',
      speaker: 'Deeksha Sharma',
      // place: '45 minutes',
      image: require('./Poster/7.jfif')
    },
    {
      date: '17 March 2023',
      speaker: 'Deeksha Sharma',
      // place: 'Online Meet',
      image: require('./Poster/9.jfif')
    },
  ];

  

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

     {/* slider */}

     <div className="poster">
      <h2>"Echoes of Success: Recalling Our Conducted Events</h2>
      <div className="poster-grid">
        {poster.map((poster, index) => (
          <div className="poster-card" key={index}>
            <div className="poster-details">
              <p>Date: {poster.date}</p>
              <p>Speaker: {poster.speaker}</p>
              <p>Place: {poster.place}</p>
            </div>
            <img src={poster.image} alt={`Poster for ${poster.speaker}`} />
          </div>
        ))}
      </div>
      
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
      transitionplace={500}
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


      
    </div>

     

    </>
  );
};

export default Events;