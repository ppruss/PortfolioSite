import React from "react";
import "./HomeComponents.scss";
import PortfolioItem from "./PortfolioItem";
import GithubFinderImg from "../../assets/images/github_finder.jpg";
import CertificateImg from "../../assets/images/cert_react.jpg";
import ContactKeeperImg from "../../assets/images/contact_keeper.jpg";

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
          <PortfolioItem
            text="Udemy: React Front To Back 2019 Zertifikat"
            image={CertificateImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
