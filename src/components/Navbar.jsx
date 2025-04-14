import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaGlobe, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className='upperDesign'>
                <div>Lorem ipsum dolor</div>
                <div>Lorem ipsum dolor</div>
                <div>Lorem ipsum dolor</div>
            </div>
            <nav className="navbar">
                <div className="logo navbar">
                    <img src="/assets/logo.png" alt="Logo" className="logo-image" />
                </div>
                <div className="logo-text-container">
                    <h1 className="logo-text">LOGO</h1>
                    <div className="mini-navbar">
                        <a href="/shop">SHOP</a>
                        <a href="/skill">SKILL</a>
                        <a href="/story">STORIES</a>
                        <a href="/about">ABOUT</a>
                        <a href="/contactus">CONTACT US</a>
                    </div>
                </div>
                <div className="navbar-icons">
                    <FaSearch className="icon" /> {/* Search Icon */}
                    <FaHeart className="icon" /> {/* Wishlist Icon */}
                    <FaShoppingCart className="icon" /> {/* Cart Icon */}
                    <div className="dropdown">
                        <FaGlobe className="icon" /> {/* Language Icon */}
                        <div className="dropdown-content">
                            <a href="/eng">English</a>
                            <a href="/hindi">हिंदी</a>
                            <a href="/esponal">Español</a>
                            {/* Add more languages here */}
                        </div>
                    </div>
                    <FaUser className="icon" /> {/* Profile Icon */}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
