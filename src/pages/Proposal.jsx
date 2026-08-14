import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Download, Loader2, Sparkles } from 'lucide-react';
import Marquee from '../components/Marquee';
import './Proposal.css';

const marqueeText = ["SUBMIT MANDATE", "HIRE LEADERS", "BUILD TEAMS", "SCALE FAST"];
const bannerProposal = "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop";

export default function Proposal() {
  const [step, setStep] = useState(1); // 1: Form, 2: Loading, 3: Generated Proposal
  const proposalRef = useRef(null);

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    industry: '',
    serviceNeeded: '',
    roleLevel: '',
    numPositions: '',
    budget: '',
    location: '',
    details: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    setStep(2);
    // Simulate LLM generation delay
    setTimeout(() => {
      setStep(3);
    }, 4500);
  };

  const downloadPDF = () => {
    window.print();
  };

  // Dynamic fee calculation based on role
  const getFeePercentage = () => {
    if (formData.roleLevel === 'Junior / Executive') return '8.33%';
    if (formData.roleLevel === 'Mid-Level / Manager') return '10% - 12.5%';
    if (formData.roleLevel === 'Senior / Director') return '15% - 20%';
    if (formData.roleLevel === 'CXO / Board Level') return '25% - 33% (Retained)';
    return '8.33% - 12.5%';
  };

  return (
    <div className="proposal-page">
      {/* PAGE BANNER */}
      <div className="page-banner">
        <img src={bannerProposal} alt="Request Proposal" className="banner-bg" />
        <div className="banner-content">
          <p className="section-eyebrow reveal-blur" style={{ justifyContent: 'center', display: 'flex' }}>Let's Talk Talent</p>
          <h1 className="reveal-blur delay-1">Request a Proposal</h1>
          <p className="reveal-blur delay-2">Tell us about your hiring requirement and we'll craft a tailored recruitment strategy.</p>
          <nav className="breadcrumb reveal-blur delay-3"><Link to="/">Home</Link><span className="sep">/</span><span>Proposal</span></nav>
        </div>
      </div>

      <section className="proposal-section">
        <div className="container">
          
          {step === 1 && (
            <div className="proposal-container">
              <div className="prop-header">
                <h2>Client Mandate Questionnaire</h2>
                <div className="gold-line centered" style={{ marginBottom: 24 }}></div>
                <p>Please provide the details of your hiring mandate. Our AI will instantly generate a tailored, professional proposal outlining our strategy and terms.</p>
              </div>

              <form onSubmit={handleGenerate} className="premium-form">
                <div className="form-section-title">1. Company & Contact Details</div>
                <div className="pf-row">
                  <div className="pf-group">
                    <label className="pf-label">Company Name *</label>
                    <input className="pf-input" name="companyName" value={formData.companyName} onChange={handleChange} type="text" placeholder="e.g. Acme Corp" required />
                  </div>
                  <div className="pf-group">
                    <label className="pf-label">Contact Person *</label>
                    <input className="pf-input" name="contactName" value={formData.contactName} onChange={handleChange} type="text" placeholder="Full name" required />
                  </div>
                </div>

                <div className="pf-row">
                  <div className="pf-group">
                    <label className="pf-label">Corporate Email *</label>
                    <input className="pf-input" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="you@company.com" required />
                  </div>
                  <div className="pf-group">
                    <label className="pf-label">Phone Number *</label>
                    <input className="pf-input" name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 98xxx xxxxx" required />
                  </div>
                </div>

                <div className="form-section-title">2. Requirement Details</div>
                <div className="pf-row">
                  <div className="pf-group">
                    <label className="pf-label">Industry *</label>
                    <select className="pf-input" name="industry" value={formData.industry} onChange={handleChange} required>
                      <option value="">Select industry</option>
                      {['IT / Software','Engineering & Manufacturing','Healthcare & Pharma','Retail & E-commerce','BFSI','Logistics','Education','Other'].map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="pf-group">
                    <label className="pf-label">Service Needed *</label>
                    <select className="pf-input" name="serviceNeeded" value={formData.serviceNeeded} onChange={handleChange} required>
                      <option value="">Select service</option>
                      {['Permanent Staffing','Executive Search','Contract Staffing','Leadership Hiring','Entry-Level Talent Hiring'].map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <div className="pf-row">
                  <div className="pf-group">
                    <label className="pf-label">Role Level *</label>
                    <select className="pf-input" name="roleLevel" value={formData.roleLevel} onChange={handleChange} required>
                      <option value="">Select level</option>
                      {['Junior / Executive','Mid-Level / Manager','Senior / Director','CXO / Board Level'].map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="pf-group">
                    <label className="pf-label">Number of Openings *</label>
                    <input className="pf-input" name="numPositions" value={formData.numPositions} onChange={handleChange} type="number" placeholder="e.g. 5" required min="1" />
                  </div>
                </div>

                <div className="pf-row">
                  <div className="pf-group">
                    <label className="pf-label">Expected Budget (CTC) *</label>
                    <input className="pf-input" name="budget" value={formData.budget} onChange={handleChange} type="text" placeholder="e.g. 10-15 LPA" required />
                  </div>
                  <div className="pf-group">
                    <label className="pf-label">Job Location *</label>
                    <input className="pf-input" name="location" value={formData.location} onChange={handleChange} type="text" placeholder="e.g. Mumbai / Remote" required />
                  </div>
                </div>

                <div className="pf-group">
                  <label className="pf-label">Key Responsibilities / Mandatory Skills</label>
                  <textarea className="pf-input pf-textarea" name="details" value={formData.details} onChange={handleChange} placeholder="Briefly describe the roles, critical experience required, target companies..." />
                </div>

                <button type="submit" className="pf-submit ai-submit">
                  <Sparkles size={20}/> Generate AI Proposal
                </button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="ai-loading-container">
              <Loader2 className="ai-spinner" size={64} />
              <h2 className="ai-loading-title">Analyzing Requirement...</h2>
              <p className="ai-loading-text">Our LLM is drafting a tailored professional proposal based on your inputs and our standard terms.</p>
              <div className="ai-progress-bar">
                <div className="ai-progress-fill"></div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="proposal-result-container fade-in-up">
              <div className="proposal-result-header">
                <div className="pr-header-left">
                  <h2><CheckCircle2 size={28} color="#10b981" /> Proposal Generated</h2>
                  <p>Your tailored recruitment proposal is ready.</p>
                </div>
                <button onClick={downloadPDF} className="pf-submit download-btn">
                  <Download size={20}/> Download as PDF
                </button>
              </div>

              {/* The Actual Document to be PDF'd */}
              <div className="document-wrapper">
                <div className="a4-document" ref={proposalRef}>
                  
                  {/* DOC HEADER */}
                  <div className="doc-header">
                    <div className="doc-logo">Intelliworx Consulting</div>
                    <div className="doc-meta">
                      <p><strong>Date:</strong> {new Date().toLocaleDateString('en-GB')}</p>
                      <p><strong>Ref:</strong> IWC/{new Date().getFullYear()}/{(Math.random()*1000).toFixed(0)}</p>
                    </div>
                  </div>

                  <h1 className="doc-title">Recruitment Services Proposal</h1>
                  
                  <div className="doc-section">
                    <h3 className="doc-section-title">1. Executive Summary</h3>
                    <p>Prepared exclusively for <strong>{formData.companyName}</strong>. Attention: <strong>{formData.contactName}</strong>.</p>
                    <p>Thank you for giving Intelliworx Consulting the opportunity to partner with you on your talent acquisition mandate. Based on the requirements shared, we have formulated a tailored strategy to assist you in securing top-tier professionals for the <strong>{formData.serviceNeeded}</strong> mandate.</p>
                  </div>

                  {/* Page 2 Start */}
                  <div className="pdf-page-break"></div>

                  <div className="doc-section">
                    <h3 className="doc-section-title">2. Requirement Understanding</h3>
                    <table className="doc-table">
                      <tbody>
                        <tr><th>Industry</th><td>{formData.industry}</td></tr>
                        <tr><th>Role Level</th><td>{formData.roleLevel}</td></tr>
                        <tr><th>No. of Openings</th><td>{formData.numPositions}</td></tr>
                        <tr><th>Location</th><td>{formData.location}</td></tr>
                        <tr><th>Budget (CTC)</th><td>{formData.budget}</td></tr>
                      </tbody>
                    </table>
                    {formData.details && (
                      <div className="doc-notes">
                        <strong>Additional Notes:</strong> {formData.details}
                      </div>
                    )}
                  </div>

                  <div className="doc-section">
                    <h3 className="doc-section-title">3. Proposed Search Methodology</h3>
                    <p>Our approach for this mandate involves a targeted market mapping exercise across relevant target companies. We utilize a combination of our proprietary internal database, premium networking platforms, and direct headhunting to identify active and passive talent that aligns with your specific technical and cultural expectations.</p>
                  </div>
                  
                  {/* Page 3 Start */}
                  <div className="pdf-page-break"></div>
                  
                  <div className="doc-section">
                    <h3 className="doc-section-title">4. Commercial Terms & Pricing</h3>
                    <p>The professional fee shall be charged based on the selected engagement model and the final annual CTC offered to the candidate. Our proposed fee structure for this specific mandate is as follows:</p>
                    <table className="doc-table pricing-table">
                      <thead>
                        <tr>
                          <th>Service Type</th>
                          <th>Role Complexity</th>
                          <th>Professional Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{formData.serviceNeeded}</td>
                          <td>{formData.roleLevel}</td>
                          <td><strong>{getFeePercentage()}</strong> of Annual CTC</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="doc-small-text"><em>*All fees are exclusive of applicable GST. Annual CTC includes fixed and guaranteed variable components.</em></p>
                  </div>

                  <div className="doc-section">
                    <h3 className="doc-section-title">5. Payment & Replacement Terms</h3>
                    <ul className="doc-list">
                      <li><strong>Payment Terms:</strong> For permanent staffing, 100% payment is due upon candidate joining. Invoice will be raised on the date of joining and is payable within 15 days. For retained search, billing is in three milestone tranches.</li>
                      <li><strong>Replacement Guarantee:</strong> A one-time free replacement is offered if a candidate leaves the organisation or is terminated due to performance issues within <strong>90 days</strong> of joining.</li>
                      <li><strong>Candidate Ownership:</strong> Any candidate profile shared shall remain the property of Intelliworx Consulting for a period of 12 months. Any engagement of such candidates during this period will attract the applicable professional fee.</li>
                    </ul>
                  </div>

                  <div className="doc-section doc-signoff">
                    <h3 className="doc-section-title">6. Acceptance & Approval</h3>
                    <p>By signing below, the client confirms acceptance of the above commercial terms and authorises Intelliworx Consulting to initiate the talent search activity.</p>
                    
                    <div className="sign-boxes">
                      <div className="sign-box">
                        <p><strong>For Intelliworx Consulting</strong></p>
                        <div className="sign-line"></div>
                        <p>Authorized Signatory</p>
                      </div>
                      <div className="sign-box">
                        <p><strong>For {formData.companyName}</strong></p>
                        <div className="sign-line"></div>
                        <p>Name: {formData.contactName}</p>
                        <p>Designation: ________________</p>
                        <p>Date: ________________</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      <Marquee textArray={marqueeText} speed={15} direction="left" bgColor="#f8f6f2" textColor="#0a1628" />
    </div>
  );
}
