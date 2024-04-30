import React from "react";
import "./Section1.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="section_1 container-fluid">
      <div className="row section1-row g-0">
        <div className=" col-lg-4 col-md-12 col-sm-12 left-section">
          <h3>Yes, We Went There</h3>
          <h1>Wellness Trends 2024</h1>
          <p>
            We asked the experts, dug into the data, and scoured the market to
            identify the top 5 wellness trends that will streamline and elevate
            our lives in the year ahead—all for the benefit of our bodies and
            minds.
          </p>
          <Link to="/about">Read More</Link>
        </div>
        <div className=" col-lg-8 col-md-12 col-sm-12 right-section">
          <Carousel>
            <Carousel.Item>
              <img
                className=" section1-img  img-fluid"
                src="https://media1.popsugar-assets.com/files/thumbor/16X_fDGbDkawJi_iyPp2BsVxNkM=/1x274:5408x3113/fit-in/5408x3605/top/filters:format_auto():quality(85):upscale()/2020/07/15/696/n/1922729/24aaa1355f0f23e53d7e24.90637713_.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>Nicole Cardoza</h1>
                <p>
                  Founder, Yoga Foster <br></br>Founder, Reclamation Ventures
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" section1-img img-fluid"
                src="https://imageio.forbes.com/specials-images/imageserve/61edf8201c4bbbbe5811b53a/Robin-Berzin-Portrait-1-Parsley-Health/960x0.jpg?format=jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h1>Robin Berzin</h1>
                <p>Founder and CEO, Parsley Health</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" section1-img img-fluid"
                src="https://victoria.mediaplanet.com/app/uploads/sites/114/2020/03/Lauren-Singer-posing-with-a-mason-jar-on-her-head-888x500.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h1> Lauren Singer</h1>
                <p>
                  Founder, Trash Is for Tossers<br></br> CEO, Package Free
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" section1-img  img-fluid"
                src="https://cdn.sanity.io/images/mur2ep80/production/59ce7ff1dc8d942166d82a2f55ebb399d4f30407-866x578.jpg?rect=48,0,771,578&w=1440&h=1080&q=86&fit=crop"
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <h1>Latham Thomas</h1>
                <p>Founder, Mama Glow</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" section1-img  img-fluid "
                src="https://images.ctfassets.net/rbzqg6pelgqa/6rEBMXYmtn3gjwAewzmKU0/73817fc2067434301780cca38cb7f842/podcast-12-andy-puddicombe-buddhist-monk-headspace-co-founder-en.jpg?fm=webp&q=75&w=3840"
                alt="Fifth slide"
              />
              <Carousel.Caption>
                <h1>Andy Puddicombe</h1>
                <p>Co-founder, Headspace</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Section1;
