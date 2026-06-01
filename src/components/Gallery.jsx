"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

const photos = [
  "https://images.pexels.com/photos/32025694/pexels-photo-32025694/free-photo-of-romantic-wedding-in-ancient-ruins.jpeg",

  "https://images.pexels.com/photos/31596551/pexels-photo-31596551/free-photo-of-winter-scene-with-lake-view-in-van-turkiye.jpeg",

  "https://images.pexels.com/photos/31890053/pexels-photo-31890053/free-photo-of-moody-portrait-with-heart-shaped-light.jpeg",

  "https://images.pexels.com/photos/19936068/pexels-photo-19936068/free-photo-of-women-sitting-on-hilltop-with-clouds-below.jpeg",

  "https://images.pexels.com/photos/20494995/pexels-photo-20494995/free-photo-of-head-of-peacock.jpeg",
];

const Gallery = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="gallery-section">

      {/* BACKGROUND GRID */}
      <div className="gallery-grid"></div>

      {/* HEADING */}
      <div className="gallery-heading">

        <p className="gallery-subtitle">
          Creative Visual Collection
        </p>

        <h2 className="gallery-title">
          Stunning <span>Gallery</span>
        </h2>

      </div>

      {/* GALLERY */}
      <div className="gallery-wrapper">

        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="gallery-card"
            initial={{
              opacity: 0,
              y: 100,
              rotate: index % 2 === 0 ? -8 : 8,
            }}
            animate={
              loaded
                ? {
                    opacity: 1,
                    y: 0,
                    rotate: index % 2 === 0 ? -4 : 4,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: index * 0.15,
            }}
            whileHover={{
              scale: 1.08,
              rotate: 0,
              zIndex: 99,
            }}
            drag
            dragConstraints={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <img src={photo} alt="gallery" />
          </motion.div>
        ))}
      </div>

      {/* BUTTON */}
      <button className="gallery-btn">
        View More
      </button>

    </section>
  );
};

export default Gallery;