import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import bannerContact from '../assets/banner-contact.jpg';
import Marquee from '../components/Marquee';
import './Contact.css';

const marqueeText = ["LET'S CONNECT", "TALENT ADVISORY", "EXECUTIVE SEARCH", "GLOBAL NETWORK"];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); e.target.reset(); };

  return (
    <div>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <img src={bannerContact} alt="Contact" className="banner-bg" />
        <div className="banner-content">
          <p className="section-eyebrow reveal-blur" style={{ justifyContent: 'center', display: 'flex' }}>Get In Touch</p>
          <h1 className="reveal-blur delay-1">Contact Us</h1>
          <p className="reveal-blur delay-2">Reach out for hiring partnerships, career enquiries, or just to say hello.</p>
          <nav className="breadcrumb reveal-blur delay-3"><Link to="/">Home</Link><span className="sep">/</span><span>Contact</span></nav>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* Left */}
            <div className="reveal-left">
              <p className="section-eyebrow">Our Details</p>
              <div className="gold-line" />
              <h2 className="section-heading" style={{ fontSize: '2rem', marginBottom: 32 }}>Always Happy<br/>to Help</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {[
                  { Icon: Phone,   label: 'PHONE',         val: '+91 98723 72387' },
                  { Icon: Mail,    label: 'EMAIL',         val: 'info@intelliworx.in' },
                  { Icon: Clock,   label: 'WORKING HOURS', val: 'Mon – Sat: 9:00 AM – 7:00 PM' },
                ].map(({ Icon, label, val }, idx) => (
                  <div key={label} className={`reveal-left delay-${(idx % 4) + 1}`} style={{ display: 'flex', gap: 20 }}>
                    <div style={{ width: 50, height: 50, borderRadius: 6, background: 'linear-gradient(135deg, #0a1628, #1a3460)', color: '#c9a84c', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={20}/>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '2px', color: '#9ca3af', marginBottom: 5 }}>{label}</div>
                      <div style={{ color: '#0d1b2a', fontSize: '0.95rem', lineHeight: 1.55 }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact-form-card reveal-right">
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.6rem', marginBottom: 28, color: '#0d1b2a' }}>Send Us a Message</h3>
              {sent && <div style={{ background: '#ecfdf5', color: '#047857', padding: '14px 18px', borderRadius: 6, marginBottom: 24, fontSize: '0.9rem', fontWeight: 600 }}>✓ Message sent! We'll be in touch shortly.</div>}
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div className="contact-form-row">
                  <div className="form-group"><label>Full Name *</label><input type="text" placeholder="Your name" required /></div>
                  <div className="form-group"><label>Email *</label><input type="email" placeholder="you@company.com" required /></div>
                </div>
                <div className="contact-form-row">
                  <div className="form-group"><label>Company</label><input type="text" placeholder="Company name" /></div>
                  <div className="form-group"><label>Phone</label><input type="tel" placeholder="+91 98xxx xxxxx" /></div>
                </div>
                <div className="form-group"><label>Message *</label><textarea rows={5} placeholder="Tell us about your requirement or enquiry..." required /></div>
                <button type="submit" className="btn btn-navy" style={{ width: '100%', justifyContent: 'center', padding: '15px 32px' }}>Send Message <ArrowRight size={16}/></button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Marquee textArray={marqueeText} speed={15} direction="right" bgColor="#0a1628" textColor="#c9a84c" />
    </div>
  );
}
