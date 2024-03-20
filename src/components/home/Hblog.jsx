import React from "react"
import "../blog/blog.css"
import { blog } from "../../dummydata"
import "./Hblog.css"


// copy code of blog => blogCard

const Hblog = () => {
  return (
    <div>
      <section className='blog'>
        <div className='Hb-container'>
        <div class="text-center" id="blog_title">

        <h1>OUR BLOG</h1>
          <h2>Recent From Blog</h2>
        </div>
          
          <div className='grid2'>
            {blog.slice(0, 3).map((val) => (
              <div className='items shadow'>
                <div className='img'>
                  <img src={val.cover} alt='' />
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
                    <span>
                      <i className='fa fa-comments'></i>
                      <label htmlFor=''>{val.com}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hblog
