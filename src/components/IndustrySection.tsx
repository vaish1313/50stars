import React, { useState } from 'react';
import './IndustrySection.css';

const industries = [
  {
    id: 'industrial',
    tabLabel: 'Industrial & Heavy',
    title: 'Industrial & Heavy Construction',
    description: 'Certified structural steel and materials packages built for large-scale, mission-critical projects, with full material traceability.',
    icon: '/assets/icon-aerospace.svg',
    image: '/assets/industry_industrial.png',
    features: [
      'Full mill test certificate traceability',
      'Multi-standard certification (ASTM/AISC/EN)',
      'Split-sourcing for critical long-lead components'
    ]
  },
  {
    id: 'datacenters',
    tabLabel: 'Data Centers',
    title: 'Data Centers & Advanced Technology',
    description: 'Sourcing for fast-track hyperscale and co-location builds, coordinating heavy framing, composite metal decking, and support steel.',
    icon: '/assets/icon-aerospace.svg',
    image: '/assets/industry_datacenters.png',
    features: [
      'Just-In-Time site delivery sequencing',
      'Multi-origin supply tracking',
      'High-strength structural columns'
    ]
  },
  {
    id: 'energy',
    tabLabel: 'Power & Energy',
    title: 'Power, Energy & Utilities',
    description: 'Materials engineered for extreme loads and harsh corrosion profiles in substations, solar arrays, wind towers, and power plants.',
    icon: '/assets/icon-aerospace.svg',
    image: '/assets/industry_energy.png',
    features: [
      'Corrosion-resistant weathering steel',
      'Heavy plate girder sourcing',
      'Strict certificate compliance checking'
    ]
  },
  {
    id: 'oilgas',
    tabLabel: 'Oil & Gas',
    title: 'Oil, Gas & Petrochemical',
    description: 'Highly traceable structural components for offshore platforms, pipe racks, refineries, and petrochemical storage facilities.',
    icon: '/assets/icon-aerospace.svg',
    image: '/assets/industry_oilgas.png',
    features: [
      'ASTM A500 CHS/H-piles',
      'Full EN 10204 3.1 certification',
      'Special alloy structural components'
    ]
  },
  {
    id: 'warehousing',
    tabLabel: 'Warehousing & Logistics',
    title: 'Warehousing & Logistics',
    description: 'Optimized joists, trusses, columns, and metal decking designed to deliver cost-effective long-span configurations.',
    icon: '/assets/icon-aerospace.svg',
    image: '/assets/industry_warehousing.png',
    features: [
      'Value-engineered section designs',
      'Steel Joist Institute (SJI) spec matching',
      'Vendor-managed staging and inventory'
    ]
  },
  {
    id: 'bridges',
    tabLabel: 'Bridges & Civil',
    title: 'Bridges & Civil Infrastructure',
    description: 'Heavy-duty structural plates, built-up members, and custom connection hardware certified for civil works.',
    icon: '/assets/icon-aerospace.svg',
    image: '/assets/industry_bridges.png',
    features: [
      'Chain-of-custody documentation',
      'DOT compliance verification',
      'Third-party inspection reports'
    ]
  }
];

const IndustrySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(industries[0].id);

  const currentIndustry = industries.find(ind => ind.id === activeTab) || industries[0];

  return (
    <section className="industry-section" id="industry">
      
      {/* Background Noise & Floating Images */}
      <div className="is-bg-noise" style={{ backgroundImage: 'url(/assets/bg-noise.gif)' }}></div>
      <img src="/assets/float-1.png" alt="" className="float-img float-1" />
      <img src="/assets/float-2.png" alt="" className="float-img float-2" />
      <img src="/assets/float-3.png" alt="" className="float-img float-3" />
      <img src="/assets/float-4.png" alt="" className="float-img float-4" />
      <img src="/assets/float-5.png" alt="" className="float-img float-5" />

      {/* Grid Lines Overlay */}
      <div className="is-grid-lines">
        <div className="is-line"></div>
        <div className="is-line"></div>
        <div className="is-line"></div>
        <div className="is-line"></div>
        <div className="is-line" style={{ borderRight: '1px dashed rgba(0,0,0,0.05)' }}></div>
      </div>

      <div className="industry-container">
        
        {/* Header */}
        <div className="industry-header">
          <div className="pill-who-we-are" style={{ margin: '0 auto 1.5rem auto' }}>
            <div className="pill-gradient-square"></div>
            <span className="pill-text">Build for every industry</span>
          </div>
          <h2 className="industry-title">
            Structural steel and materials <span className="text-orange">procurement</span> for every sector
          </h2>
        </div>

        {/* Content Area */}
        <div className="industry-content">
          
          {/* Tabs List */}
          <div className="industry-tabs">
            {industries.map((ind) => (
              <button
                key={ind.id}
                className={`industry-tab ${activeTab === ind.id ? 'active' : ''}`}
                onClick={() => setActiveTab(ind.id)}
              >
                {ind.tabLabel}
              </button>
            ))}
          </div>

          {/* Active Panel */}
          <div className="industry-panel">
            <div className="panel-inner" key={activeTab}>
              
              <div className="panel-image-wrap">
                <img src={currentIndustry.image} alt={currentIndustry.title} />
              </div>
              
              <div className="panel-content">
                <div className="pc-top">
                  <div className="pc-icon">
                    <img src={currentIndustry.icon} alt="Icon" />
                  </div>
                  <h4 className="pc-title">{currentIndustry.title}</h4>
                  <p className="pc-desc">{currentIndustry.description}</p>
                </div>
                
                <div className="pc-bottom">
                  <ul className="pc-features">
                    {currentIndustry.features.map((feature, idx) => (
                      <li key={idx}>
                        <img src="/assets/icon-check.svg" alt="Check" className="feature-check" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
