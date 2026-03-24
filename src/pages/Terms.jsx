import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Terms.css';

const Terms = () => {

    useEffect(() => {
        // AOS Init
        if (window.AOS) {
            window.AOS.init({ duration: 800, once: true, offset: 80 });
        }
    }, []);

    return (
        <div className="terms-page">
            {/*  Page Header  */}
            <section className="page-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <div className="page-header-content">
                        <span className="page-tag">Legal</span>
                        <h1>Terms & <span className="text-gradient" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Conditions</span></h1>
                        <nav className="breadcrumb" aria-label="Breadcrumb">
                            <Link to="/">Home</Link>
                            <i className="fas fa-chevron-right"></i>
                            <span>Terms & Conditions</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/*  Terms Content  */}
            <section className="section terms-section" style={{ padding: '80px 0', background: 'var(--gray-50)' }}>
                <div className="container">
                    <div className="terms-wrapper" data-aos="fade-up">
                        <div className="terms-last-updated">
                            <i className="fas fa-calendar-alt"></i>
                            <span>Last Updated: March 2026</span>
                        </div>

                        <div className="terms-content">
                            <div className="terms-block">
                                <h2>1. General Terms</h2>
                                <p>These Terms and Conditions ("Terms") govern the provision of goods transportation and
                                    logistics services by Roveta Logistics ("Company," "we," "us," or "our"), located at 150/06,
                                    Salgado Road, Wekada, Panadura, Sri Lanka, to the client ("Customer," "you," or "your").</p>
                                <p>By engaging our services, you acknowledge that you have read, understood, and agree to be
                                    bound by these Terms. If you do not agree to these Terms, please do not use our services.</p>
                            </div>

                            <div className="terms-block">
                                <h2>2. Services</h2>
                                <p>Roveta Logistics provides goods transportation services across all 25 districts of Sri Lanka.
                                    Our services include:</p>
                                <ul>
                                    <li>Door-to-door goods pickup and delivery</li>
                                    <li>Loading and unloading assistance (where agreed upon)</li>
                                    <li>Temporary warehousing (subject to availability)</li>
                                    <li>Express delivery options</li>
                                </ul>
                                <p>The scope of each service engagement will be agreed upon prior to commencement and confirmed
                                    through a quote acceptance.</p>
                            </div>

                            <div className="terms-block">
                                <h2>3. Pricing & Payment</h2>
                                <ul>
                                    <li>Our rates for goods transportation are calculated on a per-kilometer basis, based on the
                                        distance from pickup to delivery location via the most efficient route. Contact us for
                                        current pricing.</li>
                                    <li>Additional charges may apply for loading/unloading services, express delivery,
                                        warehousing, or special handling requirements. These will be communicated and agreed
                                        upon before service commencement.</li>
                                    <li>Payment is due upon delivery of goods unless otherwise agreed in writing.</li>
                                    <li>The Company reserves the right to revise pricing with prior notice.</li>
                                </ul>
                            </div>

                            <div className="terms-block">
                                <h2>4. Booking & Cancellation</h2>
                                <ul>
                                    <li>Bookings can be made via phone (+94 77 999 6386), email (rovetalogistic@gmail.com),
                                        WhatsApp, or through our website inquiry form.</li>
                                    <li>All bookings are subject to vehicle availability and confirmation by the Company.</li>
                                    <li>Cancellations made at least 24 hours before the scheduled pickup time will not incur any
                                        charges.</li>
                                    <li>Cancellations made less than 24 hours before the scheduled pickup may incur a
                                        cancellation fee of up to 25% of the quoted amount.</li>
                                    <li>The Company reserves the right to cancel or reschedule services due to unforeseen
                                        circumstances, natural disasters, or road conditions.</li>
                                </ul>
                            </div>

                            <div className="terms-block">
                                <h2>5. Customer Responsibilities</h2>
                                <ul>
                                    <li>The Customer must provide accurate information regarding the nature, quantity, weight,
                                        and dimensions of goods to be transported.</li>
                                    <li>The Customer must ensure that all goods are properly packed and labeled before pickup
                                        unless loading services have been arranged.</li>
                                    <li>The Customer is responsible for ensuring that the goods being transported are legal and
                                        do not violate any laws of Sri Lanka.</li>
                                    <li>The Customer must be present (or have an authorized representative) at both pickup and
                                        delivery locations at the agreed times.</li>
                                    <li>The Customer is responsible for providing accurate pickup and delivery addresses and
                                        contact information.</li>
                                </ul>
                            </div>

                            <div className="terms-block">
                                <h2>6. Prohibited Goods</h2>
                                <p>We do not transport the following items:</p>
                                <ul>
                                    <li>Illegal substances or contraband</li>
                                    <li>Explosives, firearms, or ammunition</li>
                                    <li>Hazardous chemicals or radioactive materials</li>
                                    <li>Live animals (unless specifically arranged)</li>
                                    <li>Perishable goods without proper packaging</li>
                                    <li>Cash, jewelry, or precious stones in large quantities</li>
                                    <li>Any goods prohibited by the laws of Sri Lanka</li>
                                </ul>
                            </div>

                            <div className="terms-block">
                                <h2>7. Liability & Insurance</h2>
                                <ul>
                                    <li>Roveta Logistics will exercise reasonable care in handling and transporting goods.
                                        However, the Company's liability for loss or damage is limited to the declared value of
                                        the goods at the time of booking.</li>
                                    <li>The Company is not liable for loss or damage caused by improper packing by the Customer,
                                        natural disasters, acts of God, accidents beyond our control, or government actions.</li>
                                    <li>Claims for loss or damage must be reported within 48 hours of delivery.</li>
                                    <li>The Customer may arrange additional insurance coverage for high-value goods at their own
                                        expense.</li>
                                </ul>
                            </div>

                            <div className="terms-block">
                                <h2>8. Delivery Timelines</h2>
                                <ul>
                                    <li>Estimated delivery times are provided as guidelines and may vary due to traffic,
                                        weather, road conditions, or other factors beyond our control.</li>
                                    <li>The Company will make every effort to meet the estimated delivery time but does not
                                        guarantee exact delivery times.</li>
                                    <li>The Company is not liable for any consequential losses arising from delays in delivery.</li>
                                </ul>
                            </div>

                            <div className="terms-block">
                                <h2>9. Privacy & Data Protection</h2>
                                <p>We collect and process personal information (name, contact details, addresses) solely for the
                                    purpose of providing our transportation services. We are committed to protecting your
                                    privacy and will not share your information with third parties except as required by law or
                                    for the completion of the contracted service.</p>
                            </div>

                            <div className="terms-block">
                                <h2>10. Dispute Resolution</h2>
                                <p>Any disputes arising from these Terms or our services shall first be attempted to be resolved
                                    through good-faith negotiation. If a resolution cannot be reached, the dispute shall be
                                    referred to mediation or arbitration in accordance with the laws of Sri Lanka, with Panadura
                                    as the jurisdiction.</p>
                            </div>

                            <div className="terms-block">
                                <h2>11. Modifications to Terms</h2>
                                <p>Roveta Logistics reserves the right to modify these Terms at any time. Updated Terms will be
                                    posted on our website. Continued use of our services after modifications constitutes
                                    acceptance of the updated Terms.</p>
                            </div>

                            <div className="terms-block">
                                <h2>12. Contact Us</h2>
                                <p>For any questions or concerns regarding these Terms and Conditions, please contact us:</p>
                                <div className="terms-contact">
                                    <p><i className="fas fa-building"></i> Roveta Logistics</p>
                                    <p><i className="fas fa-location-dot"></i> 150/06, Salgado Road, Wekada, Panadura</p>
                                    <p><i className="fas fa-phone"></i> <a href="tel:+94779996386">+94 77 999 6386</a></p>
                                    <p><i className="fas fa-envelope"></i> <a href="mailto:rovetalogistic@gmail.com">rovetalogistic@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
