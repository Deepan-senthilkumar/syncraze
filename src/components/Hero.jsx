import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-grid">
                <h1 className="hero-title">
                    “An intelligent platform connecting people, devices, tasks, and events for real-time insights and significant performance gains”
                </h1>
                <div className="hero-visual">
                    <video autoPlay loop muted playsInline className="ai-image">
                        <source src="/images/video/menu.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p className="hero-subtext">“Real-time visibility & automated workflows.”</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
