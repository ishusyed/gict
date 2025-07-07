import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand and Social Media */}
        <div className="footer-left">
          <h2 className="footer-title">Gajulapalli Infra</h2>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/gic.construction?igsh=dHN0OHpicXN1bnk2" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/gajulapalli-infra-construction/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="footer-contact-info">
            <div className="footer-contact-address">Pamuru, Andhrapradesh</div>
            <div className="footer-contact-phone">Phone: +91 9347556512</div>
            <div className="footer-contact-email">Email: gajulapalliinfra.constructions@gmail.com</div>
          </div>
        </div>

        {/* Navbar Links in Footer */}
        <div className="footer-nav-links">
          <Link to="/" className="footer-nav-item">Home</Link>
          <Link to="/about" className="footer-nav-item">About</Link>
          <Link to="/services" className="footer-nav-item">Services</Link>
          <Link to="/projects" className="footer-nav-item">Projects</Link>
          <Link to="/contact" className="footer-nav-item">Contact</Link>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="footer-bottom">
        &copy; {currentYear} Gajulapalli Infra and Constructions. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
