import React, { useState } from "react";
import emailjs from 'emailjs-com';
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r2iqdco', 'template_v65x2bn', e.target, 'rLbiQsUwrUIMVD8_8')
      .then((result) => {
        console.log(result.text);
        console.log('message sent');

        // Set showPopup to true after successful submission
        setShowPopup(true);

        // Close the popup and clear the form after 3 seconds
        setTimeout(() => {
          setShowPopup(false);
          e.target.reset(); // Reset the form fields
        }, 3000);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };


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
                      <p>+91 6375597272</p>
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
                    <p>Sahkar Nagar, Khatipura road, jhotwara, Jaipur, Rajasthan - 302012</p>
                  </div>
                </div>
              </div>

            </div>

            <form id="contactForm" onSubmit={sendEmail}>
              <div className="d-flex flex-column">
                <div className="row w-100">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Name" name="from_name" />
                  </div>
                  <div className="col">
                    <input type="email" className="form-control" placeholder="Email" name="from_mail" />
                  </div>
                </div>
                <div className="row w-100">
                  <div className="col">
                    <div className="input-group">
                      <select id="countryCode" className="form-control" name="from_country">
                        <option value="+91">+91</option>
                        {/* Add more options if needed */}
                      </select>
                      <input type="tel" id="contact" className="form-control contact-input w-50" placeholder="Contact No." name="from_contact" />
                    </div>
                  </div>
                  <div className="col">
                    <select id="country" className="form-control" name="from_country">
                      <option value="Country">Country</option>
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      {/* Add more options if needed */}
                    </select>
                  </div>
                </div>
                <div className="row w-100">
                  <div className="form-group">
                    <textarea cols="8" rows="3" className="form-control" placeholder="Message" name="message"></textarea>
                    <button type="submit" className="primary-btn">SEND MESSAGE</button>
                  </div>
                </div>
              </div>
            </form>

            {showPopup && (
              <div className="popup">
                <p>Message sent successfully!</p>
                <button onClick={() => setShowPopup(false)}>Close</button>
              </div>
            )}


            <h3>Follow us here</h3>

            <div id="social" className="d-flex justify-content-center">
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
      </section>
    </>
  );
};

export default Contact;
