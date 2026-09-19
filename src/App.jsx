import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import Proposal from './pages/Proposal';
import Clients from './pages/Clients';
import './pages/Pages.css';

const pageMetadata = {
  '/': {
    title: "Intelliworx Consulting | Premier Recruitment & Executive Search Agency in India",
    description: "Intelliworx Consulting is India's leading executive search and recruitment advisory firm, connecting top 5% talent with startups and multinational enterprises across 50+ cities."
  },
  '/about': {
    title: "Our Story & Vision | Intelliworx Consulting Advisory",
    description: "Learn about Intelliworx Consulting's journey, vision to build India's most trusted client advisory, 10+ year client relationships, and expert recruitment leadership team."
  },
  '/services': {
    title: "Recruitment Services | Executive Search & Staffing Solutions - Intelliworx",
    description: "Explore our hiring services: Executive Search, Permanent Staffing, Contract Staffing, Leadership Hiring, and Entry-Level Talent Acquisition across India."
  },
  '/industries': {
    title: "Industries We Serve | Tech, Manufacturing, Healthcare & BFSI - Intelliworx",
    description: "Specialized recruitment expertise across IT & Technology, Manufacturing, Healthcare, BFSI, Retail, E-Commerce, and Education sectors in India."
  },
  '/clients': {
    title: "Our Clients & Track Record | 200+ Trusted Client Partnerships - Intelliworx",
    description: "Trusted by over 200+ client organizations from agile startups to global Fortune multinationals with a 98% client retention rate."
  },
  '/proposal': {
    title: "Request a Custom Hiring Proposal | Intelliworx Consulting",
    description: "Get a customized recruitment proposal tailored to your corporate hiring needs. Tier-1 talent acquisition with guaranteed SLAs and fast turnaround."
  },
  '/contact': {
    title: "Contact Us | Speak to Our Recruitment Advisory Team - Intelliworx",
    description: "Get in touch with Intelliworx Consulting. Call +91 98765 43210 or email info@intelliworx.in to discuss your talent acquisition requirements."
  }
};

const ScrollToTopAndAnimate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic Title & Meta Description update
    const currentMeta = pageMetadata[pathname] || pageMetadata['/'];
    document.title = currentMeta.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', currentMeta.description);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', currentMeta.title);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', currentMeta.description);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .reveal-expand');
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
            <Route path="/clients"    element={<Clients />} />
            <Route path="*"           element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
