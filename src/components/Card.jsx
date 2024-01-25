import React from "react";
import { data } from "./helper";

export const Card = () => {
  return (
    <div className=" flex md:justify-around">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className=" bg-slate-100 border rounded p-4 md:w-[45%]"
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
            <div className="text-[#71717a]">{item.info}</div>
            {/* ---------- */}
            {/* <div>_______________</div> */}
            {/* button */}
            <div className=" flex justify-around mt-2">
              <button className=" text-white p-2 bg-sky-800 font-bold px-4 rounded hover:bg-sky-500 transition duration-500 ease-in-out"><a href={item.code} target="_blank" rel="noreferrer">View Code</a></button>
              <button className=" border border-[#71717a] text-[#71717a] hover:text-[#1f2937]  rounded font-bold p-2 px-4 transition duration-500 ease-in-out "><a href={item.site} target="_blank" rel="noreferrer">Visit Site</a></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
