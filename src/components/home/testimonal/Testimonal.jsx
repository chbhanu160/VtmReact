import React from "react"
import "./style.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Testimonial = () => {
  const testimonial = [
  {
    id: 1,
    name: "Yash Mohan",
    desc: "I am thrilled to share that I have successfully cleared not one, not two, but five Azure certifications! 💼💪Achieving these certifications has been a significant milestone in my professional career",
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
  {
    id: 3,
    name: "ROGER SCOTT",
    post: "MARKETING MANAGER",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    cover: "./images/testo/t3.webp",
  },
  {
    id: 3,
    name: "ROGER SCOTT",
    post: "MARKETING MANAGER",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    cover: "./images/testo/t3.webp",
  },
  {
    id: 3,
    name: "ROGER SCOTT",
    post: "MARKETING MANAGER",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    cover: "./images/testo/t3.webp",
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
