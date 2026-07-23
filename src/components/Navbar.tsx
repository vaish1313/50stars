import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Track page path for route highlighting
  const currentPath = window.location.pathname;
  const isAboutPage = currentPath === '/about' || currentPath.endsWith('/about');
  const isServicesPage = currentPath === '/services' || currentPath.endsWith('/services');
  const isProductsPage = currentPath === '/products' || currentPath.endsWith('/products');
  const isContactPage = currentPath === '/contact' || currentPath.endsWith('/contact');

  const isHomeActive = !isAboutPage && !isServicesPage && !isProductsPage && !isContactPage;

  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer' }} onClick={(e) => navigateTo(e, '/')}>
          <img src="/assets/50stars-logo.png" alt="50stars Logo" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
          <div className="navbar-logo" style={{ lineHeight: '1', fontSize: '1.75rem', fontWeight: '800', letterSpacing: '-0.5px' }}>50stars</div>
        </div>
        
        <nav className="navbar-links">
          <a 
            href="/" 
            className={`nav-link ${isHomeActive ? 'active' : ''}`}
            onClick={(e) => navigateTo(e, '/')}
          >
            {isHomeActive && <span className="dot"></span>}Home
          </a>
          <a 
            href="/about" 
            className={`nav-link ${isAboutPage ? 'active' : ''}`}
            onClick={(e) => navigateTo(e, '/about')}
          >
            {isAboutPage && <span className="dot"></span>}About
          </a>
          <a 
            href="/services" 
            className={`nav-link ${isServicesPage ? 'active' : ''}`}
            onClick={(e) => navigateTo(e, '/services')}
          >
            {isServicesPage && <span className="dot"></span>}Services
          </a>
          <a 
            href="/products" 
            className={`nav-link ${isProductsPage ? 'active' : ''}`}
            onClick={(e) => navigateTo(e, '/products')}
          >
            {isProductsPage && <span className="dot"></span>}Products
          </a>
          <a 
            href="/contact" 
            className={`nav-link ${isContactPage ? 'active' : ''}`}
            onClick={(e) => navigateTo(e, '/contact')}
          >
            {isContactPage && <span className="dot"></span>}Contact
          </a>
        </nav>
        
        <div className="navbar-action">
          <button className="btn-quote" onClick={(e) => navigateTo(e as any, '/contact')}>
            <span className="btn-text">Get a quote</span>
            <span className="btn-icon">
              <ArrowRight size={18} />
            </span>
          </button>
 
          <button className="btn-menu-toggle" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar & Backdrop */}
      <div className={`navbar-backdrop ${isMenuOpen ? 'visible' : ''}`} onClick={() => setIsMenuOpen(false)} />
      <div className={`navbar-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="navbar-logo-container" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <img src="/assets/50stars-logo.png" alt="50stars Logo" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
            <div className="navbar-logo" style={{ color: 'var(--color-white)', lineHeight: '1', fontSize: '1.75rem', fontWeight: '800' }}>50stars</div>
          </div>
          <button className="btn-sidebar-close" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav className="sidebar-links">
          <a 
            href="/" 
            className={`sidebar-link ${isHomeActive ? 'active' : ''}`}
            onClick={(e) => navigateTo(e, '/')}
          >
            Home
          </a>
          <a 
            href="/about" 
            className={`sidebar-link ${isAboutPage ? 'active' : ''}`}
            onClick={(e) => navigateTo(e, '/about')}
          >
            About
          </a>
          <a 
            href="/services" 
            className={`sidebar-link ${isServicesPage ? 'active' : ''}`}
            onClick={(e) => navigateTo(e, '/services')}
          >
            Services
          </a>
          <a 
            href="/products" 
            className={`sidebar-link ${isProductsPage ? 'active' : ''}`}
            onClick={(e) => navigateTo(e, '/products')}
          >
            Products
          </a>
          <a 
            href="/contact" 
            className={`sidebar-link ${isContactPage ? 'active' : ''}`}
            onClick={(e) => navigateTo(e, '/contact')}
          >
            Contact
          </a>
        </nav>

        <div className="sidebar-footer">
          <button className="btn-quote" style={{ width: '100%' }} onClick={(e) => navigateTo(e as any, '/contact')}>
            <span className="btn-text" style={{ flex: 1, textAlign: 'center' }}>Get a quote</span>
            <span className="btn-icon">
              <ArrowRight size={18} />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
