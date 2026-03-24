import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [activeFaq, setActiveFaq] = useState(0);

    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({ duration: 1000, once: true, offset: 100 });
        }
    }, []);

    const servicesList = [
        {
            icon: 'fas fa-truck-fast',
            title: 'LCL & FCL Transport',
            desc: 'Flexible shipping solutions for both Less than Container Load and Full Container Load requirements across the island.',
            features: ['Shared cargo options', 'Full vehicle dedicated', 'Priority routing', 'Multi-stop delivery'],
            rates: { label: 'Base Rate', value: 'RS. 150/KM' }
        },
        {
            icon: 'fas fa-box-open',
            title: 'Safe Cargo Handling',
            desc: 'Expert loading and unloading services by trained professionals specialized in handling fragile and high-value materials.',
            features: ['Fragile item care', 'Heavy lift equipment', 'On-site packing', 'Warehouse transit'],
            rates: { label: 'Service Fee', value: 'On Request' }
        },
        {
            icon: 'fas fa-route',
            title: 'Islandwide Logistics',
            desc: 'A comprehensive network that ensures your goods reach any of the 25 districts in Sri Lanka with guaranteed punctuality.',
            features: ['Daily scheduled routes', 'Real-time updates', 'Last-mile delivery', 'Provincial hubs'],
            rates: { label: 'Coverage', value: 'All Districts' }
        }
    ];

    const faqs = [
        {
            q: 'How do you calculate the transportation cost?',
            a: 'Our rates are primarily calculated based on the total distance (per kilometer) from the pickup point to the destination. We provide a transparent base rate of RS. 150/KM for standard goods.'
        },
        {
            q: 'Do you provide insurance for transported goods?',
            a: 'Yes, we offer basic cargo protection. For high-value shipments, we can arrange specialized insurance cover through our partners to ensure complete peace of mind.'
        },
        {
            q: 'Can you handle urgent/same-day deliveries?',
            a: 'Absolutely. We offer priority express services for time-critical shipments. Please contact our sales team early in the day to check availability for your specific route.'
        },
        {
            q: 'Which districts do you cover in Sri Lanka?',
            a: 'We cover all 25 districts across all 9 provinces. From Jaffna in the north to Matara in the south, our fleet is ready to reach any corner of the country.'
        }
    ];

    return (
        <div className="services-page fade-in">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <span className="section-tag" style={{ color: 'var(--primary-light)' }}>Our Solutions</span>
                    <h1 className="heading-lg">Logistic <span className="text-gradient">Services</span></h1>
                    <div className="flex justify-center items-center gap-md">
                        <Link to="/" style={{ color: 'white', fontWeight: 600 }}>Home</Link>
                        <i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', opacity: 0.5 }}></i>
                        <span style={{ opacity: 0.8 }}>Services</span>
                    </div>
                </div>
            </section>

            {/* Main Services */}
            <section className="main-services">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Core Offerings</span>
                        <h2 className="heading-md">Tailored for <span className="text-gradient">Every Scale</span></h2>
                        <p className="text-lg">We provide end-to-end logistics support for businesses and individuals alike.</p>
                    </div>

                    <div className="services-grid">
                        {servicesList.map((service, idx) => (
                            <div key={idx} className="service-card" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="service-card-icon"><i className={service.icon}></i></div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <ul className="service-features">
                                    {service.features.map((f, i) => (
                                        <li key={i}><i className="fas fa-check"></i> {f}</li>
                                    ))}
                                </ul>
                                <div className="rates-box">
                                    <div className="rate-item">
                                        <span className="rate-label">{service.rates.label}</span>
                                        <span className="rate-value">{service.rates.value}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*  FAQ Section  */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Information</span>
                        <h2 className="heading-md">Common <span className="text-gradient">Questions</span></h2>
                    </div>

                    <div className="faq-grid">
                        {faqs.map((faq, idx) => (
                            <div 
                                key={idx} 
                                className={`faq-card ${activeFaq === idx ? 'active' : ''}`}
                                data-aos="fade-up"
                                onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="faq-question">
                                    <h4>{faq.q}</h4>
                                    <i className={`fas fa-chevron-${activeFaq === idx ? 'up' : 'down'} faq-icon`}></i>
                                </div>
                                {activeFaq === idx && (
                                    <div className="faq-answer">
                                        <p>{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*  CTA Banner  */}
            <section className="py-xl" style={{ background: 'var(--primary)', color: 'white' }}>
                <div className="container text-center">
                    <h2 className="heading-md" style={{ marginBottom: '24px' }}>Need a Specialized Service?</h2>
                    <p className="text-lg" style={{ marginBottom: '32px', opacity: 0.9 }}>Contact our logistics experts for a custom strategy and a competitive quote.</p>
                    <Link to="/contact" className="btn btn-secondary btn-lg" style={{ background: 'white', color: 'var(--primary)' }}>
                        Inquire Now <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
