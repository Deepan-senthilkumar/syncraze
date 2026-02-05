import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Platform from './components/Platform';
import Footer from './components/Footer';
import Solution from './components/Solution';
import Analytics from './components/Analytics';
import Resources from './components/Resources';
import Pricing from './components/Pricing';
import About from './components/About';
import Products from './components/Products';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
