import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <section className="flex border-2 border-black">
        <div className="flex flex-col items-end border-2 border-[red]">
          <div className="min-w-[500px] border-2 border-[yellow] flex items-end justify-end">
            <h1 className="text-[3em]">
              Need a quote <br /> for a project?
              <br /> Get in Touch...
            </h1>
          </div>

          <div className="max-w-[250px] border-2 border-[black]">
            <p className="text-base">
              {" "}
              When working with me you will get a modern website that is
              responsive, secure, meets the needs of your clients, reflects your
              brand and its values and stands out among competitors
            </p>
          </div>
        </div>

        <form class="container p-4">
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
            class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            type="submit">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
