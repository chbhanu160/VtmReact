import React from "react"
import "./style.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Testimonial = () => {
  const testimonial = [
  {
    id: 1,
    name: "Sanmati Jain",
    desc: "I’m happy to share that,I’ve obtained a new certification: Data Engineering with Azure from StackRoute!I would like to thank Happiest Minds Technologies for providing me with this platform.I would also like to thank DEEKSHA SHARMA who was my mentor in this journey.I'm looking forward to apply my knowledge and skill in future. ",
    cover: "./images/testo/t1.jpg",
  },

  {
    id: 2,
    name: "Muskan Singh",
    desc: "I'm thrilled to share that Team 25 (SHELF) is the 1st Runner-Up 🏆 of HackAIthon, supported by Microsoft Azure and organized by Reskilll and AIC Banasthali Vidyapith. It was an incredible 30-hour journey. Thanks to the entire Reskilll team and AIC Banasthali for this fantastic opportunity. Special thanks to our mentor, Deeksha Sharma, for guiding us throughout.",
    cover: "./images/testo/t3.jpg",
  },
  {
    id: 3,
    name: "Nitya Singhal",
    desc: "🌟Thrilled to share my experience with the #include<her> Cohort 2.0 on AI-900 by Azure Developer Community!🌟I gained insights into AI fundamentals, practical skills in machine learning, and ethical AI considerations. Special thanks to DEEKSHA SHARMA ma'am for her mentorship. Grateful to Azure Developer Community and ReSkills for this opportunity!",
    cover: "./images/testo/t4.jpg",
  },
  {
    id: 4,
    name: "PALAK SAXENA",
    desc: "Excited to join the Cloud Computing Team for Interestship 5.0! 🌟Thrilled to have DEEKSHA SHARMA as my mentor once again. There's so much more to learn from you! 😊Looking forward to an exciting journey and contributing to a stronger Women in STEM community! ✨",
    cover: "./images/testo/t5.jpg",
  },
  {
    id: 5,
    name: "Vishesh Koul",
    desc: "I am happy to share that I have cleared Microsoft Azure DP-203 certification with flying colors.I would like to thank my trainer DEEKSHA SHARMA mam for guiding me throughout the journey.",
    cover: "./images/testo/t6.jpg",
  },
  {
    id: 6,
    name: "Nirala Kumar",
    desc: "I'm happy to share that I've successfully completed the Microsoft Azure: Data Engineer Associate DP-203 certification.Secured 865/1000 🎯I would like to take a moment and thank DEEKSHA SHARMA for providing me with such an amazing learning experience with such interactive sessions and for clearing all my doubts.",
    cover: "./images/testo/t7.jpg",
  },
  {
    id: 7,
    name: "Dhatchayini E",
    desc: "Excited to share that I've completed the Data Engineering with Azure certification from StackRoute! Huge thanks to my trainer, Deeksha Sharma, for her invaluable guidance. Grateful to Happiest Minds Technologies for investing in my professional development and providing this opportunity.    ",
    cover: "./images/testo/t2.png",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
   
    <div className="H_t-testimonial-section text-center mx-2">
    <h1 className="H_t-h1">TESTIMONIAL</h1>
    <h2 className="H_t-h2">Our Successful Students</h2>

    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={true}
      infinite={false}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container "
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px "
    >
      {testimonial.map((feedback) => (
        <div key={feedback.id} className="H_t-slide">
          <div className="H_t-caption">
            <div>
              {feedback.cover && <img src={feedback.cover} className="H_t-icon" alt={`Course ${feedback.id}`} />}
            </div>
            <h3>{feedback.name}</h3>
            <p>{feedback.desc}</p>
            </div>
            </div>
      ))}
     </Carousel>

    <button className='H_t-view'>View More</button>
    </div>
  );
 };

export default Testimonial;
