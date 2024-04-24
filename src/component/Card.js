import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";


const Card = ({ imgSrc, imgAlt, title, description }) => {
  return (
    <div className="card-container">
      <img
        src={imgSrc}
        alt={imgAlt} />
      <div className="card-content">
        <h1><a href="https://www.w3schools.com/REACT/showreact.asp?filename=demo2_react_events_handler">{title}</a></h1>
        <p>{description}</p>
      </div>
    </div >
  );
};

export default Card;
