import React, { useEffect } from "react";
import { easeInOut, easeOut, motion } from "framer-motion";

const strokeAndFillVariants = {
  hidden: {
    strokeDashoffset: 500, // Initially hidden (fully offset)
    fillOpacity: 0, // Initially transparent
  },
  visible: {
    strokeDashoffset: 0, // Fully drawn stroke
    fillOpacity: 1, // Filled after stroke
    transition: {
      strokeDashoffset: { duration: 2, ease: "easeInOut" }, // Time to draw the stroke
      fillOpacity: {
        delay: 2, // Starts filling after the stroke is drawn
        duration: 0.5,
        ease: "easeOut",
      }, // Time to fill after stroke animation
    },
  },
};

function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed h-screen w-full bg-black flex items-center justify-center z-[999999]">
      <motion.svg height="100" stroke="#B22222" strokeWidth="2" width="100%">
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
          fill="#B22222" // Set the fill color to be animated
          fillOpacity="0" // Ensure fill starts as transparent
          initial="hidden"
          animate="visible"
          variants={strokeAndFillVariants} // Use combined stroke and fill variants
        >
          M.ASAD
        </motion.text>
      </motion.svg>
    </motion.div>
  );
}

export default Loader;
