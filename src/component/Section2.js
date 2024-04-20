import React from "react";
import Card from "./Card";
import "./Section2.css";

const Section2 = () => {
  return (
    <div className="section2">
      <h1>Recent Mental Health Articles</h1>
      <div className="section2-card">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Section2;
