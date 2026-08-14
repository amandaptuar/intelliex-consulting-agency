import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, HeartPulse, ShoppingBag, Landmark, Monitor } from 'lucide-react';
import bannerAbout from '../assets/banner-about.jpg';
import './Clients.css';

const clientLogos = [
  "/client-logos/0_RpLu41NQ0YhF7Wlw.png",
  "/client-logos/462066949_8478367048915791_1719528953997860405_n.jpg",
  "/client-logos/7F1LczSy_400x400.jpg",
  "/client-logos/7f679411331491.560f5f9c84356.jpg",
  "/client-logos/8355.png",
  "/client-logos/Educomp_logo.jpg",
  "/client-logos/Expectation-of-Recruitment-companies1 (1).jpg",
  "/client-logos/Hindware-Bath-Fittings-Logo_pngimagesfree.com_.png",
  "/client-logos/L_Oréal_logo.svg.png",
  "/client-logos/RZxLWW91_400x400.jpg",
  "/client-logos/Smera-logo-new-3-revised-1024x421.png",
  "/client-logos/Spencers-1280x720.jpg",
  "/client-logos/amity-university-logo_freelogovectors.net_.png",
  "/client-logos/banner-logo-1.png",
  "/client-logos/download.png",
  "/client-logos/fc81cf41ccd7e9cf6d3ec82980dfcdea.jpg",
  "/client-logos/images (1).png",
  "/client-logos/images (3).png",
  "/client-logos/images (4).png",
  "/client-logos/images (5).png",
  "/client-logos/images (6).png",
  "/client-logos/images.jpeg",
  "/client-logos/images.png"
];

const sectorClients = [
  {
    title: "Education",
    icon: <GraduationCap size={24}/>,
    color: "#4f46e5",
    clients: ["Amity University", "Educomp Solutions Ltd.", "iDiscoveri Education - Xseed", "Chandigarh University", "Zee Education – Mount Litera Schools"]
  },
  {
    title: "Healthcare",
    icon: <HeartPulse size={24}/>,
    color: "#e11d48",
    clients: ["Cipla", "Dr. Batra's Positive Health Clinics", "Kaya Skin Clinics", "Loreal India - Loreal, Vichy, Lancome etc.", "VLCC Ltd."]
  },
  {
    title: "Retail & Lifestyle",
    icon: <ShoppingBag size={24}/>,
    color: "#ec4899",
    clients: ["Arvind Brands – Arrow, Lee, Wrangler, Esprit etc.", "Wills Life Style", "Bestseller India – Jack & Jones, Only, Veromoda etc.", "Spencer’s Retail – RPG Group", "Nik Bakers"]
  },
  {
    title: "BFSI",
    icon: <Landmark size={24}/>,
    color: "#10b981",
    clients: ["Care Ratings", "CRIF Highmark", "CRIF SOLUTIONS", "PAUL MERCHANTS", "TVS Financial Services", "Ujjivan Fnance"]
  },
  {
    title: "Technology & Consulting",
    icon: <Monitor size={24}/>,
    color: "#0ea5e9",
    clients: ["ABHINAV FUTURISTICS", "INDIAN EXPRESS", "SUREIFY", "CLOUD TAILOR", "ZENI", "ESCALON", "ACUITY PROFESSIONAL", "ACUITY RATINGS", "GEMINI CORP", "ASIAN PAINTS", "GIANT TRUSS", "LINGEL WINDOWS", "WAVE ESTATE", "BEYOND JUST SERVICE", "FRONTIER JEWELLERS", "PRIJAI", "AGRI KHETI", "ALTIER ELECTRIC", "PGEIN CONSULTING"]
  }
];

export default function Clients() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="clients-page">
      {/* PAGE BANNER */}
      <div className="page-banner">
        <img src={bannerAbout} alt="Our Clients" className="banner-bg" />
        <div className="banner-content">
          <p className="section-eyebrow reveal-blur" style={{ justifyContent: 'center', display: 'flex' }}>Our Partners</p>
          <h1 className="reveal-blur delay-1">Clients We Serve</h1>
          <p className="reveal-blur delay-2">Trusted by startups, enterprises, and industry leaders across India.</p>
          <nav className="breadcrumb reveal-blur delay-3">
            <Link to="/">Home</Link><span className="sep">/</span><span>Our Clients</span>
          </nav>
        </div>
      </div>

      {/* LOGO GRID SECTION */}
      <section className="section bg-white">
        <div className="container">
          <div className="premium-header center reveal-scale">
            <span className="premium-eyebrow">Our Network</span>
            <h2 className="premium-title">Brands That Trust Us</h2>
            <p className="premium-desc">We partner with organizations of all sizes, ensuring that they have the exceptional leadership and talent needed to grow.</p>
          </div>

          <div className="clients-logo-grid reveal-expand">
            {clientLogos.map((logo, i) => (
              <div className="client-logo-card reveal delay-1" key={i}>
                <img src={logo} alt="Client Logo" className="client-logo-img" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTOR CLIENTS SECTION */}
      <section className="section bg-off-white premium-bg-pattern">
        <div className="container">
          <div className="premium-header center reveal-scale">
            <span className="premium-eyebrow">Industry Expertise</span>
            <h2 className="premium-title">Clients by Sector</h2>
            <p className="premium-desc" style={{ maxWidth: '640px', margin: '0 auto' }}>
              Our deep industry expertise enables us to source the exact talent requirements for varying business models.
            </p>
          </div>

          <div className="sector-clients-grid">
            {sectorClients.map((sector, idx) => (
              <div className={`sector-client-card reveal delay-${(idx % 4) + 1}`} key={idx} style={{ '--sector-color': sector.color }}>
                <div className="scc-header">
                  <div className="scc-icon-wrap" style={{ color: sector.color, background: `${sector.color}15` }}>
                    {sector.icon}
                  </div>
                  <h3 className="scc-title">{sector.title}</h3>
                </div>
                <div className="scc-body">
                  <div className="scc-tags">
                    {sector.clients.map((client, cIdx) => (
                      <span key={cIdx} className="scc-tag">
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <div className="home-cta-wrapper reveal-expand" style={{ marginTop: '0', background: '#fff' }}>
        <div className="container">
          <div className="home-cta-card reveal-scale">
            <div className="home-cta-text">
              <h3 className="home-cta-title">Join Our Network of Industry Leaders</h3>
              <p className="home-cta-sub">Submit a requirement — our executive team responds within 24 hours.</p>
            </div>
            <Link to="/proposal" className="btn btn-navy">
              Request Proposal <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
