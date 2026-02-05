import React from 'react';

const Resources = () => {
    return (
        <div className="resources-page">
            <section className="platform-section bg-blue">
                <div className="container text-center">
                    <h2 className="section-title">"Empowering Facilities Professionals Through Knowledge"</h2>
                </div>
            </section>

            <section className="platform-section bg-white">
                <div className="container">
                    <div className="resource-grid grid-3-col">
                        <div className="resource-card">
                            <h3>WHITE PAPER</h3>
                            <p>In-depth industry analysis and trends.</p>
                        </div>
                        <div className="resource-card">
                            <h3>TUTORIALS & WEBINARS</h3>
                            <p>Learn how to maximize Syncraze potential.</p>
                        </div>
                        <div className="resource-card">
                            <h3>NEWS & UPDATES</h3>
                            <p>Latest announcements and features.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="platform-section bg-light">
                <div className="container text-center">
                    <h2 className="section-title text-primary">GUIDE TO SUCCESS</h2>
                    <p>Comprehensive guides for every role.</p>
                </div>
            </section>

            <section className="platform-section bg-blue">
                <div className="container text-center">
                    <h2 className="section-title">CASE STUDIES</h2>
                    <div className="mt-40">
                        <a href="#" className="btn btn-quote">Notify Me When Available</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;
