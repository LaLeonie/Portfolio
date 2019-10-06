import React from "react";

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
          <img src="img/profile.jpg" alt="image of me" />
        </div>
        <nav id="main-nav" className="main-nav">
          <ul>
            {/* ----------------------ABOUT----------------------------*/}
            <li className="aboutLink active">
              <a
                style={page === "about" ? activeLinkStyle : null}
                id="aboutTab"
                className="tab active"
                onClick={() => setPage("about")}
              >
                <i className="fas fa-female"></i>
                About Me
                <span>What I do</span>
              </a>
            </li>
            {/* ----------------------RESUME----------------------------*/}
            <li className="resumeLink">
              <a
                id="resumeTab"
                className="tab"
                style={page === "resume" ? activeLinkStyle : null}
                onClick={() => setPage("resume")}
              >
                <i className="fas fa-suitcase"></i>
                Resume
                <span>What I have Done</span>
              </a>
            </li>
            {/* ----------------------PORTFOLIO----------------------------*/}
            <li className="portfolioLink">
              <a
                id="portfolioTab"
                className="tab"
                onClick={() => setPage("portfolio")}
                style={page === "portfolio" ? activeLinkStyle : null}
              >
                <i className="fas fa-eye"></i>
                Portfolio
                <span>What I can Do</span>
              </a>
            </li>
            {/* ----------------------CONTACT----------------------------*/}
            <li className="contactLink">
              <a
                id="contactTab"
                className="tab"
                style={page === "contact" ? activeLinkStyle : null}
                onClick={() => setPage("contact")}
              >
                <i className="fas fa-envelope"></i>
                Contact
                <span>What you can do</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
