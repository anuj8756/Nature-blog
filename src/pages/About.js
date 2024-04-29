import React from "react";
import MainLayout from "../Layout/Layout1";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainLayout children={"About"} /> ;
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default About;
