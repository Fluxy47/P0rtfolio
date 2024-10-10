import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="relative min-h-screen w-full bg-[#FFE4C2]">
      <motion.div
        // initial={{ y: "100vh" }}
        // animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="absolute inset-0 bg-[#ffecdd] z-[1]"
      />
      <section className="flex w-full items-center justify-between z-20">
        <div className="flex ml-[40px] mt-[20px] items-center justify-center gap-x-[2.2em] text-[#B22222] font-semibold tracking-wide text-[17px] z-20">
          <h2>Game Dev</h2>
          <div className="h-[1px] w-[42px] bg-[#B22222]"></div>
          <h2>Project Manager</h2>
        </div>
        {/* burger menu */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col gap-y-[6px] mt-[20px] z-20">
          <div className="h-[2px] w-[12px] bg-[#B22222]" />
          <div className="h-[2px] w-[22px] bg-[#B22222]" />
          <div className="h-[2px] w-[12px] bg-[#B22222] ml-[10px]" />
        </div>

        <div className="text-[#B22222] font-semibold tracking-wide mr-[40px] mt-[20px] z-20">
          <h2>Loreus polerum</h2>
        </div>
      </section>
      <div className="flex flex-col absolute bottom-14 w-full z-20">
        <section className="flex items-start justify-start w-full">
          <div className="max-w-xs p-4 flex-shrink-0 leading-tight">
            <p className="text-[#B22222] text-[24px]">
              I design clean modern websites that embody the essence of your
              brand
            </p>
          </div>
        </section>

        <section className=" bottom-0 flex w-full items-center justify-between ">
          <button className="w-60 h-12  rounded-full  border-[1px] border-[red]  font-[450] text-lg  ">
            <span className="text-[#B22222]">+ 44 7774069318</span>
          </button>

          <h1 className="text-[#B22222]">
            Lorem <br /> lorem ispum
          </h1>

          <h1 className="text-[#B22222] leading-tight">
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
