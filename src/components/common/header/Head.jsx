import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>

     
        <div className='container flexSB'>
        
          {/* <div className='logo'>
          <img src={require('./logo.png')} alt="vtm" />
          </div> */}
          <div >
          <img  src={require('./logo.png')} id="vtm_hlogo" alt="vtm" />
          </div>

          <div id='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
