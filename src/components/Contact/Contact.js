import React from "react";
import "./contact.css";
import London from "../../assets/img/London.png";

const Contact = props => {
  return (
    <section className={props.className}>
      <div className="content">
        {/*________________________________ TITLE________________________________*/}
        <div className="subsection">
          <div className="row">
            <div className="col span_12 main-title">
              <h1>Contact</h1>
              <h3>What you can do</h3>
            </div>
          </div>
        </div>
        {/*________________________________ LOCATIOn________________________________*/}
        <div className="subsection">
          <div className="row">
            <div className="col span_12">
              <h2>Location</h2>
            </div>
          </div>
          <div className="row">
            <div className="col span_12">
              <div className="location-container">
                <img src={London} alt="London" />
                <div className="location-text">
                  <h4>Based in London.</h4>
                  <h4>Available to work remotely.</h4>
                  <p>Get in touch. I'd love to hear from you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*________________________________ CONNECT ________________________________*/}
        <div className="subsection">
          <div className="row">
            <div className="col span_12">
              <h2>Let's Connect</h2>
            </div>
          </div>
          <div className="row">
            <div className="col span_12">
              <div className="connect-container">
                <div className="border-right">
                  <i className="fas fa-phone-square"></i>
                  <p>07484 143 159</p>
                </div>
                <div className="border-right">
                  <i className="fas fa-envelope-square"></i>
                  <p>Leonie.Zorzi@hotmail.com</p>
                </div>
                <div>
                  <i class="fab fa-twitter-square"></i>
                  <p>@LeonieZorzi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*________________________________ FORM ________________________________*/}
        <div className="subsection">
          <div className="row">
            <div className="col span_12">
              <h2>Reach me here</h2>
            </div>
          </div>
          <div className="row">
            <div className="col span_12">
              <form className="contact-form" action="post">
                <div className="input-flex">
                  <input type="text" placeholder="Name" id="name" name="name" />
                  <input
                    type="text"
                    placeholder="Email"
                    id="email"
                    name="email"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  id="subject"
                  name="subject"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  id="message"
                  cols="45"
                  rows="7"
                />
                <input
                  type="submit"
                  value="submit form"
                  className="submit-button"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
