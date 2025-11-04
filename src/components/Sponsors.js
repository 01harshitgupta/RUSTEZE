import React, { useState } from 'react';
import { motion } from "framer-motion";

const Sponsors = () => {
  const [showContent, setShowContent] = useState(false);

  const handleEmailClick = () => {
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=kushakumarnandi9064l@gmail.com&su=Sponsorship+Inquiry',
      '_blank'
    );
  };

  return (
    <div className="section sponsors" id="sponsors">
      <h2>Our Sponsors</h2>
      <div className="sponsors-list">
        <div className="sponsor">
          {/* <img src="/images/sponsor1-logo.jpg" alt="Sponsor 1" /> */}
        </div>
        {/* Add more sponsor logos here */}
      </div>

      <button 
        className={`cta-btn sponsor-cta ${showContent ? 'active' : ''}`} 
        onClick={() => setShowContent(!showContent)}
      >
        {showContent ? 'Hide Details' : 'Become a Sponsor'}
      </button>

      <motion.div 
        className="sponsor-content"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: showContent ? 1 : 0,
          height: showContent ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="sponsor-pitch">
          <h2>Partner with RUSTEZE Racing</h2>
          <p>
            Join the winning team! RUSTEZE Racing offers unique partnership opportunities
            that put your brand in the spotlight of competitive karting.
          </p>

          <h3>Why Partner with Us?</h3>
          <ul>
            <li>🏆 Proven track record of success in national competitions</li>
            <li>🎯 Targeted exposure to motorsport enthusiasts and young talents</li>
            <li>🌟 Premium brand placement on karts, uniforms, and team merchandise</li>
            <li>📱 Active social media presence and regular content creation</li>
            <li>🤝 Exclusive networking events with team and industry professionals</li>
          </ul>

          <h3>Sponsorship Tiers</h3>
          <div className="sponsor-tiers">
            <div className="tier">
              <h4>Silver Partner</h4>
              <p>Logo placement on team uniforms and one kart</p>
            </div>
            <div className="tier">
              <h4>Gold Partner</h4>
              <p>Premium logo placement on all karts and team merchandise</p>
            </div>
            <div className="tier">
              <h4>Platinum Partner</h4>
              <p>Title sponsorship rights and exclusive branding opportunities</p>
            </div>
          </div>

          <div className="sponsor-contact">
            <p className="contact-note">
              Ready to accelerate your brand? Contact our marketing team to discuss partnership
              opportunities.
            </p>
            <button className="contact-sponsor-btn" onClick={handleEmailClick}>
              Contact About Sponsorship
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
