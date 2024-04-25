import React from "react";
import "./Card.css";
const Card = ({ imgSrc, imgAlt, title, description }) => {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <img src={imgSrc} alt={imgAlt} />
        <div className="card-content">
          <div className="gap"></div>
          <p>{description}</p>
          <div className="gap"></div>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
