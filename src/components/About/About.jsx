import React from "react";
import Pricing from "./Pricing";
import Team from "./Team";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";

function About() {
  return (
    <>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        
      <div className="text-center">
            <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">About Us</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide" >We provide best 
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'> design solution in town</span>
            </h2>
        </div>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Otical is an IT development company based in Lucknow which works in a Flexible Environment for best IT Development Services.
We focus on providing IT services to organizations which are looking for some new business opportunities.
We here in Otical believe in “TO GROW AND HELP GROW ". We are an ISO certified company and ranked as top IT Company in lucknow.

We not only provide services but also known for building healthy relationships with our clients. Every task we undertake here at Otical, we consider it as a "priority with responsibility". The satisfaction of our clients is the force that drives each and every one of us here in Otical to work and work harder. Otical is considered as a one stop solution for IT development in lucknow. Otical comes up with a complete package of IT services and solutions such as Website development, web application development, Mobile application development, web designing, software testing and SEO/SMO implementation in lucknow. With modern and cutting edge technologies we deliver a quality product on time.
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
          >
            Start Now
          </a>
          <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            Know More
          </a>
        </div>
        <div className="flex mt-10 justify-center">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          >
            <source src={video1} type="video/mp4" />
            Your Browser does not support the video tag
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          >
            <source src={video2} type="video/mp4" />
            Your Browser does not support the video tag
          </video>
        </div>
      </div>
      <Pricing />
      <Team />
    </>
  );
}

export default About;
