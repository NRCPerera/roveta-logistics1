import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {

    useEffect(() => {
        // AOS Init
        if (window.AOS) {
            window.AOS.init({ duration: 800, once: true, offset: 80 });
        }
    }, []);

    return (
        <div className="contact-page fade-in">
            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <div className="page-header-content">
                        <span className="page-tag">Get In Touch</span>
                        <h1>Contact <span className="text-gradient" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Us</span></h1>
                        <nav className="breadcrumb" aria-label="Breadcrumb">
                            <Link to="/">Home</Link>
                            <i className="fas fa-chevron-right"></i>
                            <span>Contact Us</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="section py-lg">
                <div className="container">
                    <div className="contact-grid">
                        
                        {/* Left Side: Methods & Working Hours */}
                        <div className="contact-form-wrapper" data-aos="fade-right">
                            <div className="form-header">
                                <h2>Speak to our team</h2>
                                <p>We are ready to provide a personalized quote for your transportation needs or answer any inquiries.</p>
                            </div>

                            <div className="contact-methods">
                                <a href="tel:+94779996386" className="contact-method-card">
                                    <div className="contact-method-icon">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div>
                                        <h3>Phone Call</h3>
                                        <p>Ring us directly</p>
                                    </div>
                                </a>
                                <a href="https://wa.me/94779996386?text=Hi%20Roveta%20Logistics%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." className="contact-method-card whatsapp-method" target="_blank" rel="noopener noreferrer">
                                    <div className="contact-method-icon" style={{ background: 'rgba(37, 211, 102, 0.1)', color: '#25D366' }}>
                                        <i className="fab fa-whatsapp"></i>
                                    </div>
                                    <div>
                                        <h3>WhatsApp</h3>
                                        <p>Chat with us</p>
                                    </div>
                                </a>
                                <a href="mailto:rovetalogistic@gmail.com" className="contact-method-card">
                                    <div className="contact-method-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h3>Email Us</h3>
                                        <p>Get a quote</p>
                                    </div>
                                </a>
                                <div className="contact-method-card">
                                    <div className="contact-method-icon">
                                        <i className="fas fa-user-tie"></i>
                                    </div>
                                    <div>
                                        <h3>Office Visit</h3>
                                        <p>Meet in person</p>
                                    </div>
                                </div>
                            </div>

                            <div className="working-hours-card">
                                <h3><i className="fas fa-clock"></i> Working Hours</h3>
                                <div className="hours-list">
                                    <div className="hours-item">
                                        <span>Monday - Friday</span>
                                        <span>8:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="hours-item">
                                        <span>Saturday</span>
                                        <span>8:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="hours-item">
                                        <span>Sunday / Public Holidays</span>
                                        <span>Closed (On-Call Only)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Sidebar Info */}
                        <div className="contact-sidebar" data-aos="fade-left">
                            <div className="contact-info-card">
                                <h3>Contact Information</h3>
                                <p>Reach out to us through any of these direct communication channels.</p>
                                
                                <div className="contact-info-items">
                                    <div className="contact-info-item">
                                        <div className="contact-info-icon">
                                            <i className="fas fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <h4>Office Location</h4>
                                            <p>150/06, Salgado Road,<br />Wekada, Panadura, Sri Lanka</p>
                                        </div>
                                    </div>
                                    
                                    <div className="contact-info-item">
                                        <div className="contact-info-icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div>
                                            <h4>Phone Line</h4>
                                            <a href="tel:+94779996386">+94 77 999 6386</a>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="contact-info-icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div>
                                            <h4>Email Address</h4>
                                            <a href="mailto:rovetalogistic@gmail.com">rovetalogistic@gmail.com</a>
                                        </div>
                                    </div>

                                    <div className="contact-info-item" style={{ marginTop: '10px' }}>
                                        <div className="contact-info-icon" style={{ background: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
                                            <i className="fas fa-money-check"></i>
                                        </div>
                                        <div>
                                            <h4>Payment Details</h4>
                                            <p style={{ fontSize: '0.85rem' }}>Cheques addressed to:</p>
                                            <p style={{ fontWeight: 600 }}>R.G.K.I Sirisena</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section py-lg" data-aos="fade-up">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag" style={{ color: 'var(--primary)' }}>Find Us</span>
                        <h2>Our <span className="text-gradient" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Location</span></h2>
                    </div>
                    <div className="map-wrapper">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.560696950153!2d79.90098558514574!3d6.722055653457597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245dfa62a6b25%3A0x633dcb29107ccfa4!2sPanadura!5e0!3m2!1sen!2slk!4v1714150505!5m2!1sen!2slk" 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Roveta Logistics Location"
                            style={{ border: 0 }}
                        ></iframe>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
