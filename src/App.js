import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Driver from "./components/Driver";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showStory, setShowStory] = useState(false);
  return (
    <>
      <Navbar />

     
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="hero-card" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/team.jpg)`}}>
          <div className="hero-card-inner">
            <div className="hero-text">
              <h1>The Secret Life of a <br/> <span>RUSTEZE</span> Racer!</h1>
              <p className="hero-sub">We are a passionate team competing in the Go-Kart Design Challenge (GKDC).</p>
              <button 
                className={`read-story-btn ${showStory ? 'active' : ''}`} 
                onClick={() => setShowStory(!showStory)}
              >
                {showStory ? 'Hide Story' : 'Read Story'}
              </button>
            </div>
          </div>
        </div>

        <motion.div 
          className="story-content"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: showStory ? 1 : 0,
            height: showStory ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="story-container">
            <h2>RUSTEZE — Our Story</h2>
            <p>
              RUSTEZE is a go-kart racing team built on passion, engineering and teamwork. Over the years we have
              refined our designs and pushed the limits of performance. Our journey began in a small workshop where
              ideas were transformed into reality. Today, we compete in the Go-Kart Design Challenge (GKDC), combining
              creativity with precision engineering to build fast, reliable karts.
            </p>
            <p>
              We believe in continuous learning, close collaboration, and sharing knowledge. If you'd like to join our
              team or support our events, get in touch via the Contact page. Together, we'll keep pushing the
              boundaries of what a student racing team can achieve.
            </p>
          </div>
        </motion.div>
      </motion.section>

      
      <motion.section
        id="team"
        className="section"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Team />
      </motion.section>

      <motion.section
        id="Driver"
        className="section"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Driver />
      </motion.section>

      
      <motion.section
        id="gallery"
        className="section"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5}}
      >
        <Gallery />
      </motion.section>


      <motion.section
        id="sponsors"
        className="section"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5}}
      >
        <Sponsors />
      </motion.section>


      <motion.section
        id="contact"
        className="section"
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Contact />
      </motion.section>

      <Footer />
    </>
  );
}

export default App;
