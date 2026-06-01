"use client";

import React from "react";
import { motion } from "framer-motion";
import "./Lamp.css";

const Lamp = () => {
  return (
    <section className="lamp-section">
      {/* LIGHT EFFECTS */}

      <div className="lamp-wrapper">

        {/* LEFT LIGHT */}
        <motion.div
          initial={{ opacity: 0.4, width: "180px" }}
          whileInView={{ opacity: 1, width: "420px" }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="lamp-left"
        />

        {/* RIGHT LIGHT */}
        <motion.div
          initial={{ opacity: 0.4, width: "180px" }}
          whileInView={{ opacity: 1, width: "420px" }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="lamp-right"
        />

        {/* CENTER GLOW */}
        <div className="center-glow"></div>

        {/* LINE */}
        <motion.div
          initial={{ width: "100px" }}
          whileInView={{ width: "400px" }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="light-line"
        />

      </div>

      {/* CONTENT */}
      <div className="lamp-content">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="lamp-title"
        >
          Build Stunning <br />
          Websites Faster
        </motion.h1>

        <p className="lamp-subtitle">
          Modern UI Design with smooth animations.
        </p>

        <button className="lamp-btn">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Lamp;