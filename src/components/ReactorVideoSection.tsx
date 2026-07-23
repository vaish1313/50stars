import React, { useState, useRef } from 'react';
import './ReactorVideoSection.css';

const ReactorVideoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'axial' | 'radial'>('axial');
  const videoRef = useRef<HTMLVideoElement>(null);

  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="reactor-video-section-wrapper">
      <div className="reactor-video-container">
        
        {/* Header */}
        <div className="reactor-video-header">
          <div className="pill-who-we-are">
            <div className="pill-gradient-square"></div>
            <span className="pill-text" style={{ color: 'var(--color-white)' }}>Process Equipment Demonstration</span>
          </div>
          <h2 className="reactor-video-title">
            Reactor Internals: <span className="text-orange">Axial &amp; Radial Flow</span> Systems
          </h2>
          <p className="reactor-video-subtitle">
            Precision-engineered vessel internals, distributor trays, packing supports, and flow pattern performance demonstrations.
          </p>
        </div>

        {/* Flow Pattern Tab Switcher */}
        <div className="reactor-flow-tabs">
          <button 
            className={`reactor-tab-btn ${activeTab === 'axial' ? 'active' : ''}`}
            onClick={() => setActiveTab('axial')}
          >
            <div className="tab-indicator-dot"></div>
            <span>Axial Flow Demonstration</span>
          </button>

          <button 
            className={`reactor-tab-btn ${activeTab === 'radial' ? 'active' : ''}`}
            onClick={() => setActiveTab('radial')}
          >
            <div className="tab-indicator-dot"></div>
            <span>Radial Flow Demonstration</span>
          </button>
        </div>

        {/* Main Video & Details Grid */}
        <div className="reactor-video-grid">
          
          {/* Left Column: Video Player */}
          <div className="reactor-player-card">
            <div className="reactor-video-wrapper">
              <video 
                ref={videoRef}
                key={activeTab}
                src={activeTab === 'axial' ? '/assets/axial-reactor.mp4' : '/assets/radial-reactor.mp4'} 
                poster={activeTab === 'axial' ? '/assets/service-2.jpg' : '/assets/service-3.jpg'}
                autoPlay 
                loop 
                muted
                playsInline
                className="reactor-main-video"
              />
            </div>
          </div>

          {/* Right Column: Technical Specs & Description */}
          <div className="reactor-details-card">
            <div className="reactor-details-header">
              <h3>
                {activeTab === 'axial' 
                  ? 'Axial Flow Reactor Internals & Distribution' 
                  : 'Radial Flow Reactor Internals & Center Pipe Systems'}
              </h3>
              <p>
                {activeTab === 'axial'
                  ? 'In axial flow reactors, process fluids pass top-to-bottom vertically through fixed catalyst beds. Our precision distributor trays, liquid hold-down grids, and outlet collectors ensure uniform velocity distribution across the entire bed diameter.'
                  : 'In radial flow reactors, vapor/liquid enters radially from outer scallops through the catalyst bed into a central perforated pipe. Engineered for low pressure-drop and high throughput in hydrotreating and reforming processes.'}
              </p>
            </div>

            <div className="reactor-specs-grid">
              <div className="reactor-spec-item">
                <span className="spec-label">Flow Direction</span>
                <span className="spec-value">{activeTab === 'axial' ? 'Top-to-Bottom Vertical' : 'Center-Out / Inward Radial'}</span>
              </div>
              <div className="reactor-spec-item">
                <span className="spec-label">Primary Application</span>
                <span className="spec-value">{activeTab === 'axial' ? 'Fixed-Bed Hydroprocessing' : 'CCR Reforming & Hydrotreating'}</span>
              </div>
              <div className="reactor-spec-item">
                <span className="spec-label">Pressure Drop</span>
                <span className="spec-value">{activeTab === 'axial' ? 'Standard Controlled ΔP' : 'Ultra-Low Pressure Drop'}</span>
              </div>
              <div className="reactor-spec-item">
                <span className="spec-label">Code Compliance</span>
                <span className="spec-value">ASME Sec VIII Div 1 &amp; 2</span>
              </div>
            </div>

            <div className="reactor-action-box">
              <a href="/contact" className="btn-reactor-inquire" onClick={(e) => navigateTo(e, '/contact')}>
                <span>Request Vessel Drawing &amp; Specs</span>
                <img src="/assets/icon-arrow.svg" alt="Arrow" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ReactorVideoSection;
