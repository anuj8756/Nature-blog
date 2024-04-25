import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe-image">
        <img src="/images/subscribeImage.jpg" alt="Subscribe-image" />
      </div>
      <div className="subscribe-content">
        <h1>
          Get a dose of wellness in your inbox! Subscribe for our weekly
          updates.
        </h1>
        <button type="button">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
