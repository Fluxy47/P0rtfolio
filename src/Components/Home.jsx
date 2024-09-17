import React from "react";

function Home() {
  return (
    <section className=" relative min-h-screen mx-[30px]">
      <section className="relative flex w-full  mt-[15px] items-center justify-between">
        <div className="flex items-center justify-center gap-x-[2.2em]">
          <h2>Game Dev</h2>
          <div className="h-[1px] w-[37px] bg-black"></div>
          <h2>Project Manager</h2>
        </div>
        {/* burger menu */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col gap-y-[5px]">
          <div className="h-[1px] w-[10px] bg-black" />
          <div className="h-[1px] w-[20px] bg-black" />
          <div className="h-[1px] w-[10px] bg-black ml-[10px]" />
        </div>

        <div>
          <h2>Loreus polerum</h2>
        </div>
      </section>

      <div className="flex flex-col absolute bottom-14 w-full ">
        <section className="flex items-start justify-start w-full">
          <div class="max-w-xs  p-4  flex-shrink-0 leading-tight">
            <p class="text-gray-700 text-[24px]">
              I design clean modern websites that embody the essence of your
              brand
            </p>
          </div>
        </section>

        <section className=" bottom-0 flex w-full items-center justify-between ">
          <button className="w-60 h-12  rounded-full  border-[1px] border-[red]  font-[450] text-lg  ">
            <span className=" ">+ 44 7774069318</span>
          </button>

          <h1 className="">
            Lorem <br /> lorem ispum
          </h1>

          <h1>
            Based In Uk <br /> available around the World
          </h1>
        </section>
      </div>
    </section>
  );
}

export default Home;
