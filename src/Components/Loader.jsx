import React from "react";
import { motion } from "framer-motion";

const strokeAndFillVariants = {
  hidden: {
    strokeDashoffset: 500, // Initially hidden (fully offset)
    fillOpacity: 0, // Initially transparent
  },
  visible: {
    strokeDashoffset: 0, // Fully drawn stroke

    transition: {
      strokeDashoffset: { duration: 5, ease: "linear" }, // Time to draw the stroke
      fillOpacity: { duration: 1.5, ease: "easeIn" }, // Time to fill after stroke animation
    },
  },
};

function Loader() {
  return (
    <div className="absolute h-screen w-full bg-black flex items-center justify-center z-[999999]">
      <svg height="100" stroke="#bac736" strokeWidth="2" width="100%">
        <motion.text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="80px"
          fontFamily="Helvetica, Arial, sans-serif"
          fontWeight="normal"
          fontStyle="normal"
          strokeDasharray="500"
          fill="#bac736" // Set the fill color to be animated
          initial="hidden"
          animate="visible"
          variants={strokeAndFillVariants} // Use combined stroke and fill variants
        >
          M.ASAD
        </motion.text>
      </svg>
    </div>
  );
}

export default Loader;
