import React from "react";
import { CheckCircle2 } from "lucide-react";
import { contactListItems } from "../../constants";

function Contact() {
  return (
    <>
      <div className="mt-20">
      <div className="text-center">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">Contact Us</span>
            <h2 className="text=3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
          Discover our team, values, and mission driving the future of
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            artificial intelligence
          </span>
        </h2>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="pt-12 pr-25 w-full lg:w-1/2">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf9LERQX67iyT5fUezeddTYrzbyf5fMIHALmCijjfXxDFIVgw/viewform?embedded=true"
              width="500"
              height="600"
            >
              Loading…
            </iframe>
          </div>
          <div className="pt-12 w-full lg:w-1/2">
            {contactListItems.map((item, index) => (
              <div key={index} className="flex mb-12">
                <div className="text-yellow-600 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
