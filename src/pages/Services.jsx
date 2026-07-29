import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Clock, RefreshCw, Star, GraduationCap, Monitor, Trophy } from 'lucide-react';

import './Services.css';

const bannerServices = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop";

const services = [
  {
    icon: <Users size={28}/>, color: '#4f46e5', light: '#eff6ff',
    title: 'Permanent Staffing',
    desc: 'End-to-end recruitment for full-time roles across all functions and levels.',
    bullets: ['JD crafting & market mapping','Multi-channel sourcing','Structured interviewing','Reference checks'],
  },
  {
    icon: <Award size={28}/>, color: '#8b5cf6', light: '#f5f3ff',
    title: 'Executive Search (CXO)',
    desc: 'Discreet, high-touch search for C-suite, VP, and Director-level mandates.',
    bullets: ['Board & C-suite mandates','Confidential searches','Succession planning','Leadership assessment'],
  },
  {
    icon: <Clock size={28}/>, color: '#0891b2', light: '#ecfeff',
    title: 'Contract Staffing',
    desc: 'Flexible workforce solutions for project-based, seasonal, or interim requirements.',
    bullets: ['Short & long-term contracts','Payroll management','Compliance & statutory','On-demand scale-up'],
  },
  {
    icon: <RefreshCw size={28}/>, color: '#ea580c', light: '#fff7ed',
    title: 'RPO Solutions',
    desc: 'We become your embedded talent acquisition team for high-volume or ongoing hiring.',
    bullets: ['Embedded TA team','ATS management','Employer branding','Analytics & reporting'],
  },
  {
    icon: <Star size={28}/>, color: '#d97706', light: '#fffbeb',
    title: 'Leadership Hiring',
    desc: 'Strategic search for GMs, Business Heads, and functional leaders driving transformation.',
    bullets: ['GM & VP level search','Psychometric profiling','Cultural fit mapping','Negotiation support'],
  },
  {
    icon: <GraduationCap size={28}/>, color: '#16a34a', light: '#f0fdf4',
    title: 'Campus Recruitment',
    desc: 'Structured campus hiring programmes with top tier-1 and tier-2 institutes across India.',
    bullets: ['College tie-ups','Pre-placement workshops','Bulk hiring drives','Graduate trainee programmes'],
  },
];

export default function Services() {
  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <img src={bannerServices} alt="Services" className="banner-bg" />
        <div className="banner-content">
          <p className="section-eyebrow animate-up" style={{ justifyContent: 'center', display: 'flex' }}>What We Offer</p>
          <h1 className="animate-up delay-1">Comprehensive Recruitment Solutions</h1>
          <p className="animate-up delay-2">Tailored talent strategies for India's most dynamic organisations across every industry.</p>
          <nav className="breadcrumb animate-up delay-3"><Link to="/">Home</Link><span className="sep">/</span><span>Services</span></nav>
        </div>
      </div>

      {/* SERVICE CARDS */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <p className="section-eyebrow">Our Service Portfolio</p>
            <div className="gold-line centered" />
            <h2 className="section-heading">Six Ways We Deliver Talent</h2>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className={`svc-card reveal delay-${(i % 3) + 1}`} style={{ '--svc-color': s.color, '--svc-light': s.light }}>
                <div className="svc-icon-wrap">
                  <span style={{ color: s.color }}>{s.icon}</span>
                </div>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-desc">{s.desc}</p>
                <ul className="svc-list">
                  {s.bullets.map((b, j) => (
                    <li key={j}><span className="svc-bullet" style={{ background: s.color }} />{b}</li>
                  ))}
                </ul>
                <Link to="/proposal" className="svc-link">Request This Service <ArrowRight size={14}/></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="svc-stats-banner">
        <div className="container">
          <div className="ssb-grid">
            <div className="ssb-item">
              <div className="ssb-num">10+</div>
              <div className="ssb-lbl">Years Experience</div>
            </div>
            <div className="ssb-item">
              <div className="ssb-num">5,000+</div>
              <div className="ssb-lbl">Placements Made</div>
            </div>
            <div className="ssb-item">
              <div className="ssb-num">200+</div>
              <div className="ssb-lbl">Client Partners</div>
            </div>
            <div className="ssb-item">
              <div className="ssb-num">85%</div>
              <div className="ssb-lbl">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALISATIONS */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <p className="section-eyebrow">Our Two Verticals</p>
            <div className="gold-line centered" />
            <h2 className="section-heading">IT & Non-IT Specialisations</h2>
          </div>
          <div className="verticals-grid">
            
            <Link to="/industries" className="vertical-card it-bg">
              <div className="vc-content">
                <div className="vc-icon">
                  <Monitor size={32} />
                </div>
                <h3 className="vc-title">IT Recruitment</h3>
                <p className="vc-desc">Software engineers to CTOs — across product, services, cloud, data, and cybersecurity companies.</p>
                <div className="vc-link-btn">Explore Vertical <ArrowRight size={16}/></div>
              </div>
            </Link>

            <Link to="/industries" className="vertical-card non-it-bg">
              <div className="vc-content">
                <div className="vc-icon">
                  <Trophy size={32} />
                </div>
                <h3 className="vc-title">Non-IT Recruitment</h3>
                <p className="vc-desc">Sales, Finance, HR, Operations — across FMCG, Healthcare, Retail, BFSI, Education and more.</p>
                <div className="vc-link-btn">Explore Vertical <ArrowRight size={16}/></div>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}
