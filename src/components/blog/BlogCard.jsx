import React from "react";
import { blog } from "../../dummydata";
import "./blog.css";

const BlogCard = () => {
  return (
    <>
      {blog.map((val) => (
        <div className="blog_item shadow" key={val.id}>
          <div className="blog_img">
            <img src={val.cover} alt="Blog Cover" />
          </div>
          <div className="blog_text">
            <div className="blog_admin flexSB">
              <span>
                <i className="fa fa-user"></i>
                <label>{val.type}</label>
              </span>
              <span>
                <i className="fa fa-calendar-alt"></i>
                <label>{val.date}</label>
              </span>
            </div>
            <h1>{val.title}</h1>
            <p>{val.desc}</p>
          </div>
          <div className="blog_button_container">
            <button onClick={() => window.open(val.to, "_blank")} type="button">Read More</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
