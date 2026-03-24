import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Terms.css';

const Terms = () => {
    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({ duration: 1000, once: true, offset: 100 });
        }
    }, []);

    return (
        <div className="terms-page fade-in">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <span className="section-tag" style={{ color: 'var(--primary-light)' }}>Legalities</span>
                    <h1 className="heading-lg">Terms & <span className="text-gradient">Conditions</span></h1>
                    <div className="flex justify-center items-center gap-md">
                        <Link to="/" style={{ color: 'white', fontWeight: 600 }}>Home</Link>
                        <i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', opacity: 0.5 }}></i>
                        <span style={{ opacity: 0.8 }}>Terms</span>
                    </div>
                </div>
            </section>

            {/*  Terms Content  */}
            <section className="container">
                <div className="terms-wrapper" data-aos="fade-up">
                    <div className="terms-last-updated">
                        <i className="fas fa-clock-rotate-left"></i>
                        <span>Effective Revision: March 2026</span>
                    </div>

                    <div className="terms-content">
                        <div className="terms-block">
                            <h2>1. Introduction</h2>
                            <p>These Terms and Conditions govern the provision of logistics and transportation services by Roveta Logistics, operating from Panadura, Sri Lanka. By engaging our services, you agree to comply with and be bound by these professional standards.</p>
                        </div>

                        <div className="terms-block">
                            <h2>2. Service Scope</h2>
                            <p>Roveta Logistics provides islandwide goods transportation across all 25 districts. Our service commitment includes:</p>
                            <ul>
                                <li>Punctual pickup and delivery orchestration.</li>
                                <li>Secure handling of commercial and personal cargo.</li>
                                <li>Specialized loading/unloading support (upon request).</li>
                                <li>Temporary transit buffering/warehousing.</li>
                            </ul>
                        </div>

                        <div className="terms-block">
                            <h2>3. Financial Terms</h2>
                            <ul>
                                <li>Service fees are based on the total distance (RS. 150/KM base) and cargo complexity.</li>
                                <li>Quotations are valid for 14 days from the date of issuance.</li>
                                <li>Standard payment terms require settlement upon delivery unless prior corporate credit is established.</li>
                                <li>All prices are subject to prevailing taxes and government levies where applicable.</li>
                            </ul>
                        </div>

                        <div className="terms-block">
                            <h2>4. Cargo Safety & Liability</h2>
                            <p>While we exercise extreme caution, our liability for cargo is limited to the declared value at the time of booking. We strongly recommend independent insurance for mission-critical or fragile biological/electronic components.</p>
                        </div>

                        <div className="terms-block">
                            <h2>5. Prohibited Items</h2>
                            <p>We strictly refuse the transportation of illegal substances, hazardous chemical waste, unlicensed firearms, and any materials prohibited under the laws of the Democratic Socialist Republic of Sri Lanka.</p>
                        </div>

                        <div className="terms-block">
                            <h2>6. Corporate Contact</h2>
                            <p>For legal inquiries or dispute resolution, please contact our administrative office:</p>
                            <div className="terms-contact">
                                <p><i className="fas fa-building"></i> <strong>Roveta Logistics Admin</strong></p>
                                <p><i className="fas fa-location-dot"></i> 150/06, Salgado Road, Wekada, Panadura</p>
                                <p><i className="fas fa-phone"></i> <a href="tel:+94779996386">+94 77 999 6386</a></p>
                                <p><i className="fas fa-envelope"></i> <a href="mailto:rovetalogistic@gmail.com">rovetalogistic@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
