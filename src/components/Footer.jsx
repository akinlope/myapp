import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail} from "react-icons/md";


export const Footer = () => {
  return (
    <div className=" pb-5 border-t-2 flex mx-8 justify-evenly items-center">
      <div className=" pt-5 ">
        <span className=" text-[#71717a] font-bold lg:text-lg md:text-lg sm:text-xs">
          &copy; 2023 Copyright: Tolulope
        </span>
      </div>
      {/* socials */}
      <div className=" flex justify-around pt-5 text-lg text-[#71717a]">
        <span className=" lg:mx-4 md:mx-4 sm:mx-2 hover:text-[#1f2937] transition duration-400 ease-in-out"><a href="https://github.com/akinlope" target="_blanck"><FaGithub /></a></span>
        <span className=" lg:mx-4 md:mx-4 sm:mx-2 hover:text-[#1f2937] transition duration-400 ease-in-out"><a href="mailto: akinrimisitt@gmail.com" target="_blanck"><MdEmail /></a></span>
        <span className=" lg:mx-4 md:mx-4 sm:mx-2 hover:text-[#1f2937] transition duration-400 ease-in-out"><a href="https://www.linkedin.com/in/akinrimisi-tolulope-5863ba166/" target="_blanck"><FaLinkedin /></a></span>
      </div>
    </div>
  );
};
