import React from "react";
import Navbar from "./component/Navbar";
import "./App.css";
import Hero from "./component/Hero";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
