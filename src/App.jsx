// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import './App.css'
import Resume from "./Pages/Resume/Resume";
import Contacts from "./Pages/Contact/Contacts";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio route */}
        <Route path="/resume" element={<Resume/>} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default App;
