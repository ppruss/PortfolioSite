import React from "react";
import "./Footer.scss";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer grey darken-4">
      <footer className="footer-copyright">
        &copy; 2019
        <a href="/about" className="white-text">
          Impressum
        </a>
      </footer>
    </footer>
  );
};

export default Footer;
