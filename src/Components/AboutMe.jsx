import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutpic from "../assets/aboutpic.jpg";

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

  return (
    <div className="min-h-screen flex border-2 border-black items-start justify-evenly">
      <div className="flex flex-col items-center justify-start gap-[2em]">
        <h1 className="text-[3em] text-[#B22222] font-semibold tracking-wide">
          About Me
        </h1>

        <div className="max-w-2xl ">
          <p className="text-[1.8em] leading-relaxed">
            I am a dedicated game designer and developer with a profound passion
            for creating immersive gaming experiences. With two years of
            professional experience, I have successfully published four games,
            each reflecting my commitment to innovation and quality. My
            expertise lies in utilizing Unity, but I am eager to explore other
            game engines and technologies as opportunities arise. As a
            passionate gamer, my love for games fuels my creativity and drives
            me to continually push the boundaries of game design. My goal is to
            craft engaging, memorable experiences that captivate players and
            leave a lasting impact on the gaming community.
          </p>
        </div>
      </div>
      <div
        ref={imageCont}
        className="overflow-hidden border-2 border-red-950 w-full lg:max-w-[40%]  flex justify-center">
        <img ref={imageRef} src={aboutpic} className=" w-full" />
      </div>
    </div>
  );
}

export default AboutMe;
