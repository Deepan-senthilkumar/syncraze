import React from 'react';

const Pricing = () => {
    return (
        <div className="pricing-page">
            <section className="platform-section bg-blue">
                <div className="container text-center">
                    <h2 className="section-title">Flexible. Transparent. Scalable.</h2>
                    <p className="text-subtitle">Our Pricing Model is Built Around You</p>
                </div>
            </section>

            <section className="platform-section bg-dark-blue">
                <div className="container">
                    <div className="pricing-grid">

                        {/* DISCOVER */}
                        <div className="pricing-card card-white">
                            <h3 className="card-title-blue">DISCOVER</h3>
                            <div className="price-tag">Free for 30 days</div>
                            <p className="mb-20">Experience the power of intelligent facilities.</p>
                            <ul className="feature-list">
                                <li>• Core CAFM modules</li>
                                <li>• Guided onboarding</li>
                            </ul>
                            <a href="#" className="btn btn-live-demo d-block text-center">Start Free Trial</a>
                        </div>

                        {/* IGNITE */}
                        <div className="pricing-card card-blue scale-up">
                            <h3 className="mb-10">IGNITE</h3>
                            <p className="mb-20 opacity-90">Start your Journey</p>
                            <ul className="feature-list">
                                <li>• Mobile App</li>
                                <li>• Work Orders & PPMs</li>
                                <li>• Unlimited Requesters</li>
                                <li>• Custom Dashboards</li>
                            </ul>
                        </div>

                        {/* ELEVATE */}
                        <div className="pricing-card card-white">
                            <h3 className="card-title-blue">ELEVATE</h3>
                            <p className="mb-20">Empower your operations</p>
                            <ul className="feature-list">
                                <li>• Vendor Management</li>
                                <li>• Audit & Inspections</li>
                                <li>• Helpdesk Dashboard</li>
                            </ul>
                        </div>

                        {/* ASCEND */}
                        <div className="pricing-card card-white">
                            <h3 className="card-title-blue">ASCEND</h3>
                            <p className="mb-20">Enterprise intelligence</p>
                            <ul className="feature-list">
                                <li>• Multi-Location Tools</li>
                                <li>• Custom Workflows</li>
                                <li>• ERP Integrations</li>
                            </ul>
                        </div>

                    </div>

                    <div className="text-center mt-60">
                        <h2 className="mb-20">Request a Quote</h2>
                        <a href="#" className="btn btn-quote">GET A QUOTE</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
