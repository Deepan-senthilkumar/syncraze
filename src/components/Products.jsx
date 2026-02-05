import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className="products-page">
            <section className="platform-section bg-light">
                <div className="container products-layout">
                    {/* Sidebar Filters */}
                    <aside className="products-sidebar">
                        <div className="sidebar-header">
                            <h3>Filters</h3>
                            <button className="btn-clear">Clear All</button>
                        </div>

                        <div className="filter-group">
                            <h4>Product Type</h4>
                            <label><input type="checkbox" /> All Products</label>
                            <label><input type="checkbox" /> Paper</label>
                            <label><input type="checkbox" /> Packaging Board</label>
                        </div>

                        <div className="filter-group">
                            <h4>GSM Range</h4>
                            <label><input type="checkbox" /> 40–60 GSM</label>
                            <label><input type="checkbox" /> 60–80 GSM</label>
                            <label><input type="checkbox" /> 80–100 GSM</label>
                            <label><input type="checkbox" /> 100–120 GSM</label>
                        </div>

                        <div className="filter-group">
                            <h4>Application</h4>
                            <label><input type="checkbox" /> Printing</label>
                            <label><input type="checkbox" /> Publishing</label>
                            <label><input type="checkbox" /> Notebooks</label>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <main className="products-content">
                        <div className="products-search-bar">
                            <input type="text" placeholder="Search products..." />
                        </div>

                        <div className="products-grid">
                            {/* Product Cards */}
                            {['TNPL Ace Marvel', 'TNPL Radiant Stationery', 'TNPL Radiant Platinum', 'TNPL Platinum', 'TNPL Elegant Print', 'TNPL Eco Maplitho', 'TNPL Spectrum', 'TNPL Copy Crown'].map((product, index) => (
                                <div className="product-card" key={index}>
                                    <div className="product-image-placeholder"></div>
                                    <div className="product-info">
                                        <h4>{product}</h4>
                                        <Link to="#" className="btn-view-product">View Details</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </section>
        </div>
    );
};

export default Products;
