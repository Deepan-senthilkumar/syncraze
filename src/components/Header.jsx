import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            {/* Top Bar */}
            <div id="top-bar" className="top-header">
                <div className="top-header-inner">
                    <div className="container top-bar-content">
                        <a href="/" className="top-bar__logo">
                            <img src="/images/syncraze/logo2.png" alt="Syncraze" />
                        </a>
                        <div className="topHeader">“REVOLUTIONIZING BUSINESSES THROUGH CONNECTIVITY”</div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="main-nav">
                <div className="container nav-content">
                    <ul className="nav-links">
                        <li><NavLink to="/" end>HOME</NavLink></li>
                        <li><NavLink to="/platform">PLATFORM</NavLink></li>
                        <li><NavLink to="/solution">SOLUTION</NavLink></li>
                        <li><NavLink to="/analytics">ANALYTICS</NavLink></li>
                        <li><NavLink to="/resources">RESOURCES</NavLink></li>
                        <li><NavLink to="/products">PRODUCTS</NavLink></li>
                        <li><NavLink to="/pricing">PRICING</NavLink></li>
                        <li><NavLink to="/about">ABOUT US</NavLink></li>
                    </ul>
                    <div className="nav-actions">
                        <a href="#live-demo" className="btn btn-live-demo">LIVE DEMO</a>
                        <a href="#login" className="btn btn-login">LOG IN</a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
