import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Airport3DSection from './components/Airport3DSection';
import ProductsSection from './components/ProductsSection';
import IndustrySection from './components/IndustrySection';
import CaseStudySection from './components/CaseStudySection';
import WhyChooseSection from './components/WhyChooseSection';
import WhyGCChooseSection from './components/WhyGCChooseSection';
import TestimonialSection from './components/TestimonialSection';
import FooterSection from './components/FooterSection';
import AboutHero from './components/AboutHero';
import ServicesPage from './components/ServicesPage';
import ProductsPage from './components/ProductsPage';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const isAboutPage = currentPath === '/about' || currentPath.endsWith('/about');
  const isServicesPage = currentPath === '/services' || currentPath.endsWith('/services');
  const isProductsPage = currentPath === '/products' || currentPath.endsWith('/products');
  const isContactPage = currentPath === '/contact' || currentPath.endsWith('/contact');

  useEffect(() => {
    const selectors = [
      '.hero-content',
      '.founder-card', '.quote-container',
      '.about-title', '.about-description', '.about-card',
      '.services-title', '.service-row', '.services-cta',
      '.ps-counter', '.ps-subtitle', '.ps-diagram-container', '.ps-card',
      '.is-title', '.is-desc', '.is-tab-btn', '.is-panel',
      '.cs-title', '.cs-slide',
      '.wc-main-title', '.wc-intro-grid',
      '.tm-title', '.tm-card', '.tm-col-2',
      '.ft-col', '.ft-bottom',
      // About page animations
      '.about-hero-badge', '.about-hero-title', '.about-hero-avatars', '.about-hero-coords',
      '.about-img-left', '.about-info-desc', '.about-info-buttons',
      '.about-journey-badge', '.about-journey-title', '.about-founder-card', '.about-story-col', '.about-caps-col',
      '.about-client-badge', '.about-client-title', '.about-client-logos', '.about-client-divider', '.about-client-awards-title', '.about-client-awards',
      '.about-video-text-top', '.about-video-text-bottom', '.about-video-wrapper',
      '.about-team-badge', '.about-team-title', '.about-team-img', '.about-team-member-row',
      // Services page animations
      '.services-page-title', '.service-card-item', '.services-page-cta',
      '.services-faq-badge', '.services-faq-title', '.services-faq-accordion-item',
      '.services-contact-badge', '.services-contact-title', '.services-contact-form',
      // Products page animations
      '.products-badge', '.products-hero-title', '.products-hero-btn', '.product-catalog-card', '.products-cta-banner',
      // Contact page animations
      '.contact-hero-title', '.contact-hero-desc', '.contact-hero-action-btn', '.contact-detail-col', '.contact-form-card', '.contact-ticker-section'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    // Short delay to ensure components are fully rendered before observing
    const timer = setTimeout(() => {
      selectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => {
          observer.observe(el);
        });
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [currentPath]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-wrapper">
      <div id="scroll-progress" className="scroll-progress-bar"></div>
      <Navbar />

      {isAboutPage ? (
        <div className="main-content-wrapper">
          <AboutHero />
          <FooterSection />
        </div>
      ) : isServicesPage ? (
        <div className="main-content-wrapper">
          <ServicesPage />
          <FooterSection />
        </div>
      ) : isProductsPage ? (
        <div className="main-content-wrapper">
          <ProductsPage />
          <FooterSection />
        </div>
      ) : isContactPage ? (
        <div className="main-content-wrapper">
          <ContactPage />
          <FooterSection />
        </div>
      ) : (
        <>
          <Hero />
          <div className="main-content-wrapper">
            <VideoSection />
            <AboutSection />
            <ServicesSection />
            <Airport3DSection />
            <ProductsSection />
            <IndustrySection />
            <CaseStudySection />
            <WhyChooseSection />
            <WhyGCChooseSection />
            <TestimonialSection />
            <FooterSection />
          </div>
        </>
      )}

      <button
        className="btn-scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;
