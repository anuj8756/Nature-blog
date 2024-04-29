import React from "react";
import "./Layout1.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Layout1 = () => {
  return (
    <>
      <Navbar />
      <div className="layout-banner">
        <img
          src="https://images.unsplash.com/photo-1483137140003-ae073b395549?q
            =80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b
            y1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="banner_image"
        />
        <div className="layout-banner-content">
          <h1>ABOUT PAGE</h1>
        </div>
      </div>

      <div className="layout-section1">
        <div className="layout-section1-left">
          <h1 className="layout-section1-heading">Health-Blog</h1>
          <p>
            HealthBlog is the largest consumer mental health site on the net. We
            provide authoritative information and support to people with mental
            health concerns, along with their family members and other loved
            ones. At HealthBlog, you'll find comprehensive information on
            psychological disorders. We also have online blogs written by people
            with lived experience. At HealthBlog, we help bring that to you by
            providing mental health information from experts, as well as
            everyday people who are dealing with psychological disorders.
          </p>
        </div>
        <div className="layout-section1-right">
          <img
            src="/images/about-section1-right1.webp"
            alt="about-section1-right1"
          />
          <div className="vertical-line"></div>
          <h1>Well Mind</h1>
          <p>
            Mental health care is health care, which is why we advocate for
            everyone to have access to the tools and resources they need to be
            mentally and emotionally well.
          </p>
          <img
            src="/images/about-section1-right2.webp"
            alt="about-section1-right2"
          />
          <div className="vertical-line"></div>
          <h1>Well Spirit</h1>
          <p>
            It’s not just hippie-dippie fluff: A sense of belonging, purpose,
            and connection to others is linked to a longer, happier, healthier
            life.
          </p>
        </div>
      </div>
      <h1 className="layout-section2-heading">We Believe</h1>
      <div className="layout-section2">
        <div>
          <ul>
            <li>
              Well-being is a right for all, and we have a responsibility to
              challenge the systems that prevent people from living a well life.
            </li>
            <li>In journalism and a research-backed approach. </li>
            <li>
              That lived experience is also valid, particularly for marginalized
              communities.
            </li>
            <li>
              Wellness is deeply personal and ever evolving: what works at 27
              may not at 52 and beyond—we’re committed to meeting you wherever
              you are.
            </li>
            <li>
              That people's relationships with health, health care, and wellness
              are impacted differently by their race and ethnicity,
              socioeconomics, gender, sexuality, and ability. As such, we strive
              to make our content relevant and accessible to as many different
              kinds of people as possible.
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>We can not truly be well if the planet is not.</li>
            <li>
              Community care is self care, and we’ll continue to foster ours in
              all areas, with acknowledgment of when we fall short.
            </li>
            <li>Mental health is just as important as physical health.</li>
            <li>
              Wellness is always changing, and trend forecasting is core to our
              DNA.
            </li>
            <li>
              In a holistic approach to wellness, and that we have a duty to
              acknowledge and amplify the cultural roots of practices and
              rituals that we cover.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout1;
