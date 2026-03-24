import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Truck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-3 gap-xl">
          <div className="flex flex-col gap-sm">
             <Link to="/" className="flex items-center gap-sm" style={{ marginBottom: '1rem' }}>
               <Truck size={32} color="var(--primary)" />
               <div className="flex flex-col">
                 <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'white', lineHeight: 1 }}>Roveta</span>
                 <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)', lineHeight: 1 }}>Logistics</span>
               </div>
             </Link>
            <p>Reliable & Professional Logistics Services across Sri Lanka.</p>
          </div>
          
          <div className="flex flex-col gap-sm">
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>Quick Links</h4>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Get a Quote</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
          
          <div className="flex flex-col gap-sm">
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>Contact Info</h4>
            <div className="flex items-center gap-sm">
              <MapPin size={18} color="var(--primary)" />
              <p>150/06, Salgado Road, Wekada, Panadura</p>
            </div>
            <div className="flex items-center gap-sm">
               <Phone size={18} color="var(--primary)" />
               <a href="tel:+94779996386">+94 77 999 6386</a>
            </div>
            <div className="flex items-center gap-sm">
               <Mail size={18} color="var(--primary)" />
               <a href="mailto:rovetalogistic@gmail.com">rovetalogistic@gmail.com</a>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="flex flex-col items-center gap-sm" style={{ textAlign: 'center' }}>
          <p>&copy; {new Date().getFullYear()} Roveta Logistics. All rights reserved.</p>
          <p style={{ fontSize: '0.8rem' }}>Payment Info: Cheques addressed to R.G.K.I Sirisena</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
