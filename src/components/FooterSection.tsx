import React from 'react';
import './FooterSection.css';

const FooterSection: React.FC = () => {
  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <footer className="footer-section">

      {/* Background Glow */}
      <div className="ft-shadow ft-shadow-left">
        <img src="/assets/footer-shadow.svg" alt="Shadow" />
      </div>
      <div className="ft-shadow ft-shadow-right">
        <img src="/assets/footer-shadow.svg" alt="Shadow" />
      </div>

      <div className="ft-container">

        <div className="ft-top">

          {/* Col 1: Stay Connected */}
          <div className="ft-col ft-col-1">
            <h3 className="ft-col-title">Stay connected</h3>
            <p className="ft-col-desc">
              Get sourcing tips, market updates, and project highlights from the global steel supply chain.
            </p>
            <form className="ft-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required className="ft-input" />
              <button type="submit" className="ft-submit">
                <img src="/assets/icon-arrow-dark.svg" alt="Submit" />
              </button>
            </form>
          </div>

          <div className="ft-col ft-col-2">
            <h3 className="ft-col-title">Links</h3>
            <div className="ft-links-wrap">
              <ul className="ft-link-list">
                <li><a href="/" onClick={(e) => navigateTo(e, '/')}>Home</a></li>
                <li><a href="/about" onClick={(e) => navigateTo(e, '/about')}>About</a></li>
                <li><a href="/services" onClick={(e) => navigateTo(e, '/services')}>Services</a></li>
              </ul>
              <ul className="ft-link-list">
                <li><a href="/products" onClick={(e) => navigateTo(e, '/products')}>Products</a></li>
                <li><a href="/contact" onClick={(e) => navigateTo(e, '/contact')}>Contact</a></li>
                <li><a href="/contact" onClick={(e) => navigateTo(e, '/contact')}>Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Col 3: Contact info */}
          <div className="ft-col ft-col-3">
            <h3 className="ft-col-title">Contact info</h3>
            <ul className="ft-link-list">
              <li><a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Corporate Office: Santa Clara, CA</a></li>
              <li><a href="tel:+14155550167">+1 (415) 555-0167</a></li>
              <li><a href="mailto:procure@50stars.com">procure@50stars.com</a></li>
            </ul>
          </div>

          {/* Col 4: Working hours */}
          <div className="ft-col ft-col-4">
            <h3 className="ft-col-title">Working hours</h3>
            <ul className="ft-text-list">
              <li>Mon to Fri: 8:00am - 4:00pm</li>
              <li>Saturday: 8:00am - 1:00pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

        </div>

        <div className="ft-divider"></div>

        <div className="ft-bottom">
          {/* <div className="ft-copyright">
            <p>Developed by <a href="https://riaanattar.me" target="_blank" rel="noreferrer">Riaan Attar</a> From <a href="https://thebootstack.io" target="_blank" rel="noreferrer">THEBOOTSTACK.IO</a></p>
          </div> */}

          <div className="ft-socials">
            <a href="#" className="ft-social-link">
              <img src="/assets/icon-facebook.svg" alt="Facebook" />
              <span>Facebook</span>
            </a>
            <a href="#" className="ft-social-link">
              <img src="/assets/icon-instagram.svg" alt="Instagram" />
              <span>Instagram</span>
            </a>
            <a href="#" className="ft-social-link">
              <img src="/assets/icon-twitter.svg" alt="Twitter" />
              <span>Twitter</span>
            </a>
          </div>
        </div>

        {/* Big Logo */}
        <div className="ft-big-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
          <img src="/assets/50stars-logo.png" alt="50stars Logo" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
          <span>50stars</span>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
