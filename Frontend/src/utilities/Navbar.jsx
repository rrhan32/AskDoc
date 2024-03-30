import React from 'react';
import './Navbar.css'; // Import your CSS file for styling (optional)

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="vite.svg" alt="Your Logo" />  {/* Replace with your logo image path */}
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        {/* Add more navigation links here */}
      </ul>
    </nav>
  );
};

export default Navbar;
