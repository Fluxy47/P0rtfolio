import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <motion.section
        initial={{
          opacity: 0,
          scale: 0,
          minHeight: "224px",
          width: "224px",
          borderRadius: "100%",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          width: "95%",
          borderRadius: ["100%", "50%", "2%"],
          minHeight: "65dvh",
        }}
        className=" bg-[#B22222] flex justify-center items-center  text-white">
        <div className="mx-[20px] md:mx-0 text-center md:max-w-[60%]">
          <p
            style={{ fontSize: " clamp(1.875rem, 1.55rem + 1.625vw, 3.5rem)" }}>
            When working with me you will get a modern website that is
            responsive, secure, meets the needs of your clients, reflects your
            brand and its values and stands out among competitors
          </p>
        </div>
      </motion.section>
    </section>
  );
}

export default About;

// initial={{
//   opacity: 0,
//   scale: 0.5,
//   minHeight: "224px",
//   width: "224px",
//   borderRadius: "100%",
// }}
// animate={{
//   opacity: [0, 1], // Fade in from 0 to 1
//   scale: [0.5, 1], // Scale from 0.5 to 1
//   width: ["224px", "95%"], // Enlarge from 224px to 95%
//   minHeight: ["224px", "65dvh"], // Change height from 224px to 65dvh
//   borderRadius: ["100%", "16px"], // Change border radius from circle to rectangle
// }}
// transition={{
//   duration: 0.8,
//   ease: [0, 0.71, 0.2, 1.01],
//   times: [0, 1], // Use the full duration for the opacity and scale
// }}
