import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="page-footer grey darken-4">
      <footer className="footer-copyright">
        &copy; 2019
        <ul className="flex">
          <li>
            <a href="/" className="white-text">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="white-text">
              Impressum
            </a>
          </li>
        </ul>
      </footer>
    </footer>
  );
};

export default Footer;
