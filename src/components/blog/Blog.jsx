import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./blog.css"

const Blog = () => {
  return (
    <>
      <Back title='Blog Posts' />
      <section className='blog'>
        <div className='container'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
