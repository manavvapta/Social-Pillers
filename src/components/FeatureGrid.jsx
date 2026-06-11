"use client";

import { motion } from "framer-motion";

import "./FeatureGrid.css";


import {
  Globe,
  Search,
  Megaphone,
  PenTool,
  BadgeDollarSign,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    title: "Web Development",
    icon: Globe,
    description:
      "Fast, responsive and conversion-focused websites designed to grow your business online.",
  },
  {
    title: "SEO Optimization",
    icon: Search,
    description:
      "Improve search rankings, increase organic traffic and attract high-intent customers.",
  },
  {
    title: "Social Media Marketing",
    icon: Megaphone,
    description:
      "Build your brand presence through strategic content, engagement and audience growth.",
  },
  {
    title: "Graphic Design & Branding",
    icon: PenTool,
    description:
      "Creative designs and visual branding that make your business stand out from competitors.",
  },
  {
    title: "Google & Meta Ads",
    icon: BadgeDollarSign,
    description:
      "Targeted advertising campaigns focused on generating leads, sales and measurable ROI.",
  },
  {
    title: "Business Growth Strategy",
    icon: TrendingUp,
    description:
      "Data-driven marketing strategies that help businesses scale faster and achieve sustainable growth.",
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
            What<span> We  </span>
            Do ? 
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            We Create Content, Campaigns, And Strategies That Help Businesses Grow Online.
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