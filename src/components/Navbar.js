import React from "react";

const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img
          src="/images/rusteze-logo.jpg"
          alt="RUSTEZE Logo"
        />
      </div>

      <ul className="navbar-links">
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
