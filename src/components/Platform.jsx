import React from 'react';

const Platform = () => {


    return (
        <div id="platform" className="platform-page">
            {/* Section 1: Digital 360 Intelligent Operational Transformation */}
            <section className="platform-section digital-360">
                <div className="container">
                    <h2 className="section-title">Digital 360° Intelligent Operational Transformation</h2>
                    <div className="image-container">
                        {/* Using the GIF as identified for the grid animation */}
                        <img src="/images/platform/21.png" alt="Digital 360 Transformation Grid" className="responsive-img" />
                    </div>
                </div>
            </section>

            {/* Section 2: Intelligent Connectivity & Seamless Integration */}
            <section className="platform-section connectivity">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">"Intelligent Connectivity & Seamless Integration"</h2>
                    <p style={{
                        textAlign: 'center',
                        fontSize: '1.2rem',
                        color: '#fff',
                        maxWidth: '900px',
                        margin: '0 auto 30px',
                        lineHeight: '1.6'
                    }}>
                    </p>
                    <div className="image-container" style={{ position: 'relative', display: 'inline-block', overflow: 'hidden' }}>
                        {/* GIF Effect: Second image overlays the first */}
                        <img
                            src="/images/platform/connectivity_base.png"
                            alt="Connectivity Base"
                            className="responsive-img"
                            style={{ width: '70%' }}
                        />
                        <img
                            src="/images/platform/syncraze_arrow.png"
                            alt="Syncraze Flow Arrow"
                            className="responsive-img overlay-animate"
                        />
                    </div>
                </div>
            </section>

            {/* Section 3: Key Platform Capabilities */}
            <section className="platform-section capabilities">
                <div className="container grid-2-col">
                    <div className="col-image">
                        <video
                            src="/images/platform/capabilities_video.mp4"
                            className="rounded-img"
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ width: '90%', height: 'auto', display: 'block' }}
                        />
                    </div>
                    <div className="col-text">
                        <h3>Key Platform Capabilities:</h3>
                        <ul className="capabilities-list">
                            <li>Unify <strong>CAFM + ERP</strong></li>
                            <li>Predict issues with <strong>AI</strong></li>
                            <li>See <strong>live</strong> dashboards</li>
                            <li>Work anywhere on <strong>mobile & web</strong></li>
                            <li>Stay compliant with an <strong>ISO-ready</strong>.</li>
                        </ul>
                        <a href="#" className="btn btn-quote">GET A QUOTE</a>
                    </div>
                </div>
            </section>

            {/* Section 4: Mobile Application */}
            <section className="platform-section mobile-app">
                <video
                    src="/images/platform/mobile_app_video.mp4"
                    className="responsive-img"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </section>

            {/* Section 5: Beside Operational Portal */}
            <section className="platform-section portal-preview">
                <div className="container">
                    <div className="banner-blue">HELPDESK OPERATIONAL PORTAL</div>
                </div>
                <div className="portal-image" style={{ textAlign: 'center', margin: '30px 0' }}>
                    <img
                        src="/images/syncraze/helpdesk.jpeg"
                        alt="Operational Portal"
                        className="responsive-img"
                        style={{ width: '80%', height: 'auto', display: 'inline-block', borderRadius: '10px' }}
                    />
                </div>
                <div className="container">
                    <p className="portal-desc">
                        Our intuitive portal allows service requests to come, plan resources, track, assign and resolve tasks from smart prioritization, real-time metrics mean response times, downtime, to service quality across operations.
                    </p>
                </div>
            </section>

            {/* Section 6: CAFM vs ERP */}
            <section className="platform-section comparison">
                <div className="container grid-2-col comparison-grid">
                    {/* CAFM Column (Dark Blue) */}
                    <div className="col-cafm">
                        <h3>CAFM</h3>
                        {/* Assuming there's an image for this or we construct it. Using Group 5 or similar for now if it exists, otherwise framing */}
                        <img src="/images/platform/Group%205.png" alt="CAFM Flow" className="responsive-img" />
                    </div>
                    {/* ERP Column (Light/White) */}
                    <div className="col-erp">
                        <h3>ERP</h3>
                        <img src="/images/platform/1%20(2).png" alt="ERP Flow" className="responsive-img" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Platform;
