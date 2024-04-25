import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-logo">
        <img src="/images/healthLogo.png" alt="HealthLogo" />
      </div>

      <div className="footer-menu">
        <h3>Hero</h3>
        <h3>Section1</h3>
        <h3>Section2</h3>
        <h3>Section3</h3>
      </div>
      <div className="footer-icons">
        <FaInstagram />
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
      </div>
      <div className="copyright">
        <div className="left">2024 © Health-Blog</div>
        <div className="right">Terms & Policy</div>
      </div>
    </div>
  );
};

export default Footer;
