"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./Lamp.css";

const Lamp = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  const rightX = useTransform(scrollYProgress, [0, 1], [500, 0]);

  const leftRotate = useTransform(scrollYProgress, [0, 1], [-12, 0]);

  const rightRotate = useTransform(scrollYProgress, [0, 1], [12, 0]);

  const leftOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const rightOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section ref={sectionRef} className="lamp-section">
      {/* LIGHT EFFECTS */}
      <div className="lamp-wrapper">
        <motion.div
          initial={{ opacity: 0.4, width: "180px" }}
          whileInView={{ opacity: 1, width: "420px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="lamp-left"
        />

        <motion.div
          initial={{ opacity: 0.4, width: "180px" }}
          whileInView={{ opacity: 1, width: "420px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="lamp-right"
        />

        <div className="center-glow"></div>

        <motion.div
          initial={{ width: "100px" }}
          whileInView={{ width: "400px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="light-line"
        />
      </div>

      {/* CONTENT */}
      <div className="lamp-content">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lamp-title"
        >
          The Faces Behind <br />
          Social Pillers
        </motion.h1>

        <p className="lamp-subtitle">
          Together, we combine expertise
          <br />
          In Web Development, SEO, Paid Advertising, <br /> Graphic Design and Digital
          Marketing  <br />  to help businesses build a strong online presence and
          achieve measurable growth.
        </p>

        <button className="lamp-btn">Get Started</button>
      </div>

      {/* LEFT PORTRAIT */}
      <motion.img
        src="/manav1.png"
        alt="Manav"
        className="lamp-human lamp-human-left"
        style={{
          x: leftX,
          rotate: leftRotate,
          opacity: leftOpacity,
        }}
      />

      {/* RIGHT PORTRAIT */}
      <motion.img
        src="/rajveer1.png"
        alt="Rajveer"
        className="lamp-human lamp-human-right"
        style={{
          x: rightX,
          rotate: rightRotate,
          opacity: rightOpacity,
        }}
      />
    </section>
  );
};

export default Lamp;
