import React from "react";
import { motion } from "framer-motion";
import "./Sponsors.css";

const Sponsors = () => {
  const handleEmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=kushalkumarnandi9064l@gmail.com&su=Sponsorship+Inquiry",
      "_blank"
    );
  };

  return (
    <section className="sponsor-section" id="sponsors">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Looking for Sponsors 🚀
      </motion.h2>

      <motion.p
        className="sponsor-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We’re a passionate student karting team building and racing with innovation, teamwork,
        and speed.  
        <br />Your support can help us reach the next level!
      </motion.p>

      <motion.div
        className="sponsor-actions"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="sponsor-btn"
          onClick={handleEmailClick}
        >
          Become a Sponsor
        </motion.button>
      </motion.div>

      <motion.p
        className="sponsor-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Let’s build something incredible together.
      </motion.p>
    </section>
  );
};

export default Sponsors;
