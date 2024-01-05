import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            {/* <h1>Newsletter - Stay tune and get the latest update</h1> */}
            {/* <span>Far far away, behind the word mountains</span> */}
          </div>
          {/* <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div> */}
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
          <img  src={require('./logo.png')} id="vtm_flogo" alt="vtm" />
            {/* <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> */}
            <div id='social'>
            <a href="https://www.linkedin.com/company/visionary-techmate/mycompany/?viewAsMember=true" target="_new"><i className="fab fa-linkedin-in icon" ></i></a>
            <a href="https://www.facebook.com/profile.php?id=100088829731631" target="_new"><i className='fab fa-facebook-f icon'></i></a>
            <a href="https://www.instagram.com/cloud__talk/?igshid=OGU0MmVlOWVjOQ%3D%3D" target="_new"> <i className='fab fa-instagram icon'></i></a>
            <a href="https://www.youtube.com/channel/UC0xHeCcMjsHoPqup193_nNw" target="_new"><i className='fab fa-youtube icon'></i></a>
          </div>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Gallery</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
              <i className="fa fa-location-arrow"></i>
                Sahkar Nagar, Khatipura road, jhotwara, Jaipur, Rajasthan - 302012
              </li>
              <li>
                <i className='fa fa-phone-alt'></i> 
                +91 6375597272
              </li>
              <li>
              <i className="fa fa-envelope"></i>
                visionarytechmate@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | VisionaryTechMate <i className='fa fa-heart'></i> 
        </p>
      </div>
    </>
  )
}

export default Footer
