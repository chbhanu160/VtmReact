import React, { useState } from "react";
import emailjs from 'emailjs-com';
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r2iqdco', 'template_v65x2bn', e.target, 'rLbiQsUwrUIMVD8_8')
      .then((result) => {
        console.log(result.text);
        console.log('message sent');
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          e.target.reset();
        }, 6000);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <section>
        <div className="container shadow p-4 my-4">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12" id="id_for_img">
              {/* <img src={require("./15.svg")} alt="contact" className="img-fluid" /> */}
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12" id="right_col">
              <h3>Contact Us</h3>
              <p>We're open for any suggestion or just to have a chat</p>

              <div className="mb-3">
                <p><i className="fa fa-envelope"></i> visionarytechmate@gmail.com</p>
                <p><i className="fa fa-phone-alt"></i> +91 6375597272</p>
                <p><i className="fa fa-location-arrow"></i> Sahkar Nagar, Khatipura road, jhotwara, Jaipur, Rajasthan - 302012</p>
              </div>

              <form id="contactForm" onSubmit={sendEmail}>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <input type="text" className="form-control" placeholder="Name" name="from_name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control" placeholder="Email" name="from_mail" required />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <div className="input-group">
                        <select id="countryCode" className="form-control" name="from_country" required>
                          <option value="+91">+91</option>
                        </select>
                        <input type="tel" id="contact" className="form-control w-50" placeholder="Contact No." name="from_contact" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <select id="country" className="form-control" name="from_country" required>
                        <option value="Country">Country</option>
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea cols="8" rows="3" className="form-control" placeholder="Message" name="message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">SEND MESSAGE</button>
              </form>

              {showPopup && (
                <div className="alert alert-success mt-3">
                  <p>Your message has been received successfully. We appreciate your inquiry and will get back to you shortly.</p>
                  <button className="btn btn-secondary" onClick={() => setShowPopup(false)}>Close</button>
                </div>
              )}

              <h3 className="mt-4">Follow us here</h3>
              <div id="c-social" className="d-flex justify-content-center">
                <a href="https://www.linkedin.com/company/visionary-techmate/mycompany/?viewAsMember=true" target="_new">
                  <i className="fab fa-linkedin-in icon"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100088829731631" target="_new">
                  <i className="fab fa-facebook-f icon"></i>
                </a>
                <a href="https://www.instagram.com/cloud__talk/?igshid=OGU0MmVlOWVjOQ%3D%3D" target="_new">
                  <i className="fab fa-instagram icon"></i>
                </a>
                <a href="https://www.youtube.com/channel/UC0xHeCcMjsHoPqup193_nNw" target="_new">
                  <i className="fab fa-youtube icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
