import React from "react";

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
                  <img src="assets/1x/HTML.png" alt="HTML" />
                  <p>HTML</p>
                </div>
                <div className="tech-stack-item">
                  <img src="assets/1x/CSS.png" alt="CSS" />
                  <p>CSS</p>
                </div>
                <div className="tech-stack-item">
                  <img src="assets/1x/js.png" alt="Javascript" />
                  <p>JavaScript</p>
                </div>
                <div className="tech-stack-item">
                  <img src="assets/1x/Node.png" alt="Node" />
                  <p>Node.js</p>
                </div>
                <div className="tech-stack-item">
                  <img src="assets/1x/React.png" alt="Express" />
                  <p>React</p>
                </div>
                <div className="tech-stack-item">
                  <img src="assets/1x/handlebars.png" alt="Handlebars" />
                  <p>Handlebars</p>
                </div>
                <div className="tech-stack-item">
                  <img src="assets/1x/express.png" alt="Express" />
                  <p>Express</p>
                </div>
                <div className="tech-stack-item">
                  <img src="assets/1x/postgresSQL.png" alt="PostgreSQL" />
                  <p>PostgreSQL</p>
                </div>
                <div className="tech-stack-item">
                  <img src="assets/1x/Heroku.png" alt="Heroku" />
                  <p>Heroku</p>
                </div>
                <div className="tech-stack-item">
                  <img src="assets/1x/Travis.png" alt="Travis" />
                  <p>Travis</p>
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
              <ul>
                <li>Figma</li>
                <li>Git & Github</li>
                <li>Postman</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe InDesign</li>
                <li>Adobe After Effects</li>
              </ul>
            </div>
          </div>
        </div>
        {/*________________________________ DOWNLOAD CV ________________________________*/}
        <div className="subsection">
          <div className="row">
            <div className="download">
              <a className="button" href="assets/LeonieZorzi_CV.pdf" download>
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
