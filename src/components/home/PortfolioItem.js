import React from "react";
import "./PortfolioItem.scss";
import PropTypes from "prop-types";

const PortfolioItem = ({ image, text, link }) => {
  return (
    <div className="card secondary-color">
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <div className="card-content white-text">
        <p>{text}</p>
      </div>
      <div className="card-action">
        {link && (
          <a href={link} className="primary-text">
            Site
          </a>
        )}
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default PortfolioItem;
