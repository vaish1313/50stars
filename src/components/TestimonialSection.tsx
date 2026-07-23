import React, { useState } from 'react';
import './TestimonialSection.css';
import AnimatedNumber from './AnimatedNumber';

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  companyLogo: React.ReactNode;
  quote: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    name: 'Gary Stein',
    role: 'Managing Director',
    company: 'Kobe Steel, Ltd.',
    companyLogo: (
      <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="tm-sidebar-logo-svg">
        <circle cx="18" cy="20" r="10" fill="#E65100" />
        <path d="M14 20 L22 14 V26 Z" fill="#FFF" />
        <text x="34" y="24" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="11" fill="#FFF">KOBE STEEL</text>
      </svg>
    ),
    quote: "We've built our reputation on reliable steel production, and 50 Stars' international sourcing and trading arm has been a key asset in helping us manage bulk supply and trade-flow logistics globally."
  },
  {
    id: 2,
    name: 'John P. Sandok',
    role: 'Director of Sourcing',
    company: 'Kardemir',
    companyLogo: (
      <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="tm-sidebar-logo-svg">
        <rect x="8" y="10" width="20" height="20" rx="4" fill="#1565C0" />
        <path d="M13 16 H23 M18 16 V26" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
        <text x="34" y="24" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="10" fill="#FFF">KARDEMİR</text>
      </svg>
    ),
    quote: "Quality assurance is everything when importing structural steel. 50 Stars' compliance checking and mill test audit support ensure that every plate meets ASTM and AISC code before it hits our distribution centers."
  },
  {
    id: 3,
    name: 'Dave C. Harris',
    role: 'Vice President of Operations',
    company: 'ThyssenKrupp Steel',
    companyLogo: (
      <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="tm-sidebar-logo-svg">
        <path d="M8 26 C8 15, 24 23, 24 12" stroke="#00A0E2" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <text x="30" y="24" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="8.5" fill="#FFF">THYSSENKRUPP</text>
      </svg>
    ),
    quote: "As a global leader in steel manufacturing, we demand speed and precision. 50 Stars has consistently met our requirements for high-strength columns, composite decking, and just-in-time logistics coordination."
  },
  {
    id: 4,
    name: 'Mark S. Miller',
    role: 'Chief Operations Officer',
    company: 'SME Steel',
    companyLogo: (
      <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="tm-sidebar-logo-svg">
        <path d="M8 11 H24 M16 11 V29 M8 29 H24" stroke="#FF5722" strokeWidth="3" />
        <text x="30" y="25" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="14" fill="#FFF">SME</text>
      </svg>
    ),
    quote: "Coordinating heavy-member plate girders and complex connection steel is a logistical challenge. 50 Stars manages our supply chain with absolute transparency and unmatched mill-to-job-site tracking."
  },
  {
    id: 5,
    name: 'Patricia S. Walker',
    role: 'Supply Chain Specialist',
    company: 'Samuel, Son & Co.',
    companyLogo: (
      <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="tm-sidebar-logo-svg">
        <path d="M8 14 C8 8, 22 8, 22 14 C22 18, 8 20, 8 26 C8 32, 22 32, 22 26" stroke="#C2185B" strokeWidth="3" strokeLinecap="round" fill="none" />
        <text x="28" y="24" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="10" fill="#FFF">SAMUEL</text>
      </svg>
    ),
    quote: "Operating a multi-location distribution model is complex. 50 Stars is our go-to partner for sourcing specialized structural shapes and ensuring mill test certificate traceability across our regional hubs."
  },
  {
    id: 6,
    name: 'Christopher B. Hall',
    role: 'Supply Chain Director',
    company: "O'Neal Steel",
    companyLogo: (
      <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="tm-sidebar-logo-svg">
        <rect x="8" y="10" width="20" height="20" fill="#1976D2" rx="2" />
        <text x="18" y="25" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="14" fill="#FFF" textAnchor="middle">O</text>
        <text x="34" y="24" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="10" fill="#FFF">O'NEAL</text>
      </svg>
    ),
    quote: "Sourcing both domestic and imported sections can be a nightmare to track. 50 Stars makes it easy by coordinating the entire mill test reporting process and streamlining logistics across our regional hubs."
  },
  {
    id: 7,
    name: 'Linda M. Ross',
    role: 'Logistics Lead',
    company: 'Continental Steel & Tube Co.',
    companyLogo: (
      <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="tm-sidebar-logo-svg">
        <circle cx="16" cy="20" r="10" stroke="#1E88E5" strokeWidth="2.5" fill="none" />
        <circle cx="16" cy="20" r="4" fill="#1E88E5" />
        <text x="32" y="24" fontFamily="'Outfit', sans-serif" fontWeight="800" fontSize="8.5" fill="#FFF">CONTINENTAL</text>
      </svg>
    ),
    quote: "Their support for structural steel tubes and hollow sections is unmatched. They optimized our bulk distribution runs and consistently deliver full AISC compliance certifications."
  }
];

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  const activeTestimonial = testimonialsData[activeIndex];

  return (
    <section className="testimonial-section" id="testimonial">
      <div className="tm-container">
        
        {/* Header */}
        <div className="tm-header">
          <div className="pill-who-we-are">
            <div className="pill-gradient-square"></div>
            <span className="pill-text">Build on trust</span>
          </div>
          <h2 className="tm-title">
            Trusted by <span className="text-orange">clients</span>, proven by results
          </h2>
        </div>

        {/* Content Layout */}
        <div className="tm-grid">
          
          {/* Column 1: Testimonial Card */}
          <div className="tm-card tm-col-1">
            <div className="tm-avatars-sidebar">
              {testimonialsData.map((t, idx) => (
                <div 
                  key={t.id} 
                  className={`tm-company-btn ${activeIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  title={t.company}
                >
                  <div className="tm-company-logo-box">
                    {t.companyLogo}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="tm-quote-box">
              <div className="tm-stars">
                <img src="/assets/rating-stars-orange.svg" alt="5 Stars" />
              </div>
              <p className="tm-quote-text">
                "{activeTestimonial.quote}"
              </p>
              <div className="tm-quote-author">
                <div className="tm-author-company-badge">
                  {activeTestimonial.companyLogo}
                </div>
                <div>
                  <h4>{activeTestimonial.name}</h4>
                  <p>{activeTestimonial.role}, <span className="tm-author-company-name">{activeTestimonial.company}</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Image and Stats */}
          <div className="tm-col-2">
            <div className="tm-image-card">
              <img src="/assets/product-3.jpg" alt="Steel mill loading dock" className="tm-img-bg" />
              <div className="tm-img-overlay">
                <p className="tm-img-year">// 2005-2K26 //</p>
                <div className="tm-logo-text">50stars</div>
              </div>
            </div>
            
            <div className="tm-stats-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div className="tm-stat-item" style={{ padding: '0.75rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2px' }}><AnimatedNumber value={98} />%</h3>
                <p style={{ fontSize: '0.75rem' }}>On-time delivery</p>
              </div>
              <div className="tm-stat-item" style={{ padding: '0.75rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2px' }}><AnimatedNumber value={250000} />+</h3>
                <p style={{ fontSize: '0.75rem' }}>Tons procured</p>
              </div>
              <div className="tm-stat-item" style={{ padding: '0.75rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2px' }}><AnimatedNumber value={120} />+</h3>
                <p style={{ fontSize: '0.75rem' }}>Global partners</p>
              </div>
              <div className="tm-stat-item" style={{ padding: '0.75rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2px' }}><AnimatedNumber value={9} />+</h3>
                <p style={{ fontSize: '0.75rem' }}>Product categories</p>
              </div>
            </div>
          </div>

          {/* Column 3: Support Card */}
          <div className="tm-card tm-col-3 tm-support-card">
            <div className="tm-support-shadow">
              <img src="/assets/support-shadow.svg" alt="Shadow" />
            </div>
            <div className="tm-support-content">
              <img src="/assets/support-icon.svg" alt="Support" className="tm-support-icon" />
              <h4 className="tm-support-title">Need help selecting the right steel grade, profile, or sourcing strategy?</h4>
              <p className="tm-support-desc">We're ready with product specs, certification guidance, and sourcing support at every stage.</p>
              
              <a href="/contact" className="btn-white-solid tm-support-btn" onClick={(e) => navigateTo(e, '/contact')}>
                <span className="btn-ws-text">Contact Support</span>
                <span className="btn-ws-icon">
                  <img src="/assets/icon-arrow.svg" alt="Arrow" />
                </span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
