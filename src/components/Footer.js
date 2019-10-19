import React from "react";

const Footer = () => {
  return (
    <footer className="footer col span_1">
      <ul className="socials">
        <li>
          <a
            href="https://www.linkedin.com/in/leonie-zorzi-73a648141/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/LaLeonie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/LeonieZorzi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
