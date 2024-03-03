import React from "react";
import { awrapper } from "../../dummydata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NumberCounter from './NumberCounter';


const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
        <div className='container grid'>
          {awrapper.map((val, index) => {
            return (
              <div className='box flex' key={index}>
                <div className='aw_img'>
                  {val.cover && <FontAwesomeIcon icon={[val.cover]} />}
                </div>
                <div className='text'>
                  <h1><NumberCounter endValue={val.data} /></h1>
                  <h3 id="title_text">{val.title}</h3>
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
