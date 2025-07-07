import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-item active" : "nav-item";

  return (
    <nav className="custom-navbar">
      <div className="nav-container">
        <div className="brand">Gajulapalli Infra</div>

        {/* Desktop Nav */}
        <div className="nav-links">
          <NavLink to="/" className={getLinkClass}>Home</NavLink>
          <NavLink to="/about" className={getLinkClass}>About</NavLink>
          <NavLink to="/services" className={getLinkClass}>Services</NavLink>
          <NavLink to="/projects" className={getLinkClass}>Projects</NavLink>
          <NavLink to="/contact" className={getLinkClass}>Contact</NavLink>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={handleMenuToggle}>
          <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" className="hamburger-icon">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" className="mobile-item" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className="mobile-item" onClick={closeMenu}>About</NavLink>
          <NavLink to="/services" className="mobile-item" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/projects" className="mobile-item" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/contact" className="mobile-item" onClick={closeMenu}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
