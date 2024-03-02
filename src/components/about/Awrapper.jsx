import React from "react"
import { awrapper } from "../../dummydata"
import NumberCounter from './NumberCounter';


const Awrapper = () => {
  return (
    <>
      <section className='awrapper'>
        <div className='container grid'>
          {awrapper.map((val) => {
            return (
              <div className='box flex'>
                <div className='img' >
                  <img id="image_id" src={val.cover} alt='' />
                </div>
                <div className='text'>
                  
                  <h1><NumberCounter endValue={val.data} /></h1>
                  <h3 id="title_text">{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Awrapper
