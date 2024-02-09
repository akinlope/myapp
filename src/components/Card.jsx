import React from "react";
import { data } from "./helper";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export const Card = () => {

  return (
    <motion.div className=" lg:flex md:flex sm:flex-col lg:justify-between md:justify-between mt-10 lg:mx-20 md:mx-10 sm:mx-5"
    initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {data.map((item, index) => {
        return (
          <motion.div
            key={index}
            className=" bg-slate-100 border rounded p-4 lg:w-[45%] md:w-[45%] sm:mt-10"
            variants={cardVariants}
          >
            <img
              className=" rounded"
              width={800}
              height={100}
              src={item.img}
              alt=""
            />

            {/* title */}
            <div className=" mt-5 font-bold text-[#1f2937] text-base">{item.title}</div>
            {/* information */}
            <div className="text-[#71717a] sm:text-sm">{item.info}</div>
            <div className="text-[#71717a] mt-2 font-normal sm:text-sm">{item.techtitle}</div>
            {/* ---------- */}
            {/* <div>_______________</div> */}
            {/* button */}
            <div className=" flex justify-around mt-2">
              <button className=" text-white p-2 bg-sky-800 font-bold px-4 rounded hover:bg-sky-500 transition duration-500 ease-in-out"><a href={item.code} target="_blank" rel="noreferrer">View Code</a></button>
              <button className=" border border-[#71717a] text-[#71717a] hover:text-[#1f2937]  rounded font-bold p-2 px-4 transition duration-500 ease-in-out "><a href={item.site} target="_blank" rel="noreferrer">Visit Site</a></button>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
