import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar3 from './components/NavBar3'
import Home from './components/Home'
import About from './components/About'
import News from './components/News'
import Footer from './components/Footer'
import Faculty from './components/Faculty'
import Organization from './components/Organization'
import Programs from './components/Programs'
import Activities from './components/Activities'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar3 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/news" element={<News />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
