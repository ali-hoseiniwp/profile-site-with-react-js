import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleItemClick = (event) => {
    event.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
    const targetLi = event.target.closest("li");
    if (targetLi) {
      const sectionId = targetLi.querySelector("a").getAttribute("href"); // گرفتن ID بخش
      smoothScrollTo(sectionId, 1000); // اسکرول نرم به بخش مورد نظر با مدت 1000 میلی‌ثانیه
      setActiveItem(targetLi.getAttribute("data-name"));
      setMenuOpen(false);
    }
  };

  const smoothScrollTo = (target, duration) => {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animationScroll(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const ease = easeInOutSine(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, ease);
      if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    }

    function easeInOutSine(t, b, c, d) {
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }

    requestAnimationFrame(animationScroll);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <h2 className="logo">ROYANSITE <span>.net</span></h2>

        <button className={`hamburger-menu ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>

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
