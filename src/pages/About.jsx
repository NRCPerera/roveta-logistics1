import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import truckImg from '../assets/truck.jpg';
import './About.css';

const About = () => {

    useEffect(() => {
        // AOS Init
        if (window.AOS) {
            window.AOS.init({ duration: 800, once: true, offset: 80 });
        }
    }, []);

    return (
        <div className="about-page">
            {/*  Page Header  */}
            <section className="page-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <div className="page-header-content">
                        <span className="page-tag">Know Us Better</span>
                        <h1>About <span className="text-gradient" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Roveta Logistics</span></h1>
                        <nav className="breadcrumb" aria-label="Breadcrumb">
                            <Link to="/">Home</Link>
                            <i className="fas fa-chevron-right"></i>
                            <span>About Us</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/*  Company Story  */}
            <section className="section about-story py-lg">
                <div className="container">
                    <div className="about-story-grid">
                        <div className="about-story-content" data-aos="fade-right">
                            <span className="section-tag">Our Story</span>
                            <h2>Moving Sri Lanka <span className="text-gradient" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Forward</span></h2>
                            <p>Roveta Logistics was founded with a simple yet powerful vision: to provide reliable and
                                affordable goods transportation services to businesses and individuals across Sri Lanka.</p>
                            <p>Based in Wekada, Panadura, we have grown from a small local operation to an islandwide logistics
                                provider, serving all 25 districts with dedication and professionalism. Our team understands the
                                unique challenges of goods transportation in Sri Lanka, and we've built our services to address
                                every need.</p>
                            <p>Every shipment we handle is treated with the utmost care and attention, ensuring your goods
                                arrive safely and on time at their destination.</p>
                        </div>
                        <div className="about-story-visual" data-aos="fade-left" style={{ position: 'relative' }}>
                            <img src={truckImg} alt="Roveta Logistics Fleet"
                                style={{ width: '100%', height: '450px', objectFit: 'cover', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', display: 'block' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/*  Mission, Vision, Values  */}
            <section className="section mvv-section py-lg">
                <div className="container">
                    <div className="mvv-grid">
                        <div className="mvv-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="mvv-icon">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h3>Our Mission</h3>
                            <p>To provide the most reliable, efficient, and affordable goods transportation service in Sri
                                Lanka, ensuring every delivery exceeds our clients' expectations through commitment to safety,
                                punctuality, and professionalism.</p>
                        </div>
                        <div className="mvv-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="mvv-icon">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h3>Our Vision</h3>
                            <p>To become Sri Lanka's most trusted logistics partner, recognized for our exceptional service
                                quality, operational excellence, and contribution to the nation's economic growth through
                                seamless transportation solutions.</p>
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
