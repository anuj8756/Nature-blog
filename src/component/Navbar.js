import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
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
        <div className="nav-icon">
          <img src="/images/healthLogo.png" alt="" srcset="" />
        </div>
        <ul className="desktop-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <div className="phone-nav-menu" onClick={handleNav}>
          <FaBars />
        </div>
        <div className="phone-nav-ul" id="phone-nav-ul" onClick={handleNav}>
          <ul>
            <li>
              <a href="/hero">Hero</a>
            </li>
            <li>
              <a href="/section1">Section1</a>
            </li>
            <li>
              <a href="/section2">Section2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
