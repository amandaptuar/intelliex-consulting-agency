import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Zap, Award, MapPin, Lock, BookOpen, Headphones, Crown, Handshake, Quote, Building2, Briefcase, Target, TrendingUp, Users, Star } from 'lucide-react';

import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import indIt from '../assets/ind_it.jpg';
import indHealth from '../assets/ind_health.jpg';
import indEdu from '../assets/ind_edu.jpg';
import indBfsi from '../assets/banner-contact.jpg';
import indFmcg from '../assets/banner-industries.jpg';
import indRetail from '../assets/banner-about.jpg';
import Marquee from '../components/Marquee';

import './Home.css';

/* ───── HERO SLIDES ───── */
const slides = [
  {
    id: 1,
    image: hero1,
    eyebrow: 'India\'s Trusted Talent Partner',
    title: 'We Place Leaders\nWho Drive Growth',
    sub: 'From campus freshers to C-suite executives — Intelliworx connects India\'s finest talent with the country\'s most admired organisations.',
    cta1: { label: 'Request Proposal', to: '/proposal' },
    cta2: { label: 'Our Services', to: '/services' },
  },
  {
    id: 2,
    image: hero2,
    eyebrow: 'Executive Search & CXO Hiring',
    title: 'Discreet. Precise.\nBoard-Level Search',
    sub: 'We access passive C-suite talent pools unavailable on any job board, with full confidentiality and unmatched speed.',
    cta1: { label: 'Explore Executive Search', to: '/services' },
    cta2: { label: 'Our Story', to: '/about' },
  },
  {
    id: 3,
    image: hero3,
    eyebrow: '50+ Cities · 200+ Clients · 5000+ Placements',
    title: 'Pan-India Talent\nNetworks, Built for You',
    sub: 'Deep domain expertise across IT, FMCG, Healthcare, Retail, BFSI, Manufacturing, Logistics & Education.',
    cta1: { label: 'Industries We Serve', to: '/industries' },
    cta2: { label: 'Contact Us', to: '/contact' },
  },
];

/* ───── INFINITE MARQUEE DATA ───── */
const marqueeText = [
  "EXECUTIVE SEARCH",
  "LEADERSHIP HIRING",
  "CXO MANDATES",
  "TALENT ACQUISITION",
  "PAN-INDIA NETWORK",
  "BOARD LEVEL SEARCH"
];

/* ───── WHY US ───── */
const whyUs = [
  { icon: <Zap size={28}/>,        title: 'Speed of Placement',       desc: '15-day average time-to-fill for mid-roles. 30 days for CXO mandates — industry-leading turnaround.' },
  { icon: <Award size={28}/>,      title: 'Top 3% Candidates',        desc: 'Rigorous multi-stage screening presents only the finest applicants, dramatically reducing mis-hires.' },
  { icon: <MapPin size={28}/>,     title: 'Pan-India Network',        desc: 'Active databases across 50+ cities including Tier-2 markets like Pune, Ahmedabad, and Jaipur.' },
  { icon: <Lock size={28}/>,       title: 'Confidential Searches',    desc: 'Board-level and sensitive mandates handled with complete discretion and strict confidentiality.' },
  { icon: <BookOpen size={28}/>,   title: 'Deep Domain Knowledge',    desc: 'Vertical heads with 10+ years of expertise in IT, FMCG, Healthcare, BFSI and more.' },
  { icon: <Headphones size={28}/>, title: 'Dedicated Account Manager',desc: 'One point of contact who understands your culture, team dynamics, and long-term growth plans.' },
  { icon: <Crown size={28}/>,      title: 'CXO Search Expertise',     desc: 'Specialised practice for C-suite & board mandates with access to passive high-calibre talent.' },
  { icon: <Handshake size={28}/>,  title: 'Long-Term Partnerships',   desc: '85% of clients partner with us for 3+ years — a true testament to our consistent delivery.' },
];

/* ───── INDUSTRIES (Premium Bento Data) ───── */
const industries = [
  { icon: <Target size={24}/>,   label: 'IT & ITeS',      bg: '#0ea5e9', span: 2, image: indIt, desc: 'Software engineers to CTOs across product, cloud, and enterprise tech companies.' },
  { icon: <Users size={24}/>,    label: 'Healthcare',     bg: '#f43f5e', span: 1, image: indHealth, desc: 'Clinical, admin, and tech talent for modern healthcare and pharma.' },
  { icon: <BookOpen size={24}/>, label: 'Education',      bg: '#6366f1', span: 1, image: indEdu, desc: 'Academic leads and edtech product specialists.' },
  { icon: <TrendingUp size={24}/>,label: 'BFSI',          bg: '#10b981', span: 1, image: indBfsi, desc: 'Risk, compliance, and wealth management experts.' },
  { icon: <Briefcase size={24}/>,label: 'FMCG',           bg: '#f59e0b', span: 2, image: indFmcg, desc: 'Sales, supply chain, and marketing professionals driving consumer brands.' },
  { icon: <Building2 size={24}/>,label: 'Retail',         bg: '#ec4899', span: 1, image: indRetail, desc: 'Operations and merchandising for organised retail.' },
];

/* ───── TESTIMONIALS ───── */
const testimonials = [
  { quote: '"Intelliworx filled our VP Sales position in just 18 days. Exceptional quality and speed that completely transformed our hiring timeline."', name: 'Rajesh Mehta', role: 'Director HR, FMCG Conglomerate' },
  { quote: '"Their deep understanding of the BFSI sector helped us onboard a top-notch CTO within weeks. Highly recommended for executive search."', name: 'Priya Sharma', role: 'CHRO, Leading NBFC' },
  { quote: '"We have partnered with Intelliworx for 3 years and they remain our most trusted talent partner. They truly understand our culture."', name: 'Anil Kumar', role: 'MD, IT Services Firm' },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div className="home-page">
      
      {/* ══════ HERO SLIDER ══════ */}
      <section className="hero-slider">
        {slides.map((slide, i) => (
          <div key={slide.id} className={`hero-slide ${i === current ? 'active' : ''}`}>
            <div className="hero-bg" style={{ backgroundImage: `url(${slide.image})` }} />
            <div className="hero-overlay" />
            
            <div className="container hero-content">
              <div className={`hero-text-block ${i === current ? 'animate' : ''}`}>
                <div className="hero-eyebrow-wrap">
                  <span className="hero-eyebrow-line"></span>
                  <span className="hero-eyebrow">{slide.eyebrow}</span>
                </div>
                <h1 className="hero-title">{slide.title.split('\n').map((l,idx)=><React.Fragment key={idx}>{l}<br/></React.Fragment>)}</h1>
                <p className="hero-sub">{slide.sub}</p>
                <div className="hero-actions">
                  <Link to={slide.cta1.to} className="btn btn-primary">{slide.cta1.label} <ArrowRight size={16}/></Link>
                  <Link to={slide.cta2.to} className="btn btn-outline">{slide.cta2.label}</Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button className="slider-nav prev" onClick={prev}><ChevronLeft size={32}/></button>
        <button className="slider-nav next" onClick={next}><ChevronRight size={32}/></button>
        
        <div className="slider-indicators">
          {slides.map((_, i) => (
            <button key={i} className={`indicator ${i === current ? 'active' : ''}`} onClick={() => goTo(i)} />
          ))}
        </div>
      </section>

      {/* ══════ GLASS STATS (Overlapping) ══════ */}
      <section className="stats-overlap reveal-expand">
        <div className="container">
          <div className="glass-stats-grid">
            <div className="glass-stat reveal-scale delay-1">
              <div className="gs-num">10+</div>
              <div className="gs-lbl">Years of Excellence</div>
            </div>
            <div className="glass-stat reveal-scale delay-2">
              <div className="gs-num">5,000+</div>
              <div className="gs-lbl">Placements Made</div>
            </div>
            <div className="glass-stat reveal-scale delay-3">
              <div className="gs-num">200+</div>
              <div className="gs-lbl">Corporate Clients</div>
            </div>
            <div className="glass-stat reveal-scale delay-4">
              <div className="gs-num">85%</div>
              <div className="gs-lbl">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ INFINITE MARQUEE ══════ */}
      <Marquee textArray={marqueeText} speed={25} direction="left" />

      {/* ══════ WHY CHOOSE US ══════ */}
      <section id="why" className="section bg-off-white premium-bg-pattern">
        <div className="container">
          <div className="premium-header center reveal-scale">
            <span className="premium-eyebrow">The Intelliworx Advantage</span>
            <h2 className="premium-title">Why Leading Companies<br/>Trust Our Expertise</h2>
            <p className="premium-desc">We blend unparalleled speed, precision, and deep domain intelligence to deliver India's top 3% talent to your doorstep.</p>
          </div>

          <div className="premium-why-grid">
            {whyUs.map((item, i) => (
              <div className={`premium-why-card reveal delay-${(i % 4) + 1}`} key={i}>
                <div className="pwc-icon">{item.icon}</div>
                <h3 className="pwc-title">{item.title}</h3>
                <p className="pwc-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ LEVELS WE PLACE (Split Layout) ══════ */}
      <section className="section bg-white relative overflow-hidden">
        {/* Background SVG Decoration */}
        <svg className="bg-decoration-svg" width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="300" fill="url(#paint0_linear)" fillOpacity="0.03"/>
          <defs><linearGradient id="paint0_linear" x1="0" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse"><stop stopColor="#c9a84c"/><stop offset="1" stopColor="#0a1628"/></linearGradient></defs>
        </svg>

        <div className="container">
          <div className="levels-split">
            <div className="levels-left reveal-left">
              <span className="premium-eyebrow">Hierarchy Agnostic</span>
              <h2 className="premium-title">Leaders for Every<br/>Level of Your Business</h2>
              <p className="premium-desc" style={{ margin: '0 0 32px 0' }}>From first-time managers executing operations to visionary boardroom leaders — we have the networks to hire across every rung of the corporate ladder.</p>
              <Link to="/proposal" className="btn btn-navy">Hire Top Talent <ArrowRight size={16}/></Link>
            </div>
            <div className="levels-right reveal-right">
              <div className="levels-pill-grid">
                {['Junior Execs','Associate Level','Mid-Management','Sr. Manager / AVP','Director / VP','C-Suite / Board'].map((l, i) => (
                  <div className="level-pill reveal-left" style={{ transitionDelay: `${i * 0.1}s` }} key={l}>
                    <span className="pill-dot"></span>
                    <span className="pill-text">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ INDUSTRIES WE SERVE (Premium Bento) ══════ */}
      <section className="section bg-off-white premium-bg-pattern">
        <div className="container">
          <div className="premium-header center reveal-scale">
            <span className="premium-eyebrow">Sectors We Serve</span>
            <h2 className="premium-title">Domain-Specific Expertise</h2>
            <p className="premium-desc" style={{ maxWidth: 640, margin: '0 auto' }}>
              Deep talent networks across India's most dynamic and fast-growing economic sectors.
            </p>
          </div>

          <div className="bento-grid">
            {industries.map((ind, i) => (
              <Link to="/industries" className={`bento-card reveal delay-${(i % 3) + 1} span-${ind.span}`} key={ind.label} style={{ '--bento-accent': ind.bg }}>
                <div className="bento-card-bg" style={{ backgroundImage: `url(${ind.image})` }}></div>
                <div className="bento-bg-icon">{ind.icon}</div>
                <div className="bento-content">
                  <div className="bento-icon-wrap">{ind.icon}</div>
                  <h3 className="bento-title">{ind.label}</h3>
                  <p className="bento-desc">{ind.desc}</p>
                </div>
                <div className="bento-footer">
                  <span className="bento-link-text">Explore Sector</span>
                  <div className="bento-arrow"><ArrowRight size={18}/></div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: '64px' }}>
            <Link to="/industries" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '0.95rem' }}>View All Sectors <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="section bg-off-white premium-bg-pattern">
        <div className="container">
          <div className="premium-header center reveal-blur">
            <span className="premium-eyebrow">Client Stories</span>
            <h2 className="premium-title">What Our Partners Say</h2>
          </div>

          <div className="premium-testi-grid">
            {testimonials.map((t, i) => (
              <div className={`premium-testi-card reveal delay-${i+1}`} key={i}>
                <div className="ptc-bg-quote"><Quote size={140} strokeWidth={1}/></div>
                <div className="ptc-content">
                  <div className="ptc-stars">
                    {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="#c9a84c" color="#c9a84c"/>)}
                  </div>
                  <p className="ptc-text">{t.quote}</p>
                  <div className="ptc-divider"></div>
                  <div className="ptc-author-block">
                    <div className="ptc-avatar">{t.name.charAt(0)}</div>
                    <div className="ptc-author-info">
                      <h4 className="ptc-name">{t.name}</h4>
                      <span className="ptc-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ HOME CTA ══════ */}
      <div className="home-cta-wrapper reveal-expand">
        <div className="container">
          <div className="home-cta-card reveal-scale">
            <div className="home-cta-text">
              <h3 className="home-cta-title">Ready to Find Your Next Star Hire?</h3>
              <p className="home-cta-sub">Submit a requirement — our executive team responds within 24 hours.</p>
            </div>
            <Link to="/proposal" className="btn btn-navy">
              Request Proposal <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
