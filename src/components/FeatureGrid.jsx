"use client";

import { motion } from "framer-motion";

import "./FeatureGrid.css";


import {
  Megaphone,
  Clapperboard,
  Camera,
  BadgeDollarSign,
  TrendingUp,
  Target,
} from "lucide-react";

const features = [
  {
    title: "Social Media Management",
    icon: Megaphone,
    description:
      "We handle your social media from content planning and posting to audience engagement and growth.",
  },
  {
    title: "Content That Converts",
    icon: Clapperboard,
    description:
      "Creative content designed to capture attention, build trust, and drive customer action.",
  },
  {
    title: "Product Shoots",
    icon: Camera,
    description:
      "Professional product photography and videos that showcase your brand in the best light.",
  },
  {
    title: "Paid Ads Expertise",
    icon: BadgeDollarSign,
    description:
      "Strategic ad campaigns focused on generating quality leads, sales, and measurable results.",
  },
  {
    title: "More Leads & Sales",
    icon: TrendingUp,
    description:
      "Marketing strategies that help attract the right customers and increase business revenue.",
  },
  {
    title: "Targeted Audience Reach",
    icon: Target,
    description:
      "Reach people who are most likely to be interested in your products or services.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FeatureGrid() {
  return (
    <section className="feature-section">
      {/* BACKGROUND GLOW */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>

      <div className="feature-container">
        {/* HEADING */}
        <motion.div
          className="feature-heading"
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why<span> Choose </span>
            Us ? 
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
           Because we create content, campaigns, and strategies that help businesses grow online.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="feature-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                className="feature-card"
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="feature-glow"></div>

                <motion.div
                  className="feature-icon"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon size={28} strokeWidth={1.8} />
                </motion.div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <div className="feature-pattern"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}