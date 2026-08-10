import React, { useEffect } from 'react';
import { Target, ShieldCheck, Award } from 'lucide-react';
import Marquee from '../components/Marquee';
import './About.css';

const marqueeText = ["INTEGRITY", "EXCELLENCE", "PARTNERSHIP", "TRUST", "LEADERSHIP", "QUALITY"];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* ── HERO BANNER ── */}
      <section className="about-hero">
        <div className="about-hero-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop")' }}></div>
        <div className="about-hero-overlay"></div>
        <div className="container about-hero-content">
          <div className="ah-eyebrow reveal-blur delay-1">
            <span className="ah-line"></span> Our Story
          </div>
          <h1 className="ah-title reveal-blur delay-2">From Vision to<br/>India's Most Trusted<br/>Talent Advisory</h1>
          <p className="ah-desc reveal-blur delay-3">A journey built on trust, deep market expertise, and the unwavering belief that the right leadership transforms organisations.</p>
        </div>
      </section>

      {/* ── THE FIRM (Legacy) ── */}
      <section className="section about-firm">
        <div className="container">
          <div className="firm-grid">
            <div className="firm-text reveal-left">
              <h2 className="premium-title">Built by HR Veterans,<br/>Driven by Purpose.</h2>
              <div className="gold-line"></div>
              <p className="firm-p">
                Intelliworx Consulting was founded by a coalition of HR veterans who recognised a critical gap in India's recruitment landscape. Companies didn't just need resumes—they needed a strategic partner who truly understood their business operations, cultural nuances, and long-term objectives.
              </p>
              <p className="firm-p">
                Armed with deep domain knowledge and a relentless focus on quality, we set out to build the country's most trusted talent advisory. Today, we operate across 50+ cities, serving over 200 corporate clients, from agile startups to Fortune 500 conglomerates.
              </p>
              <div className="firm-stats-inline">
                <div className="f-stat reveal-scale delay-1">
                  <span className="fs-num">5000+</span>
                  <span className="fs-lbl">Professionals Placed</span>
                </div>
                <div className="f-stat reveal-scale delay-2">
                  <span className="fs-num">85%</span>
                  <span className="fs-lbl">Client Retention</span>
                </div>
              </div>
            </div>
            {/* Right Images */}
            <div className="firm-visuals reveal-right delay-2">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop" alt="Corporate Executive" className="fv-img fv-main" />
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" alt="Team Collaboration" className="fv-img fv-sub" />
              <div className="fv-experience">
                <span className="fvx-num">15+</span>
                <span className="fvx-txt">Years of<br/>Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="section about-values bg-off-white">
        <div className="container">
          <div className="values-header reveal-scale">
            <div className="ah-eyebrow justify-center">
              <span className="ah-line"></span> What We Stand For <span className="ah-line"></span>
            </div>
            <h2 className="premium-title center">Our Core Values</h2>
          </div>
          
          <div className="values-bento">
            <div className="val-card reveal">
              <div className="val-icon"><ShieldCheck size={28}/></div>
              <h3 className="val-title">Absolute Integrity</h3>
              <p className="val-desc">We uphold the highest standards of transparency and strict confidentiality in every engagement, without exception. Trust is our primary currency.</p>
              <div className="val-num">01</div>
            </div>
            
            <div className="val-card featured reveal delay-1">
              <div className="val-icon"><Target size={32}/></div>
              <h3 className="val-title">Uncompromising Excellence</h3>
              <p className="val-desc">Quality over quantity is our mantra. Through rigorous evaluation, we shortlist only the top 3% of candidates for every mandate, ensuring flawless cultural alignment.</p>
              <div className="val-num">02</div>
            </div>
            
            <div className="val-card reveal delay-2">
              <div className="val-icon"><Award size={28}/></div>
              <h3 className="val-title">True Partnership</h3>
              <p className="val-desc">We invest in long-term relationships, not transactional placements. We view your organisational success as the only true metric of our own.</p>
              <div className="val-num">03</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GLOBAL REACH (Stats) ── */}
      <section className="about-stats-massive reveal-expand">
        <div className="container">
          <div className="asm-grid">
            <div className="asm-item reveal-scale delay-1">
              <div className="asm-num">50+</div>
              <div className="asm-lbl">Cities Covered Across India</div>
            </div>
            <div className="asm-item reveal-scale delay-2">
              <div className="asm-num">200+</div>
              <div className="asm-lbl">Active Corporate Clients</div>
            </div>
            <div className="asm-item reveal-scale delay-3">
              <div className="asm-num">5,000+</div>
              <div className="asm-lbl">Executive Placements</div>
            </div>
            <div className="asm-item reveal-scale delay-4">
              <div className="asm-num">24h</div>
              <div className="asm-lbl">Average Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM MARQUEE ── */}
      <Marquee textArray={marqueeText} speed={20} direction="right" bgColor="#f8f6f2" textColor="#0a1628" />
    </div>
  );
}
