import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';
import logo from '../assets/logo.jpeg';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="top-bar">
        <div className="container flex justify-between items-center">
          <div className="flex gap-lg hide-mobile">
            <a href="mailto:rovetalogistic@gmail.com" className="top-bar-link">
              < Mail size={14} />
              <span>rovetalogistic@gmail.com</span>
            </a>
            <div className="top-bar-link">
              <Clock size={14} />
              <span>24/7 Islandwide Service</span>
            </div>
          </div>
          <div className="flex gap-lg">
            <a href="tel:+94779996386" className="top-bar-link">
              <Phone size={14} />
              <span>+94 77 999 6386</span>
            </a>
          </div>
        </div>
      </div>
      
      <header className={`header-main ${scrolled ? 'scrolled' : ''}`}>
        <div className="container flex justify-between items-center">
          <Link to="/" className="logo-group" onClick={closeMenu}>
            <div className="logo-icon-container">
              <img src={logo} alt="Roveta Logistics Logo" className="header-logo" />
            </div>
            <div className="logo-text">
              <span className="brand-name">Roveta</span>
              <span className="brand-sub">Logistics</span>
            </div>
          </Link>
          
          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
          
          <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')} onClick={closeMenu}>About Us</NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')} onClick={closeMenu}>Services</NavLink>
            <NavLink to="/terms" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')} onClick={closeMenu}>Terms</NavLink>
            <Link to="/contact" className="btn btn-primary btn-quote" onClick={closeMenu}>Get a Quote</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
