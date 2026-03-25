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
            features: ['Shared cargo options', 'Full vehicle dedicated', 'Priority routing', 'Multi-stop delivery']
        },
        {
            icon: 'fas fa-box-open',
            title: 'Safe Cargo Handling',
            desc: 'Expert loading and unloading services by trained professionals specialized in handling fragile and high-value materials.',
            features: ['Fragile item care', 'Heavy lift equipment', 'On-site packing', 'Warehouse transit']
        },
        {
            icon: 'fas fa-route',
            title: 'Islandwide Logistics',
            desc: 'A comprehensive network that ensures your goods reach any of the 25 districts in Sri Lanka with guaranteed punctuality.',
            features: ['Daily scheduled routes', 'Real-time updates', 'Last-mile delivery', 'Provincial hubs']
        }
    ];

    const faqs = [
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section py-4xl" style={{ backgroundColor: 'var(--background)', position: 'relative', overflow: 'hidden' }}>
                {/* Decorative background circle */}
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.03), transparent)', borderRadius: '50%', zIndex: 0 }}></div>
                
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Workflow</span>
                        <h2 className="heading-md">Our <span className="text-gradient">Professional</span> Approach</h2>
                        <p className="text-lg">Experience a seamless end-to-end logistics process optimized for efficiency.</p>
                    </div>

                    <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-2xl)', marginTop: 'var(--space-3xl)' }}>
                        {[
                            { step: '01', icon: 'fas fa-clipboard-list', title: 'Consultation', desc: 'We analyze your logistics requirements to recommend the best shipping solution.' },
                            { step: '02', icon: 'fas fa-truck-loading', title: 'Secure Loading', desc: 'Professional handling and packing of your cargo ensuring maximum safety.' },
                            { step: '03', icon: 'fas fa-map-marked-alt', title: 'Islandwide Delivery', desc: 'Timely and efficient delivery to any of the 25 districts in Sri Lanka.' }
                        ].map((process, i) => (
                            <div key={i} className="process-card" data-aos="fade-up" data-aos-delay={i * 150} style={{ textAlign: 'center', position: 'relative' }}>
                                <div className="step-number-pill" style={{ display: 'inline-block', padding: '10px 24px', background: 'hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.05)', borderRadius: 'var(--radius-full)', color: 'var(--primary)', fontWeight: 800, fontSize: '0.8rem', marginBottom: '20px', letterSpacing: '2px' }}>STEP {process.step}</div>
                                <div style={{ width: '80px', height: '80px', margin: '0 auto 24px', background: 'var(--gradient-primary)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2rem', boxShadow: 'var(--shadow-glow)' }}><i className={process.icon}></i></div>
                                <h3>{process.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{process.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*  FAQ Section  */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Have Questions?</span>
                        <h2 className="heading-md">Common <span className="text-gradient">Inquiries</span></h2>
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
                                <div 
                                    className="faq-answer-container" 
                                    style={{ 
                                        maxHeight: activeFaq === idx ? '500px' : '0', 
                                        overflow: 'hidden', 
                                        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)' 
                                    }}
                                >
                                    <div className="faq-answer">
                                        <p>{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
