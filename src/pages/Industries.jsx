import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, HeartPulse, ShoppingBag, Store, Monitor, Landmark, Factory, Truck, ArrowRight } from 'lucide-react';
import bannerIndustries from '../assets/banner-industries.jpg';
import Marquee from '../components/Marquee';
import './Industries.css';

const marqueeText = ["TECHNOLOGY", "HEALTHCARE", "FINANCE", "RETAIL", "MANUFACTURING", "LOGISTICS"];

const industries = [
  {
    icon: <GraduationCap size={22}/>, color: '#4f46e5', title: 'Education',
    desc: "India's education sector is undergoing rapid transformation with EdTech disruption and government policy reforms. We place talent across K-12, higher education, and online learning platforms.",
    subSectors: ['K-12 Schools & Chains', 'EdTech & Online Learning', 'Higher Education & Universities', 'Coaching & Test Prep', 'Vocational Training'],
    keyFunctions: ['Academic Directors', 'Sales & Marketing Heads', 'Content & Curriculum Leads', 'HR Business Partners', 'Technology & Product'],
    levels: { junior: ['Academic Coordinator', 'Content Writer', 'Sales Executive'], mid: ['School Principal', 'Regional Sales Manager', 'Product Manager'], senior: ['CEO / Director', 'VP Sales', 'Chief Academic Officer'] },
    clientNames: [
      "Amity University",
      "Educomp Solutions Ltd.",
      "iDiscoveri Education - Xseed",
      "Chandigarh University",
      "Zee Education – Mount Litera Schools"
    ]
  },
  {
    icon: <HeartPulse size={22}/>, color: '#e11d48', title: 'Healthcare',
    desc: "One of India's fastest-growing sectors, healthcare demands specialised talent across clinical, administrative, and technology functions. We have deep networks in hospitals, pharma, and diagnostics.",
    subSectors: ['Hospitals & Hospital Chains', 'Pharmaceutical Companies', 'Diagnostics & Pathology', 'MedTech & Medical Devices', 'Health Insurance'],
    keyFunctions: ['Clinical Operations', 'Medical Affairs', 'Regulatory Affairs', 'Sales & Marketing', 'Finance & HR'],
    levels: { junior: ['MR / Sales Rep', 'Lab Technician', 'HR Executive'], mid: ['Brand Manager', 'Area Sales Manager', 'Hospital Administrator'], senior: ['CMO / Medical Director', 'VP Sales', 'CEO'] },
    clientNames: [
      "Cipla",
      "Dr. Batra's Positive Health Clinics",
      "Kaya Skin Clinics",
      "Loreal India - Loreal, Vichy, Lancome etc.",
      "VLCC Ltd."
    ]
  },

  {
    icon: <Store size={22}/>, color: '#ec4899', title: 'Retail',
    desc: "India's retail revolution — from organised formats to quick commerce — creates constant demand for operations, merchandising, and customer experience talent.",
    subSectors: ['Organised Retail', 'E-Commerce', 'Quick Commerce', 'Fashion & Lifestyle', 'Grocery & Hypermarkets'],
    keyFunctions: ['Store Operations', 'Merchandising', 'Supply Chain', 'Marketing', 'Technology'],
    levels: { junior: ['Store Executive', 'Merchandiser', 'Customer Service'], mid: ['Store Manager', 'Category Manager', 'Regional Operations'], senior: ['VP Operations', 'Chief Retail Officer', 'CEO'] },
    clientNames: [
      "Arvind Brands – Arrow, Lee, Wrangler, Esprit etc.",
      "Wills Life Style",
      "Bestseller India – Jack & Jones, Only, Veromoda etc.",
      "Spencer’s Retail – RPG Group",
      "Nik Bakers"
    ]
  },
  {
    icon: <Monitor size={22}/>, color: '#0284c7', title: 'IT & ITeS',
    desc: "Technology is the fastest-growing hiring segment in India. From product startups to enterprise IT, we place engineers, product managers, data scientists, and tech leaders.",
    subSectors: ['Software Product Companies', 'IT Services & Consulting', 'Cloud & Infrastructure', 'Cybersecurity', 'Data & Analytics'],
    keyFunctions: ['Engineering', 'Product Management', 'Data & AI', 'DevOps & Cloud', 'Tech Leadership'],
    levels: { junior: ['Software Engineer', 'Data Analyst', 'QA Engineer'], mid: ['Tech Lead', 'Product Manager', 'DevOps Engineer'], senior: ['CTO', 'VP Engineering', 'Chief Data Officer'] }
  },
  {
    icon: <Landmark size={22}/>, color: '#10b981', title: 'BFSI',
    desc: "Banking, Financial Services, and Insurance is one of India's most dynamic hiring sectors. We serve private banks, NBFCs, insurance companies, AMCs, and fintechs.",
    subSectors: ['Private & Public Banks', 'NBFCs & Fintech', 'Insurance', 'Asset Management', 'Stockbroking & Wealth'],
    keyFunctions: ['Sales & Relationship Management', 'Risk & Compliance', 'Finance & Treasury', 'Technology', 'Operations'],
    levels: { junior: ['Relationship Executive', 'Credit Analyst', 'Operations Executive'], mid: ['Branch Manager', 'Credit Manager', 'Compliance Officer'], senior: ['CFO', 'CRO', 'CEO / MD'] },
    clientNames: [
      "Care Ratings",
      "CRIF Highmark",
      "TVS Financial Services",
      "Ujjivan Fnance"
    ]
  },
  {
    icon: <Factory size={22}/>, color: '#475569', title: 'Manufacturing',
    desc: "India's manufacturing renaissance — from auto to speciality chemicals — demands engineering, quality, and operations talent.",
    subSectors: ['Automotive & Auto Components', 'Engineering & Capital Goods', 'Speciality Chemicals', 'Textile & Apparel', 'FMCG Manufacturing'],
    keyFunctions: ['Plant & Operations', 'Quality & EHS', 'Supply Chain', 'R&D & Engineering', 'HR & IR'],
    levels: { junior: ['Production Supervisor', 'Quality Engineer', 'Maintenance Technician'], mid: ['Plant Manager', 'Quality Head', 'Supply Chain Manager'], senior: ['VP Operations', 'COO', 'Plant Director'] }
  },
  {
    icon: <Truck size={22}/>, color: '#8b5cf6', title: 'Logistics',
    desc: "The logistics and supply chain sector has seen explosive growth with e-commerce and infrastructure development.",
    subSectors: ['3PL & Warehousing', 'Freight & Shipping', 'E-Commerce Logistics', 'Last-Mile Delivery', 'Cold Chain'],
    keyFunctions: ['Operations & Warehouse', 'Fleet & Transport', 'Technology', 'Sales & BD', 'HR & Finance'],
    levels: { junior: ['Warehouse Executive', 'Fleet Coordinator', 'Operations Associate'], mid: ['Warehouse Manager', 'Regional Operations', 'Business Development Manager'], senior: ['VP Supply Chain', 'COO', 'Head of Logistics'] }
  },
];

export default function Industries() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // When the active tab changes, the industry-content pane is remounted (due to key={activeTab}).
    // We manually add the 'visible' class to trigger its entrance animations, since the global
    // IntersectionObserver only runs on route changes.
    const timeout = setTimeout(() => {
      const contentPane = document.querySelector('.industry-content');
      if (contentPane) {
        contentPane.classList.add('visible');
        const elements = contentPane.querySelectorAll('.reveal, .reveal-scale, .reveal-blur, .reveal-left, .reveal-right');
        elements.forEach(el => el.classList.add('visible'));
      }
    }, 50);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  const activeInd = industries[activeTab];

  return (
    <div className="industries-page">
      {/* PAGE BANNER */}
      <div className="page-banner">
        <img src={bannerIndustries} alt="Industries" className="banner-bg" />
        <div className="banner-content">
          <p className="section-eyebrow reveal-blur" style={{ justifyContent: 'center', display: 'flex' }}>Sectors We Serve</p>
          <h1 className="reveal-blur delay-1">Industries We Serve</h1>
          <p className="reveal-blur delay-2">Deep expertise across 8 dynamic sectors that drive India's economy.</p>
          <nav className="breadcrumb reveal-blur delay-3"><Link to="/">Home</Link><span className="sep">/</span><span>Industries</span></nav>
        </div>
      </div>

      <section className="section bg-off-white">
        <div className="container">
          <div className="text-center reveal-scale" style={{ marginBottom: 64 }}>
            <p className="section-eyebrow">Sector Intelligence</p>
            <div className="gold-line centered" />
            <h2 className="section-heading">Domain-Specific Talent Expertise</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>Select a sector to explore our specialised networks and recruitment capabilities.</p>
          </div>

          <div className="industry-layout reveal-expand">
            {/* SIDEBAR TABS */}
            <div className="industry-sidebar reveal-left">
              {industries.map((ind, idx) => (
                <button
                  key={idx}
                  className={`ind-tab ${activeTab === idx ? 'active' : ''}`}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                  onClick={() => setActiveTab(idx)}
                >
                  <div className="ind-tab-icon" style={{ color: activeTab === idx ? '#c9a84c' : ind.color }}>
                    {ind.icon}
                  </div>
                  <span className="ind-tab-title">{ind.title}</span>
                  <ArrowRight className="ind-tab-arrow" size={18}/>
                </button>
              ))}
            </div>

            {/* CONTENT PANE */}
            <div className="industry-content reveal-blur" key={activeTab}>
              <div className="ic-header">
                <div className="ic-icon-large" style={{ background: activeInd.color + '1a', color: activeInd.color }}>
                  {React.cloneElement(activeInd.icon, { size: 40 })}
                </div>
                <h2 className="ic-title">{activeInd.title}</h2>
              </div>
              <p className="ic-desc">{activeInd.desc}</p>

              <div className="ic-grid">
                <div className="ic-section reveal-scale delay-1">
                  <h4 className="ic-section-title" style={{ color: activeInd.color }}>
                    <span style={{ width: 12, height: 2, background: activeInd.color }}></span> Sub-Sectors
                  </h4>
                  <ul className="ic-list">
                    {activeInd.subSectors.map((s, i) => (
                      <li key={i} className="ic-list-item">
                        <span style={{ color: activeInd.color }}>✦</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="ic-section reveal-scale delay-2">
                  <h4 className="ic-section-title" style={{ color: '#0a1628' }}>
                    <span style={{ width: 12, height: 2, background: '#0a1628' }}></span> Key Functions
                  </h4>
                  <ul className="ic-list">
                    {activeInd.keyFunctions.map((f, i) => (
                      <li key={i} className="ic-list-item">
                        <span style={{ color: '#c9a84c' }}>✦</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="ic-levels-wrapper">
                <h4 className="ic-section-title" style={{ color: '#0a1628', marginBottom: 32 }}>Placement Levels & Roles</h4>
                
                {[['Junior', activeInd.levels.junior, '#eff6ff', '#1e40af'], 
                  ['Mid-Level', activeInd.levels.mid, '#ecfdf5', '#047857'], 
                  ['Senior / CXO', activeInd.levels.senior, '#fff7ed', '#c2410c']].map(([label, lvls, bg, col], idx) => (
                  <div key={label} className={`ic-level-row reveal-blur delay-${idx+1}`}>
                    <div className="ic-level-label">{label}</div>
                    <div className="ic-level-tags">
                      {lvls.map((l, i) => (
                        <span key={i} className="ic-tag" style={{ background: bg, color: col }}>{l}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {activeInd.clientNames && activeInd.clientNames.length > 0 && (
                <div className="ic-clients-wrapper reveal-blur delay-4">
                  <h4 className="ic-section-title" style={{ color: '#0a1628', marginTop: 40, marginBottom: 20 }}>Our Clients</h4>
                  <div className="ic-clients-text-grid">
                    {activeInd.clientNames.map((name, idx) => (
                      <div key={idx} className="ic-client-badge">
                        <span style={{ color: '#c9a84c', marginRight: '8px' }}>✦</span> {name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Marquee textArray={marqueeText} speed={22} direction="right" bgColor="#0a1628" textColor="#c9a84c" />
    </div>
  );
}
