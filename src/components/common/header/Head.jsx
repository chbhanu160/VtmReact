import React from "react";

const Head = () => {
  return (
    
      <section className='head'>
        <div className='container'>
          <div className='row flexSB'>
          <div className="col-lg-10 col-md-6 col-sm-12 d-flex justify-content-start" id="vtm_hlogo">
  <img src={require('./logo.png')} alt="vtm" className="img-fluid" />
</div>


            <div className="col-lg-2 col-md-6 col-sm-12" id='h-social'>
              <a href="https://www.linkedin.com/company/visionary-techmate/mycompany/?viewAsMember=true" target="_new">
                <i className="fab fa-linkedin-in icon"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100088829731631" target="_new">
                <i className='fab fa-facebook-f icon'></i>
              </a>
              <a href="https://www.instagram.com/cloud__talk/?igshid=OGU0MmVlOWVjOQ%3D%3D" target="_new">
                <i className='fab fa-instagram icon'></i>
              </a>
              <a href="https://www.youtube.com/channel/UC0xHeCcMjsHoPqup193_nNw" target="_new">
                <i className='fab fa-youtube icon'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    
  )
}

export default Head;
