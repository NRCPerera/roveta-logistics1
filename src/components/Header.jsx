import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Truck } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`header-glass ${scrolled ? 'scrolled' : ''}`}>
      <div className="container flex justify-between items-center" style={{ padding: 0 }}>
        <Link to="/" className="logo-section flex items-center gap-sm" onClick={closeMenu}>
           {/* If actual logo is provided later, replace icon with img tag */}
           <Truck size={36} color="var(--primary)" />
           <div className="flex flex-col">
             <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)', lineHeight: 1 }}>Roveta</span>
             <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--primary)', lineHeight: 1 }}>Logistics</span>
           </div>
        </Link>
        
        <button className="mobile-nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
        <nav className={`nav-links ${isOpen ? 'open' : ''}`} style={isOpen ? { display: 'flex' } : {}}>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>About Us</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>Services</NavLink>
          <NavLink to="/terms" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>Terms</NavLink>
          <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>Get a Quote</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
