import React from "react";
import { FaFaceSmileWink } from "react-icons/fa6";
import { easeInOut, motion } from "framer-motion";
import svg1 from "../image/svg1.png";

export const About = () => {
  return (
    <div className=" lg:flex md:flex sm:flex-col justify-between lg:mx-20 md:mx-10 sm:mx-5 ">
      <div className=" lg:w-1/2 md:w-1/2 lg:p-12 md:pb-12 text-[#71717a] flex items-center">
        <div className=" lg:mx-20 md:mx-10 sm:mx-5 sm:mt-10">
          <span className=" flex md:pl-12 md:pt-12 items-center font-semibold text-2xl text-[#1f2937]">
            Hell
            <FaFaceSmileWink />,
          </span>
          <div className=" md:pl-12 mt-2">
            I'm{" "}
            <span className="font-semibold text-lg text-[#1f2937]">
              Tolulope, {" "}
            </span>
            a graduate of{" "}
            <span className="font-semibold text-lg text-[#1f2937]">
              Moshood Abiola Polytechnic. <br />
            </span>{" "}
            My academic journey has equipped me with the skills and knowledge
            needed to thrive in the field. <br /> As a{" "}
            <span className="font-semibold text-lg text-[#1f2937]">
              web developer
            </span>
            , I am enthusiastic about translating ideas into{" "}
            <span className="font-semibold text-lg text-[#1f2937]">
              functional
            </span>{" "}
            and{" "}
            <span className="font-semibold text-lg text-[#1f2937]">
              user-friendly digital experiences
            </span>
            . <br />
            I'm excited to embark on my career, applying the skills honed during
            my time at the polytechnic to{" "}
            <span className="font-semibold text-lg text-[#1f2937]">
              real-world projects
            </span>{" "}
            and{" "}
            <span className="font-semibold text-lg text-[#1f2937]">
              challenges
            </span>
            .
          </div>
        </div>
      </div>
      {/* image */}
      <div className=" lg:w-1/2 md:w-1/2">
        <motion.img
          className=" items-center"
          initial={{ y: 10 }} // Initial position (y-axis)
          animate={{
            y: [10, -10, 10, -10, 10],
            transition: { repeat: Infinity, duration: 10, easings: easeInOut },
          }}
          // initial={{y: 0}}
          // animate={{y: [-10], transition:{repeat: Infinity, ease: easeInOut, duration: 2}}}
          src={svg1}
          alt="Programmer svg icon"
        />
      </div>
    </div>
  );
};
