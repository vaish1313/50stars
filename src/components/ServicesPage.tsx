import React, { useState } from 'react';
import './ServicesPage.css';
import ReactorVideoSection from './ReactorVideoSection';

const ServicesPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = formData.name.trim() !== '' && formData.email.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', inquiry: '', message: '' });
      }, 3000);
    }
  };

  const services = [
    {
      title: "Light & Medium Fabrication",
      description: "Partner-fabricated components for structural, architectural, and equipment applications. Cutting, forming, welding, and finishing coordinated across a vetted shop network with capacity scaling from single-piece prototypes to production runs.",
      image: "/assets/service-1.jpg",
      link: "/contact"
    },
    {
      title: "Reactor Internals",
      description: "Precision-fabricated internals sourced through certified pressure-vessel and process-equipment partners. Material traceability and code compliance (ASME, etc.) maintained for trays, baffles, supports, and custom project specs.",
      image: "/assets/service-2.jpg",
      link: "/contact"
    },
    {
      title: "Hardware & Fasteners",
      description: "Structural bolts, anchors, and specialty fasteners sourced to project spec and grade. Bulk and just-in-time supply coordinated to construction schedule with certified material and mill test documentation on request.",
      image: "/assets/service-3.jpg",
      link: "/contact"
    },
    {
      title: "Structural Steel & Materials Sourcing",
      description: "Global mill sourcing across every major steel-producing region. Grade and spec matching to project engineering requirements with volume pricing coordinated across a vetted supplier network.",
      image: "/assets/service-4.png",
      link: "/contact"
    }
  ];

  const faqItems = [
    {
      question: "How do you ensure material quality and standard compliance?",
      answer: "Every shipment is delivered with full mill test certificates (MTC) and chain-of-custody documentation, matched to the ASTM, AISC, EN, or other regional standards your project requires."
    },
    {
      question: "What is your pricing model for steel procurement?",
      answer: "We charge a flat $10 per metric ton procurement fee. You see the mill price and you see our fee, and there are no hidden markups or inflated service charges."
    },
    {
      question: "Can you manage custom cutting and drilling before shipping?",
      answer: "Yes, we coordinate with pre-qualified fabrication partners to manage custom cutting, drilling, galvanizing, and pre-assembly to deliver site-ready steel packages."
    },
    {
      question: "What logistics and shipping capabilities do you offer?",
      answer: "We handle flat rack, breakbulk, standard containers, and out-of-gauge (OOG) cargo, including port-to-port shipping, customs clearance, and just-in-time delivery to site."
    },
    {
      question: "What industries do you supply structural steel to?",
      answer: "We serve data centers, power/energy utilities, oil & gas installations, heavy manufacturing, warehousing logistics hubs, and bridges & civil infrastructure builds."
    }
  ];

  return (
    <div className="services-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="services-hero-section">
        <div className="services-hero-container">
          <div className="services-page-title">
            <h1>Our services</h1>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID SECTION (Includes CTA banner below services list) */}
      <section className="services-grid-section">
        <div className="services-grid-container">
          <div className="services-cards-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card-item">
                <a href={service.link} className="service-card-link">
                  {/* Hover icon pill */}
                  <div className="service-card-hover-icon">
                    <div className="hover-icon-wrapper">
                      <img src="/assets/service-arrow.svg" alt="Arrow" />
                    </div>
                  </div>
                  
                  {/* Card Image */}
                  <div className="service-card-image-box">
                    <img src={service.image} alt={service.title} className="service-card-photo" />
                  </div>
                  
                  {/* Card Info */}
                  <div className="service-card-info">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Reactor Internals Video Demonstration */}
          <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
            <ReactorVideoSection />
          </div>

          {/* CTA Banner right below services grid */}
          {/* CTA Banner right below services grid */}
          <div className="services-page-cta">
            <div className="services-cta-banner">
              <div className="cta-banner-bg" style={{ backgroundImage: 'url("/assets/services-cta-bg.png")' }}></div>
              <div className="cta-banner-content">
                <h2>Ready to source your next structural steel package?</h2>
                <div className="cta-banner-button-wrap">
                  <a href="/contact" className="btn-cta-schedule" onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/contact');
                    window.dispatchEvent(new Event('popstate'));
                  }}>
                    <span className="btn-cta-text">Schedule a Consultation</span>
                    <span className="btn-cta-icon-box">
                      <img src="/assets/services-btn-icon.svg" alt="Arrow icon" className="btn-cta-icon-img" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Grid Lines & Noise */}
        <div className="services-bg-overlay">
          <div className="services-bg-grid">
            <div className="services-bg-grid-lines">
              <div className="services-grid-line"></div>
              <div className="services-grid-line"></div>
              <div className="services-grid-line"></div>
              <div className="services-grid-line hidden-tablet"></div>
              <div className="services-grid-line hidden-mobile"></div>
            </div>
          </div>
          <div className="services-noise-overlay" style={{ backgroundImage: 'url("/assets/about-noise.gif")' }}></div>
        </div>
      </section>

      {/* 3. FAQ SECTION (Plain White Background) */}
      <section className="services-faq-section">
        <div className="services-faq-container">
          {/* Header Title Part */}
          <div className="services-faq-header">
            <div className="services-faq-badge">
              <div className="badge-gradient-square"></div>
              <span className="badge-text">Common questions</span>
            </div>
            
            <h2 className="services-faq-title">Frequently asked questions</h2>
          </div>
          
          {/* Accordion List */}
          <div className="services-faq-accordion-list">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="services-faq-accordion-item"
                  data-open={isOpen}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-item-question-row" tabIndex={0} role="button" aria-expanded={isOpen}>
                    <h3>{item.question}</h3>
                    <div className="faq-item-icon">
                      <div className="faq-icon-line horizontal"></div>
                      <div className="faq-icon-line vertical"></div>
                    </div>
                  </div>
                  
                  <div className="faq-item-answer-row">
                    <div className="faq-item-answer-content">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CONTACT CTA SECTION (Dark factory backdrop form) */}
      <section className="services-contact-section">
        <div className="services-contact-container">
          <div className="services-contact-content">
            {/* Header info */}
            <div className="services-contact-header">
              <div className="services-contact-badge">
                <div className="badge-gradient-square"></div>
                <span className="badge-text">Get in touch</span>
              </div>
              
              <h2 className="services-contact-title">
                Start your <span className="text-orange">certified</span> procurement journey
              </h2>
            </div>

            {/* Form */}
            <form className="services-contact-form" onSubmit={handleSubmit}>
              {isSubmitted ? (
                <div className="form-success-message">
                  <h3>Thank you!</h3>
                  <p>Your details have been submitted successfully. We will get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <div className="form-fields-grid">
                    {/* Name input */}
                    <label className="form-field-label name-field">
                      <span className="field-title">Name*</span>
                      <div className="field-input-wrapper">
                        <input 
                          type="text" 
                          required 
                          name="name" 
                          placeholder="Enter your name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-text-input" 
                        />
                      </div>
                    </label>

                    {/* Email input */}
                    <label className="form-field-label email-field">
                      <span className="field-title">Email*</span>
                      <div className="field-input-wrapper">
                        <input 
                          type="email" 
                          required 
                          name="email" 
                          placeholder="Enter your email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-text-input" 
                        />
                      </div>
                    </label>

                    {/* Inquiry input */}
                    <label className="form-field-label inquiry-field">
                      <span className="field-title">Inquiry</span>
                      <div className="field-input-wrapper">
                        <input 
                          type="text" 
                          name="inquiry" 
                          placeholder="Enter inquiry details" 
                          value={formData.inquiry}
                          onChange={handleInputChange}
                          className="form-text-input" 
                        />
                      </div>
                    </label>

                    {/* Message input */}
                    <label className="form-field-label message-field">
                      <span className="field-title">Message</span>
                      <div className="field-input-wrapper">
                        <textarea 
                          name="message" 
                          placeholder="Tell us about your project" 
                          value={formData.message}
                          onChange={handleInputChange}
                          className="form-textarea-input"
                        ></textarea>
                      </div>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="form-submit-wrapper">
                    <button 
                      type="submit" 
                      className={`btn-form-submit ${isFormValid ? 'active' : 'disabled'}`}
                      disabled={!isFormValid}
                    >
                      <span className="submit-btn-text">Send your details</span>
                    </button>
                  </div>

                  {/* Anti-spam hidden inputs */}
                  <input type="text" name="website" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: 'absolute', transform: 'scale(0)' }} readOnly />
                  <input type="text" name="company" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: 'absolute', transform: 'scale(0)' }} readOnly />
                </>
              )}
            </form>
          </div>
        </div>

        {/* Backdrop images */}
        <div className="services-contact-bg-wrapper">
          <img src="/assets/service-1.jpg" alt="Factory Backdrop" className="services-contact-bg-img" />
          <div className="services-contact-bg-overlay"></div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
