import React from 'react';
import './WhyGCChooseSection.css';

const WhyGCChooseSection: React.FC = () => {
  return (
    <section className="why-gc-choose-section" id="why-gc-choose">
      <div className="wgc-container">
        {/* Benefits Block: Why General Contractors Choose 50 Stars */}
        <div className="wgc-benefits-block">
          <div className="pill-who-we-are" style={{ marginBottom: '1.25rem' }}>
            <div className="pill-gradient-square"></div>
            <span className="pill-text">For GCs & EPCs</span>
          </div>
          <h3 className="wgc-section-subtitle">Why General Contractors Choose 50 Stars</h3>
          
          <div className="wgc-benefits-grid">
            <div className="wgc-benefits-left">
              {/* Card 1 */}
              <div className="wgc-benefit-card wgc-card-shortage">
                <div className="wgc-card-num-bg">01</div>
                <div className="wgc-card-header">
                  <span className="wgc-benefit-num">1</span>
                  <h4 className="wgc-benefit-title">We solve the shortage problem</h4>
                </div>
                <p className="wgc-benefit-desc">
                  US steel and materials shortages have made project timelines unpredictable. GCs are increasingly referring their subcontractors to 50 Stars because we maintain live global sourcing relationships that domestic-only suppliers can't match. When your regular mill is backlogged, we already have the alternative lined up.
                </p>
              </div>
 
              {/* Card 2 */}
              <div className="wgc-benefit-card wgc-card-pricing">
                <div className="wgc-card-num-bg">02</div>
                <div className="wgc-card-header">
                  <span className="wgc-benefit-num">2</span>
                  <h4 className="wgc-benefit-title">Better pricing, structured simply</h4>
                </div>
                <p className="wgc-benefit-desc">
                  We negotiate directly with mills and fabricators across our partner network, which means better pricing passed straight to you, rather than being layered through multiple middlemen.
                </p>
              </div>
            </div>
 
            {/* Card 3 (Pricing Tier) */}
            <div className="wgc-benefit-card wgc-card-pricing-table">
              <div className="wgc-card-num-bg">03</div>
              <div className="wgc-card-header-horizontal">
                <div className="wgc-card-header-left">
                  <span className="wgc-benefit-num">3</span>
                  <h4 className="wgc-benefit-title">Transparent flat-fee pricing</h4>
                </div>
                <p className="wgc-benefit-desc-top">
                  No hidden markups, no per-project renegotiation. Our flat-fee structure scales with your order volume:
                </p>
              </div>
 
              <div className="wgc-table-wrapper">
                <table className="wgc-pricing-table">
                  <thead>
                    <tr>
                      <th>Order Volume</th>
                      <th>Fee per Ton</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Less than 500 tons</td>
                      <td className="wgc-fee-val">$39<span className="wgc-fee-unit">/ton</span></td>
                    </tr>
                    <tr>
                      <td>500 – 1,800 tons</td>
                      <td className="wgc-fee-val">$28<span className="wgc-fee-unit">/ton</span></td>
                    </tr>
                    <tr>
                      <td>1,800 – 5,000 tons</td>
                      <td className="wgc-fee-val">$21<span className="wgc-fee-unit">/ton</span></td>
                    </tr>
                    <tr>
                      <td>Above 5,000 tons</td>
                      <td className="wgc-fee-val">$19<span className="wgc-fee-unit">/ton</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
 
              <p className="wgc-table-caption">
                The bigger the order, the lower your per-ton cost. This is built for GCs and EPCs running real project volume, not one-off buys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGCChooseSection;
