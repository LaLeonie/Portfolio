import React from "react";

const Resume = props => {
  return (
    <section className={props.className}>
      <div className="content">
        {/*________________________________ TITLE ________________________________*/}
        <div className="subsection">
          <div className="row">
            <div className="col span_12 main-title">
              <h1>Resume</h1>
              <h3>What I have done</h3>
            </div>
          </div>
        </div>
        {/*________________________________ EXPERIENCE ________________________________*/}
        <div className="subsection">
          <div className="row">
            <div className="col span_12">
              <h2>Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col span_12 timeline">
              <div className="timeline-inner">
                <div className="name">
                  <span className="data">July 2019 - October 2019</span>
                  <h4>Full-stack Js Student | Founders & Coders</h4>
                </div>
                <div className="detail">
                  <p>
                    Currently, completing an 18-week, intensive coding boot camp
                    that covers full-stack JavaScript technology and real
                    project experience with an emphasis on pair programming.
                  </p>
                </div>
              </div>
              <div className="timeline-inner">
                <div className="name">
                  <span className="data">May 2018 - June 2018 </span>
                  <h4>Producer & Motion Designer | Self-employed</h4>
                </div>
                <div className="detail">
                  <p>
                    Produced digital content for clients in real estate,
                    education and media sector. Worked on feature films and ad
                    campaigns. Developed and produced informational 2D motion
                    graphics videos for corporate clients.
                  </p>
                </div>
              </div>
              <div className="timeline-inner">
                <div className="name">
                  <span className="data">September 2016 - April 2019</span>
                  <h4>Production Manager | MetFilm Creative</h4>
                </div>
                <div className="detail">
                  <p>
                    Managed branded content and corporate video productions of
                    MetFilm’s in-house creative production agency, reporting to
                    senior account manager.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*________________________________ EDUCATION ________________________________*/}
        <div className="subsection">
          <div className="row">
            <div className="col span_12">
              <h2>Education</h2>
            </div>
          </div>
          <div className="row">
            <div className="col span_12 timeline">
              <div className="timeline-inner">
                <div className="name">
                  <span className="data">September 2010 - July 2015</span>
                  <h4>BA Media Management | First-className</h4>
                  <h5>RheinMain University of Applied Science</h5>
                </div>
                <div className="detail">
                  <p>
                    A seven-semester, practice-oriented programme that blends
                    three areas of study – media business, media engineering,
                    and media design. Included one-year studies at École
                    Supérieure d'Audiovisuel in Toulouse, France.
                  </p>
                </div>
              </div>
              <div className="timeline-inner">
                <div className="name">
                  <span className="data">September 2015 - September 2016</span>
                  <h4>MA Business and Producing | 2:1</h4>
                  <h5>University of West London</h5>
                </div>
                <div className="detail">
                  <p>
                    An interdisciplinary, practice-oriented course including
                    modules in Project Management, Financing, Client Management,
                    Business and Research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*________________________________ COMPETENCIES ________________________________*/}
        <div className="subsection">
          <div className="row">
            <div className="col span_12">
              <h2>Competencies</h2>
            </div>
          </div>
          <div className="row">
            <div className="col span_12 timeline comp-container">
              <div className="col span_6 box border-bt">
                <div className="icon-comp">
                  <i className="far fa-file-code"></i>
                </div>
                <div className="competency">
                  <h5>Web Development</h5>
                  <p></p>
                </div>
              </div>
              <div className="col span_6 box border-bt">
                <div className="icon-comp">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <div className="competency">
                  <h5>Design</h5>
                  <p></p>
                </div>
              </div>
              <div className="col span_6 box border-bt">
                <div className="icon-comp">
                  <i className="far fa-file-video"></i>
                </div>
                <div className="competency">
                  <h5>Motion Graphics</h5>
                  <p></p>
                </div>
              </div>
              <div className="col span_6 box border-bt">
                <div className="icon-comp">
                  <i className="fas fa-tasks"></i>
                </div>
                <div className="competency">
                  <h5>Production Management</h5>
                  <p></p>
                </div>
              </div>
              <div className="col span_6 box">
                <div className="icon-comp">
                  <i className="fas fa-users"></i>
                </div>
                <div className="competency">
                  <h5>Team Leadership</h5>
                  <p></p>
                </div>
              </div>
              <div className="col span_6 box">
                <div className="icon-comp">
                  <i className="fas fa-comments"></i>
                </div>
                <div className="competency">
                  <h5>Client Management</h5>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
