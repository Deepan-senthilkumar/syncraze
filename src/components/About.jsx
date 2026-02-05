import React from 'react';

const About = () => {
    return (
        <div className="about-page">
            <section className="platform-section bg-blue">
                <div className="container text-center max-w-800">
                    <h2 className="section-title">OUR VISION</h2>
                    <p className="text-lg">Connecting people, assets, and data to build intelligent, sustainable, seamlessly integrated operations for a smarter world.</p>
                </div>
            </section>

            <section className="platform-section bg-dark-blue">
                <div className="container text-center max-w-800">
                    <h2 className="section-title">OUR MISSION</h2>
                    <p className="text-lg">To empower organizations through intelligent connectivity, transforming facilities and operations into seamless, data-driven ecosystems.</p>
                </div>
            </section>

            <section className="platform-section bg-white text-primary">
                <div className="container">
                    <h2 className="section-title text-center text-primary">OUR CORE VALUES</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <h4>Innovation</h4>
                            <p>We constantly push boundaries — using data, automation, and AI-driven technology.</p>
                        </div>
                        <div className="value-item">
                            <h4>Unity</h4>
                            <p>We unify people, systems, and processes to create continuous collaboration.</p>
                        </div>
                        <div className="value-item">
                            <h4>Clarity</h4>
                            <p>We design technology that transforms complexity into clarity.</p>
                        </div>
                        <div className="value-item">
                            <h4>Trust</h4>
                            <p>We build trust through transparency, reliability, and secure systems.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
