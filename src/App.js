import React from "react";
import { motion } from "framer-motion";

import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Driver from "./components/Driver";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Sponsors from "./components/Sponsors";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RustezeButton from "./components/RustezeButton";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <motion.section
        id="about"
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <About />
      </motion.section>

      <motion.section
        id="team"
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Team />
      </motion.section>

      <motion.section
        id="gallery"
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Gallery />
      </motion.section>

      <motion.section
        id="blog"
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Blog />
      </motion.section>

      <section id="Driver">
        <Driver />
      </section>

      <motion.section
        id="sponsors"
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Sponsors />
      </motion.section>

      <motion.section
        id="events"
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Events />
      </motion.section>

      <motion.section
        id="contact"
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Contact />
      </motion.section>

      <Footer />

      
      <RustezeButton />
    </>
  );
}

export default App;
