import React from 'react';
import './AboutSection.css';
import AnimatedNumber from './AnimatedNumber';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Top Part */}
        <div className="about-top">
          {/* Left Column */}
          <div className="about-top-left">
            <div className="pill-who-we-are">
              <div className="pill-gradient-square"></div>
              <span className="pill-text">Who we are</span>
            </div>

            <div className="about-schematic-wrap">
              <img src="/assets/steel_schematic.png" alt="Structural Steel Joint Diagram" className="about-schematic-img" />
            </div>
          </div>

          {/* Right Column */}
          <div className="about-top-right">
            <h2 className="about-title">
              Driven by standards, backed<br />by a global network, focused on<br /><span className="text-orange">certified</span> delivery
            </h2>
            <p className="about-description">
              We connect contractors and fabricators to a vetted network of mills, ports, fabricators, and freight partners spanning every major steel-producing region. Whether it's a single joist order or a full structural package for a large-scale build, we manage sourcing, certification, fabrication coordination, and logistics as one accountable process.
            </p>

            <div className="about-actions">
              <a href="/about" className="btn-learn-more" onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/about');
                window.dispatchEvent(new Event('popstate'));
              }}>
                <span className="btn-lm-text">Learn More About Us</span>
                <span className="btn-lm-icon">
                  <img src="/assets/icon-arrow.svg" alt="Arrow" style={{ filter: 'brightness(0) invert(1)' }} />
                </span>
              </a>
              <a href="/assets/about-brochure.pdf" download className="btn-download">
                Download Brochure
                <img src="/assets/about-download-icon.svg" alt="Download" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Part - Grid Cards */}
        <div className="about-bottom">

          {/* Card 1 */}
          <div className="about-card card-light">
            <div className="card-logo-text">50stars</div>
            <h2 className="card-counter text-orange"><AnimatedNumber value={150} /><span className="text-dark">+</span></h2>
            <p className="card-text text-dark">Contractors and fabricators<br />served worldwide</p>
            <div className="card-review-info">
              <div className="rating">
                <h2><AnimatedNumber value={4.7} decimals={1} /></h2>
                <p>/5.0</p>
              </div>
              <img className="review-stars" src="/assets/rating-stars-orange.svg" alt="Review Stars" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="about-card card-image">
            <img src="/assets/about-machinery.jpg" alt="Machinery" />
          </div>

          {/* Card 3 */}
          <div className="about-card card-orange">
            <div className="card-orange-content">
              {/* <p className="card-pretitle">// 2005-2K26 //</p> */}
              <h2 className="card-counter text-dark"><AnimatedNumber value={9} />+</h2>
              <p className="card-text text-light">Product categories supplied with full<br />traceability and certification.</p>
            </div>
            <img className="card-badge" src="/assets/about-badge.png" alt="Badge" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
