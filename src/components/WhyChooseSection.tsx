import React from 'react';
import './WhyChooseSection.css';

import { partners } from '../assets/PartnerLogos';

const WhyChooseSection: React.FC = () => {
  return (
    <section className="why-choose-section" id="why-choose">

      {/* Top Ticker */}
      <div className="wc-ticker-wrap">
        <div className="wc-ticker">
          {/* Double the list for seamless infinite scroll */}
          {[...partners, ...partners].map((partner, idx) => (
            <div className="wc-client-logo" key={idx} title={`${partner.name} — ${partner.location}`}>
              {partner.logo}
            </div>
          ))}
        </div>
      </div>

      <div className="wc-container">

        {/* Intro Block: Why 50 Stars */}
        <div className="wc-intro-block">

          <div className="wc-intro-grid">
            <div className="wc-intro-col-left">
              <div className="pill-who-we-are" style={{ marginBottom: '1.25rem' }}>
                <div className="pill-gradient-square"></div>
                <span className="pill-text">Why 50 Stars</span>
              </div>
              <h2 className="wc-main-title">
                One supplier. Every material. <br className="hidden-mobile" />Mill to job site.
              </h2>
              <p className="wc-lead-text">
                50 Stars isn't a broker. We're the procurement partner general contractors, EPCs, and subcontractors trust. We operate directly through our network of 20+ specialized partnering firms including Kobe Steel, Ltd., Kardemir, ThyssenKrupp Steel, and others to get your structural sourcing, custom fabrication, and logistics done seamlessly and on time.
              </p>
            </div>
            <div className="wc-intro-col-right">
              <h4 className="wc-network-title">Global Partner Network</h4>
              <ul className="wc-network-list">
                <li>
                  <strong className="wc-network-country">Japan</strong>: precision structural steel and specialty alloys
                </li>
                <li>
                  <strong className="wc-network-country">Singapore</strong>: regional sourcing and logistics hub for Southeast Asia
                </li>
                <li>
                  <strong className="wc-network-country">Turkey</strong>: competitive structural steel with strong export infrastructure
                </li>
                <li>
                  <strong className="wc-network-country">Philippines</strong>: fabrication and cost-competitive supply
                </li>
                <li>
                  <strong className="wc-network-country">Europe</strong>: premium-grade steel and compliance-certified materials
                </li>
              </ul>

              <div className="wc-network-callout">
                <p>
                  Combined with our in-house fabrication coordination, this network means 50 Stars can source, certify, fabricate, and deliver directly, without you managing five different vendor relationships.
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default WhyChooseSection;

