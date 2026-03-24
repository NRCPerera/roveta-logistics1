import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({ duration: 1000, once: true, offset: 100 });
        }
    }, []);

    return (
        <div className="contact-page fade-in">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <span className="section-tag" style={{ color: 'var(--primary-light)' }}>Get In Touch</span>
                    <h1 className="heading-lg">Contact <span className="text-gradient">Our Team</span></h1>
                    <div className="flex justify-center items-center gap-md">
                        <Link to="/" style={{ color: 'white', fontWeight: 600 }}>Home</Link>
                        <i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', opacity: 0.5 }}></i>
                        <span style={{ opacity: 0.8 }}>Contact</span>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="container">
                <div className="contact-grid">
                    {/* Left: Communication Hub */}
                    <div className="contact-card" data-aos="fade-right">
                        <span className="section-tag">Communication Hub</span>
                        <h2 className="heading-md" style={{ marginBottom: '16px' }}>Let's talk about <span className="text-gradient">Logistics</span></h2>
                        <p className="text-lg">Our experts are standing by to help you optimize your supply chain. Reach out through any channel below.</p>
                        
                        <div className="contact-methods">
                            <a href="tel:+94779996386" className="contact-method-card">
                                <div className="contact-method-icon"><i className="fas fa-phone-alt"></i></div>
                                <div className="contact-method-content">
                                    <h3>Voice Call</h3>
                                    <p>Direct assistance</p>
                                </div>
                            </a>
                            <a href="https://wa.me/94779996386" target="_blank" rel="noopener noreferrer" className="contact-method-card">
                                <div className="contact-method-icon" style={{ background: '#25D36615', color: '#25D366' }}><i className="fab fa-whatsapp"></i></div>
                                <div className="contact-method-content">
                                    <h3>WhatsApp</h3>
                                    <p>Instant messaging</p>
                                </div>
                            </a>
                            <a href="mailto:rovetalogistic@gmail.com" className="contact-method-card">
                                <div className="contact-method-icon"><i className="fas fa-envelope"></i></div>
                                <div className="contact-method-content">
                                    <h3>Email Us</h3>
                                    <p>Official inquiries</p>
                                </div>
                            </a>
                            <div className="contact-method-card">
                                <div className="contact-method-icon"><i className="fas fa-map-marker-alt"></i></div>
                                <div className="contact-method-content">
                                    <h3>Office Visit</h3>
                                    <p>Meet in person</p>
                                </div>
                            </div>
                        </div>

                        <div className="working-hours">
                            <h3><i className="fas fa-clock" style={{ color: 'var(--primary)' }}></i> Operational Hours</h3>
                            <div className="hours-list">
                                <div className="hours-item">
                                    <span className="day">Mon - Fri</span>
                                    <span>08:30 AM - 05:30 PM</span>
                                </div>
                                <div className="hours-item">
                                    <span className="day">Saturday</span>
                                    <span>08:30 AM - 01:30 PM</span>
                                </div>
                                <div className="hours-item">
                                    <span className="day">Sunday & Holidays</span>
                                    <span style={{ color: 'var(--primary)', fontWeight: 700 }}>On-Call Emergency Only</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Info Sidebar */}
                    <div className="contact-sidebar" data-aos="fade-left">
                        <div className="info-card">
                            <h3>Corporate Info</h3>
                            <div className="info-items">
                                <div className="info-item">
                                    <div className="info-icon"><i className="fas fa-location-arrow"></i></div>
                                    <div>
                                        <h4>Headquarters</h4>
                                        <p>150/06, Salgado Road,<br />Wekada, Panadura, Sri Lanka</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><i className="fas fa-phone-volume"></i></div>
                                    <div>
                                        <h4>Support Line</h4>
                                        <a href="tel:+94779996386">+94 77 999 6386</a>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><i className="fas fa-paper-plane"></i></div>
                                    <div>
                                        <h4>Email</h4>
                                        <a href="mailto:rovetalogistic@gmail.com">rovetalogistic@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-card" style={{ padding: 'var(--space-2xl)' }}>
                            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', color: 'var(--primary)' }}>Payment Notice</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '12px' }}>For all cheque payments, please ensure they are drawn in favor of:</p>
                            <p style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '1.1rem' }}>R.G.K.I Sirisena</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section" data-aos="fade-up">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Navigation</span>
                        <h2 className="heading-md">Visit Our <span className="text-gradient">Hub</span></h2>
                    </div>
                    <div className="map-wrapper">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.560696950153!2d79.90098558514574!3d6.722055653457597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245dfa62a6b25%3A0x633dcb29107ccfa4!2sPanadura!5e0!3m2!1sen!2slk!4v1714150505!5m2!1sen!2slk" 
                            title="Roveta Logistics Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
