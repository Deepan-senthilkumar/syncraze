import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-main">
                    {/* Left: Social Icons for "Logo" area as per image */}
                    <div className="footer-socials">
                        <a href="#"><i className="fab fa-telegram"></i></a>
                        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>

                    {/* Right: Subscribe Area */}
                    <div className="footer-subscribe">
                        <h4><span>Subscribe</span> for the latest update</h4>
                        <label>Email*</label>
                        <div className="input-group">
                            <input type="email" placeholder="Enter your email" />
                        </div>
                    </div>
                </div>

                {/* Bottom: Links - Top Row of Bottom Section */}
                <div className="footer-nav-links">
                    <a href="/">Home</a>
                    <a href="/platform">Platform</a>
                    <a href="/solution">Solution</a>
                    <a href="/analytics">Analytics</a>
                    <a href="/resources">Resources</a>
                    <a href="/pricing">Pricing</a>
                    <a href="/about">About Us</a>
                </div>

                {/* Separator */}
                <div className="footer-separator"></div>

                {/* Footer Bottom: Legal & Copyright */}
                <div className="footer-bottom">
                    <div className="legal-links">
                        <a href="#">Terms of Service</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Security</a>
                    </div>
                    <div className="copyright-area">
                        <span>© 2026 Syncraze.com | All rights reserved</span>
                        <a href="#" className="scroll-top-btn"><i className="fas fa-chevron-up"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
