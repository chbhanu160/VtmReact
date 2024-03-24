import React from "react"

const Head = () => {
  return (
    <>
      <section className='head gradient-custom'>

     
        <div className='container flexSB'>
        
          <div >
          <img  src={require('./logo.png')} id="vtm_hlogo" alt="vtm" />
          </div>

          <div id='social'>
            <a href="https://www.linkedin.com/company/visionary-techmate/mycompany/?viewAsMember=true" target="_new"><i className="fab fa-linkedin-in icon" ></i></a>
            <a href="https://www.facebook.com/profile.php?id=100088829731631" target="_new"><i className='fab fa-facebook-f icon'></i></a>
            <a href="https://www.instagram.com/cloud__talk/?igshid=OGU0MmVlOWVjOQ%3D%3D" target="_new"><i className='fab fa-instagram icon'></i></a>
            <a href="https://www.youtube.com/channel/UC0xHeCcMjsHoPqup193_nNw" target="_new"><i className='fab fa-youtube icon'></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
