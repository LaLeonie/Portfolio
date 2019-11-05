import React from "react";
import ProfilePicture from "../../assets/img/profile.jpg";

const Header = ({ page, setPage }) => {
  // const links = document.querySelectorAll("li");
  // console.log(links);

  // React.useEffect(() => {
  //   links.map(el => el.classList.remove("active"));
  //   const activeLink = document.querySelector(`.${page}Link`);
  //   activeLink.classList.add("active");
  // }, [page]);

  const activeLinkStyle = {
    background: "#04EAFF",
    color: "#294B4F"
  };

  return (
    <header id="header" className="col span_2">
      <div className="main-header">
        <div className="img-profile">
          <img src={ProfilePicture} alt="My profile" />
        </div>
        <nav id="main-nav" className="main-nav">
          <ul>
            {/* ----------------------ABOUT----------------------------*/}
            <li className="aboutLink active">
              <button
                style={page === "about" ? activeLinkStyle : null}
                id="aboutTab"
                className="tab active"
                onClick={() => setPage("about")}
              >
                <i className="fas fa-female"></i>
                <span className="header-title">About Me</span>
                <span className="header-subtitle">What I do</span>
              </button>
            </li>
            {/* ----------------------RESUME----------------------------*/}
            <li className="resumeLink">
              <button
                id="resumeTab"
                className="tab"
                style={page === "resume" ? activeLinkStyle : null}
                onClick={() => setPage("resume")}
              >
                <i className="fas fa-suitcase"></i>
                <span className="header-title">Resume</span>
                <span className="header-subtitle">What I have Done</span>
              </button>
            </li>
            {/* ----------------------PORTFOLIO----------------------------*/}
            <li className="portfolioLink">
              <button
                id="portfolioTab"
                className="tab"
                onClick={() => setPage("portfolio")}
                style={page === "portfolio" ? activeLinkStyle : null}
              >
                <i className="fas fa-eye"></i>
                <span className="header-title">Portfolio</span>
                <span className="header-subtitle">What I can Do</span>
              </button>
            </li>
            {/* ----------------------CONTACT----------------------------*/}
            <li className="contactLink">
              <button
                id="contactTab"
                className="tab"
                style={page === "contact" ? activeLinkStyle : null}
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
