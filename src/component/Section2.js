import React from "react";
import Card from "./Card";
import "./Section2.css";

const Section2 = () => {
  return (
    <div className="section2">
      <h1>Recent Mental Health Articles</h1>
      <div className="section2-card">
        <Card imgSrc={"/images/blog-1.jpg"} imgAlt={"1st-blog"} title={"How to Stay Centered When Life Feels Out of Control"} description={""} />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Section2;
