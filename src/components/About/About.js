import React from "react";
import HTMLicon from "../../assets/icons/HTML.png";
import CSSicon from "../../assets/icons/CSS.png";
import JSicon from "../../assets/icons/js.png";
import NODEicon from "../../assets/icons/Node.png";
import REACTicon from "../../assets/icons/React.png";
import HANDLEBARSicon from "../../assets/icons/handlebars.png";
import EXPRESSicon from "../../assets/icons/express.png";
import SQLicon from "../../assets/icons/postgresSQL.png";
import CV from "../../assets/LeonieZorzi_CV.pdf";
import "./About.css";

const About = props => {
  return (
    <section className={props.className}>
      <div className="content">
        {/*________________________________ TITLE________________________________*/}
        <div className="subsection">
          <div className="row">
            <div className="col span_12 main-title">
              <h1>Leonie Zorzi</h1>
              <h3>Full-stack JavaScript Developer</h3>
            </div>
          </div>
        </div>
        {/*________________________________ INTRO TEXT ________________________________*/}
        <div className="subsection">
          <div className="row">
            <div className="col span_12">
              <h2>About Me</h2>
              <p>
                Full-stack web developer with 3+ years of experience in branded
                content and media production. Turned to web development as I
                enjoy the analytical and creative challenge of solving real-
                world problems with code. As a producer and production manager,
                I have worked for brands, agencies, and charities, managing
                productions and teams from initial brief to final delivery.
              </p>
            </div>
          </div>
        </div>
        {/*________________________________ TECH STACK ________________________________*/}
        <div className="subsection">
          <div className="row">
            <div className="col span_12">
              <h2>Tech Stack</h2>
              <div className="tech-stack-wrapper">
                <div className="tech-stack-item">
                  <img src={HTMLicon} alt="HTML" />
                  <p>HTML</p>
                </div>
                <div className="tech-stack-item">
                  <img src={CSSicon} alt="CSS" />
                  <p>CSS</p>
                </div>
                <div className="tech-stack-item">
                  <img src={JSicon} alt="Javascript" />
                  <p>JavaScript</p>
                </div>
                <div className="tech-stack-item">
                  <img src={NODEicon} alt="Node" />
                  <p>Node.js</p>
                </div>
                <div className="tech-stack-item">
                  <img src={REACTicon} alt="Express" />
                  <p>React</p>
                </div>
                <div className="tech-stack-item">
                  <img src={HANDLEBARSicon} alt="Handlebars" />
                  <p>Handlebars</p>
                </div>
                <div className="tech-stack-item">
                  <img src={EXPRESSicon} alt="Express" />
                  <p>Express</p>
                </div>
                <div className="tech-stack-item">
                  <img src={SQLicon} alt="PostgreSQL" />
                  <p>PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*________________________________ SOFTWARE SKILLS ________________________________*/}
        <div className="subsection">
          <div className="row">
            <div className="col-md-12">
              <h2>Software Skills</h2>
              <ul className="software">
                <li className="align-right">Git & Github</li>
                <li>Figma</li>
                <li className="align-right">Heroku</li>
                <li>Adobe Photoshop</li>
                <li className="align-right">Netflify</li>
                <li>Adobe InDesign</li>
                <li className="align-right">Travis</li>
                <li>Adobe Illustrator</li>
                <li className="align-right">Postman</li>
                <li>Adobe After Effects</li>
              </ul>
            </div>
          </div>
        </div>
        {/*________________________________ DOWNLOAD CV ________________________________*/}
        <div className="subsection">
          <div className="row">
            <div className="download">
              <a className="button-download" href={CV} download>
                Download my CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
