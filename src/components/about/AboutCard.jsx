import React from "react";
import "./about.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row '>
            <img src='./images/about.png' alt='' />
          </div>

          <div className='right row my-3'>
            <p id="learn_anything" className="my-3">LEARN ANYTHING!</p>
            
            <div id="Ab_item">
              {homeAbout.map((val, index) => (
                <div key={index} className='item_flexSB'>
                  <div className='About_img text-center'>
                  {val.cover && <FontAwesomeIcon icon={val.cover} />}
                  </div>
                  <div className='text'>
                    <h2 className="text-center">{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
           

          </div>
          
        </div>
      </section>
      <Awrapper />
    </>
  );
}

export default AboutCard;
