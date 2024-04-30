import React from "react";
import "./BlogLayout.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const BlogLayout = ({
  MainHeading,
  imgSrc,
  imgAlt,
  SubHeading1,
  parah1,
  parah1List1,
  parah1List2,
  parah1List3,
  MainHeading2,
  imgSrc2,
  imgAlt2,
  SubHeading2,
  parah2List1,
  parah2List2,
  parah2List3,
  parah2List4,
  parah2List5,
  parah2List6,
  parah2List7,
  parah2List8,
  parah2List9,
  parah2List10,
}) => {
  return (
    <>
      <Navbar />
      <div className="blog-layout-wrapper">
        <div className="blog-layout-heading">
          <h1>{MainHeading}</h1>
        </div>
        <div className="blog-layout-img">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className="blog-layout-content">
          <h6>{SubHeading1}</h6>
          <p>{parah1}</p>
          <div>
            <ul>
              <li>{parah1List1}</li>
              <li>{parah1List2}</li>
              <li>{parah1List3}</li>
            </ul>
          </div>
          <br></br>
          <h1>{MainHeading2} </h1>
          <br></br>
          <div className="blog-layout-img">
            <img src={imgSrc2} alt={imgAlt2} />
          </div>
          <h6>{SubHeading2}</h6>
          <br></br>
          <ul>
            <li>{parah2List1}</li>
            <li>{parah2List2}</li>
            <li>{parah2List3}</li>
            <li>{parah2List4}</li>
            <li>{parah2List5}</li>
            <li>{parah2List6}</li>
            <li>{parah2List7}</li>
            <li>{parah2List8}</li>
            <li>{parah2List9}</li>
            <li>{parah2List10} </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogLayout;
