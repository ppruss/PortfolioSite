import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  var routePrefix = window.location.pathname !== "/" ? "/" : "";

  return (
    <header>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper grey darken-3">
            <a href="#" data-target="mobile-menu" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down table-of-contents">
              <li>
                <a href={`${routePrefix}#hero`}>Home</a>
              </li>
              <li>
                <a href={`${routePrefix}#skills`}>Skills</a>
              </li>
              <li>
                <a href={`${routePrefix}#portfolio`}>Portfolio</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav table-of-contents" id="mobile-menu">
        <li>
          <a href={`${routePrefix}#hero`}>Home</a>
        </li>
        <li>
          <a href={`${routePrefix}#skills`}>Skills</a>
        </li>
        <li>
          <a href={`${routePrefix}#portfolio`}>Portfolio</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
