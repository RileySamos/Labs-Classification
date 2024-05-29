import AboutMe from './pages/AboutMe';
import SiFi from './pages/SiFi';
import Fantasy from './pages/Fantasy';
import SliceOfLife from './pages/SliceOfLife';
import Reviews from './pages/Reviews';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './layout/Nav'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes> 
          <Route path="/" element={<AboutMe />} />
          <Route path="/SiFi" element={<SiFi />} />
          <Route path="/Fantasy" element={<Fantasy />} />
          <Route path="/SliceOfLife" element={<SliceOfLife />} />
          <Route path="/Reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;