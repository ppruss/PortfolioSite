import React from "react";
import "./Hero.scss";
import portrait from "../../../assets/images/portrait.jpg";
import heroBanner from "../../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div id="hero" className="row flex section scrollspy">
      <div className="col l8 s12 hero-banner parallax-container">
        <div className="parallax">
          <img src={heroBanner} />
        </div>
        <div className="hero-content">
          <h1>
            Projekte von <br />
            Patrick Pruß
          </h1>
          <a href="#portfolio" className="btn waves-effect waves-light">
            <i className="material-icons left">arrow_right</i>Projekte ansehen
          </a>
        </div>
      </div>
      <div className="col flex l4 p-0">
        <div className="about-me">
          <h3>Über mich</h3>
          <figure>
            <img
              src={portrait}
              id="portrait"
              alt="Portrait"
              className="circle"
            />
            <figcaption>
              <small>Master of Science für Informatik</small>
              <p>
                Ich habe 2009 in Magdeburg studiert und arbeite seit 2014 als
                Entwickler in den Bereichen C#, .NET und Frontend.
              </p>
            </figcaption>
          </figure>
        </div>
        <div className="contact yellow light-1">
          <h3>Kontakt</h3>
          <ul className="collection">
            <li className="collection-item">
              <i className="fas fa-home fa-lg" />
              Magdeburg, Deutschland
            </li>
            <li className="collection-item">
              <i className="fab fa-github fa-lg" />
              <a href="https://github.com/ppruss">Github</a>
            </li>
            <li className="collection-item">
              <i className="fab fa-xing fa-lg" />
              <a href="https://www.xing.com/profile/Patrick_Pruss3">Xing</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
