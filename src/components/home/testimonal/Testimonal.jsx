import React from "react"
import "./style.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Testimonial = () => {
  const testimonial = [
  {
    id: 1,
    name: "Yash Mohan",
    desc: "I am thrilled to share that I have successfully cleared not one, not two, but five Azure certifications! 🥳🚀 It has been an incredible journey of growth and learning, and I am grateful for the opportunities that these certifications have opened up for me. 💼💪Achieving these certifications has been a significant milestone in my professional career, and I am proud to have expanded my knowledge and expertise in various Azure technologies. 🏆 Here are the Azure certifications I have earned:1️⃣ Microsoft Certified: Azure Fundamentals 2️⃣ Microsoft Certified: Azure AI Fundamentals 3️⃣ Microsoft Certified: Azure Data Fundamentals4️⃣ Microsoft Certified: Azure Data Scientist Associate 5️⃣ Microsoft Certified: Azure Data Engineer Associate. I want to express my deepest gratitude to my incredible mentor, DEEKSHA S., whose guidance and support have been instrumental in my success. As they say, For anything worthwhile, the foundation should be strong, and Deeksha has provided me with a solid foundation to excel in the world of Azure 🙏🌟",
    cover: "./images/testo/t1.webp",
  },
  {
    id: 2,
    name: "Yash Mohan",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    cover: "./images/testo/t2.webp",
  },
  {
    id: 3,
    name: "ROGER SCOTT",
    post: "MARKETING MANAGER",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    cover: "./images/testo/t3.webp",
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
   
    <div className="H_t-testimonial-section text-center">
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
