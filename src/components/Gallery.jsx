"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Gallery.css";
import { Link } from "react-router-dom";


const photos = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

const Gallery = () => {

const [loaded, setLoaded] = useState(false);
const sectionRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setLoaded(true);
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  if (sectionRef.current) observer.observe(sectionRef.current);
  return () => observer.disconnect();
}, []);

  return (
    <section className="gallery-section" ref={sectionRef}>
      {/* BACKGROUND GRID */}
      <div className="gallery-grid"></div>

      {/* HEADING */}
      <div className="gallery-heading">
        <p className="gallery-subtitle">Creative Visual Collection</p>

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

      <Link to="/projects">
        <button className="gallery-btn">View More</button>
      </Link>
    </section>
  );
};

export default Gallery;
