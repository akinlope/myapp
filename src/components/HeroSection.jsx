import React, { useState } from "react";
import { motion } from "framer-motion";
import hero from "../image/hero.jpg";

export const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const hoverEffect = {
    animate: {
      y: [10, 0, 10, 0],
      transition: {
        duration: 2.5,
        ease: "linear",
      },
    },
  };

  return (
    // parent Div  
    <div className=" lg:flex md:flex sm:flex-col lg:mx-20 md:mx-10 sm:mx-5 lg:p-12 md:p-12 sm:mt-20">
      <div className="lg:w-2/4 md:w-2/4 flex flex-col items-start justify-center">
        {/* my Div */}
        <div className="lg:text-[45px] md:text-[35px] sm:text-[25px] font-bold text-[#1f2937] sm:p-2 ">
          Hello, I'm Tolulope &rdquo;
        </div>
        <span className="lg:mt-4 md:mt-4 sm:mt-2 text-left lg:text-[30px] md:text-[20px] sm:text-[20px] font-medium text-[#71717a] sm:p-2">
          I'm a{" "}
          <span className="font-bold text-[#1f2937]">frontend developer</span>{" "}
          adept at connecting people with digital spaces{" "}
          <span className="text-[#1f2937] font-bold">seamlessly.</span> At
          night, I indulge in gaming adventures.
        </span>
      </div>

      {/* Image */}
      <div className="lg:w-2/4 md:w-1/2 sm:w-full sm:flex sm:justify-center">
        <div className=" lg:w-2/3 md:w-2/3 h-2/3  lg:ml-auto md:ml-auto sm:flex sm:justify-center">
          <motion.div
            onMouseEnter={() => {
              setHover(true);
            }}
            variants={hoverEffect}
            animate={`${hover ? "animate" : "false"}`}
          >
            <img
              className=" rounded-full sm:mt-10"
              src={hero}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
