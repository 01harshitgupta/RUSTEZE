import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/videos/digital-meter.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          Built for Speed. <span>Driven by Passion.</span>
        </motion.h1>

        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }} 
          className="hero-btn"
          onClick={scrollToContact}
        >
          Join Us
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
