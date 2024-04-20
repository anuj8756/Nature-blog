import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <img
        src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713484800&semt=sph"
        alt="Card Image"
      />
      <div className="card-content">
        <h1>Card Title</h1>
        <p>This is Card Description</p>
      </div>
    </div>
  );
};

export default Card;
