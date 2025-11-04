import React from 'react';

const Contact = () => {
  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=kushalkumarnandi9064@gmail.com&su=Marketing+Inquiry', '_blank');
  };

  return (
    <div className="contact">
      <h2>Contact Marketing Team</h2>

      <div className="contact-card">
        <div className="glow-circle"></div>

        <p className="contact-label">Phone:</p>
        <p className="contact-info">+91 8837867116</p>

        <p className="contact-label">Email:</p>
        <p className="contact-info">kushalkumarnandi9064@gmail.com</p>

        <button onClick={handleEmailClick} className="contact-mail-btn">
          <i className="fas fa-envelope"></i> Send Email
        </button>
      </div>
    </div>
  );
};

export default Contact;
