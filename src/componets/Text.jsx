import React from "react";
import { motion } from "framer-motion";

const svgVarients = {
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVarient = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Text = () => {
  return (
    <div className="bg-gray-900  text-white ">
      <div className="  mx-auto  xl:w-[40%] md:w-[70%]   w-[100%] mt-20">
        <p className="  text-xl lg:text-3xl text-center text-white ">
          {" "}
          Lets talk about my mentioned skills
        </p>

        <p className="text-center  text-xs lg:text-lg py-10  text-white opacity-60   ">
          A highly skilled front-end developer seeking a challenging role in a
          dynamic organization where I can utilize my skills and experience to
          develop innovative and engaging web applications. Experienced
          front-end developer with a proven track record of developing
          responsive and user-friendly websites and web applications. A quick
          learner with excellent problem-solving skills.
        </p>
      </div>
    </div>
  );
};

export default Text;
