import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './Proposal.css';

const bannerProposal = "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop";

export default function Proposal() {
  const [sent, setSent] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submit = (e) => { 
    e.preventDefault(); 
    setSent(true); 
    e.target.reset(); 
    setTimeout(() => setSent(false), 8000);
  };

  return (
    <div className="proposal-page">
      {/* PAGE BANNER */}
      <div className="page-banner">
        <img src={bannerProposal} alt="Request Proposal" className="banner-bg" />
        <div className="banner-content">
          <p className="section-eyebrow animate-up" style={{ justifyContent: 'center', display: 'flex' }}>Let's Talk Talent</p>
          <h1 className="animate-up delay-1">Request a Proposal</h1>
          <p className="animate-up delay-2">Tell us about your hiring requirement and we'll craft a tailored recruitment strategy.</p>
          <nav className="breadcrumb animate-up delay-3"><Link to="/">Home</Link><span className="sep">/</span><span>Proposal</span></nav>
        </div>
      </div>

      <section className="proposal-section">
        <div className="container">
          <div className="proposal-container">
            <div className="prop-header">
              <h2>Executive Search Inquiry</h2>
              <div className="gold-line centered" style={{ marginBottom: 24 }}></div>
              <p>Please provide the details of your hiring mandate. Our leadership team will review your requirements and respond within 24 hours.</p>
            </div>

            {sent && (
              <div className="pf-success">
                <CheckCircle2 size={20} /> Proposal request received successfully! Our team will reach out shortly.
              </div>
            )}

            <form onSubmit={submit} className="premium-form">
              <div className="pf-row">
                <div className="pf-group">
                  <label className="pf-label">Company Name *</label>
                  <input className="pf-input" type="text" placeholder="e.g. Acme Corp" required />
                </div>
                <div className="pf-group">
                  <label className="pf-label">Contact Person *</label>
                  <input className="pf-input" type="text" placeholder="Full name" required />
                </div>
              </div>

              <div className="pf-row">
                <div className="pf-group">
                  <label className="pf-label">Corporate Email *</label>
                  <input className="pf-input" type="email" placeholder="you@company.com" required />
                </div>
                <div className="pf-group">
                  <label className="pf-label">Phone Number *</label>
                  <input className="pf-input" type="tel" placeholder="+91 98xxx xxxxx" required />
                </div>
              </div>

              <div className="pf-row">
                <div className="pf-group">
                  <label className="pf-label">Industry *</label>
                  <select className="pf-input" required>
                    <option value="">Select industry</option>
                    {['IT & ITeS','FMCG','Healthcare','Retail','Manufacturing','Logistics','BFSI','Education'].map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div className="pf-group">
                  <label className="pf-label">Service Needed *</label>
                  <select className="pf-input" required>
                    <option value="">Select service</option>
                    {['Permanent Staffing','Executive Search','Contract Staffing','RPO','Leadership Hiring','Campus Recruitment'].map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div className="pf-row">
                <div className="pf-group">
                  <label className="pf-label">Role Level *</label>
                  <select className="pf-input" required>
                    <option value="">Select level</option>
                    {['Junior','Mid-Level','Senior / CXO'].map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div className="pf-group">
                  <label className="pf-label">Number of Positions *</label>
                  <input className="pf-input" type="number" placeholder="e.g. 5" required min="1" />
                </div>
              </div>

              <div className="pf-group">
                <label className="pf-label">Mandate Details</label>
                <textarea className="pf-input pf-textarea" placeholder="Briefly describe the roles, critical experience required, location, and salary bands..." />
              </div>

              <button type="submit" className="pf-submit">
                Submit Mandate <ArrowRight size={20}/>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
