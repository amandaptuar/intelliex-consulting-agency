import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ChevronLeft, ChevronRight, Zap, Award, MapPin, 
  Lock, BookOpen, Headphones, Crown, Handshake, Quote, 
  Building2, Briefcase, Target, TrendingUp, Users, Star, 
  Check, Phone, ShieldCheck, CheckCircle2, Clock, Sparkles, 
  Layers, Search, Compass 
} from 'lucide-react';

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
import LogoMarquee from '../components/LogoMarquee';

import './Home.css';

/* ───── HERO SLIDES (Vibrant & Bright) ───── */
const slides = [
  {
    id: 1,
    image: hero1,
    tag: 'EXECUTIVE SEARCH & LEADERSHIP PARTNER',
    eyebrow: 'Pan-India Recruitment Excellence',
    title: 'We Place Leaders\nWho Drive Unstoppable Growth',
    sub: 'Connecting India’s fastest-growing enterprises and unicorns with elite C-Suite, Director, and Specialist talent across 50+ cities.',
    badgeText: '15-Day Average Turnaround',
    cta1: { label: 'Request Executive Proposal', to: '/proposal' },
    cta2: { label: 'Explore Practice Areas', to: '/services' },
  },
  {
    id: 2,
    image: hero2,
    tag: 'CONFIDENTIAL C-SUITE MANDATES',
    eyebrow: 'Discreet · Rigorous · High Impact',
    title: 'Strategic Leadership\nHiring For The Boardroom',
    sub: 'Access India’s top 5% passive executive leadership pool with complete discretion, deep sector intelligence, and guaranteed retention.',
    badgeText: '98.6% Candidate Retention',
    cta1: { label: 'CXO Search Practice', to: '/services' },
    cta2: { label: 'Our Story & Heritage', to: '/about' },
  },
  {
    id: 3,
    image: hero3,
    tag: 'PAN-INDIA TALENT ECOSYSTEM',
    eyebrow: '50+ Cities · 200+ Corporate Clients',
    title: 'Cross-Sector Precision\nFrom Tech To Manufacturing',
    sub: 'Domain-specialized search practices delivering top-tier candidates across IT, BFSI, Healthcare, Retail, Manufacturing & FMCG.',
    badgeText: '5,000+ Placements Delivered',
    cta1: { label: 'Industries We Serve', to: '/industries' },
    cta2: { label: 'Speak To A Consultant', to: '/contact' },
  },
];

const marqueeText = [
  "EXECUTIVE SEARCH",
  "CXO MANDATES",
  "BOARD LEVEL PLACEMENTS",
  "LEADERSHIP HIRING",
  "TECH & DIGITAL SEARCH",
  "PAN-INDIA RECRUITMENT",
  "CONFIDENTIAL SEARCH",
  "RAPID TURNAROUND"
];

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

/* ───── 4 CORE STRATEGIC PILLARS ───── */
const practicePillars = [
  {
    icon: <Crown size={30} />,
    title: 'Executive Search & CXO Mandates',
    tag: 'Board & C-Suite',
    desc: 'Confidential, discreet search for Board Members, CEOs, CTOs, CFOs, and Managing Directors with unmatched passive talent access.',
    features: ['100% Confidential Mandates', 'Passive Talent Mapping', '90-Day Placement Warranty'],
    speed: '30-Day Turnaround'
  },
  {
    icon: <Users size={30} />,
    title: 'Leadership & Mid-Management',
    tag: 'AVP, GM & Directors',
    desc: 'Precision hiring for high-impact functional heads and operational leaders who bridge strategic vision with daily execution.',
    features: ['Rigorous 3-Tier Screening', 'Domain-Specific Shortlists', 'Average 15-Day TAT'],
    speed: '15-Day Turnaround'
  },
  {
    icon: <Target size={30} />,
    title: 'Tech & Digital Transformation',
    tag: 'Engineering & Cloud',
    desc: 'Sourcing elite software architects, AI/ML engineers, DevOps leads, and Product Managers for high-growth tech firms.',
    features: ['Technical Competency Tests', 'Modern Tech Stacks', 'Pan-India Tech Pools'],
    speed: '12-Day Turnaround'
  },
  {
    icon: <TrendingUp size={30} />,
    title: 'Turnkey Volume & Expansion',
    tag: 'Rapid Scale-Up',
    desc: 'End-to-end recruitment drives for rapid geographical expansions, new plant launches, and branch rollouts across India.',
    features: ['Scalable SLA Delivery', 'Multi-City Coordination', 'Dedicated Project Teams'],
    speed: 'High-Volume Capacity'
  },
];

/* ───── 4-STEP SEARCH METHODOLOGY ───── */
const searchSteps = [
  {
    step: '01',
    title: 'Mandate Calibration',
    desc: 'We conduct in-depth discovery into your corporate culture, strategic milestones, compensation benchmarking, and ideal leadership profile.'
  },
  {
    step: '02',
    title: 'Market Mapping & Outreach',
    desc: 'Our domain specialists map the competitor landscape and discreetly connect with passive high-performers not looking on job boards.'
  },
  {
    step: '03',
    title: '360° Rigorous Screening',
    desc: 'Comprehensive multi-stage evaluations analyzing domain competencies, behavioral adaptability, leadership EQ, and track-record proof.'
  },
  {
    step: '04',
    title: 'Onboarding & Retention',
    desc: 'Offer negotiation assistance, smooth transition support, and a comprehensive 90-day replacement warranty for absolute peace of mind.'
  },
];

/* ───── WHY CHOOSE US ───── */
const whyUs = [
  { icon: <Zap size={28}/>,        title: 'Industry-Leading Speed',     desc: '15-day average turnaround for senior roles. Fast-tracked shortlists without ever sacrificing precision or candidate quality.' },
  { icon: <Award size={28}/>,      title: 'Top 5% Talent Calibre',      desc: 'Our proprietary screening filters out 95% of candidates, submitting only vetted leaders ready to generate immediate value.' },
  { icon: <MapPin size={28}/>,     title: 'Pan-India Footprint',        desc: 'Active candidate networks across Tier-1 metros (Mumbai, Bangalore, Delhi NCR) and Tier-2 growth hubs nationwide.' },
  { icon: <Lock size={28}/>,       title: 'Confidential Discretion',    desc: 'Sensitive leadership replacements and pre-announcement hires handled with non-disclosure protocols and strict privacy.' },
  { icon: <BookOpen size={28}/>,   title: 'Deep Vertical Intelligence', desc: 'Practice leads with 15+ years of sector expertise in IT, Manufacturing, Healthcare, BFSI, Retail, and Logistics.' },
  { icon: <Headphones size={28}/>, title: 'Dedicated Account Partner',  desc: 'A single, consultative point of contact who intimately understands your business goals, team dynamics, and culture.' },
  { icon: <Crown size={28}/>,      title: 'Board & CXO Authority',      desc: 'Proven track record placing chairpersons, board advisors, and senior vice presidents across India’s leading conglomerates.' },
  { icon: <Handshake size={28}/>,  title: 'Long-Term Partnership Model',desc: 'Over 85% of our corporate partners have worked with us continuously for 3+ years, trusting us as their core talent arm.' },
];

/* ───── BRIGHT & CRISP INDUSTRIES BENTO ───── */
const industries = [
  { 
    icon: <Target size={24}/>,   
    label: 'IT & Digital Tech',      
    badge: 'High Growth',
    stats: '1,200+ Placements',
    span: 2, 
    image: indIt, 
    desc: 'Software Architects, AI/ML Engineers, Product Directors, and Engineering VPs driving modern digital products.' 
  },
  { 
    icon: <Users size={24}/>,    
    label: 'Healthcare & Pharma',     
    badge: 'Specialized',
    stats: '650+ Placements',
    span: 1, 
    image: indHealth, 
    desc: 'Hospital administrators, clinical researchers, regulatory affairs heads, and biotech specialists.' 
  },
  { 
    icon: <BookOpen size={24}/>, 
    label: 'Education & EdTech',      
    badge: 'Transformative',
    stats: '450+ Placements',
    span: 1, 
    image: indEdu, 
    desc: 'Academic deans, curriculum heads, institutional directors, and edtech growth leaders.' 
  },
  { 
    icon: <TrendingUp size={24}/>,
    label: 'BFSI & Fintech',          
    badge: 'High Demand',
    stats: '950+ Placements',
    span: 1, 
    image: indBfsi, 
    desc: 'Risk officers, compliance heads, wealth managers, and fintech product leadership.' 
  },
  { 
    icon: <Briefcase size={24}/>,
    label: 'Manufacturing & Industrial', 
    badge: 'Core Sector',
    stats: '1,100+ Placements',
    span: 2, 
    image: indFmcg, 
    desc: 'Plant heads, supply chain directors, quality controllers, and operational turnaround specialists.' 
  },
  { 
    icon: <Building2 size={24}/>,
    label: 'Retail & Consumer Goods', 
    badge: 'Pan-India',
    stats: '700+ Placements',
    span: 1, 
    image: indRetail, 
    desc: 'Category managers, national sales directors, merchandising leads, and omnichannel strategists.' 
  },
];

/* ───── TESTIMONIALS ───── */
const testimonials = [
  { 
    quote: 'Intelliworx closed our VP of Engineering search in just 18 days. The caliber of candidates presented was exceptional, and their understanding of our tech culture was spot on.', 
    name: 'Rajesh Mehta', 
    role: 'Director HR, Enterprise Tech Group',
    location: 'Bangalore'
  },
  { 
    quote: 'Their discreet C-Suite search practice helped us bring in a transformative Chief Risk Officer with zero friction. We consider Intelliworx our most valuable executive talent partner.', 
    name: 'Priya Sharma', 
    role: 'CHRO, Leading Financial Services Firm',
    location: 'Mumbai'
  },
  { 
    quote: 'For 3 years, Intelliworx has delivered top 5% talent across all our manufacturing plants in India. Fast, professional, reliable, and deeply knowledgeable.', 
    name: 'Anil Kumar', 
    role: 'Managing Director, Industrial Conglomerate',
    location: 'Delhi NCR'
  },
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
      
      {/* ══════ HERO SLIDER (Vibrant, Bright, High Contrast) ══════ */}
      <section className="hero-slider">
        {slides.map((slide, i) => (
          <div key={slide.id} className={`hero-slide ${i === current ? 'active' : ''}`}>
            {/* Bright, Crisp Background (filter removed & brightness enhanced) */}
            <div className="hero-bg" style={{ backgroundImage: `url(${slide.image})` }} />
            
            {/* Light ambient scrim overlay to keep text razor sharp without blacking out the photo */}
            <div className="hero-overlay" />
            
            <div className="container hero-content">
              <div className={`hero-text-block ${i === current ? 'animate' : ''}`}>
                
                {/* Live glowing badge */}
                <div className="hero-badge-pill">
                  <span className="hero-pulse-dot"></span>
                  <span className="hero-badge-text">{slide.tag}</span>
                  <span className="hero-badge-sep">/</span>
                  <span className="hero-badge-highlight">{slide.badgeText}</span>
                </div>

                <h1 className="hero-title">
                  {slide.title.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {idx === 1 ? <span className="hero-title-highlight">{line}</span> : line}
                      <br/>
                    </React.Fragment>
                  ))}
                </h1>

                <p className="hero-sub">{slide.sub}</p>

                <div className="hero-actions">
                  <Link to={slide.cta1.to} className="btn btn-hero-primary">
                    <span>{slide.cta1.label}</span>
                    <ArrowRight size={18}/>
                  </Link>
                  <Link to={slide.cta2.to} className="btn btn-hero-outline">
                    {slide.cta2.label}
                  </Link>
                  <a href="tel:+919876543210" className="hero-call-pill">
                    <Phone size={16} className="hcp-icon" />
                    <span className="hcp-label">Urgent Mandate?</span>
                    <span className="hcp-num">+91 98765 43210</span>
                  </a>
                </div>

                {/* Micro trust indicators */}
                <div className="hero-trust-bar">
                  <div className="htb-item">
                    <CheckCircle2 size={16} color="#dfb755" />
                    <span>50+ Indian Cities</span>
                  </div>
                  <div className="htb-item">
                    <CheckCircle2 size={16} color="#dfb755" />
                    <span>Top 5% Candidate Screen</span>
                  </div>
                  <div className="htb-item">
                    <CheckCircle2 size={16} color="#dfb755" />
                    <span>90-Day Placement Guarantee</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button className="slider-nav prev" onClick={prev} aria-label="Previous Slide">
          <ChevronLeft size={28}/>
        </button>
        <button className="slider-nav next" onClick={next} aria-label="Next Slide">
          <ChevronRight size={28}/>
        </button>
        
        {/* Slide Indicators */}
        <div className="slider-indicators">
          {slides.map((_, i) => (
            <button 
              key={i} 
              className={`indicator ${i === current ? 'active' : ''}`} 
              onClick={() => goTo(i)} 
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ══════ GLASS STATS (Overlapping Metric Strip) ══════ */}
      <section className="stats-overlap reveal-expand">
        <div className="container">
          <div className="glass-stats-grid">
            <div className="glass-stat reveal-scale delay-1">
              <div className="gs-icon-wrap"><Clock size={24} /></div>
              <div className="gs-num">15<span className="gs-plus">+</span></div>
              <div className="gs-lbl">Years Search Heritage</div>
              <p className="gs-sub">Trusted by India's top corporate groups</p>
            </div>
            <div className="glass-stat reveal-scale delay-2">
              <div className="gs-icon-wrap"><Users size={24} /></div>
              <div className="gs-num">5,000<span className="gs-plus">+</span></div>
              <div className="gs-lbl">Executive Placements</div>
              <p className="gs-sub">From first-line leaders to C-Suite</p>
            </div>
            <div className="glass-stat reveal-scale delay-3">
              <div className="gs-icon-wrap"><Building2 size={24} /></div>
              <div className="gs-num">200<span className="gs-plus">+</span></div>
              <div className="gs-lbl">Corporate Clients</div>
              <p className="gs-sub">MNCs, Unicorns & Enterprise groups</p>
            </div>
            <div className="glass-stat reveal-scale delay-4">
              <div className="gs-icon-wrap"><ShieldCheck size={24} /></div>
              <div className="gs-num">98.6<span className="gs-plus">%</span></div>
              <div className="gs-lbl">Client Retention Rate</div>
              <p className="gs-sub">85% rehire on multi-year contracts</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ INFINITE CLIENT LOGO MARQUEE ══════ */}
      <div id="brands-marquee" className="marquee-wrapper">
        <div className="marquee-header-pill">
          <Sparkles size={14} color="#c9a84c" />
          <span>TRUSTED BY INDUSTRY TITANS & HIGH-GROWTH ENTERPRISES</span>
        </div>
        <Marquee textArray={marqueeText} speed={25} direction="left" />
        <div className="marquee-separator"></div>
        <LogoMarquee imageArray={clientLogos} speed={36} direction="right" bgColor="#ffffff" />
      </div>

      {/* ══════ MEET OUR TEAM (After Hero & Scrollers) ══════ */}
      <section className="section home-team-section">
        <div className="container">
          <div className="home-team-card reveal-expand">
            <div className="team-split-grid">
              
              {/* Left text & credentials */}
              <div className="team-left-content reveal-left">
                <div className="team-eyebrow-pill">
                  <span className="team-pill-dot"></span>
                  <span className="team-pill-text">BEHIND OUR CONSULTING EXCELLENCE</span>
                </div>
                <h2 className="team-main-title">Meet The Leadership & Search Partners</h2>
                <p className="team-main-desc">
                  We are a dedicated team of former corporate executives, senior HR leaders, and talent intelligence specialists. With over 15+ years of combined experience across India's premier industries, our practice heads understand the operational nuances, leadership EQ, and cultural alignment needed for long-term hiring success.
                </p>

                <div className="team-key-pillars">
                  <div className="tkp-item">
                    <div className="tkp-check"><Check size={16} strokeWidth={3}/></div>
                    <div>
                      <h4 className="tkp-heading">Former Industry Practitioners</h4>
                      <p className="tkp-sub">Search directors who have run enterprise business units, not just recruitment desks.</p>
                    </div>
                  </div>

                  <div className="tkp-item">
                    <div className="tkp-check"><Check size={16} strokeWidth={3}/></div>
                    <div>
                      <h4 className="tkp-heading">Dedicated Sector Practice Desks</h4>
                      <p className="tkp-sub">Specialized vertical heads for IT & Tech, BFSI, Healthcare, Manufacturing, and Retail.</p>
                    </div>
                  </div>

                  <div className="tkp-item">
                    <div className="tkp-check"><Check size={16} strokeWidth={3}/></div>
                    <div>
                      <h4 className="tkp-heading">Agile & Confidential Execution</h4>
                      <p className="tkp-sub">24-hour mandate activation and 15-day average turnaround with complete NDA protection.</p>
                    </div>
                  </div>
                </div>

                <div className="team-stats-strip">
                  <div className="tss-col">
                    <span className="tss-num">45<small>+</small></span>
                    <span className="tss-lbl">Search Consultants</span>
                  </div>
                  <div className="tss-col">
                    <span className="tss-num">15<small>+</small></span>
                    <span className="tss-lbl">Avg. Years Exp.</span>
                  </div>
                  <div className="tss-col">
                    <span className="tss-num">50<small>+</small></span>
                    <span className="tss-lbl">Cities Network</span>
                  </div>
                </div>

                <div className="team-action-buttons">
                  <Link to="/about" className="btn btn-team-cta">
                    <span>Our Story & Leadership</span>
                    <ArrowRight size={16}/>
                  </Link>
                  <Link to="/contact" className="btn btn-team-secondary">
                    Consult With A Partner
                  </Link>
                </div>
              </div>

              {/* Right Visual with Glow */}
              <div className="team-right-visual reveal-right delay-1">
                <div className="team-image-container">
                  <div className="team-aura-glow"></div>
                  <img 
                    src="/image.png" 
                    alt="Intelliworx Executive Search Team" 
                    className="team-composite-photo" 
                    loading="lazy"
                  />
                  <div className="team-floating-tag">
                    <Crown size={22} color="#c9a84c" />
                    <div>
                      <strong className="tft-title">Senior Advisory Council</strong>
                      <span className="tft-sub">C-Suite & Board Search Practice</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════ 4 CORE STRATEGIC PRACTICE PILLARS ══════ */}
      <section className="section bg-off-white practices-section">
        <div className="container">
          <div className="premium-header center reveal-scale">
            <span className="premium-eyebrow">Core Capabilities</span>
            <h2 className="premium-title">Tailored Search Practices<br/>Engineered for Business Impact</h2>
            <p className="premium-desc">
              Whether you are scaling a fast-moving engineering hub or appointing an executive boardroom leader, we customize our search methodology to match your precise organizational stage.
            </p>
          </div>

          <div className="practices-grid">
            {practicePillars.map((p, i) => (
              <div className={`practice-card reveal delay-${i + 1}`} key={i}>
                <div className="pc-top">
                  <div className="pc-icon-box">{p.icon}</div>
                  <span className="pc-tag">{p.tag}</span>
                </div>
                <h3 className="pc-title">{p.title}</h3>
                <p className="pc-desc">{p.desc}</p>
                <div className="pc-features">
                  {p.features.map((feat, idx) => (
                    <div className="pcf-item" key={idx}>
                      <Check size={16} className="pcf-check" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <div className="pc-footer">
                  <span className="pc-speed">
                    <Zap size={14} /> {p.speed}
                  </span>
                  <Link to="/proposal" className="pc-link">
                    Engage <ArrowRight size={14}/>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ BRIGHT, CRISP INDUSTRIES BENTO (No Dark Muddy Veil) ══════ */}
      <section className="section bg-white bento-industries-section">
        <div className="container">
          <div className="premium-header center reveal-scale">
            <span className="premium-eyebrow">Sector Expertise</span>
            <h2 className="premium-title">Deep Industry Domain Networks</h2>
            <p className="premium-desc">
              Our industry-dedicated recruitment directors bring 15+ years of sector specialization, ensuring every candidate brings proven domain expertise.
            </p>
          </div>

          <div className="bento-grid">
            {industries.map((ind, i) => (
              <Link 
                to="/industries" 
                className={`bento-card bento-bright reveal delay-${(i % 3) + 1} span-${ind.span}`} 
                key={ind.label}
              >
                {/* Bright, Crisp Photo Background */}
                <div 
                  className="bento-card-bg bento-bright-bg" 
                  style={{ backgroundImage: `url(${ind.image})` }}
                ></div>

                {/* Clean, subtle modern gradient scrim (preserves picture brightness) */}
                <div className="bento-bright-scrim"></div>

                {/* Top Badge & Stats */}
                <div className="bento-top-badges">
                  <span className="bento-tag-pill">{ind.badge}</span>
                  <span className="bento-stat-pill">{ind.stats}</span>
                </div>

                {/* Content */}
                <div className="bento-content">
                  <div className="bento-icon-wrap">{ind.icon}</div>
                  <h3 className="bento-title">{ind.label}</h3>
                  <p className="bento-desc">{ind.desc}</p>
                </div>

                {/* Hover footer */}
                <div className="bento-footer">
                  <span className="bento-link-text">Explore Sector Mandates</span>
                  <div className="bento-arrow"><ArrowRight size={18}/></div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: '54px' }}>
            <Link to="/industries" className="btn btn-primary" style={{ padding: '16px 44px', fontSize: '0.95rem' }}>
              View All 12+ Specialized Sectors <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════ THE 4-STEP SEARCH METHODOLOGY ══════ */}
      <section className="section bg-navy search-framework-section">
        <div className="container">
          <div className="premium-header center light reveal-scale">
            <span className="premium-eyebrow">Our Methodology</span>
            <h2 className="premium-title">The Intelliworx Search Precision System</h2>
            <p className="premium-desc">
              A proven, scientific search framework designed to consistently identify and attract the top 5% of passive executive talent.
            </p>
          </div>

          <div className="framework-grid">
            {searchSteps.map((step, idx) => (
              <div className={`framework-card reveal delay-${idx + 1}`} key={idx}>
                <div className="fc-number">{step.step}</div>
                <div className="fc-content">
                  <h3 className="fc-title">{step.title}</h3>
                  <p className="fc-desc">{step.desc}</p>
                </div>
                {idx < searchSteps.length - 1 && (
                  <div className="fc-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ HIERARCHY PLACEMENT SPECTRUM ══════ */}
      <section className="section bg-off-white levels-section">
        <div className="container">
          <div className="levels-split">
            <div className="levels-left reveal-left">
              <span className="premium-eyebrow">Hierarchy Agnostic</span>
              <h2 className="premium-title">Leaders For Every Level<br/>Of Your Organization</h2>
              <p className="premium-desc" style={{ margin: '0 0 32px 0' }}>
                From high-potential management trainees driving field execution to visionary boardroom advisors steering corporate strategy — our specialized vertical teams hire across every echelon.
              </p>
              
              <div className="levels-benefits">
                <div className="lb-item">
                  <CheckCircle2 size={18} color="#c9a84c" />
                  <span>C-Suite / Boardroom Headhunting</span>
                </div>
                <div className="lb-item">
                  <CheckCircle2 size={18} color="#c9a84c" />
                  <span>Mid-to-Senior Functional Leadership</span>
                </div>
                <div className="lb-item">
                  <CheckCircle2 size={18} color="#c9a84c" />
                  <span>Technical Specialist & Volume Staffing</span>
                </div>
              </div>

              <Link to="/proposal" className="btn btn-navy" style={{ marginTop: '28px' }}>
                Hire Top Talent <ArrowRight size={16}/>
              </Link>
            </div>

            <div className="levels-right reveal-right">
              <div className="levels-matrix-grid">
                {[
                  { level: 'C-Suite & Board', range: 'CXO, MD, Board Advisor', tat: '30 Days', desc: 'Discreet search for top executive leadership.' },
                  { level: 'Senior Leadership', range: 'VP, AVP, General Manager', tat: '21 Days', desc: 'Strategic heads leading business units.' },
                  { level: 'Mid-Management', range: 'Sr. Manager, Lead, Architect', tat: '15 Days', desc: 'Critical operational & tech managers.' },
                  { level: 'Specialist Talent', range: 'Engineers, Analysts, Executives', tat: '10 Days', desc: 'High-performing specialized professionals.' }
                ].map((item, i) => (
                  <div className="matrix-tier-card reveal-left" style={{ transitionDelay: `${i * 0.1}s` }} key={item.level}>
                    <div className="mtc-header">
                      <span className="mtc-dot"></span>
                      <h4 className="mtc-title">{item.level}</h4>
                      <span className="mtc-tat">{item.tat}</span>
                    </div>
                    <div className="mtc-range">{item.range}</div>
                    <p className="mtc-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ WHY CHOOSE US (The Intelliworx Advantage) ══════ */}
      <section id="why" className="section bg-white why-us-section">
        <div className="container">
          <div className="premium-header center reveal-scale">
            <span className="premium-eyebrow">The Intelliworx Advantage</span>
            <h2 className="premium-title">Why Leading Enterprises<br/>Rely On Our Search Firm</h2>
            <p className="premium-desc">
              We combine boardroom discretion, advanced talent mapping, and lightning-fast turnaround to deliver measurable hiring advantage.
            </p>
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

      {/* ══════ URGENT MANDATE CALL NOW BANNER ══════ */}
      <section className="section bg-off-white" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="call-now-premium-card reveal-scale">
            <div className="cnc-icon-wrap">
              <Phone size={44} className="cnc-icon" />
            </div>
            <div className="cnc-text">
              <div className="cnc-badge">DIRECT CONSULTANT HOTLINE</div>
              <h2 className="cnc-title">Have An Urgent Or Confidential Mandate?</h2>
              <p className="cnc-desc">
                Speak directly with an Executive Search Director today. We initiate talent mapping within 24 hours of engagement.
              </p>
            </div>
            <div className="cnc-action">
              <a href="tel:+919876543210" className="btn-call-now">
                <span className="bcn-text">Call Consultant Directly</span>
                <span className="bcn-number">+91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ EXECUTIVE TESTIMONIALS ══════ */}
      <section className="section bg-white testimonials-section">
        <div className="container">
          <div className="premium-header center reveal-blur">
            <span className="premium-eyebrow">Client Verification</span>
            <h2 className="premium-title">What Corporate Leaders Say</h2>
            <p className="premium-desc">Real stories from HR Directors, CHROs, and Managing Directors who rely on our search practice.</p>
          </div>

          <div className="premium-testi-grid">
            {testimonials.map((t, i) => (
              <div className={`premium-testi-card reveal delay-${i+1}`} key={i}>
                <div className="ptc-bg-quote"><Quote size={120} strokeWidth={1}/></div>
                <div className="ptc-content">
                  <div className="ptc-stars">
                    {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="#c9a84c" color="#c9a84c"/>)}
                  </div>
                  <p className="ptc-text">"{t.quote}"</p>
                  <div className="ptc-divider"></div>
                  <div className="ptc-author-block">
                    <div className="ptc-avatar">{t.name.charAt(0)}</div>
                    <div className="ptc-author-info">
                      <h4 className="ptc-name">{t.name}</h4>
                      <span className="ptc-role">{t.role}</span>
                      <span className="ptc-location">📍 {t.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ HOME FINAL CTA BANNER ══════ */}
      <div className="home-cta-wrapper reveal-expand">
        <div className="container">
          <div className="home-cta-card reveal-scale">
            <div className="home-cta-text">
              <div className="home-cta-badge">PARTNER WITH INTELLIWORX</div>
              <h3 className="home-cta-title">Ready To Secure Your Next Strategic Leader?</h3>
              <p className="home-cta-sub">
                Submit your role mandate online — an Executive Search Director will reach out within 24 hours with custom talent intelligence.
              </p>
            </div>
            <div className="home-cta-btn-group">
              <Link to="/proposal" className="btn btn-navy cta-main-btn">
                Request Executive Proposal <ArrowRight size={18}/>
              </Link>
              <Link to="/contact" className="btn btn-outline-dark cta-sec-btn">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
