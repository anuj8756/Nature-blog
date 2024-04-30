import React from "react";
import Card from "./Card";
import "./Section2.css";

const Section2 = () => {
  return (
    <div className="section2">
      <h1 className="section2-heading">Recent Mental Health Articles</h1>
      <div className="section2-card">
        <Card
          imgSrc={"/images/mentalHealth1.jpg"}
          imgAlt={"mentalHealth1"}
          title={"Mental-Health"}
          description={"How to Stay Centered When Life Feels Out of Control"}
          blogLink={"/blog1"}
        />
        <Card
          imgSrc={"/images/mentalHealth2.jpg"}
          imgAlt={"mentalHealth2"}
          title={"Mental-Health"}
          description={"How to Talk to Your Doctor About Your Mental Health"}
          blogLink={"/blog2"}
        />
        <Card
          imgSrc={"/images/mentalHealth3.jpg"}
          imgAlt={"mentalHealth3"}
          title={"Mental-Health"}
          description={" What We Pay Attention to Affects Our Mental Health"}
          blogLink={"/blog3"}
        />
        <Card
          imgSrc={"/images/mentalHealth4.jpg"}
          imgAlt={"mentalHealth4"}
          title={"Mental-Health"}
          description={"How Excess Weight Impacts Our Mental Health"}
          blogLink={"/blog4"}
        />
      </div>
    </div>
  );
};

export default Section2;
