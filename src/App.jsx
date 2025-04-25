import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Important for modal functionality

import Eathealthy from "./assets/Components/Eathealthy";
import Navbar from "./assets/Components/Navbar";
import Home from "./assets/Components/Home";
import Resource from "./assets/Components/Resource";
import Card from "./assets/Components/Card";
import Quiz from "./assets/Components/Quiz";
import Receipe from "./assets/Components/Receipe";
import Aboutus from "./assets/Components/Aboutus"

function App() {
  return (
    <Router>
      <Navbar />

      <div style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eathealthy" element={<Eathealthy />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/card" element={<Card />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/receipe" element={<Receipe />} />
          <Route path="/aboutus" element={<Aboutus />} />

        </Routes>
      </div>

      {/* Optional Footer */}
    </Router>
  );
}

export default App;
