import React from "react";
import { awrapper } from "../../dummydata";
import NumberCounter from './NumberCounter';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import "./about.css"

// Add Font Awesome icons to the library
library.add(fab, fas);


const Awrapper = () => {
  return (
    <>
    
      <section className='awrapper'>
        <div className='grid'>
          {awrapper.map((val, index) => {
            return (
              <div className="d-flex justify-content-center align-items-center">
              <div className='box flex' key={index}>
                <div className='aw_img'>
                {val.cover && <FontAwesomeIcon icon={val.cover} />}

                </div>
                <div className='text'>
                  <h1><NumberCounter endValue={val.data} /></h1>
                  <h3 id="title_text">{val.title}</h3>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Awrapper;
