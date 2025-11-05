import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img
          src="/images/rusteze-logo.jpg"
          alt="RUSTEZE Logo"
        />
      </div>
      

      <button 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li onClick={() => scrollTo("team")}>Team</li>
        <li onClick={() => scrollTo("Driver")}>Driver</li>
        <li onClick={() => scrollTo("gallery")}>Gallery</li>
        <li onClick={() => scrollTo("sponsors")}>Sponsors</li>
        <li onClick={() => scrollTo("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
