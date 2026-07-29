import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* ── Main footer ── */}
      <div className="footer-main">
        <div className="container footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="fl-mark">IW</div>
              <div className="fl-text">
                <span className="fl-main">INTELLIWORX</span>
                <span className="fl-sub">CONSULTING</span>
              </div>
            </div>
            <p className="brand-desc">
              India's premier recruitment consultancy placing talent from Junior to CXO across every industry, every sector, every city.
            </p>
            <div className="social-row">
              <a href="#" className="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="fcol-title">Quick Links</h4>
            <ul className="fcol-list">
              {[['Home','/'],[`Our Story`,'/about'],['Why Us','/#why'],['Services','/services'],['Industries','/industries'],['Proposal','/proposal']].map(([n,p]) => (
                <li key={n}><Link to={p}>{n}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="fcol-title">Our Services</h4>
            <ul className="fcol-list">
              {['Permanent Staffing','Executive Search','Contract Staffing','RPO Solutions','Leadership Hiring','Campus Recruitment'].map(s => (
                <li key={s}><Link to="/services">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="fcol-title">Contact Info</h4>
            <ul className="contact-list">
              <li><MapPin size={14} className="ci"/><span>Plot No 384, Industrial Area, Phase 2, Chandigarh – 160002</span></li>
              <li><Phone size={14} className="ci"/><span>+91 98200 00000</span></li>
              <li><Mail size={14} className="ci"/><span>info@intelliworx.in</span></li>
              <li style={{ paddingLeft: 22, color: '#6b7280', fontSize: '0.85rem' }}>Mon–Sat: 9:00 AM – 7:00 PM</li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="container bottom-row">
          <p>© 2026 Intelliworx Consulting. All rights reserved.</p>
          <p>Chandigarh, India</p>
        </div>
      </div>
    </footer>
  );
}
