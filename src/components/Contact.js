import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleEmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=kushalkumarnandi9064@gmail.com&su=Marketing+Inquiry",
      "_blank"
    );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact Marketing Team</h2>
        <p className="contact-subtitle">
          Have questions, partnership ideas, or sponsorship inquiries?  
          Reach out and we’ll get back to you fast!
        </p>

        <div className="contact-card">
          <div className="glow-circle"></div>

          <div className="contact-info-box">
            <p className="contact-label">📞 Phone</p>
            <p className="contact-info">+91 88378 67116</p>
          </div>

          <div className="contact-info-box">
            <p className="contact-label">📧 Email</p>
            <p className="contact-info">kushalkumarnandi9064@gmail.com</p>
          </div>

          <button onClick={handleEmailClick} className="contact-mail-btn">
            <i className="fas fa-envelope"></i> Send Email
          </button>
        </div>

        <div className="social-links">
          <a href="https://www.instagram.com/rusteze.offc/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/rustezepec/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
