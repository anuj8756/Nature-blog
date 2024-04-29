import React from "react";
import MainLayout from "../Layout/Layout1";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <>
      <MainLayout children={"Section"} />
      <Link to="/about">Go to About</Link>
    </>
  );
};

export default Section;
