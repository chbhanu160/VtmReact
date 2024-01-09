import React from "react"
// import Back from "../common/back/Back"
// import TeamCard from "./TeamCard"
import "./testimonials.css"
// import Awrapper from "../about/Awrapper"
// import "../about/about.css"
import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Testimonials = () => {

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
       postLink: "https://www.linkedin.com/in/deekshasharma191196/",
      screenshot: require(`./feedback/WhatsApp Image 2024-01-08 at 12.39.29 AM (1).jpeg`),
    },
    {
      id: 2,
      name: "Jane Doe",
      postLink: "https://www.linkedin.com/in/deekshasharma191196/",
      screenshot: require(`./feedback/WhatsApp Image 2024-01-08 at 12.39.29 AM.jpeg`),
    },
    {
      id: 3,
      name: "Jane Doe",
      postLink: "https://www.linkedin.com/in/deekshasharma191196/",
      screenshot: require(`./feedback/WhatsApp Image 2024-01-08 at 12.39.30 AM.jpeg`),
    },
    {
      id: 4,
      name: "Jane Doe",
      postLink: "https://www.linkedin.com/in/deekshasharma191196/",
      screenshot: require(`./feedback/WhatsApp Image 2024-01-08 at 12.39.31 AM.jpeg`),
    },
    {
      id: 5,
      name: "Jane Doe",
      postLink: "https://www.linkedin.com/in/deekshasharma191196/",
      screenshot: require(`./feedback/WhatsApp Image 2024-01-08 at 12.39.32 AM (1).jpeg`),
    },
    {
      id: 6,
      name: "Jane Doe",
      postLink: "https://www.linkedin.com/in/deekshasharma191196/",
      screenshot: require(`./feedback/WhatsApp Image 2024-01-08 at 12.39.32 AM.jpeg`),
    },
    {
      id: 7,
      name: "Jane Doe",
      postLink: "https://www.linkedin.com/in/deekshasharma191196/",
      screenshot: require(`./feedback/WhatsApp Image 2024-01-08 at 12.39.33 AM (1).jpeg`),
    },
    {
      id: 8,
      name: "Jane Doe",
      postLink: "https://www.linkedin.com/in/deekshasharma191196/",
      screenshot: require(`./feedback/WhatsApp Image 2024-01-08 at 12.39.33 AM.jpeg`),
    },
    {
      id: 9,
      name: "Jane Doe",
      postLink: "https://www.linkedin.com/in/deekshasharma191196/",
      screenshot: require(`./feedback/WhatsApp Image 2024-01-08 at 12.39.35 AM.jpeg`),
    },
    {
      id: 10,
      name: "Jane Doe",
      postLink: "https://www.linkedin.com/in/deekshasharma191196/",
      screenshot: require(`./feedback/WhatsApp Image 2024-01-08 at 12.39.36 AM (1).jpeg`),
    },
    {
      id: 11,
      name: "Jane Doe",
      postLink: "https://www.linkedin.com/in/deekshasharma191196/",
      screenshot: require(`./feedback/WhatsApp Image 2024-01-08 at 12.39.36 AM.jpeg`),
    },
    {
      id: 12,
      name: "Jane Doe",
      postLink: "https://www.linkedin.com/in/deekshasharma191196/",
      screenshot: require(`./feedback/WhatsApp Image 2024-01-08 at 12.39.37 AM.jpeg`),
    },
    // Add more testimonials with screenshots as needed
  ];

  return (
    <>

<div className="testimonials-section text-center">
    <h2>Student Testimonials</h2>
      <Carousel>
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-item d-flex flex-column align-items-center">
              <div className="testimonial-content mb-3">
                <p>{testimonial.content}</p>
            <Link to={testimonial.postLink} target="_blank" rel="noopener noreferrer">
           <button className="btn btn-primary">Read More</button>
            </Link>


              </div>
              <div className="testimonial-screenshot">
                <img
                  src={testimonial.screenshot}
                  alt={`Screenshot ${index + 1}`}
                />
              </div>
              <div className="testimonial-name mt-3">
                <h4>{testimonial.name}</h4>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>

      {/* <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper /> */}
    </>
  )
}

export default Testimonials
