import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Terms from './pages/Terms';

import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/services" element={<Services />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/terms" element={<Terms />} />
         </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
