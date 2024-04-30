import React from "react";
import "./AllBlog.css";
import { Link } from "react-router-dom";

const AllBlog = ({ mainHeading, imgSrc, imgAlt, description, blogLink }) => {
  return (
    <>
      <div className="blog-view">
        <div className="blog-view-wrapper">
          <div className="blog-view-heading">
            <h1>{mainHeading}</h1>
          </div>
          <div className="blog-view-img">
            <img src={imgSrc} alt={imgAlt} />
          </div>
          <div className="blog-view-description">
            <p>{description}</p>
          </div>
          <div className="blog-view-button">
            <Link to={blogLink}>Continue Reading</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBlog;
