import React from 'react';
import './ServicesSection.css';

const servicesData = [
  {
    id: 1,
    icon: '/assets/service-icon-1.svg',
    image: '/assets/service-1.jpg',
    title: 'Light & Medium Fabrication',
    features: [
      'Partner-fabricated components for structural, architectural, and equipment applications',
      'Cutting, forming, welding, and finishing coordinated across a vetted shop network',
      'Capacity scaling from single-piece prototypes to production runs'
    ]
  },
  {
    id: 2,
    icon: '/assets/service-icon-2.svg',
    image: '/assets/service-2.jpg',
    title: 'Reactor Internals',
    features: [
      'Precision-fabricated internals sourced through certified pressure-vessel and process-equipment partners',
      'Material traceability and code compliance (ASME, etc.) maintained through the partner network',
      'Coordination for trays, baffles, supports, and other internals to project spec'
    ]
  },
  {
    id: 3,
    icon: '/assets/service-icon-3.svg',
    image: '/assets/service-3.jpg',
    title: 'Hardware & Fasteners',
    features: [
      'Structural bolts, anchors, and specialty fasteners sourced to project spec and grade',
      'Bulk and just-in-time supply coordinated to construction schedule',
      'Certified material and mill test documentation on request'
    ]
  },
  {
    id: 4,
    icon: '/assets/service-icon-4.svg',
    image: '/assets/service-4.jpg',
    title: 'Structural Steel & Materials Sourcing',
    features: [
      'Global mill sourcing across every major steel-producing region',
      'Grade and spec matching to project engineering requirements',
      'Volume pricing coordinated across a vetted supplier network'
    ]
  }
];

const checkIcon = '/assets/icon-check.svg';
const arrowIcon = '/assets/icon-arrow.svg';
const ctaBg = '/assets/services-cta-bg.png';

const ServicesSection: React.FC = () => {
  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        
        {/* Header */}
        <div className="services-header">
          <div className="sh-left">
            <div className="pill-who-we-are">
              <div className="pill-gradient-square"></div>
              <span className="pill-text">What we do</span>
            </div>
            <h2 className="services-title">
              End-to-end procurement, <span className="text-orange">engineering</span>, and logistics, rather than just a steel quote
            </h2>
          </div>
          <div className="sh-right">
            <a href="/services" className="btn-learn-more" onClick={(e) => navigateTo(e, '/services')}>
              <span className="btn-lm-text">Explore all capabilities</span>
              <span className="btn-lm-icon">
                <img src={arrowIcon} alt="Arrow" style={{ filter: 'brightness(0) invert(1)' }} />
              </span>
            </a>
          </div>
        </div>

        {/* Services List */}
        <div className="services-list">
          {servicesData.map((service) => (
            <div className="service-row" key={service.id}>
              
              {/* Icon & Image */}
              <div className="sr-visuals">
                <img src={service.icon} alt="Service Icon" className="sr-icon" />
                <div className="sr-image-wrap">
                  <img src={service.image} alt={service.title} />
                </div>
              </div>
              
              {/* Content */}
              <div className="sr-content">
                <h3 className="sr-title">{service.title}</h3>
                
                <div className="sr-features-block">
                  <p className="sr-features-label">Features</p>
                  <ul className="sr-features-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <img src={checkIcon} alt="Check" className="feature-check" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Action Button */}
              <div className="sr-action">
                <button className="btn-icon-orange" onClick={(e) => navigateTo(e, '/services')}>
                  <img src={arrowIcon} alt="Go" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-cta">
          <img src={ctaBg} alt="CTA Background" className="cta-bg-image" />
          <div className="cta-content">
            <h2 className="cta-title">Ready to source your next structural steel package?</h2>
            <button className="btn-cta-white" onClick={(e) => navigateTo(e, '/contact')}>
              <span className="btn-cw-text">Schedule a Consultation</span>
              <span className="btn-cw-icon">
                <img src={arrowIcon} alt="Arrow" />
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
