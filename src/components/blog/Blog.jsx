import React from "react";
import BlogCard from "./BlogCard";
import "./blog.css";

const Blog = () => {
  return (
    <section className="blog padding">
      <div className="blog_container grid2">
        <BlogCard />
      </div>
    </section>
  );
};

export default Blog;
