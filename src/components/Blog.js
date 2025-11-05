import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Blog.css";

const Blog = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        videoRef.current.muted = true;
      } else {
        videoRef.current.play();
        videoRef.current.muted = false;
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="blog-section" id="blog">
      <div className="blog-video-container">
        <video
          ref={videoRef}
          loop
          playsInline
          muted
          className="blog-video"
          poster="/images/behind-thumb.jpg"
        >
          <source src="/videos/behind-the-scene.mp4" type="video/mp4" />
        </video>

        {/* Play / Pause Button */}
        <button className="play-btn" onClick={toggleVideo}>
          {isPlaying ? "⏸" : "▶"}
        </button>
      </div>

      <div className="blog-overlay">
        <motion.h2
          className="blog-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Behind the <span>Scenes</span>
        </motion.h2>

        <div className="blog-grid">
          {[
            {
              title: "Testing Day: Tuning the Engine",
              desc: "Our team fine-tuned carburetor settings and gear ratios for top performance.",
            },
            {
              title: "Building the Chassis",
              desc: "From sketch to weld — teamwork, precision, and passion built this frame.",
            },
          
          ].map((item, i) => (
            <motion.div
              className="blog-card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
