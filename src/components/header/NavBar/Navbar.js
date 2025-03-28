import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // کنترل نمایش منو

  const handleItemClick = (event) => {
    event.preventDefault();
    const targetLi = event.target.closest("li");
    if (targetLi) {
      setActiveItem(targetLi.getAttribute("data-name"));
      setMenuOpen(false); // بعد از انتخاب، منو بسته شود
    }
  };

  return (
    <div className="navbar-container">
      <div className="container d-flex justify-content-between align-items-center">
        <h2 className="logo">ROYANSITE <span>.net</span></h2>

        {/* دکمه منوی همبرگری */}
        <button className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* منو */}
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          <ul className="menu-list" onClick={handleItemClick}>
            <li data-name="Home" className={activeItem === "Home" ? "active" : ""}>
              <a className="nav-link" href="#hero">Home</a>
            </li>
            <li data-name="About" className={activeItem === "About" ? "active" : ""}>
              <a className="nav-link" href="#about">About</a>
            </li>
            <li data-name="Services" className={activeItem === "Services" ? "active" : ""}>
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li data-name="Contact" className={activeItem === "Contact" ? "active" : ""}>
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li data-name="Blog" className={activeItem === "Blog" ? "active" : ""}>
              <a className="nav-link last-item" href="#blog">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
