import React from 'react';

const Solution = () => {
    return (
        <div className="solution-page">
            <section className="platform-section bg-blue">
                <div className="container text-center">
                    <h2 className="section-title">"Tailored Smart Solutions for Every Environment"</h2>
                </div>
                <div className="container grid-cards mt-40">
                    <div className="solution-card">
                        <h3>Facilities Management</h3>
                        <p>Full lifecycle control from mobilization to performance tracking.</p>
                    </div>
                    <div className="solution-card">
                        <h3>Property Management</h3>
                        <p>Tenant engagement, CRM, leasing, & maintenance portals.</p>
                    </div>
                    <div className="solution-card">
                        <h3>Hospitality & Retail</h3>
                        <p>Service quality monitoring, housekeeping, asset upkeep.</p>
                    </div>
                    <div className="solution-card">
                        <h3>Healthcare & Education</h3>
                        <p>Compliance tracking, safety checks, asset lifecycle management.</p>
                    </div>
                    <div className="solution-card">
                        <h3>Corporate & Industrial</h3>
                        <p>Integrated maintenance, workplace optimization, sustainability metrics.</p>
                    </div>
                    <div className="solution-card">
                        <h3>Public & Smart Cities</h3>
                        <p>Centralized monitoring across multiple sites and smart assets.</p>
                    </div>
                </div>
            </section>

            <section className="platform-section bg-dark-blue">
                <div className="container">
                    <h2 className="section-title text-center">KEY BENEFITS</h2>
                    <div className="grid-3-col mt-40">
                        <div className="benefit-card">
                            <h3>Reduce Costs</h3>
                        </div>
                        <div className="benefit-card">
                            <h3>Improve Compliance</h3>
                        </div>
                        <div className="benefit-card">
                            <h3>Optimize Resources</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Solution;
