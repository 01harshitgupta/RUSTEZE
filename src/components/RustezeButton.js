import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./RustezeButton.css";

const RustezeButton = () => {
  const audioRef = useRef(null);
  const [isJumping, setIsJumping] = useState(false);

  const handleClick = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.currentTime = 0;
      audio
        .play()
        .then(() => console.log("✅ Engine sound playing"))
        .catch((err) => console.error("⚠️ Audio play blocked:", err));
    }

    // Trigger jump animation
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 800);
  };

  return (
    <>
      <motion.div
        className={`rusteze-logo ${isJumping ? "jump" : ""}`}
        onClick={handleClick}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src="/images/rusteze-logo.jpg" alt="Rusteze" />
      </motion.div>

      <motion.p
        className="rusteze-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ROAR !
      </motion.p>

      <audio ref={audioRef} src="/videos/car-engine.mp3" preload="auto" />
    </>
  );
};

export default RustezeButton;
