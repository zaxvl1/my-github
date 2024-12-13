import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Are you starving?</h1>
            <p>Within a few clicks, find meals that are accessible near you</p>
            <div className="search-bar">
                <input type="text" placeholder="Enter Your Address" />
                <button>Find Food</button>
            </div>
        </div>
    );
};

export default Header;
