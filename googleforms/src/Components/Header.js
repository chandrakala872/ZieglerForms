import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="logo">
                    <i className="fas fa-file-alt" style={{ color: 'white' }}></i>
                    <span className="brand-name">Ziegler Forms</span>
                </div>
            </div>
            <div className="navbar-right">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <div className="menu-icon">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    );
};

export default Header;
