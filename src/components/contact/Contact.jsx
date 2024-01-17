import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  // const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      {/* <Back title='Contact us' /> */}
      <section className="contacts padding">
        <div className="container_con shadow flexSB">
          <div className="left row">
            {/* <iframe src={map}></iframe> */}
            <img src={require("./4.png")} alt="contact" />
          </div>

          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box_con address-box">
                <h4>ADDRESS:</h4>
                <p>
                  Sahkar Nagar, Khatipura road, jhotwara, Jaipur, Rajasthan -
                  302012
                </p>
              </div>
              <div className="box_con email-phone-box">
                <div>
                  <h4>EMAIL:</h4>
                  <p> visionarytechmate@gmail.com</p>
                  {/* <p>deeksha.azure@gmail.com</p> */}
                </div>{" "}
                <br />
                <div>
                  <h4>PHONE:</h4>
                  <p>+91 6375597272</p>
                </div>
              </div>
            </div>

            <form action="">
              <div className="flexColumn">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" placeholder="Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact">Contact No.:</label>

                  <div className="flexSB">
                    <select id="countryCode">
                      <option value="+91">+91</option>
                    </select>
                    <input type="tel" id="contact" placeholder="Contact No." />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country:</label> <br />
                  <select id="country">
                    <option value="In">India</option>
                  </select>
                  
                </div>
              </div>
              {/* <input type='text' placeholder='Subject' /> */}
              <textarea cols="30" rows="10" placeholder="Message"></textarea>
              <button className="primary-btn">SEND MESSAGE</button>
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
                {" "}
                <i className="fab fa-instagram icon"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UC0xHeCcMjsHoPqup193_nNw"
                target="_new"
              >
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
