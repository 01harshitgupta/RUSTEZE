import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">
          Race <span>Moments</span>
        </h2>
        <p className="gallery-subtitle">
          Experience the thrill, teamwork, and passion behind every lap.
        </p>

        <div className="gallery-grid">
          {visibleImages.map((img, index) => (
            <motion.div
              key={index}
              className="gallery-card"
              onClick={() => setSelectedImage(img)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="card-image">
                <img src={img} alt={`Gallery ${index + 1}`} />
              </div>
              <div className="card-overlay">
                <h3>Race #{index + 1}</h3>
                <p>Click to view</p>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <img
                className="modal-image"
                src={selectedImage}
                alt="Enlarged view"
              />
            </div>
          </div>
        )}

        {images.length > 6 && (
          <motion.button
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
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
