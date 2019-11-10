import React from "react";
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
            <li className={page === "about" ? "activeLink" : null}>
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
            {/* ----------------------RESUME----------------------------*/}
            <li className={page === "resume" ? "activeLink" : null}>
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
            {/* ----------------------PORTFOLIO----------------------------*/}
            <li className={page === "portfolio" ? "activeLink" : null}>
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
            {/* ----------------------CONTACT----------------------------*/}
            <li className={page === "contact" ? "activeLink" : null}>
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
