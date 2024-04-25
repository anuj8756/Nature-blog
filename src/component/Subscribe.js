import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe-image">
        <img src="/images/subscribeImage.jpg" alt="subscribeImage" />
      </div>
      <div className="subscribe-content">
        <p>Get More Out of This Relationship</p>
        <h1>
          Get a dose of wellness in your inbox! Subscribe for our weekly
          updates.
        </h1>
        <div className="input-bar">
          <input type="email" placeholder="Enter Your Email " />
          <button type="button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
