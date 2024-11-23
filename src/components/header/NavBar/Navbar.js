import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (event) => {
    if (event.target.tagName === 'li') {
      setActiveItem(event.target.textContent);
    }
  };

  return (
<div className="navbar-container">
        <div className="container d-flex justify-content-between align-items-center">
          <h2 className="logo">ROYANSITE <span>.net</span></h2>
          <nav className="navbar">
            <ul className="d-flex" onClick={handleItemClick}>
              <li className={activeItem === 'Home' ? 'active' : ''}><a className="nav-link" href="#hero">Home</a></li>
              <li className={activeItem === 'About' ? 'active' : ''}><a className="nav-link" href="#about">About</a></li>
              <li className={activeItem === 'Services' ? 'active' : ''}><a className="nav-link" href="#services">Services</a></li>
              <li className={activeItem === 'Contact' ? 'active' : ''}><a className="nav-link" href="#contact">Contact</a></li>
              <li className={activeItem === 'Blog' ? 'active' : ''}><a className="nav-link" href="#blog">Blog</a></li>
            </ul>
          </nav>
        </div>
      </div>
  );
};

export default Navbar;
