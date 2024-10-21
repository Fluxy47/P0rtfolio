import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useTextRevealAnimation from "../utils/useTextRevealAnimation";
// bg-[#FFE4C2]
function Home({ setDisplayNav }) {
  const { AnimatedText } = useTextRevealAnimation(
    "Muhammad Asad",
    "relative text-[#B22222] text-[15vw] md:text-[10vw] text-center tracking-wide font-bold"
  ); // Pass in the text
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
  const [Open, setOpen] = useState(false);

  return (
    <section id="Home" className="relative min-h-screen w-full bg-[#ffecdd]">
      {/* <motion.div
         initial={{ y: "100vh" }}
         animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="absolute inset-0 bg-[#ffecdd] z-[1]"
      /> */}
      <section className="absolute top-0 flex w-full items-center justify-between  z-[110]">
        <div className="flex ml-[3%] md:ml-[20px] lg:ml-[40px] mt-[20px] items-center justify-center gap-x-[10px] lg:gap-x-[2.2em] text-[#B22222] font-semibold tracking-wide text-[17px] z-20">
          <div className="max-w-[40px] md:max-w-none text-center">
            <h2>Game Dev</h2>
          </div>
          <div className="h-[1px] w-[42px] bg-[#B22222]"></div>
          <div className="max-w-[40px] md:max-w-none text-center">
            <h2>Game Designer</h2>
          </div>
        </div>
        {/* burger menu */}
        <div
          onClick={() => setDisplayNav((prevState) => !prevState)}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="fixed right-[4%]  flex flex-col gap-y-[6px] mt-[20px] z-[110] cursor-pointer">
          <motion.div
            animate={{ left: Open ? 6 : 0 }}
            className="h-[2px] w-[12px] bg-[#B22222] relative"
          />
          <div className="h-[2px] w-[22px] bg-[#B22222]" />
          <motion.div
            animate={{ marginLeft: Open ? 6 : 10 }}
            className="h-[2px] w-[12px] bg-[#B22222] "
          />
        </div>
      </section>

      <section className="absolute top-[35%] left-1/2 -translate-x-1/2  -translate-y-1/2 w-full z-20 flex justify-center items-center">
        <AnimatedText />
        {/* <div className="relative w-full overflow-hidden flex justify-center items-center">
          <h1
            className={`relative text-[#B22222] text-[10vw] tracking-wide font-bold`}
          >
            {width}
          </h1>
        </div> */}
      </section>

      <div className="flex absolute bottom-[4%]  w-[95%] mx-auto left-1/2 -translate-x-1/2 z-20">
        {/* <section className=" flex items-center justify-center md:items-start md:justify-start w-full">
          <div className=" max-w-[400px] text-center md:text-start md:max-w-xs p-4 flex-shrink-0 leading-tight">
            <p className="text-[#B22222] font-semibold tracking-wide text-[24px]">
              I design clean modern websites that embody the essence of your
              brand
            </p>
          </div>
        </section> */}

        <section className=" flex flex-col md:flex-row w-full items-center justify-between ">
          <div className=" max-w-[400px] text-center md:text-start md:max-w-xs p-4 flex-shrink-0 leading-tight">
            <p className="text-[#B22222] font-semibold tracking-wide text-[24px]">
              I design clean modern websites that embody the essence of your
              brand
            </p>
          </div>

          <h1 className="text-[#B22222] font-semibold tracking-wide hidden md:block">
            Lorem <br /> lorem ispum
          </h1>

          <h1 className="text-[#B22222] font-semibold tracking-wide leading-tight hidden md:block">
            Based In Uk <br /> available around the World
          </h1>
        </section>
      </div>
    </section>
  );
}

export default Home;

// section className="relative flex w-full ml-[10px] mt-[20px] items-center justify-between">
//         <div className="flex items-center justify-center gap-x-[2.2em] text-[#B22222] font-semibold tracking-wide text-[17px]">
//           <h2>Game Dev</h2>
//           <div className="h-[1px] w-[42px] bg-[#B22222]"></div>
//           <h2>Project Manager</h2>
//         </div>
//         {/* burger menu */}
//         <div className="absolute left-1/2 -translate-x-1/2 flex flex-col gap-y-[6px]">
//           <div className="h-[2px] w-[12px] bg-[#B22222]" />
//           <div className="h-[2px] w-[22px] bg-[#B22222]" />
//           <div className="h-[2px] w-[12px] bg-[#B22222] ml-[10px]" />
//         </div>

//         <div className="text-[#B22222] font-semibold tracking-wide ml-[10px] mt-[20px]">
//           <h2>Loreus polerum</h2>
//         </div>
//       </section>

// <div className="flex flex-col absolute bottom-14 w-full ">
//   <section className="flex items-start justify-start w-full">
//     <div class="max-w-xs p-4 flex-shrink-0 leading-tight">
//       <p class="text-[#B22222] text-[24px]">
//         I design clean modern websites that embody the essence of your
//         brand
//       </p>
//     </div>
//   </section>

//   <section className=" bottom-0 flex w-full items-center justify-between ">
//     <button className="w-60 h-12  rounded-full  border-[1px] border-[red]  font-[450] text-lg  ">
//       <span className="text-[#B22222]">+ 44 7774069318</span>
//     </button>

//     <h1 className="text-[#B22222]">
//       Lorem <br /> lorem ispum
//     </h1>

//     <h1 className="text-[#B22222] leading-tight">
//       Based In Uk <br /> available around the World
//     </h1>
//   </section>
// </div>

{
  /* <section className="absolute top-[35%] left-1/2 -translate-x-1/2  -translate-y-1/2 w-full z-20 flex justify-center items-center">
  <h1 className="text-[#B22222] text-[10vw] tracking-wide font-bold">
    M
    <motion.span
      initial={{ top: "25vh" }}
      animate={{ top: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.95],
      }}
      className="relative">
      u
    </motion.span>
    ham
    <motion.span
      initial={{ top: "25vh" }}
      animate={{ top: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.95],
      }}
      className="relative">
      m
    </motion.span>
    <motion.span
      initial={{ top: "25vh" }}
      animate={{ top: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.95],
      }}
      className="relative">
      a
    </motion.span>
    d As
    <motion.span
      initial={{ top: "25vh" }}
      animate={{ top: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.95],
      }}
      className="relative">
      a
    </motion.span>
    d
  </h1>
</section>; */
}
