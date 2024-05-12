import React from "react"
import BlogCard from "./BlogCard"
import "./blog.css"

const Blog = () => {
  return (
    <>
      <section className='bblog padding'>
        <div className='flex'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
