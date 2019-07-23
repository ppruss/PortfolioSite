import React from "react";
import PortfolioItem from "./PortfolioItem";
import GithubFinderImg from "../../assets/images/github_finder.jpg";
import CertificateImg from "../../assets/images/cert_react.jpg";
import ContactKeeperImg from "../../assets/images/contact_keeper.jpg";
import StudySmartImg from "../../assets/images/html_sample1.jpg";
import DreamCompanyImg from "../../assets/images/html_sample2.jpg";

import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section scrollspy">
      <h2>Portfolio</h2>
      <div className="row flex">
        <div className="col l3 s6">
          <PortfolioItem
            text="GithubFinder (Udemy: React Front To Back 2019)"
            link="https://patrickprussgithubfinder.netlify.com/"
            image={GithubFinderImg}
          />
        </div>

        <div className="col l3 s6">
          <PortfolioItem
            text="ContactKeeper (Udemy: React Front To Back 2019)"
            link="https://immense-hollows-58866.herokuapp.com/"
            image={ContactKeeperImg}
          />
        </div>

        <div className="col l3 s6">
          <PortfolioItem text="Study Smart HTML Sample" image={StudySmartImg} />
        </div>

        <div className="col l3 s6">
          <PortfolioItem
            text="Udemy: React Front To Back 2019 Zertifikat"
            image={CertificateImg}
          />
        </div>

        <div className="col l3 s6">
          <PortfolioItem
            text="Dream Company HTML Sample"
            image={DreamCompanyImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
