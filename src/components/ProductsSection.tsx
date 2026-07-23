import React from 'react';
import './ProductsSection.css';
import AnimatedNumber from './AnimatedNumber';
import { productsData } from '../data/productsData';

const ProductsSection: React.FC = () => {
  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <section className="products-section" id="products">
      {/* Background shadow image at the top */}
      <div className="ps-bg-shadow">
        <img src="/assets/product-bg-shadow.png" alt="Background Shadow" />
      </div>

      <div className="ps-container">
        {/* Header */}
        <div className="ps-header">
          <div className="pill-who-we-are">
            <div className="pill-gradient-square"></div>
            <span className="pill-text" style={{ color: 'var(--color-white)' }}>What we procure</span>
          </div>

          <div className="ps-header-content">
            <h2 className="ps-counter">
              <AnimatedNumber value={21} /><span className="text-orange">+</span>
            </h2>
            <p className="ps-subtitle">
              Certified product categories delivered to job sites across industries and continents.
            </p>
          </div>
        </div>

        {/* Big Diagram */}
        <div className="ps-diagram-container">
          <img src="/assets/product-diagram.svg" alt="Product exploded view" className="ps-diagram" />
        </div>

        {/* Product Marquee (Sliding Left to Right) */}
        <div className="ps-marquee-container">
          <div className="ps-marquee-track">
            {/* Loop 1 */}
            {productsData.map((product) => (
              <div className="ps-card" key={`loop1-${product.id}`}>
                <span className="product-category-pill">{product.category}</span>
                <h3 className="ps-card-title">{product.title}</h3>
                <div className="ps-card-image-wrap">
                  <img src={product.image} alt={product.title} />
                </div>

                <div className="ps-specs-list">
                  <div className="ps-spec-row">
                    <span className="ps-spec-label">Standard</span>
                    <span className="ps-spec-value">{product.standard}</span>
                  </div>
                  <div className="ps-divider"></div>
                  <div className="ps-spec-row">
                    <span className="ps-spec-label">Sourcing</span>
                    <span className="ps-spec-value">{product.sourcing}</span>
                  </div>
                </div>
              </div>
            ))}
            {/* Loop 2 */}
            {productsData.map((product) => (
              <div className="ps-card" key={`loop2-${product.id}`}>
                <span className="product-category-pill">{product.category}</span>
                <h3 className="ps-card-title">{product.title}</h3>
                <div className="ps-card-image-wrap">
                  <img src={product.image} alt={product.title} />
                </div>

                <div className="ps-specs-list">
                  <div className="ps-spec-row">
                    <span className="ps-spec-label">Standard</span>
                    <span className="ps-spec-value">{product.standard}</span>
                  </div>
                  <div className="ps-divider"></div>
                  <div className="ps-spec-row">
                    <span className="ps-spec-label">Sourcing</span>
                    <span className="ps-spec-value">{product.sourcing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="ps-footer">
          <h2 className="ps-footer-title">
            Explore our complete product<br />range across industries.
          </h2>
          <div className="ps-footer-actions">
            <a href="/assets/about-brochure.pdf" download className="btn-download-white">
              Download Brochure
              <img src="/assets/icon-download.svg" alt="Download" />
            </a>

            <a href="/products" className="btn-orange-solid" onClick={(e) => navigateTo(e, '/products')}>
              <span className="btn-os-text">View all products</span>
              <span className="btn-os-icon">
                <img src="/assets/icon-arrow.svg" alt="Arrow" />
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;
