import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import ProfilePicture from "../../assets/img/profile.jpg";
import "./Header.css";

const Header = ({ page, setPage }) => {
  return (
    <header id="header" className="col span_2">
      <div className="main-header">
        <div className="img-profile">
          <img src={ProfilePicture} alt="My profile" />
        </div>
        <nav className="main-nav">
          <ul>
            {/* ----------------------ABOUT----------------------------*/}
            <CSSTransition
              in={page === "about"}
              timeout={600}
              className="link-about"
            >
              <li>
                <button
                  id="aboutTab"
                  className="tab"
                  onClick={() => setPage("about")}
                >
                  <i className="fas fa-female"></i>
                  <span className="header-title">About Me</span>
                  <span className="header-subtitle">What I do</span>
                </button>
              </li>
            </CSSTransition>
            {/* ----------------------RESUME----------------------------*/}
            <CSSTransition
              in={page === "resume"}
              timeout={600}
              className="link-resume"
            >
              <li>
                <button
                  id="resumeTab"
                  className="tab"
                  // style={page === "resume" ? activeLinkStyle : null}
                  onClick={() => setPage("resume")}
                >
                  <i className="fas fa-suitcase"></i>
                  <span className="header-title">Resume</span>
                  <span className="header-subtitle">What I have Done</span>
                </button>
              </li>
            </CSSTransition>
            {/* ----------------------PORTFOLIO----------------------------*/}
            <CSSTransition
              in={page === "portfolio"}
              timeout={600}
              className="link-portfolio"
            >
              <li>
                <button
                  id="portfolioTab"
                  className="tab"
                  onClick={() => setPage("portfolio")}
                  // style={page === "portfolio" ? activeLinkStyle : null}
                >
                  <i className="fas fa-eye"></i>
                  <span className="header-title">Portfolio</span>
                  <span className="header-subtitle">What I can Do</span>
                </button>
              </li>
            </CSSTransition>
            {/* ----------------------CONTACT----------------------------*/}
            <CSSTransition
              in={page === "contact"}
              timeout={600}
              className="link-contact"
            >
              <li>
                <button
                  id="contactTab"
                  className="tab"
                  // style={page === "contact" ? activeLinkStyle : null}
                  onClick={() => setPage("contact")}
                >
                  <i className="fas fa-envelope"></i>
                  <span className="header-title">Contact</span>
                  <span className="header-subtitle">What you can do</span>
                </button>
              </li>
            </CSSTransition>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
