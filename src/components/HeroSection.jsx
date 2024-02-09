import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import hero from "../image/hero.jpg";

export const HeroSection = () => {
  const imgControls = useAnimation();
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

  // const imgVarients = {
  //   hover: {y: [30, 0]},
  //   initial: {y: 30}
  // }
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
              // variants={imgVarients}
              // initial="initial"
              // animate={imgControls}
              //   whileHover={{ transition: {duration: 1} }}
              //   transition={{
              //     duration: 1.5,
              //     ease: "easeInOut",
              //   }}
              className=" rounded-full sm:mt-10"
              src={hero}
              alt=""
              // onHoverStart={()=> {imgControls.start("hover")}}
              // onHoverEnd={()=> {imgControls.start("initial")}}
            />
          </motion.div>
        </div>
      </div>
      {/* <div className=" w-2/4 justify-center flex">
        <div className=" w-2/3 h-2/3">
          <motion.img
            whileHover={{ y: [10, -10] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
            className=" rounded-full"
            src={hero}
            alt=""
          ></motion.img>
        </div>
      </div> */}
    </div>
  );
};
