import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about-cafa"
            element={<About />}
          />

          <Route
            path="/news"
            element={<News />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
