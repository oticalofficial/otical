import React from "react";
import { CheckCircle2 } from "lucide-react";
import { contactListItems } from "../../constants";
import ContactForm from "./ContactForm";

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
          <h5 className="sm:text-xl lg:text-2xl text-center mt-6 tracking-wide">Ready to discuss your project? Contact us today for a free consultation.</h5>
        </div>
        <ContactForm />
        <div className="flex flex-wrap justify-center">

          <div className="pt-12 pr-25 w-full lg:w-1/2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.781140023269!2d80.993110975222!3d26.84691257668642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be36474ef9e59%3A0xd20c95db43288cfe!2sVragger!5e0!3m2!1sen!2sin!4v1743781087799!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
