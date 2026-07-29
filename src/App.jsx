import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import Proposal from './pages/Proposal';
import './pages/Pages.css';

import './pages/Pages.css';

const ScrollToTopAndAnimate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTopAndAnimate />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/about"      element={<About />} />
            <Route path="/services"   element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/proposal"   element={<Proposal />} />
            <Route path="/contact"    element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
