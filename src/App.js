import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import Blog4 from "./pages/Blog4";
import Blog5 from "./pages/Blog5";
import Blog6 from "./pages/Blog6";
import Blog7 from "./pages/Blog7";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="blogs" element={<Blogs />}></Route>
          <Route path="blog1" element={<Blog1 />}></Route>
          <Route path="blog2" element={<Blog2 />}></Route>
          <Route path="blog3" element={<Blog3 />}></Route>
          <Route path="blog4" element={<Blog4 />}></Route>
          <Route path="blog5" element={<Blog5 />}></Route>
          <Route path="blog6" element={<Blog6 />}></Route>
          <Route path="blog7" element={<Blog7 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
