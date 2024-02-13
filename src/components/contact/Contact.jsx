import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  return (
    <>
      {/* <Back title='Contact us' /> */}
      <section className="contacts padding">
        <div className="container_con shadow flexSB">
          <div className="left row">
            <img src={require("./15.svg")} alt="contact" />
          </div>

          <div className="right">
            <h1>Contact us</h1>
            <p id="con1">We're open for any suggestion or just to have a chat</p>

            <div className="address-email-phone">
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
                  <p>visionarytechmate@gmail.com</p>
                </div>
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
