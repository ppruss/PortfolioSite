import React from "react";
import "./HomeComponents.scss";
import GithubFinder from "../../assets/images/github_finder.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="row">
        <div className="col l3 s6">
          <div className="card teal darken-3">
            <div className="card-image">
              <img src={GithubFinder} alt="" />
            </div>
            <div className="card-content white-text">
              <p>Udemy: React Front To Back 2019</p>
            </div>
            <div className="card-action">
              <a href="https://patrickprussgithubfinder.netlify.com/">Site</a>
              <a href="https://github.com/ppruss/GithubFinder">Github</a>
            </div>
          </div>
        </div>

        <div className="col l3 s6">
          <div className="card teal darken-3">
            <div className="card-image">
              <img src={GithubFinder} alt="" />
              <span className="card-title">Github Finder</span>
            </div>
            <div className="card-content white-text">
              <p>Udemy: React Front To Back 2019</p>
            </div>
            <div className="card-action">
              <a href="https://patrickprussgithubfinder.netlify.com/">Site</a>
              <a href="https://github.com/ppruss/GithubFinder">Github</a>
            </div>
          </div>
        </div>

        <div className="col l3 s6">
          <div className="card teal darken-3">
            <div className="card-image">
              <img src={GithubFinder} alt="" />
              <span className="card-title">Github Search</span>
            </div>
            <div className="card-content white-text">
              <p>Udemy: React Front To Back 2019</p>
            </div>
            <div className="card-action">
              <a href="https://patrickprussgithubfinder.netlify.com/">Site</a>
              <a href="https://github.com/ppruss/GithubFinder">Github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
