import React from "react";
import "./Section4.css";
import Card from "./Card";

const Section4 = () => {
  return (
    <div className="section4">
      <h1 className="section4-heading">Popular Blog</h1>
      <div className="section4-card">
        <Card
          imgSrc={"/images/popularBlog1.jpg"}
          imgAlt={"popularBlog1"}
          title={"I'M BIPOLAR TOO"}
          description={"Bipolar Disorder and Ghosting: It's a Big Problem"}
        />
        <Card
          imgSrc={"/images/popularBlog2.jpg"}
          imgAlt={"popularBlog2"}
          title={"ABOUT SELF INJURY"}
          description={"What Do Dreams About Self-Harm Mean?"}
        />
        <Card
          imgSrc={"/images/popularBlog3.jpg"}
          imgAlt={"popularBlog3"}
          title={"DEBUNKING ADDICTION"}
          description={"Forgiving Yourself for Embarrassing Drunken Behavior"}
        />
      </div>
    </div>
  );
};

export default Section4;
