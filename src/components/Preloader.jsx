import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="loader-content">
        {[...Array(7)].map((_, index) => (
          <motion.div
            key={index}
            className="bar"
            animate={{
              scaleY: [0.5, 1.5, 0.5],
              scaleX: [1, 0.8, 1],
              translateY: ["0%", "-15%", "0%"],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
}