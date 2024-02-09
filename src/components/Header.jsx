import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import CV from "../files/CV.pdf";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const active = loc.pathname.split("/")[1];
  console.log(active);

  const handleResume = () => {
    window.open(CV, "_blank");
  };

  
  return (
    <div>
      <div className="flex justify-between lg:mx-20 md:mx-10 sm:mx-5 md:relative sm:relative">
        <h1 className=" text-[#1f2937] lg:p-12 md:p-12 sm:p-6 font-bold lg:text-4xl md:text-2xl sm:text-2xl w-3/5">
          <Link className="hover:text-[#71717a] duration-100 flex flex-col w-1/4 cursor-pointer">
            <span>
              Akinrimisi <br /> Tolulope
            </span>
          </Link>
        </h1>
        {/* hamburger */}
        <div className="lg:hidden flex items-center text-[#71717a] md:p-12 sm:p-6">
          <div
            className="md:text-2xl sm:text-lg cursor-pointer "
            onClick={() => {
              setOpen((prevState) => !prevState);
            }}
          >
            {!open ? <FaBars /> : <FaXmark />}
          </div>
          {/* dropdown */}
          {open && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: open ? 0 : -100, opacity: open ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full p-4 shadow-sm flex-col md:mb-20 sm:mb-5 bg-[#fcfcfc]"
            >
              <Link
              onClick={() => {
                setOpen((prevState) => !prevState);
              }}
                className=" hover:text-black font-semibold cursor-pointer"
                to={"/"}
              >
                <div
                  className={`p-4 border-b-2 ${
                    active === "" ? " text-black" : ""
                  }`}
                >
                  Projects.
                </div>
              </Link>
              <Link
              onClick={() => {
                setOpen((prevState) => !prevState);
              }}
                className=" hover:text-black font-semibold cursor-pointer "
                to={"/about"}
              >
                <div
          
                  className={` p-4 border-b-2 ${
                    active === "about" ? " text-black" : ""
                  }`}
                >
                  About.
                </div>
              </Link>
              <div
                onClick={()=> {handleResume(); setOpen((prevState)=> !prevState)}}
                rel="noreferrer"
                className=" p-4 border-b-2 hover:text-black hover:font-normal cursor-pointer"
              >
                Resume.
              </div>
              <div className=" p-4">
                <a
                onClick={() => {
                  setOpen((prevState) => !prevState);
                }}
                  rel="noreferrer"
                  className=" hover:text-black hover:font-normal cursor-pointer"
                  href="https://www.linkedin.com/in/akinrimisi-tolulope-5863ba166/"
                  target="_blank"
                >
                  LinkedIn.
                </a>
              </div>
            </motion.div>
          )}
        </div>
        <div className=" md:hidden sm:hidden flex justify-around w-2/5 items-center  text-[#71717a]">
          <Link
            className=" hover:text-black font-semibold cursor-pointer"
            to={"/"}
          >
            <div className={` ${active === "" ? " text-black" : ""}`}>
              Projects.
            </div>
          </Link>
          <Link
            className=" hover:text-black font-semibold cursor-pointer"
            to={"/about"}
          >
            <div className={` ${active === "about" ? " text-black" : ""}`}>
              About.
            </div>
          </Link>
          {/* <Link
            className=" hover:text-black font-semibold cursor-pointer"
            to={"/resume"}
          >
            Résumé.
          </Link> */}
          <span
            onClick={handleResume}
            rel="noreferrer"
            className=" hover:text-black hover:font-normal cursor-pointer"
          >
            Resume.
          </span>
          <a
            rel="noreferrer"
            className=" hover:text-black hover:font-normal cursor-pointer"
            href="https://www.linkedin.com/in/akinrimisi-tolulope-5863ba166/"
            target="_blank"
          >
            LinkedIn.
          </a>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
