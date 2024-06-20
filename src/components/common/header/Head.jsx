import React from "react";
import "./header.css";

const Head = () => {
  return (
    <section className='head'>
      <div className='head_container'>
        <div className='logo'>
          <img src={require('./logo.png')} alt="vtm" className="img-fluid" />
        </div>
        <div className='social_icons'>
          <a
            href="https://www.linkedin.com/company/visionary-techmate/mycompany/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in icon s_media_icon"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100088829731631"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f icon s_media_icon"></i>
          </a>
          <a
            href="https://www.instagram.com/cloud__talk/?igshid=OGU0MmVlOWVjOQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram icon s_media_icon"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UC0xHeCcMjsHoPqup193_nNw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube icon s_media_icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Head;
