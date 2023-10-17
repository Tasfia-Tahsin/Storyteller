import React from 'react';
// Import the CSS file for your Navbar
import logoSVG from '../Illustrations/logo.png'; // Import the SVG file
import './../Styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logoSVG} alt="Logo" className="logo-image" />
      </div>
      <ul className="navbar-list">
        <li className="navbar-item"><a href="/" className="navbar-link">About</a></li>
        <li className="navbar-item"><a href="/" className="navbar-link">Tours</a></li>
        <li className="navbar-item"><a href="/" className="navbar-link">Blog</a></li>
        <li className="navbar-item"><a href="/" className="navbar-link">FAQ</a></li>
        <li className="navbar-item menu-icon">&#9776;</li> {/* Hamburger menu icon */}
      </ul>
    </nav>
  );
}

export default Navbar;
