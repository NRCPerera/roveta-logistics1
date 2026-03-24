import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand" data-aos="fade-up">
            <Link to="/" className="flex items-center gap-sm" style={{ marginBottom: '1.5rem', textDecoration: 'none' }}>
              <div className="logo-icon"><i className="fas fa-truck-moving" style={{ color: 'var(--primary)', fontSize: '1.8rem' }}></i></div>
              <div className="flex flex-col">
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1, letterSpacing: '1px' }}>ROVETA</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', lineHeight: 1, marginLeft: '2px' }}>LOGISTICS</span>
              </div>
            </Link>
            <p style={{ maxWidth: '300px', marginBottom: '1.5rem' }}>
              Setting the standard in professional logistics since 2012. Providing secure, efficient, and reliable transportation across Sri Lanka.
            </p>
            <div className="social-links flex gap-md">
                <a href="#" className="footer-contact-icon" style={{ width: '40px', height: '40px' }}><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="footer-contact-icon" style={{ width: '40px', height: '40px' }}><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="footer-contact-icon" style={{ width: '40px', height: '40px' }}><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-links-group" data-aos="fade-up" data-aos-delay="100">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="/about"><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem' }}></i> About Our Story</Link>
              <Link to="/services"><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem' }}></i> Our Services</Link>
              <Link to="/contact"><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem' }}></i> Get a Quote</Link>
              <Link to="/terms"><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem' }}></i> Terms & Conditions</Link>
            </div>
          </div>
          
          {/* Contact Details */}
          <div className="footer-contact-group" data-aos="fade-up" data-aos-delay="200">
            <h4>Official Contact</h4>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><i className="fas fa-location-dot"></i></div>
              <p>150/06, Salgado Road,<br />Wekada, Panadura, Sri Lanka</p>
            </div>
            <div className="footer-contact-item">
               <div className="footer-contact-icon"><i className="fas fa-phone"></i></div>
               <a href="tel:+94779996386" style={{ color: 'white', textDecoration: 'none' }}>+94 77 999 6386</a>
            </div>
            <div className="footer-contact-item">
               <div className="footer-contact-icon"><i className="fas fa-envelope"></i></div>
               <a href="mailto:rovetalogistic@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>rovetalogistic@gmail.com</a>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Roveta Logistics. All rights reserved.</p>
          <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Payment Governance: All cheques to be drawn in favor of <strong>R.G.K.I Sirisena</strong></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
