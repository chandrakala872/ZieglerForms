

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 


const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="logo">
                    <i className="fas fa-file-alt" style={{ color: 'white' }}></i> 
                    <span className="brand-name">Google Forms</span>
                </div>
            </div>
            <div className="navbar-right">
                <i className="fas fa-bars"></i> 
            </div>
        </nav>
    );
};

export default Header;
