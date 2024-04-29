import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Section from "./pages/Section";
import Layout1 from "./Layout/Layout1";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout1 />}></Route>
          <Route path="main" element={<Main />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="section" element={<Section />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
