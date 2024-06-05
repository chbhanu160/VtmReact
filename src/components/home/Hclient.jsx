import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Hclient.css";

const Hclient = () => {

  const clients = [
    {
      id: 1,
      name: "HEXAWARE",
      cover: "./images/client/c1.png",
    },
    {
      id: 2,
      name: "PEPSICO",
      cover: "./images/client/c2.png",
    },
    {
      id: 3,
      name: "LTI",
      cover: "./images/client/c3.png",
    },
    {
      id: 4,
      name: "IBM",
      cover: "./images/client/c4.png",
    },
    {
      id: 6,
      name: "KYOCERA",
      cover: "./images/client/c6.png",
    },
    {
      id: 7,
      name: "CENTRIENT",
      cover: "./images/client/c7.jpeg",
    },
    {
      id: 8,
      name: "DELOITE",
      cover: "./images/client/c8.png",
    },
    {
      id: 9,
      name: "COGNIZANT",
      cover: "./images/client/c9.png",
    },
        {
      id: 10,
      name: "HANU",
      cover: "./images/client/c10.jpeg",
    },
    {
      id: 12,
      name: "PUMA",
      cover: "./images/client/c12.png",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // correct value for better responsiveness
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // correct value for better responsiveness
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // correct value for better responsiveness
    },
  };

  return (
    <div className="H_client-section text-center mx-2">
      <h1 className="H_clnt-h1">OUR VALUED CLIENTS</h1>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {clients.map((client) => (
          <div key={client.id} className="H_clnt-slide">
            <div className="H_clnt-caption">
              <div>
                {client.cover && <img src={client.cover} className="H_clnt-icon" alt={`Client ${client.name}`} />}
              </div>
              <h3>{client.name}</h3>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hclient;
