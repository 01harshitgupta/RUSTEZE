import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
    "/images/image10.jpg",
    "/images/image11.jpg",
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/team1.jpg",
    "/images/image4.jpg",
  ];

  const visibleImages = showAll ? images : images.slice(0, 6);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">
          Race <span>Moments</span>
        </h2>
        <p className="gallery-subtitle">
          Experience the thrill, teamwork, and passion behind every lap.
        </p>

        <div
          className={`gallery-grid ${
            activeIndex !== null ? "active-blur" : ""
          }`}
        >
          {visibleImages.map((img, index) => (
            <motion.div
              key={index}
              className={`gallery-card ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: activeIndex === index ? 1.55 : 1,
                zIndex: activeIndex === index ? 10 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.3,
              }}
            >
              <div className="card-image">
                <img src={img} alt={`Gallery ${index + 1}`} />
              </div>
              <div className="card-overlay">
                <h3>Race #{index + 1}</h3>
                <p>{activeIndex === index ? "Click to close" : "Click to view"}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {images.length > 6 && (
          <motion.button
            className="show-more-btn"
            onClick={() => {
              setShowAll(!showAll);
              setActiveIndex(null);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? "Show Less" : "Show More"}
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default Gallery;
