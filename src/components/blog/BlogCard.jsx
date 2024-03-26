import React from "react";
import { blog } from "../../dummydata";

const BlogCard = () => {
  return (
    <>
      {blog.map((val) => (
        <div className='items shadow' key={val.id}>
          <div className='blog_img'>
            <img src={val.cover} alt='Blog Cover' />
          </div>
          <div className='text'>
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

          <div>
            <button onClick={() => window.open(val.to, "_blank")} type="button">Read More</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
