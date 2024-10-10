import React from "react";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

function Loader() {
  return (
    <div className="min-h-screen bg-black">
      <motion.svg
        width="600"
        height="200"
        viewBox="0 0 600 200"
        initial="hidden"
        animate="visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        {/* Letter M */}
        <motion.path
          d="M 20 150 L 20 50 L 50 100 L 80 50 L 80 150" // Example path for 'M'
          stroke="#ff0055"
          strokeWidth="4"
          variants={draw}
          custom={1}
        />
        {/* Letter A */}
        <motion.path
          d="M 110 150 L 130 50 L 150 150 M 120 110 L 140 110" // Example path for 'A'
          stroke="#00cc88"
          strokeWidth="4"
          variants={draw}
          custom={2}
        />
        {/* Letter S */}
        <motion.path
          d="M 180 150 C 150 150, 150 100, 180 100 C 210 100, 210 50, 180 50" // Example path for 'S'
          stroke="#0099ff"
          strokeWidth="4"
          variants={draw}
          custom={3}
        />
        {/* Letter A */}
        <motion.path
          d="M 220 150 L 240 50 L 260 150 M 230 110 L 250 110" // Example path for 'A'
          stroke="#ff0055"
          strokeWidth="4"
          variants={draw}
          custom={4}
        />
        {/* Letter D */}
        <motion.path
          d="M 290 50 L 290 150 C 320 150, 330 100, 290 100" // Example path for 'D'
          stroke="#00cc88"
          strokeWidth="4"
          variants={draw}
          custom={5}
        />
      </motion.svg>
    </div>
  );
}

export default Loader;
