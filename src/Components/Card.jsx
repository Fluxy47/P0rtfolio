import React, { useState, useEffect } from "react";

function Card({ item }) {
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
    <div className=" flex justify-center items-center">
      <section className="bg-gradient-to-t from-[#92022E] to-[#F45849] md:min-h-[350px] w-[90vw] xl:w-[60%] flex rounded-2xl">
        <div className="w-[40%] border-r-4 border-black">
          <img
            src={item.img}
            className="h-[40vh] md:h-[55vh] w-full rounded-tl-2xl rounded-bl-2xl "
          />
        </div>

        {/* <div className="w-[5px] hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-700 h-[80%]" /> */}

        <div className="w-[60%] flex flex-col gap-[2vh] sm:gap-[4vh] md:gap-[6vh] justify-start items-center">
          <h1
            style={{ fontSize: "clamp(1rem, 0.5rem + 2.5vw, 3.5rem)" }}
            className="text-center md:text-start">
            {item.Title}
          </h1>
          <p
            style={{ fontSize: "clamp(1rem, 0.86rem + 0.7vw, 1.7rem)" }}
            className=" mx-[2%] md:mx-[4%] ">
            {item.Description} {width}
          </p>
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
