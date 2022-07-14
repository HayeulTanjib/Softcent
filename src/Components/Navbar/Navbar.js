import React from 'react';
import logo from '../../Assets/logo-header.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="nav_left">
                <img src={logo} alt="" />
            </div>
            <div className="nav_right">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>WORK</li>
                    <li>PREMIUM PRODUCTS</li>
                    <li>BLOG</li>
                </ul>
                <div className="nav_button">
                    <button>START A PROJECT</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;