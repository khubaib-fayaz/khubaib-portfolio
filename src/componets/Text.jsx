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
      {/* <div className="w-full    absolute   flex justify-end">
        <motion.svg
          initial="hidden"
          animate="visible"
          variants={svgVarients}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="350.000000pt"
          height="350.000000pt"
          viewBox="0 0 225.000000 225.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
            fill="#fff"
            stroke="none"
          >
            <motion.path
              variants={pathVarient}
              d="M1765 1903 c-202 -43 -485 -198 -651 -355 -68 -65 -86 -88 -66 -88 4
0 43 30 87 67 207 173 484 307 707 343 69 11 80 11 103 -4 31 -20 31 -37 4
-94 -47 -97 -202 -238 -749 -683 -339 -276 -453 -390 -405 -405 6 -2 62 42
125 97 63 56 268 225 455 377 541 440 678 593 630 709 -8 19 -25 37 -40 43
-36 14 -117 11 -200 -7z"
            />
            <motion.path
              variants={pathVarient}
              d="M787 983 c-14 -22 -79 -201 -92 -250 -21 -80 -19 -110 9 -138 30 -30
79 -39 165 -32 93 8 146 27 146 52 0 22 5 22 -156 9 -117 -9 -134 0 -125 70 3
29 23 103 45 166 37 110 41 130 21 130 -5 0 -11 -3 -13 -7z"
            />
          </g>
        </motion.svg>
      </div> */}

      <div className="  mx-auto  xl:w-[40%] md:w-[70%]   w-[100%] mt-20">
        <p className="text-3xl text-center text-white ">
          {" "}
          Lets talk about my mentioned skills
        </p>

        <p className="text-center  lg:text-lg py-10  text-white opacity-60   "> 
          Here I mentioned my skills which I know using this skills i can create
          good and best for you and also i have gr
        </p>
      </div>

    </div>
  );
};

export default Text;
