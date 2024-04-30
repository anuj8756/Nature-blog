import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({ imgSrc, imgAlt, title, description, blogLink }) => {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <img src={imgSrc} alt={imgAlt} />
        <div className="card-content">
          <div className="gap"></div>
          <Link to={blogLink}>
            <p>{description}</p>
          </Link>
          <div className="gap"></div>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
