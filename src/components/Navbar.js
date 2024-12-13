import React from 'react';
import './Navbar.css'; // Optional: Add custom styles for Navbar

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo">Foodwagon</div>
            <div className="location">Deliver to: <span id="location">Mohammadpur Bus Stand, Dhaka</span></div>
            <div className="search-login">
                <button className="search-button">Search Food</button>
                <button className="login-button">Login</button>
            </div>
        </header>
    );
};

export default Navbar;