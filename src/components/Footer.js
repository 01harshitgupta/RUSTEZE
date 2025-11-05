import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-content">
        <img src="/images/rusteze-logo.jpg" alt="Rusteze Logo" className="footer-logo" />

        <p className="footer-text">
          <span className="highlight">RUSTEZE</span> Go-Kart Team © {new Date().getFullYear()}
        </p>

        <div className="social-links">
          <a href="https://www.instagram.com/rusteze.offc/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/rustezepec/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          
        </div>
      </div>

      <div className="footer-line"></div>

      <p className="footer-credit">Built with ❤️ by Team RUSTEZE</p>
    </motion.footer>
  );
};

export default Footer;
