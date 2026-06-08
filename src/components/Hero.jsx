import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import "./Hero.css";

const Hero = () => {
  const { scrollY } = useScroll();

  const leftX = useTransform(scrollY, [0, 500], [0, -400]);

  const rightX = useTransform(scrollY, [0, 500], [0, 400]);

  const leftRotate = useTransform(scrollY, [0, 500], [0, -10]);

  const rightRotate = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <section className="hero">
      <div className="hero-grid"></div>

      <motion.div
        className="hero-content"
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <motion.p
          className="hero-tag"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          WELCOME TO SOCIALPILLARS
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          WE ARE <span>PILLARS</span>
        </motion.h1>

        <motion.h1
          className="second-line"
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          OF YOUR <span>BRAND</span>
        </motion.h1>

        <motion.div
          className="hero-buttons"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
        >
          <button className="primary-btn">Instagram</button>
          
        </motion.div>
      </motion.div>

      {/* LEFT HUMAN */}

      <motion.img
        src="/manav.png"
        alt="Manav"
        className="human-left"
        style={{
          x: leftX,
          rotate: leftRotate,
        }}
      />

      {/* RIGHT HUMAN */}

      <motion.img
        src="/raj.png"
        alt="Raj"
        className="human-right"
        style={{
          x: rightX,
          rotate: rightRotate,
        }}
      />
    </section>
  );
};

export default Hero;
