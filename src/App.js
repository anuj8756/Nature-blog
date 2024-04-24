import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import "./App.css";
import Hero from "./component/Hero";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";

function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/hero" element={<Hero />}></Route>
          <Route path="/section1" element={<Section1 />}></Route>
          <Route path="/section2" element={<Section2 />}></Route>
        </Routes>

      </BrowserRouter>

    </div >
  );
}

export default App;
