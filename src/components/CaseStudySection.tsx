import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './CaseStudySection.css';
import { partners } from '../assets/PartnerLogos';

const blogs = [
  {
    id: 1,
    partnerId: 'kobesteel',
    title: 'Global Steel Supply Chains: Sourcing & Logistical Resilience',
    description: "Utility and infrastructure projects run on steel — see what's shaping global sourcing today, from trade regulations to logistics resilience that holds up under pressure.",
    stat: '01',
    scope: '6 Min Read',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    partnerId: 'kardemir',
    title: 'Vetting Foreign Steel: Quality Testing & Compliance',
    description: 'Vetting and importing plate steel requires strict compliance checks. A deep dive into Mill Test Reports (MTRs) and third-party inspection certifications.',
    stat: '02',
    scope: '5 Min Read',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    partnerId: 'thyssenkrupp',
    title: 'Innovations in High-Rise Structural Steel Fabrication',
    description: 'How modular structural design and pre-assembly steel connections are accelerating commercial and residential skyscraper development.',
    stat: '03',
    scope: '8 Min Read',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    partnerId: 'samuel',
    title: 'Multi-Location Inventory Models for Complex Logistics',
    description: 'Analyzing just-in-time delivery models for hyperscale tech projects, coordinating between Canadian parent facilities and multiple US distribution yards.',
    stat: '04',
    scope: '7 Min Read',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    partnerId: 'cives',
    title: 'Coordinating Multi-Plant Steel Fabrication on Megaprojects',
    description: 'Managing capacity and quality control across multiple regional fabrication plants to keep nationwide civil infrastructure builds on-track.',
    stat: '05',
    scope: '6 Min Read',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80'
  }
];

const CaseStudySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === blogs.length - 1 ? 0 : prev + 1));
  };

  const activeBlog = blogs[currentIndex];
  const activePartner = partners.find(p => p.id === activeBlog.partnerId) || partners[0];

  return (
    <section className="case-study-section" id="case-study">
      <div className="cs-container">

        {/* Header */}
        <div className="cs-header">
          <div className="cs-header-left">
            <div className="pill-who-we-are">
              <div className="pill-gradient-square"></div>
              <span className="pill-text">Blogs & Insights</span>
            </div>
            <h2 className="cs-title">
              Industry <span className="text-orange">insights</span> &amp; partner expertise
            </h2>
          </div>
          <div className="cs-header-controls">
            <button className="btn-slider-nav" onClick={handlePrev} aria-label="Previous blog article">
              <ArrowLeft size={20} strokeWidth={1.5} />
            </button>
            <button className="btn-slider-nav" onClick={handleNext} aria-label="Next blog article">
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Slider Content */}
        <div className="cs-slider-window">
          <div className="cs-slide active">

            <div className="cs-left-block">
              <div className="cs-shadow-bg">
                <img src="/assets/case-shadow.png" alt="Glow Shadow" />
              </div>

              <div className="cs-left-top">
                <h3 className="cs-card-title">{activeBlog.title}</h3>
                <p className="cs-card-desc">{activeBlog.description}</p>
              </div>

              <div className="cs-left-bottom">
                <div className="cs-stats">
                  <h4 className="cs-stat-number">{activeBlog.stat}</h4>
                  <p className="cs-stat-label">{activeBlog.scope}</p>
                </div>
                <a href="/contact" className="btn-view-case" onClick={(e) => navigateTo(e, '/contact')}>
                  <span className="btn-vc-text">Read Article</span>
                  <span className="btn-vc-icon">
                    <img src="/assets/icon-arrow.svg" alt="Arrow" />
                  </span>
                </a>
              </div>
            </div>

            <div className="cs-right-block">
              <div className="cs-client-logo">
                {activePartner.logo}
              </div>
              <div className="cs-image-wrap">
                <img src={activeBlog.image} alt={activeBlog.title} />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Banner */}
        <div className="cs-bottom-banner">
          <div className="cs-banner-left">
            <div className="cs-banner-text">
              <h4 className="cs-banner-title">Stay informed with our network</h4>
              <p className="cs-banner-desc">Explore technical procurement insights, mill capacities, and trade analysis.</p>
            </div>
          </div>
          <div className="cs-banner-right">
            <a href="/contact" className="btn-contact-black" onClick={(e) => navigateTo(e, '/contact')}>
              <span className="btn-cb-text">Subscribe to insights</span>
              <span className="btn-cb-icon">
                <img src="/assets/icon-arrow.svg" alt="Arrow" style={{ filter: 'brightness(0) invert(1)' }} />
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudySection;
