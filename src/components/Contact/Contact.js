import React from "react";
import "./contact.css";

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
        {/*________________________________ FORM ________________________________*/}
        <div className="subsection">
          <div className="row">
            <div className="col span_12">
              <h2>Reach me here.</h2>
            </div>
          </div>
          <div className="row">
            <div className="col span_12">
              <form className="contact-form" action="post">
                <div className="input-columns">
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
                  placeholder="subject"
                  id="subject"
                  name="subject"
                />
                <textarea
                  name="message"
                  placeholder="message"
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
