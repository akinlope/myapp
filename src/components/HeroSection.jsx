import React from "react";
import { motion, useAnimation } from "framer-motion";
import hero from "../image/hero.jpg";

export const HeroSection = () => {
  const imgControls = useAnimation();

  const imgVarients = {
    hover: {y: [30, 0]},
    initial: {y: 30}
  }
  return (
    <div className=" flex mx-48 mt-8 mb-28">
      <div className="w-2/4 flex flex-col items-start justify-center md:p-10">
        <span className="md:text-[40px] font-bold text-[#1f2937]">
          Hello, I'm Tolulope &rdquo;
        </span>
        <span className="mt-8 text-left md:text-[20px] font-medium text-[#71717a]">
          I'm a{" "}
          <span className="font-bold text-[#1f2937]">frontend developer</span>{" "}
          adept at connecting people with digital spaces{" "}
          <span className="text-[#1f2937] font-bold">seamlessly.</span> At
          night, I indulge in gaming adventures.
        </span>
      </div>

      {/* Image */}
      <div className=" w-2/4 justify-center flex">
        <div className=" w-2/3 h-2/3">
          <motion.img
          variants={imgVarients}
          initial="initial"
          animate={imgControls}
            whileHover={{ transition: {duration: 1} }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            className=" rounded-full"
            src={hero}
            alt=""
            onHoverStart={()=> {imgControls.start("hover")}}
            // whileHover={"hover"}
            onHoverEnd={()=> {imgControls.start("initial")}}
          ></motion.img>
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
