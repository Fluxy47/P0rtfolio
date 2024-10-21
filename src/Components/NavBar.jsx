import React from "react";
import { motion } from "framer-motion";
import { container2, navAnimation } from "../utils/Constant";

const skills = ["Unity", "C/C#", "Js", "css", "html"];
const nav = ["Home", "AboutMe", "Project", "ContactMe"];

function NavBar({ lenis, setDisplayNav }) {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    setDisplayNav(false);
    if (lenis && section) {
      setTimeout(() => {
        lenis.scrollTo(section, {
          offset: 0,
          duration: 3, // Slower scroll duration in seconds (adjust as needed)
          easing: (t) => 1 - Math.pow(1 - t, 4), // Customize easing function for smoother effect
        });
      }, 1000); // 1 second delay before scrolling
    }
  };
  // text-[#06061C]
  return (
    <motion.div
      variants={container2}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-screen text-[#ffecdd]  bg-[#720026] fixed z-[100] w-full flex flex-col-reverse gap-[20px] md:flex-row  items-center justify-evenly">
      <section className="flex flex-col lg:gap-[4em] xl:gap-[6em] ">
        <motion.button
          initial={{ letterSpacing: "0.2em" }}
          whileHover={{ letterSpacing: "0.3em" }}
          variants={navAnimation}
          className=" text-center text-[2em] md:text-[2em] lg:text-[2.5em]   font-semibold bg-transparent p-0 ">
          RESUME
        </motion.button>
        {/* <div className="flex gap-[1.2em]">
            {skills.map((item, idx) => (
              <motion.p
                variants={navAnimation}
                className=" text-[1.8em] md:text-[3em] lg:text-[2em] font-semibold mb-[40px] bg-transparent  p-0 "
                key={idx}>
                {item}
              </motion.p>
            ))}
          </div> */}

        <div className="flex flex-col gap-[0.5em]">
          <motion.h1
            variants={navAnimation}
            className="text-[2em] md:text-[3.5em] lg:text-[2em]  text-center font-semibold  md:tracking-widest ">
            Skills
          </motion.h1>
          <div className="flex gap-[1.2em]">
            {skills.map((item, idx) => (
              <motion.p
                variants={navAnimation}
                className=" text-[1.8em] md:text-[3em] lg:text-[2em] font-semibold mb-[40px] bg-transparent  p-0 "
                key={idx}>
                {item}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col mt-[15%] md:mt-0">
        <motion.h1
          variants={navAnimation}
          className=" text-center text-[2em] md:text-[2em] lg:text-[2.5em]  font-semibold pb-[10px] lg:pb-[40px] tracking-[0.2rem] md:tracking-[0.5rem]  mx-6">
          Navigation
        </motion.h1>
        {nav.map((item, idx) => (
          <motion.button
            initial={{ letterSpacing: 0, opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ letterSpacing: "0.1em" }}
            variants={navAnimation}
            key={idx}
            className=" text-[1.8em] md:text-[1.5em] lg:text-[2em] font-semibold mb-[25px] lg:mb-[40px] bg-transparent  p-0 "
            onClick={() => handleScrollToSection(item)}>
            {item}
          </motion.button>
        ))}
      </section>
    </motion.div>
  );
}

export default NavBar;
