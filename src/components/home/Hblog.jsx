import React from "react";
import "../blog/blog.css";
import { blog } from "../../dummydata";
import "./Hblog.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hblog = () => {
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
    <div className='h-blog'>
      <div className='Hb-container '>
        <div className="text-center" id="blog_title">
          <h1>OUR BLOG</h1>
          <h2>Recent From Our Blog</h2>
        </div>

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
          {blog.slice(0, 3).map((val) => (
            <div className='H_b-slide' key={val.id}>
              <div className='H_b-cover'>
                <img src={val.cover} alt='' />
              </div>
              <div className='H_b-text'>
                <div className='admin flexSB'>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                </div>
                <h1>{val.title}</h1>
                <p>{val.desc}</p>
              </div>
              <div className="H_b-read">
                <button onClick={() => window.open(val.to, "_blank")} type="button">Read More</button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Hblog;
