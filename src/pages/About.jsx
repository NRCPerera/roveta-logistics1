import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({ duration: 1000, once: true, offset: 100 });
        }
    }, []);

    return (
        <div className="about-page fade-in">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <span className="section-tag" style={{ color: 'var(--primary-light)' }}>Who We Are</span>
                    <h1 className="heading-lg">About <span className="text-gradient">Roveta Logistics</span></h1>
                    <div className="flex justify-center items-center gap-md">
                        <Link to="/" style={{ color: 'white', fontWeight: 600 }}>Home</Link>
                        <i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', opacity: 0.5 }}></i>
                        <span style={{ opacity: 0.8 }}>About Us</span>
                    </div>
                </div>
            </section>

            {/*  Our Story  */}
            <section className="about-story">
                <div className="container">
                    <div className="about-story-grid">
                        <div className="about-story-content" data-aos="fade-right">
                            <span className="section-tag">Our Journey</span>
                            <h2 className="heading-md">A Legacy of <span className="text-gradient">Reliable</span> Transportation</h2>
                            <p>Established with a vision to redefine logistics in Sri Lanka, Roveta Logistics has grown from a local service to a trusted islandwide partner. Our focus has always been on bridging distances with speed and integrity.</p>
                            <p>We understand that every shipment carries more than just goods—it carries your trust. That's why we invest in professional training and modern fleet management to ensure we remain the gold standard in the industry.</p>
                        </div>
                        <div className="about-image-side" data-aos="fade-left">
                            <div className="about-image-card">
                                <div className="about-image-placeholder">
                                    <i className="fas fa-truck-container"></i>
                                    <h3>Sri Lanka's Trusted Fleet</h3>
                                </div>
                                <div className="about-image-badge">
                                    <span className="badge-number" data-aos="zoom-in" data-aos-delay="500">25+</span>
                                    <span className="badge-text">Districts Covered</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="mvv-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Core Foundation</span>
                        <h2 className="heading-md">Purpose & <span className="text-gradient">Principles</span></h2>
                    </div>
                    
                    <div className="mvv-grid">
                        <div className="mvv-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="mvv-icon"><i className="fas fa-eye"></i></div>
                            <h3>Our Vision</h3>
                            <p>To be the most preferred and technologically advanced logistics partner in Sri Lanka, setting new benchmarks for efficiency.</p>
                        </div>
                        
                        <div className="mvv-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="mvv-icon"><i className="fas fa-bullseye"></i></div>
                            <h3>Our Mission</h3>
                            <p>Delevering seamless, safe, and cost-effective logistics solutions that empower our clients to reach their full potential.</p>
                        </div>
                        
                        <div className="mvv-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="mvv-icon">
                                <i className="fas fa-heart"></i>
                            </div>
                            <h3>Our Values</h3>
                            <ul className="values-list">
                                <li><i className="fas fa-check"></i> Reliability & Trust</li>
                                <li><i className="fas fa-check"></i> Customer Satisfaction</li>
                                <li><i className="fas fa-check"></i> Safety First</li>
                                <li><i className="fas fa-check"></i> Transparency</li>
                                <li><i className="fas fa-check"></i> Continuous Improvement</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Why Choose Us  */}
            <section className="section timeline-section py-lg">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">What Sets Us Apart</span>
                        <h2>The Roveta <span className="text-gradient" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Advantage</span></h2>
                    </div>
                    <div className="advantages-grid">
                        <div className="advantage-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="advantage-number">01</div>
                            <h3>Competitive Pricing</h3>
                            <p>We offer some of the most competitive rates in the industry without compromising on quality.
                                Contact us for a personalized quote.</p>
                        </div>
                        <div className="advantage-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="advantage-number">02</div>
                            <h3>Islandwide Network</h3>
                            <p>Our extensive network covers all 25 districts, ensuring we can pick up and deliver your goods
                                anywhere in Sri Lanka.</p>
                        </div>
                        <div className="advantage-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="advantage-number">03</div>
                            <h3>Experienced Team</h3>
                            <p>Our drivers and logistics coordinators are experienced professionals who know Sri Lanka's roads
                                inside and out.</p>
                        </div>
                        <div className="advantage-card" data-aos="fade-up" data-aos-delay="400">
                            <div className="advantage-number">04</div>
                            <h3>Cargo Safety</h3>
                            <p>We take every precaution to ensure your goods are handled with care and delivered in perfect
                                condition.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  CTA  */}
            <section className="section cta-section" style={{ position: 'relative', background: 'var(--gradient-hero)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
                <div className="cta-bg-pattern"></div>
                <div className="container">
                    <div className="cta-content" data-aos="fade-up">
                        <h2 style={{ fontSize: '2.8rem', color: 'white', marginBottom: '20px' }}>Partner with Roveta Logistics</h2>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', margin: '0 auto 40px' }}>Experience reliable, professional logistics services. Get your free quote today.</p>
                        <div className="cta-actions" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <Link to="/contact" className="btn btn-white btn-lg" style={{ background: 'white', color: 'var(--primary)' }}>
                                <i className="fas fa-file-invoice" style={{ marginRight: '8px' }}></i> Get a Quote
                            </Link>
                            <a href="tel:+94779996386" className="btn btn-outline-white btn-lg" style={{ border: '2px solid white', color: 'white', background: 'transparent' }}>
                                <i className="fas fa-phone" style={{ marginRight: '8px' }}></i> Call Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
