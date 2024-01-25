import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Header = () => {
  const loc = useLocation();
  const active = loc.pathname.split("/")[1];
  console.log(active);

  return (
    <div>
      <div className=" flex justify-between lg:mx-48">
        <h1 className=" text-[#1f2937] lg:p-12  font-bold md:text-4xl w-3/5">
          <Link className="hover:text-[#71717a] duration-100 flex flex-col w-1/4 cursor-pointer">
            <span>Akinrimisi</span> <span>Tolulope</span>
          </Link>
        </h1>
        <div className=" flex justify-between w-2/5 items-center  text-[#71717a]">
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
          <Link
            className=" hover:text-black font-semibold cursor-pointer"
            to={"/resume"}
          >
            Résumé.
          </Link>
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
