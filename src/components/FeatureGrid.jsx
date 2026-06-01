"use client";

import {
  Zap,
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import "./FeatureGrid.css";

const features = [
  {
    title: "Lightning Fast",
    icon: Zap,
    description:
      "High performance experience with ultra smooth animations and fast loading.",
  },
  {
    title: "Powerful System",
    icon: Cpu,
    description:
      "Built with scalable architecture for modern web applications and AI tools.",
  },
  {
    title: "Advanced Security",
    icon: Fingerprint,
    description:
      "Strong security layers to protect your data and users at every level.",
  },
  {
    title: "Easy Customization",
    icon: Pencil,
    description:
      "Fully customizable components with clean structure and reusable design.",
  },
  {
    title: "Full Control",
    icon: Settings2,
    description:
      "Manage everything with flexibility and complete creative freedom.",
  },
  {
    title: "AI Ready",
    icon: Sparkles,
    description:
      "Designed for AI products, automation workflows, and smart integrations.",
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
          <motion.span
            className="feature-badge"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            WHY CHOOSE US
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Power. Speed.
            <span> Control.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Modern feature cards section with premium red, black and white
            futuristic theme.
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