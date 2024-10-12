import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "@uidotdev/usehooks";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (pinContainerRef, pinElementRef, isSmallDevice) => {
  useLayoutEffect(() => {
    if (pinContainerRef.current && pinElementRef.current && !isSmallDevice) {
      const scrollTrigger = ScrollTrigger.create({
        trigger: pinContainerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: pinElementRef.current,
        scrub: 0.5,
      });

      // Clean up ScrollTrigger on unmount
      return () => {
        scrollTrigger.kill();
      };
    }
  }, [pinContainerRef, pinElementRef, isSmallDevice]);
};

function Help() {
  const pinContainer = useRef();
  const pinElement = useRef();
  const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");

  // Use the custom hook for GSAP
  useGsap(pinContainer, pinElement, isSmallDevice);

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
      ref={pinContainer}
      className="min-h-screen flex flex-col md:flex-row justify-center relative mt-[5em] md:mt-0 z-[40] gap-[4em] md:gap-0">
      <section className="md:h-screen flex justify-center items-center md:ml-[50px]">
        <div
          ref={pinElement}
          className="md:border-l-[5px] border-[red] w-full md:max-w-[40em] xl:max-w-[48em] flex items-center justify-center">
          <h1 className="text-[3em] md:text-[7.2vw] lg:text-[7.2vw] xl:text-[8vw] 2xl:text-[7rem] tracking-tighter leading-[1.02] ml-[30px]">
            I CAN HELP YOU WITH
          </h1>
        </div>
      </section>
      <section className="flex flex-col md:mt-[16em] md:mr-[80px] mx-[20px] gap-[4em] md:gap-0">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="md:h-screen flex items-center justify-center">
              <div className="w-full md:max-w-[29em] 2xl:max-w-[33em] flex flex-col gap-[1em] justify-start">
                <p className="text-[#adb4b6] text-[0.8em]">{index + 1}</p>
                <div className="h-[1px] w-full bg-[#adb4b6]" />
                <h2 className="text-[2em] md:text-[3vw] 2xl:text-[2.5vw] font-[450]">
                  Design
                </h2>
                <div className="w-full max-w-[50em]">
                  <p className="md:text-[2vw] lg:text-[1.7vw] xl:text-[1.5vw] 2xl:text-[1.25vw]">
                    With a solid track record in designing websites and apps, I
                    deliver strong and user-friendly digital designs. Solid
                    company branding is the foundation of any successful
                    website.
                  </p>
                </div>
              </div>
            </div>
          ))}
      </section>
    </section>
  );
}

export default Help;
