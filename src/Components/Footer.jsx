import React from "react";

function Footer() {
  return (
    <div className="relative bg-[#ffecdd] pb-[2%] mt-[10%] md:mt-0">
      <section className="flex w-full flex-col-reverse gap-[8vh] md:flex-row items-center md:items-start justify-between mt-[]">
        <button className="w-60 h-12 ml-[5%] rounded-full  border-[1px] border-black  font-[450] text-lg  ">
          <span className="text-black">+ 44 7774069318</span>
        </button>
        <div class="relative flex w-full md:w-1/2 gap-[2em]  justify-evenly">
          <section class="flex flex-col gap-[10px]">
            <p class="text-[1.2em] mb-[15px]">Contact</p>
            <h1 class="text-[2.2em] text-[#B22222] font-bold ">Whatsapp</h1>
            <h1 class="text-[2.2em] text-[#B22222] font-bold ">Email</h1>
          </section>

          <section class="flex flex-col gap-[10px] ">
            <p class="text-[1.2em] mb-[15px]">Social Media</p>
            <h1 class="text-[2.2em] text-[#B22222] font-bold ">LinkedIn</h1>
            <h1 class="text-[2.2em] text-[#B22222] font-bold ">Twitter</h1>
            <h1 class="text-[2.2em] text-[#B22222] font-bold ">github</h1>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Footer;
