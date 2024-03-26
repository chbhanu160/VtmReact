import React from "react"
import Back from "../common/back/Back"
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
