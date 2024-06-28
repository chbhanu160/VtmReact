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
    name: "Yash Mohan",
    desc: "I am thrilled to share that I have successfully cleared five Azure certifications! 1️⃣ Microsoft Certified: Azure Fundamentals 2️⃣ Azure AI Fundamentals 3️⃣ Azure Data Fundamentals 4️⃣ Azure Data Scientist Associate 5️⃣ Azure Data Engineer Associate 🥳🚀 Special thanks to my incredible mentor, DEEKSHA SHARMA, for her invaluable guidance and support. 🙏🌟💼💪",
    cover: "./images/testo/t2.png",
  },
  {
    id: 3,
    name: "Harshita Sharma",
    desc: "I'm happy to share that I have successfully cleared the Microsoft Certified : Azure Data Engineer Associate DP - 203 exam and secured 896/1000.I would like to thank my trainer DEEKSHA SHARMA ma'am for being such a great mentor and providing me with such a wonderful and interactive learning experience.Also I would like to thank Hanu Software an Insight company for providing me with this wonderful opportunity.",
    cover: "./images/testo/t4.jpg",
  },
  {
    id: 4,
    name: "PALAK SAXENA",
    desc: "I'm happy to share that I have successfully cleared the Microsoft Certified : Azure Data Engineer Associate DP-203 exam and secured 917 out of 1000.I would like to thank my trainer DEEKSHA SHARMA ma'am for providing a wonderful and interactive learning experience.Also I would like to thank Hanu Software an Insight company for providing me with this wonderful opportunity.Keep Learning. Keep Growing.",
    cover: "./images/testo/t5.jpg",
  },
  {
    id: 5,
    name: "Karan Sabnani",
    desc: "I am happy to share that I have cleared Microsoft Azure DP-203 certification with flying colors.I would like to thank my trainer DEEKSHA SHARMA mam for guiding me throughout the journey.Also I would like to thank Hanu Software an Insight company for providing me with this wonderful opportunity.Keep Learning. Keep Growing.",
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
