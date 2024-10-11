import { useInView, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const useTextRevealAnimation = (text, textclass, options = {}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5, triggerOnce: false });
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setKey((prevKey) => prevKey + 1); // Restart the animation when in view
    }
  }, [inView]);

  // Return JSX for both the mask and the text animation
  const AnimatedText = () => (
    <div
      ref={ref}
      className="relative w-full overflow-hidden flex justify-center items-center"
    >
      {/* Masking element (pseudo-element equivalent) */}
      <motion.div
        key={key} // Change key to restart animation
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 4, ease: "easeOut", delay: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-[#ffecdd] z-[20]"
      />

      {/* Text with animation */}
      <motion.h1
        key={key} // Change key to restart letter spacing animation
        initial={{ letterSpacing: "5px" }}
        animate={{ letterSpacing: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
        className={`${textclass}`}
      >
        {text}
      </motion.h1>
    </div>
  );

  return { AnimatedText };
};

export default useTextRevealAnimation;
