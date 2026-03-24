import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

    useEffect(() => {
        // AOS Init
        if (window.AOS) {
            window.AOS.init({ duration: 800, once: true, offset: 80 });
        }

        // Counter animations
        const counters = document.querySelectorAll('[data-count]');
        const animateCounter = (el) => {
            const target = parseInt(el.getAttribute('data-count'), 10);
            const duration = 2000;
            const step = Math.ceil(target / (duration / 16));
            let current = 0;
            const timer = setInterval(() => {
                current = Math.min(current + step, target);
                if (current >= target) {
                  el.textContent = target;
                  clearInterval(timer);
                } else {
                  el.textContent = current;
                }
            }, 16);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="home-page">
            {/*  Hero Section  */}
            <section className="hero" id="hero">
                <div className="hero-bg-pattern"></div>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <div className="hero-text">
                        <div className="hero-badge" data-aos="fade-up">
                            <i className="fas fa-shield-halved"></i>
                            <span>Trusted Since Establishment</span>
                        </div>
                        <h1 data-aos="fade-up" data-aos-delay="100">
                            Reliable &<br />
                            <span className="text-gradient">Professional</span><br />
                            Logistics Services
                        </h1>
                        <p className="hero-description" data-aos="fade-up" data-aos-delay="200">
                            Islandwide goods transportation across all 25 districts of Sri Lanka.
                            Your cargo, delivered safely, on time, every time.
                        </p>
                        <div className="hero-stats" data-aos="fade-up" data-aos-delay="300">
                            <div className="stat-item">
                                <span className="stat-number" data-count="25">0</span>
                                <span className="stat-label">Districts Covered</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Support</span>
                            </div>
                        </div>
                        <div className="hero-actions" data-aos="fade-up" data-aos-delay="400">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                <i className="fas fa-file-invoice"></i>
                                Get a Quote
                            </Link>
                            <Link to="/services" className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                                <i className="fas fa-arrow-right"></i>
                                Our Services
                            </Link>
                        </div>
                    </div>
                    <div className="hero-visual" data-aos="fade-left" data-aos-delay="300">
                        <div className="hero-card-stack">
                            <div className="hero-card hero-card-1">
                                <div className="hero-card-icon"><i className="fas fa-route"></i></div>
                                <h3>Route Planning</h3>
                                <p>Optimized routes for faster delivery</p>
                            </div>
                            <div className="hero-card hero-card-2">
                                <div className="hero-card-icon"><i className="fas fa-box-open"></i></div>
                                <h3>Safe Handling</h3>
                                <p>Your goods, handled with care</p>
                            </div>
                            <div className="hero-card hero-card-3">
                                <div className="hero-card-icon"><i className="fas fa-clock"></i></div>
                                <h3>On-Time Delivery</h3>
                                <p>Punctual, every single time</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-scroll-indicator">
                    <div className="scroll-line"></div>
                    <span>Scroll Down</span>
                </div>
            </section>

            {/*  Services Overview  */}
            <section className="section services-overview py-lg" id="services-overview">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">What We Do</span>
                        <h2>Our <span className="text-gradient">Services</span></h2>
                        <p className="section-subtitle">Comprehensive logistics solutions tailored for your needs</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="service-card-icon">
                                <i className="fas fa-truck-moving"></i>
                            </div>
                            <h3>Goods Transportation</h3>
                            <p>Reliable islandwide goods transportation service covering all 25 districts across Sri Lanka at competitive rates.</p>
                            <div className="service-card-footer">
                                <Link to="/services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-card-icon">
                                <i className="fas fa-dolly"></i>
                            </div>
                            <h3>Loading & Unloading</h3>
                            <p>Professional loading and unloading services with trained personnel to handle your cargo safely and efficiently.</p>
                            <div className="service-card-footer">
                                <Link to="/services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-card-icon">
                                <i className="fas fa-warehouse"></i>
                            </div>
                            <h3>Warehousing</h3>
                            <p>Secure temporary storage solutions while your goods are in transit. Safe, monitored warehouse facilities.</p>
                            <div className="service-card-footer">
                                <span className="service-rate">On Request</span>
                                <Link to="/services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Why Choose Us  */}
            <section className="section why-us py-lg" id="why-us">
                <div className="container">
                    <div className="why-us-wrapper">
                        <div className="why-us-left" data-aos="fade-right">
                            <span className="section-tag">Why Choose Us</span>
                            <h2>Your Trusted <span className="text-gradient">Logistics Partner</span> in Sri Lanka</h2>
                            <p>At Roveta Logistics, we combine reliability with affordability. Our commitment to on-time delivery and cargo safety sets us apart from the rest.</p>
                            <div className="why-us-features">
                                <div className="feature-item">
                                    <div className="feature-icon"><i className="fas fa-check-circle"></i></div>
                                    <div>
                                        <h4>Islandwide Coverage</h4>
                                        <p>We serve all 25 districts across Sri Lanka</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon"><i className="fas fa-check-circle"></i></div>
                                    <div>
                                        <h4>Transparent Pricing</h4>
                                        <p>Simple per-kilometer pricing with no hidden fees</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon"><i className="fas fa-check-circle"></i></div>
                                    <div>
                                        <h4>Professional Team</h4>
                                        <p>Experienced drivers and logistics coordinators</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon"><i className="fas fa-check-circle"></i></div>
                                    <div>
                                        <h4>Safe Delivery</h4>
                                        <p>Cargo safety is our number one priority</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="why-us-right" data-aos="fade-left">
                            <div className="stats-card-grid">
                                <div className="stats-card">
                                    <div className="stats-card-number"><span data-count="1000">0</span>+</div>
                                    <div className="stats-card-label">Deliveries Completed</div>
                                </div>
                                <div className="stats-card accent">
                                    <div className="stats-card-number"><span data-count="25">0</span></div>
                                    <div className="stats-card-label">Districts Covered</div>
                                </div>
                                <div className="stats-card accent">
                                    <div className="stats-card-number"><span data-count="98">0</span>%</div>
                                    <div className="stats-card-label">On-Time Rate</div>
                                </div>
                                <div className="stats-card">
                                    <div className="stats-card-number"><span data-count="500">0</span>+</div>
                                    <div className="stats-card-label">Happy Clients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Coverage Map  */}
            <section className="section coverage py-lg" id="coverage">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Coverage Area</span>
                        <h2>We Deliver <span className="text-gradient">Islandwide</span></h2>
                        <p className="section-subtitle">From Jaffna to Matara, from Colombo to Batticaloa – we reach every corner of Sri Lanka</p>
                    </div>
                    <div className="coverage-content" data-aos="fade-up">
                        <div className="district-tags">
                            {['Colombo','Gampaha','Kalutara','Kandy','Matale','Nuwara Eliya','Galle','Matara',
                              'Hambantota','Jaffna','Kilinochchi','Mannar','Vavuniya','Mullaitivu','Batticaloa',
                              'Ampara','Trincomalee','Kurunegala','Puttalam','Anuradhapura','Polonnaruwa',
                              'Badulla','Monaragala','Ratnapura','Kegalle'].map(d => (
                                <span key={d} className="district-tag">{d}</span>
                            ))}
                        </div>
                        <div className="coverage-cta">
                            <p>Need to transport goods anywhere in Sri Lanka?</p>
                            <Link to="/contact" className="btn btn-primary">
                                <i className="fas fa-paper-plane"></i> Request a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/*  CTA Section  */}
            <section className="section cta-section" id="cta">
                <div className="cta-bg-pattern"></div>
                <div className="container">
                    <div className="cta-content" data-aos="fade-up">
                        <h2>Ready to Ship Your Goods?</h2>
                        <p>Get in touch with us today for a free quote. We offer competitive rates and reliable service across Sri Lanka.</p>
                        <div className="cta-actions" style={{ flexDirection: 'row' }}>
                            <Link to="/contact" className="btn btn-secondary btn-lg" style={{ background: 'white', color: 'var(--primary)' }}>
                                <i className="fas fa-file-invoice"></i> Get a Quote
                            </Link>
                            <a href="tel:+94779996386" className="btn btn-outline-white btn-lg" style={{ border: '2px solid white', color: 'white', background: 'transparent' }}>
                                <i className="fas fa-phone"></i> Call Us Now
                            </a>
                        </div>
                        <div className="cta-contact-info">
                            <div className="cta-info-item">
                                <i className="fas fa-phone"></i>
                                <span>+94 77 999 6386</span>
                            </div>
                            <div className="cta-info-item">
                                <i className="fas fa-envelope"></i>
                                <span>rovetalogistic@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
