import React from "react";
import { motion } from "framer-motion";
import { container2, navAnimation } from "../utils/Constant";

const skills = ["Unity", "C/C#", "Js", "css", "html"];
const nav = ["Home", "AboutMe", "Project", "ContactMe"];

function NavBar() {
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95],
      }}
      variants={container2}
      className="h-screen text-[#06061C]  bg-[#720026] absolute z-[100] w-full flex  items-center justify-evenly"
    >
      <section className="flex flex-col gap-[2em]">
        <div className="flex flex-col gap-[0.5em]">
          <h1 className="text-[2em] md:text-[3.5em] lg:text-[2em]  text-center font-semibold  md:tracking-widest ">
            Skills
          </h1>
          <div className="flex gap-[1.2em]">
            {skills.map((item, idx) => (
              <p
                className=" text-[1.8em] md:text-[3em] lg:text-[2em] font-semibold mb-[40px] bg-transparent  p-0 "
                key={idx}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[0.5em]">
          <h1 className="text-[2em] md:text-[3.5em] lg:text-[2em]  text-center font-semibold  md:tracking-widest ">
            Skills
          </h1>
          <div className="flex gap-[1.2em]">
            {skills.map((item, idx) => (
              <p
                className=" text-[1.8em] md:text-[3em] lg:text-[2em] font-semibold mb-[40px] bg-transparent  p-0 "
                key={idx}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col">
        <motion.h1
          variants={navAnimation}
          className=" text-center text-[2.5em] md:text-[4em] lg:text-[2.5em]  font-semibold pb-[20px] lg:pb-[40px] tracking-[0.2rem] md:tracking-[0.5rem]  mx-6"
        >
          Navigation
        </motion.h1>
        {nav.map((item, idx) => (
          <motion.button
            initial={{ letterSpacing: 0, opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ letterSpacing: "0.1em" }}
            key={idx}
            className=" text-[1.8em] md:text-[3em] lg:text-[2em] font-semibold mb-[40px] bg-transparent  p-0 "
          >
            {item}
          </motion.button>
        ))}
      </section>
    </motion.div>
  );
}

export default NavBar;
