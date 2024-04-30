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
          blogLink={"/blog5"}
        />
        <Card
          imgSrc={"/images/popularBlog2.jpg"}
          imgAlt={"popularBlog2"}
          title={"ABOUT TRAUMA"}
          description={"Learning to Say No After Trauma?"}
          blogLink={"/blog6"}
        />
        <Card
          imgSrc={"/images/popularBlog3.jpg"}
          imgAlt={"popularBlog3"}
          title={"DEBUNKING ADDICTION"}
          description={"The Link Between Addiction and Teenage Drinking"}
          blogLink={"/blog7"}
        />
      </div>
    </div>
  );
};

export default Section4;
