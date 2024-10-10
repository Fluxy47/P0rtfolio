import React from "react";

function Card() {
  const arr = ["Unity", "C++", "Html/Css", "Javascript", "Vue.js"];
  const arr2 = ["Vuetify", "Flutter", "Dart", "Bootstrap", "Blender"];

  return (
    <div className="border-2 border-black flex justify-center items-center">
      <section className="bg-gradient-to-t from-[#92022E] to-[#F45849] min-h-[350px] xl:w-[60%] flex">
        <div className="w-[40%] bg-[blue]"></div>

        {/* <div className="w-[5px] hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-700 h-[80%]" /> */}

        <div className="w-[60%] bg-[yellow] flex justify-center items-center">
          <div className="max-w-lg border-2 border-black">
            <p
              style={{
                fontSize: "clamp(0.9375rem, 0.8125rem + 0.625vw, 1.5625rem)",
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              tincidunt ex. Quisque malesuada sodales orci, ac condimentum nisi
              commodo at.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;

{
  /* <div className="w-full flex justify-center items-center border-2 border-[blue]">
      <section className="relative bg-gradient-to-t from-[#92022E] to-[#F45849] border-2 border-black rounded-xl shadow-xl flex justify-center items-center w-[80%] lg:w-[70%] xl:w-[60%] min-h-[100px]">
        <div className="flex flex-col md:flex-row w-full min-h-[400px] justify-evenly items-center p-[40px] relative  md:top-0 ">
       
          <div className="flex flex-col md:flex-row relative lg:left-[-20px] gap-[30px] lg:gap-0 items-center justify-start">
            <div className="flex md:flex-col gap-[15px]  items-start">
              {arr.map((item, idx) => (
                <p
                  key={idx}
                  className="tracking-wider"
                  style={{
                    fontSize: "clamp(0.9375rem, 0.6875rem + 1.25vw, 2.1875rem)",
                  }}>
                  {item}
                </p>
              ))}
            </div>
            <div className="flex md:flex-col gap-[15px] lg:ml-[50px] items-start">
              {arr2.map((item, idx) => (
                <p
                  key={idx}
                  className="tracking-wider"
                  style={{
                    fontSize: "clamp(0.9375rem, 0.6875rem + 1.25vw, 2.1875rem)",
                  }}>
                  {item}
                </p>
              ))}
            </div>
          </div>

         
          <div className="w-[5px] hidden md:block absolute left-[48%] top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-700 h-[80%]" />

  
          <div className="md:max-w-[6em] lg:max-w-[8em] 2xl:max-w-[8em] border-2 border-[yellow] relative md:left-[40px] lg:left-[5%]  ">
            <p
              style={{
                fontSize: "clamp(0.9375rem, 0.8125rem + 0.625vw, 1.5625rem)",
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              tincidunt ex. Quisque malesuada sodales orci, ac condimentum nisi
              commodo at.
            </p>
          </div>
        </div>
      </section>
    </div> */
}
