import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (id) => {
        setOpenFaq(prev => (prev === id ? null : id));
    };

    useEffect(() => {
        // AOS Init
        if (window.AOS) {
            window.AOS.init({ duration: 800, once: true, offset: 80 });
        }
    }, []);

    const faqs = [
        {
            id: 1,
            question: 'What types of goods do you transport?',
            answer: 'We transport a wide range of goods including commercial inventory, household items, furniture, construction materials, industrial equipment, agricultural produce, and more. Please contact us for specific requirements.'
        },
        {
            id: 2,
            question: 'How is the pricing calculated?',
            answer: 'Our pricing is simple and transparent — calculated per kilometer from pickup to delivery point using the most efficient route. Contact us for a personalized quote. No hidden charges.'
        },
        {
            id: 3,
            question: 'Do you offer door-to-door service?',
            answer: 'Yes! We provide complete door-to-door pickup and delivery service. Our team will come to your location to collect the goods and deliver them directly to the destination address.'
        },
        {
            id: 4,
            question: 'What payment methods do you accept?',
            answer: (<>We accept cash payments and cheques. Cheques should be addressed to <strong>R.G.K.I Sirisena</strong>. Please confirm payment details when placing your order.</>)
        },
        {
            id: 5,
            question: 'How far in advance should I book?',
            answer: 'We recommend booking at least 24–48 hours in advance for standard deliveries. For express delivery, please contact us directly and we\'ll arrange the fastest possible service based on availability.'
        }
    ];

    return (
        <div className="services-page">
            {/*  Page Header  */}
            <section className="page-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <div className="page-header-content">
                        <span className="page-tag">What We Offer</span>
                        <h1>Our <span className="text-gradient">Services</span></h1>
                        <nav className="breadcrumb" aria-label="Breadcrumb">
                            <Link to="/">Home</Link>
                            <i className="fas fa-chevron-right"></i>
                            <span>Services</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/*  Main Service  */}
            <section className="section main-service py-lg">
                <div className="container">
                    <div className="main-service-grid">
                        <div className="main-service-content" data-aos="fade-right">
                            <span className="section-tag">Our Core Service</span>
                            <h2>Islandwide Goods <span className="text-gradient" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Transportation</span></h2>
                            <p>Roveta Logistics specializes in goods transportation across all 25 districts of Sri Lanka.
                                Whether you need to move commercial inventory, household items, industrial equipment, or
                                agricultural produce, our fleet and experienced team are ready to serve you.</p>
                            <div className="service-highlights">
                                <div className="highlight-item">
                                    <i className="fas fa-route"></i>
                                    <div>
                                        <h4>All 25 Districts</h4>
                                        <p>Complete islandwide coverage</p>
                                    </div>
                                </div>
                                <div className="highlight-item">
                                    <i className="fas fa-tag"></i>
                                    <div>
                                        <h4>Competitive Rates</h4>
                                        <p>Affordable per-kilometer pricing</p>
                                    </div>
                                </div>
                                <div className="highlight-item">
                                    <i className="fas fa-shield-halved"></i>
                                    <div>
                                        <h4>Insured Cargo</h4>
                                        <p>Your goods are protected</p>
                                    </div>
                                </div>
                                <div className="highlight-item">
                                    <i className="fas fa-clock"></i>
                                    <div>
                                        <h4>On-Time Guarantee</h4>
                                        <p>Punctual delivery, every time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-service-pricing" data-aos="fade-left">
                            <div className="pricing-card">
                                <div className="pricing-header">
                                    <span className="pricing-label">Why Choose Us</span>
                                    <div className="pricing-amount">
                                        <span className="price" style={{ fontSize: '2rem' }}>Contact Us</span>
                                    </div>
                                    <p className="pricing-note">Get a personalized quote today</p>
                                </div>
                                <div className="pricing-features">
                                    <div className="pricing-feature">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Door-to-door pickup & delivery</span>
                                    </div>
                                    <div className="pricing-feature">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Professional drivers</span>
                                    </div>
                                    <div className="pricing-feature">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Cargo safety assured</span>
                                    </div>
                                    <div className="pricing-feature">
                                        <i className="fas fa-check-circle"></i>
                                        <span>No hidden charges</span>
                                    </div>
                                    <div className="pricing-feature">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Flexible scheduling</span>
                                    </div>
                                    <div className="pricing-feature">
                                        <i className="fas fa-check-circle"></i>
                                        <span>24/7 customer support</span>
                                    </div>
                                </div>
                                <Link to="/contact" className="btn btn-primary btn-lg btn-full" style={{ display: 'block' }}>
                                    <i className="fas fa-file-invoice" style={{ marginRight: '8px' }}></i> Get a Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Additional Services  */}
            <section className="section additional-services py-lg">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">More Services</span>
                        <h2>Additional <span className="text-gradient" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Solutions</span></h2>
                        <p className="section-subtitle" style={{ fontSize: '1.1rem', color: 'var(--gray-500)', marginTop: '8px' }}>Beyond transportation, we offer complementary services to make your logistics seamless</p>
                    </div>
                    <div className="additional-services-grid">
                        <div className="add-service-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="add-service-icon">
                                <i className="fas fa-dolly"></i>
                            </div>
                            <h3>Loading & Unloading</h3>
                            <p>Our trained personnel handle the physical loading and unloading of your goods with the highest
                                level of care and efficiency. Available as an add-on service.</p>
                            <ul className="add-service-features">
                                <li><i className="fas fa-check"></i> Trained handling crew</li>
                                <li><i className="fas fa-check"></i> Equipment provided</li>
                                <li><i className="fas fa-check"></i> Fragile item handling</li>
                            </ul>
                        </div>
                        <div className="add-service-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="add-service-icon">
                                <i className="fas fa-warehouse"></i>
                            </div>
                            <h3>Temporary Warehousing</h3>
                            <p>Need to store your goods temporarily? We offer secure warehouse facilities to hold your cargo
                                safely until you're ready for delivery.</p>
                            <ul className="add-service-features">
                                <li><i className="fas fa-check"></i> Secure facilities</li>
                                <li><i className="fas fa-check"></i> Short & long term options</li>
                                <li><i className="fas fa-check"></i> Climate-controlled areas</li>
                            </ul>
                        </div>
                        <div className="add-service-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="add-service-icon">
                                <i className="fas fa-bolt"></i>
                            </div>
                            <h3>Express Delivery</h3>
                            <p>Need it there fast? Our express delivery service prioritizes your shipment for the fastest
                                possible delivery across the island.</p>
                            <ul className="add-service-features">
                                <li><i className="fas fa-check"></i> Priority scheduling</li>
                                <li><i className="fas fa-check"></i> Dedicated vehicle</li>
                                <li><i className="fas fa-check"></i> Real-time updates</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/*  How It Works  */}
            <section className="section how-it-works py-lg">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Simple Process</span>
                        <h2>How It <span className="text-gradient" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Works</span></h2>
                        <p className="section-subtitle" style={{ fontSize: '1.1rem', color: 'var(--gray-500)', marginTop: '8px' }}>Getting your goods transported is easy with Roveta Logistics</p>
                    </div>
                    <div className="steps-grid">
                        <div className="step-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="step-number">1</div>
                            <div className="step-icon"><i className="fas fa-paper-plane"></i></div>
                            <h3>Request a Quote</h3>
                            <p>Fill out our inquiry form or call us with your pickup location, destination, and goods description.</p>
                        </div>
                        <div className="step-connector" data-aos="fade-up" data-aos-delay="150">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                        <div className="step-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="step-number">2</div>
                            <div className="step-icon"><i className="fas fa-calculator"></i></div>
                            <h3>Get Your Quote</h3>
                            <p>We calculate the distance and provide you with a transparent, competitive quote.</p>
                        </div>
                        <div className="step-connector" data-aos="fade-up" data-aos-delay="250">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                        <div className="step-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="step-number">3</div>
                            <div className="step-icon"><i className="fas fa-calendar-check"></i></div>
                            <h3>Schedule Pickup</h3>
                            <p>Confirm your booking and schedule a convenient pickup date and time.</p>
                        </div>
                        <div className="step-connector" data-aos="fade-up" data-aos-delay="350">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                        <div className="step-card" data-aos="fade-up" data-aos-delay="400">
                            <div className="step-number">4</div>
                            <div className="step-icon"><i className="fas fa-truck-fast"></i></div>
                            <h3>We Deliver</h3>
                            <p>Our team picks up your goods and delivers them safely to the destination.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  FAQ Section — fully React-controlled  */}
            <section className="section faq-section py-lg">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">FAQ</span>
                        <h2>Frequently Asked <span className="text-gradient" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Questions</span></h2>
                    </div>
                    <div className="faq-grid" data-aos="fade-up">
                        {faqs.map(faq => (
                            <div key={faq.id} className={`faq-item${openFaq === faq.id ? ' active' : ''}`}>
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFaq(faq.id)}
                                    aria-expanded={openFaq === faq.id}
                                >
                                    <span>{faq.question}</span>
                                    <i className={`fas fa-chevron-${openFaq === faq.id ? 'up' : 'down'}`}></i>
                                </button>
                                {openFaq === faq.id && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*  CTA  */}
            <section className="section cta-section" style={{ position: 'relative', background: 'var(--gradient-hero)', color: 'white', padding: '80px 0', textAlign: 'center' }}>
                <div className="cta-bg-pattern"></div>
                <div className="container">
                    <div className="cta-content" data-aos="fade-up">
                        <h2 style={{ fontSize: '2.8rem', color: 'white', marginBottom: '20px' }}>Ready to Ship Your Goods?</h2>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', margin: '0 auto 40px' }}>Contact us today for a free quote. Competitive rates, reliable service.</p>
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

export default Services;
