import React, { useState } from 'react';
import './ProductsPage.css';
import { productsData, productCategories } from '../data/productsData';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');

  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  const filteredProducts = selectedCategory === 'All Products'
    ? productsData
    : productsData.filter(p => p.category === selectedCategory);

  return (
    <div className="products-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="products-hero-section">
        <div className="products-hero-container">
          <div className="products-hero-top">
            <div className="products-hero-left">
              {/* Badge */}
              <div className="products-badge">
                <div className="badge-gradient-square"></div>
                <span className="badge-text">What we procure</span>
              </div>
              {/* Title */}
              <h1 className="products-hero-title">
                Certified <span className="text-orange">products</span> delivered to your job site
              </h1>
            </div>

            <div className="products-hero-right">
              {/* Contact Button */}
              <a href="/contact" className="products-hero-btn" onClick={(e) => navigateTo(e, '/contact')}>
                <span className="btn-text">Contact now</span>
                <span className="btn-icon-box">
                  <img src="/assets/services-btn-icon.svg" alt="Arrow" />
                </span>
              </a>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="products-category-tabs">
            {productCategories.map((cat) => (
              <button
                key={cat}
                className={`products-cat-tab ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 2. PRODUCTS GRID CATALOG */}
          <div className="products-grid-catalog">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-catalog-card">
                <div className="product-card-top">
                  <span className="product-category-pill">{product.category}</span>
                  <h2 className="product-card-title">{product.title}</h2>
                  <div className="product-image-container">
                    <img src={product.image} alt={product.title} className="product-card-photo" />
                  </div>
                  <p className="product-card-overview">{product.overview}</p>
                </div>

                <div className="product-card-bottom">
                  <div className="product-spec-row">
                    <span className="spec-label">Standard</span>
                    <span className="spec-value">{product.standard}</span>
                  </div>
                  <div className="product-spec-divider"></div>
                  <div className="product-spec-row">
                    <span className="spec-label">Sourcing</span>
                    <span className="spec-value">{product.sourcing}</span>
                  </div>
                  <div className="product-spec-divider"></div>
                  <a
                    href="/contact"
                    className="btn-product-inquire"
                    onClick={(e) => navigateTo(e, '/contact')}
                  >
                    <span>Inquire for Specs</span>
                    <img src="/assets/icon-arrow.svg" alt="Arrow" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Spec Note Footer */}
          <div className="products-spec-note-wrap" style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#151515', borderRadius: '6px', borderLeft: '4px solid var(--color-orange)' }}>
            <p style={{ color: '#c5c1c0', fontSize: '0.9rem', lineHeight: '1.6', fontStyle: 'italic', margin: 0 }}>
              <strong>Spec note:</strong> every item shipped with full mill test certificates (MTC) and chain-of-custody documentation, matched to the ASTM/AISC/EN/ASME standard your project requires.
            </p>
          </div>

          {/* 3. BOTTOM CTA BANNER */}
          <div className="products-cta-banner-wrapper">
            <div className="products-cta-banner" style={{ backgroundImage: 'url("/assets/products-cta-bg.png")' }}>
              <div className="products-cta-content">
                <h2>Custom order inquiry</h2>
                <p>
                  Looking for a structural member or specialty steel grade not listed here? Send us your project drawings and custom specifications, and our engineering team will review them.
                </p>
              </div>
              
              <div className="products-cta-action">
                <a href="/contact" className="btn-products-cta" onClick={(e) => navigateTo(e, '/contact')}>
                  <span className="btn-cta-text">Send request</span>
                  <span className="btn-cta-icon-box">
                    <img src="/assets/services-btn-icon.svg" alt="Arrow" />
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Background Grid Lines & Noise */}
        <div className="products-bg-overlay">
          <div className="products-bg-grid">
            <div className="products-bg-grid-lines">
              <div className="products-grid-line"></div>
              <div className="products-grid-line"></div>
              <div className="products-grid-line"></div>
              <div className="products-grid-line hidden-tablet"></div>
              <div className="products-grid-line hidden-mobile"></div>
            </div>
          </div>
          <div className="products-noise-overlay" style={{ backgroundImage: 'url("/assets/about-noise.gif")' }}></div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
