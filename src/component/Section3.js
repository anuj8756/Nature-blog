import React from "react";
import "./Section3.css";

const Section3 = () => {
  return (
    <div>
      <div className="section3">
        <div className="image">
          <img src="/images/section3-img.png" alt="section3-img" />
        </div>
        <div className="content">
          <h1>Wondering: Do I have?</h1>
          <p>
            Experiencing symptoms of mental illness but are unsure of what they
            mean? Get trusted information, take a psychological test to help
            determine possible causes and treatments.
          </p>
          <h4>Do I have Anxiety?</h4>
          <h4>Do I have Bipolar Disorder?</h4>
          <h4>Do I have Depression?</h4>
          <h4>Do I have ADHD?</h4>
          <a href="#">More Condition </a>
        </div>
      </div>
    </div>
  );
};

export default Section3;
