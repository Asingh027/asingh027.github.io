import React from 'react';
import Home from './components/Home.jsx';
import Career from './components/Career.jsx';
import Projects from './components/Projects.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import profPic from './images/profpic.png'
import Starfield from './components/starfield.tsx';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function App() {

  useEffect(() => {
    document.title = 'Meet Avneet Singh';
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/png';
  link.rel = 'icon';
  link.href = profPic;
  document.getElementsByTagName('head')[0].appendChild(link);
  }, []);  

  return (
    <Router>
      <div className="App">
      <Starfield
          starCount={500}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
