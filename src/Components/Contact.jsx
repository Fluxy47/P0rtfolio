import React, { useState, useEffect } from "react";

function Contact() {
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
      id="ContactMe"
      className="min-h-screen flex justify-center items-center mt-[15%] md:mt-0">
      <section className="flex flex-wrap justify-evenly items-start gap-[30px] w-[90vw]">
        <div className="flex flex-col gap-[10px] items-center lg:items-end">
          <div className="min-w-[300px] flex items-start lg:items-end justify-start lg:justify-end">
            <h1 className="text-[3em] text-[#B22222] font-bold leading-tight">
              Need a quote <br /> for a project?
              <br /> Get in Touch...
            </h1>
          </div>

          <div className="max-w-[250px]">
            <p className="text-base">
              When working with me, you will get a modern website that is
              responsive, secure, meets the needs of your clients, reflects your
              brand and its values, and stands out among {width}
            </p>
          </div>
        </div>

        <form className="min-w-[90%] md:min-w-[40%]  mt-[-40px] p-4">
          <div className="inputbox">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="Name" required name="user_name" />
            <label>Name</label>
          </div>
          <div className="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="text" required name="user_email" />
            <label>Email</label>
          </div>
          <div className="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input type="text" required name="message" />
            <label>Message</label>
          </div>
          <button
            className="w-full px-4 py-2 bg-[#B22222] text-white rounded-lg mt-[30px]"
            type="submit">
            Submit
          </button>
        </form>
      </section>
    </section>
  );
}

export default Contact;
