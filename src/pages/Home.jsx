import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    useEffect(() => {
        // AOS Init
        if (window.AOS) {
            window.AOS.init({ duration: 1000, once: true, offset: 100 });
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
                  el.textContent = target + (el.textContent.includes('+') ? '+' : (el.textContent.includes('%') ? '%' : ''));
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
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg-pattern"></div>
                <div className="container hero-content">
                    <div className="hero-text">
                        <div className="hero-badge" data-aos="fade-down">
                            <i className="fas fa-shield-check"></i>
                            <span>Trusted Logistics Partner</span>
                        </div>
                        <h1 data-aos="fade-up" data-aos-delay="100">
                            Swift, Secure &<br />
                            <span className="text-gradient">Professional</span><br />
                            Logistics Solutions
                        </h1>
                        <p className="hero-description" data-aos="fade-up" data-aos-delay="200">
                            Leading islandwide goods transportation across Sri Lanka. 
                            Delivering excellence through reliability, safety, and punctual service since our establishment.
                        </p>
                        
                        <div className="hero-stats" data-aos="fade-up" data-aos-delay="300">
                            <div className="stat-item">
                                <span className="stat-number" data-count="25">0</span>
                                <span className="stat-label">Districts</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Support</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number" data-count="99">0</span>
                                <span className="stat-label">Safety %</span>
                            </div>
                        </div>

                        <div className="hero-actions" data-aos="fade-up" data-aos-delay="400">
                            <Link to="/contact" className="btn btn-primary">
                                <i className="fas fa-file-invoice"></i> Get a Quote
                            </Link>
                            <Link to="/services" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
                                View Services <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="hero-visual" data-aos="zoom-in" data-aos-delay="300">
                        <div className="hero-card-stack">
                            <div className="hero-card hero-card-1">
                                <div className="hero-card-icon"><i className="fas fa-route"></i></div>
                                <h3>Smart Routing</h3>
                                <p>Optimized paths for lightning fast deliveries.</p>
                            </div>
                            <div className="hero-card hero-card-2">
                                <div className="hero-card-icon"><i className="fas fa-shield-alt"></i></div>
                                <h3>Full Protection</h3>
                                <p>Your cargo is insured and handled with extreme care.</p>
                            </div>
                            <div className="hero-card hero-card-3">
                                <div className="hero-card-icon"><i className="fas fa-calendar-check"></i></div>
                                <h3>Always On Time</h3>
                                <p>We respect your schedule. Punctuality is our promise.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="services-overview">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2 className="heading-md">Premium <span className="text-gradient">Logistics</span> Services</h2>
                        <p className="text-lg">Comprehensive transportation solutions tailored for commercial and personal needs across Sri Lanka.</p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="service-card-icon">
                                <i className="fas fa-shipping-fast"></i>
                            </div>
                            <h3>Goods Transport</h3>
                            <p>Reliable islandwide goods transportation covering all provinces at highly competitive rates.</p>
                            <div className="service-card-footer">
                                <Link to="/services" className="service-link">Experience More <i className="fas fa-chevron-right"></i></Link>
                            </div>
                        </div>

                        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-card-icon">
                                <i className="fas fa-people-carry"></i>
                            </div>
                            <h3>Handling Services</h3>
                            <p>Trained professional staff for safe loading and unloading of your valuable equipment and goods.</p>
                            <div className="service-card-footer">
                                <Link to="/services" className="service-link">Experience More <i className="fas fa-chevron-right"></i></Link>
                            </div>
                        </div>

                        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-card-icon">
                                <i className="fas fa-warehouse"></i>
                            </div>
                            <h3>Warehousing</h3>
                            <p>Strategic storage solutions and transit hubs to ensure your supply chain never stops moving.</p>
                            <div className="service-card-footer">
                                <Link to="/services" className="service-link">Experience More <i className="fas fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-us">
                <div className="container">
                    <div className="why-us-wrapper">
                        <div className="why-us-left" data-aos="fade-right">
                            <span className="section-tag">Value Proposition</span>
                            <h2 className="heading-md">Why Partners <span className="text-gradient">Choose Us</span></h2>
                            <p className="text-lg">We don't just move boxes; we move businesses. Our commitment to excellence is reflected in every mile we drive.</p>
                            
                            <div className="why-us-features">
                                <div className="feature-item">
                                    <div className="feature-icon"><i className="fas fa-check"></i></div>
                                    <h4>Islandwide coverage</h4>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon"><i className="fas fa-check"></i></div>
                                    <h4>Transparent pricing</h4>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon"><i className="fas fa-check"></i></div>
                                    <h4>Expert operators</h4>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon"><i className="fas fa-check"></i></div>
                                    <h4>Real-time updates</h4>
                                </div>
                            </div>
                        </div>

                        <div className="why-us-right" data-aos="fade-left">
                            <div className="stats-card-grid">
                                <div className="stats-card">
                                    <div className="stats-card-number"><span data-count="1500">0</span>+</div>
                                    <div className="stats-card-label">Deliveries</div>
                                </div>
                                <div className="stats-card accent">
                                    <div className="stats-card-number"><span data-count="25">0</span></div>
                                    <div className="stats-card-label">Districts</div>
                                </div>
                                <div className="stats-card accent">
                                    <div className="stats-card-number"><span data-count="98">0</span>%</div>
                                    <div className="stats-card-label">On-Time</div>
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

            {/* Coverage Map Section */}
            <section className="coverage">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Our Network</span>
                        <h2 className="heading-md">Reaching Every <span className="text-gradient">Corner</span></h2>
                        <p className="text-lg">From the northern tips of Jaffna to the southern shores of Matara.</p>
                    </div>
                    
                    <div className="district-tags" data-aos="fade-up">
                        {['Colombo','Gampaha','Kalutara','Kandy','Matale','Nuwara Eliya','Galle','Matara',
                          'Hambantota','Jaffna','Kilinochchi','Mannar','Vavuniya','Mullaitivu','Batticaloa',
                          'Ampara','Trincomalee','Kurunegala','Puttalam','Anuradhapura','Polonnaruwa',
                          'Badulla','Monaragala','Ratnapura','Kegalle'].map(d => (
                            <span key={d} className="district-tag">{d}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content" data-aos="zoom-in">
                        <h2 className="heading-lg">Ready to Start Your Journey?</h2>
                        <p className="text-lg">Connect with Sri Lanka's most reliable logistics network today. We're ready when you are.</p>
                        
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-secondary btn-lg" style={{ background: '#fff', color: 'var(--primary)' }}>
                                Get a Free Quote
                            </Link>
                            <a href="tel:+94779996386" className="btn btn-outline btn-lg" style={{ borderColor: '#fff', color: '#fff' }}>
                                <i className="fas fa-phone-alt"></i> Contact Sales
                            </a>
                        </div>

                        <div className="cta-contact-info">
                            <div className="cta-info-item">
                                <i className="fas fa-phone-alt"></i>
                                <span>+94 77 999 6386</span>
                            </div>
                            <div className="cta-info-item">
                                <i className="fas fa-envelope-open-text"></i>
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
