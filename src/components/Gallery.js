import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    '/images/image1.jpg', 
    '/images/image2.jpg', 
    '/images/image3.jpg',
    '/images/team1.jpg',
    '/images/image4.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
    '/images/image8.jpg',
    '/images/image9.jpg',
    '/images/image10.jpg',
    '/images/image11.jpg',
  ];

  const visibleImages = showAll ? images : images.slice(0, 3);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {visibleImages.map((img, index) => (
          <motion.div
            key={index}
            className="gallery-card"
            onClick={() => setSelectedImage(img)}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card-image">
              <img src={img} alt={`Gallery Item ${index + 1}`} />
            </div>
            <div className="card-overlay">
              <h3>Image {index + 1}</h3>
              <p>Click to enlarge</p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Modal / Lightbox for selected image */}
      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)} aria-label="Close">×</button>
            <img className="modal-image" src={selectedImage} alt="Enlarged gallery" />
          </div>
        </div>
      )}
      {images.length > 4 && (
        <motion.button
          className="show-more-btn"
          onClick={() => setShowAll(!showAll)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </motion.button>
      )}
    </div>
  );
};

// add selectedImage state and keyboard handling

export default Gallery;
