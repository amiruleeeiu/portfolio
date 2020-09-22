import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="d-flex justify-content-between header">
            <div>
                <h2 style={{color:'white',marginLeft:'50px',marginTop:'10px'}}>Amirul Islam</h2>
            </div>
            <div className="navbar">
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/service">Service</a>
                    <a href="/project">Project</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;