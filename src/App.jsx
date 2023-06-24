import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar3 from './components/NavBar3';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Footer from './components/Footer';
import Faculty from './components/Faculty';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar3 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/news" element={<News />} />

          <Route path="/faculty" element={<Faculty />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
