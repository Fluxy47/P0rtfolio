import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutpic from "../assets/aboutpic.jpg";
import useTextRevealAnimation from "../utils/useTextRevealAnimation";

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const imageRef = useRef(null);
  const imageCont = useRef(null);

  useEffect(() => {
    const container = imageCont.current;
    const image = imageRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: false,
      },
    });

    tl.fromTo(
      image,
      {
        yPercent: -20,
        ease: "none",
      },
      {
        yPercent: 20,
        ease: "none",
      }
    );
  }, []);

  // const { AnimatedText } = useTextRevealAnimation("About Me", {
  //   containerClass: "custom-container-class",
  //   textClass: "text-[3em] text-[#B22222] font-bold tracking-wide",
  // });

  const { AnimatedText } = useTextRevealAnimation(
    "About Me",
    "text-[10vw] md:text-[5vw] xl:text-[3vw] text-[#B22222] font-bold tracking-wide"
  ); // Pass in the text
  // className="text-[3em] text-[#B22222] font-bold tracking-wide"
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    // Get initial width
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="AboutMe"
      className="min-h-screen flex flex-col-reverse md:flex-row gap-[5vw] md:gap-0 items-start justify-evenly">
      <div className="flex flex-col w-full md:w-auto items-center justify-center gap-[2em]">
        <AnimatedText />

        <div className="mx-[5%] md:mx-0 md:max-w-[39vw]">
          <p
            // style={{ fontSize: "clamp(1.25rem, 1.1rem + 0.75vw, 2rem)" }}
            className="text-[20px] sm:text-[4vw] md:text-[2.4vw] lg:text-[2.7vw] xl:text-[1.5em] 2xl:text-[2em] leading-relaxed text-center md:text-start font-semibold tracking-tight">
            I'm a passionate game designer with 2 years of experience and 4
            published games. Skilled in Unity, I'm dedicated to crafting
            immersive gaming experiences that captivate players. My love for
            games drives me to innovate and push the boundaries of game design.
            {width}
          </p>
        </div>
      </div>
      <div
        ref={imageCont}
        className="overflow-hidden  border-2 border-red-950 w-[90%] md:max-w-[50%] xl:max-w-[35%] flex mx-auto md:mx-0 justify-center">
        <img
          ref={imageRef}
          src="https://ik.imagekit.io/fluxy/Asad%20Folder/Images/aboutpic.jpg?tr=w-800"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
}

export default AboutMe;
