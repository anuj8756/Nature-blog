import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { FaFacebookF, FaTwitter, FaInstagram, FaBars } from "react-icons/fa";
const Navbar = () => {
  const handleNav = () => {
    let c = document.getElementById("phone-nav-ul");
    if (c.style.display === "none") {
      c.style.display = "block";
    } else {
      c.style.display = "none";
    }
  };
  return (
    <>
      <div className="navbar">
        <ul className="desktop-ul">
          <li>
            <a href="/hero">Hero</a>
          </li>
          <li>
            <a href="/section1">Service</a>
          </li>
          <li>
            <a href="/section2">Contact</a>
          </li>
        </ul>
        <div className="nav-icon">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
        <div className="phone-nav-menu" onClick={handleNav}>
          <FaBars />
        </div>
        <div className="phone-nav-ul" id="phone-nav-ul" onClick={handleNav}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
