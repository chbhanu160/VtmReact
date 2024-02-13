import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  return (
    <>
      
      <section className="contacts padding">
        <div className="container_con shadow flexSB">
          <div className="left row">
            <img src={require("./15.svg")} alt="contact" />
          </div>

          <div className="right">
            
            <div>
              <h3>Contact Us</h3>
              
              <div>
<p>We're open for any suggestion or just to have a chat</p>
              </div>
              <div className="row w-100">
                
                <div className="col">
                 
                  <div className="d-flex justify-content-center">
<div>
 
 <i className="fa fa-envelope"></i>
  </div>
<div className="mx-3">
 <p>visionarytechmate@gmail.com</p> 
  </div>
              </div>
              


                  

                

</div>

<div className="col">
                <div className="d-flex justify-content-center">
<div>
 
 <i className="fa fa-phone-alt"></i>
  </div>
<div className="mx-3">
 <p>+91 6375597272
  </p> 
  </div>
              </div>

</div>

              </div>
              <div className="row mx-0">
        <div className="d-flex justify-content-center">        
<div>
  
  <i className="fa fa-location-arrow"></i>
</div>
<div>
  <p>Sahkar Nagar, Khatipura road, jhotwara, Jaipur, Rajasthan -
                  302012</p>
</div>
</div>
                </div>
             
              
            </div>
<form action="">
  <div className="d-flex flex-column">
    <div className="row w-100">
      <div className="col">
        <input type="text" className="form-control" placeholder="Name"/>
      </div>
      <div className="col">
        <input type="email" className="form-control" placeholder="Email"/>
      </div>
    </div>
    <div className="row w-100">
    <div className="col">
  <div className="input-group">
    <select id="countryCode" className="form-control">
      <option value="+91">+91</option>
      
    </select>
    
    
    <input type="tel" id="contact" className="form-control contact-input w-50" placeholder="Contact No." />
  </div>
</div>


      <div className="col">
        <select id="country" className="form-control">
          <option value="Country">Country</option>
          <option value="In">India</option>
          <option value="Us">United States</option>
         
        </select>
      </div>
    </div>
    <div className="row w-100">
    <div className="form-group">
      <textarea cols="8" rows="3" className="form-control" placeholder="Message"></textarea>
      <button className="primary-btn">SEND MESSAGE</button>
    </div>
    </div>
    
    
  </div>
</form>


            <h3>Follow us here</h3>
            <div id="social">
              <a
                href="https://www.linkedin.com/company/visionary-techmate/mycompany/?viewAsMember=true"
                target="_new"
              >
                <i className="fab fa-linkedin-in icon"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100088829731631"
                target="_new"
              >
                <i className="fab fa-facebook-f icon"></i>
              </a>
              <a
                href="https://www.instagram.com/cloud__talk/?igshid=OGU0MmVlOWVjOQ%3D%3D"
                target="_new"
              >
                
                <i className="fab fa-instagram icon"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UC0xHeCcMjsHoPqup193_nNw"
                target="_new"
              >
                <i className="fab fa-youtube icon"></i>
              </a>
            </div>
            <div id="info_vtm">
              <div id="address_id">

              </div>
              <div id="email_id">

              </div>
              <div id="mobile_id">

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
