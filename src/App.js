import React from "react";
import Navbar from "./component/Navbar";
import "./App.css";
import Hero from "./component/Hero";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Section4 from "./component/Section4";
import Footer from "./component/Footer";
import Subscribe from "./component/Subscribe";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
