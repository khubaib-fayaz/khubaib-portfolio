import Image from "next/image";
import React, { useState } from "react";
import { HiMail } from "react-icons/hi";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { Projects } from ".";
import { motion } from "framer-motion";

const Navigation = () => {
  const sentence = "Welcome".split("");
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const text1 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.06,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const rubberBand = () => {
    return {
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
    };
  };

  return (
    <div className="flex  justify-center       ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: "0.5", ease: "linear" }}
        className="text-white  w-full      "
      >
        <div className="flex   justify-between mx-4  lg:mx-40  ">
          <div className=" w-[100px]  lg:w-[200px]    ">
            <Image
              onClick={handleClick}
              src={"/assets/khubaib.png"}
              width={200}
              height={10}
              className="h-20  md:30 lg:h-56"
              alt="/"
            />
          </div>

          <div className="flex my-auto gap-5 lg:gap-9">

          <a>

            <HiMail className=" h-8 w-4  lg:w-6 lg:h-10 " />
          </a>
          <a target="_blank"
          href="https://github.com/khubaib-fayaz">

            <BsGithub className=" h-8 w-4  lg:w-6 lg:h-10 " />
          </a>
          <a     target="_blank"
          href="https://twitter.com/ahmadma05183568">

            <BsTwitter className=" h-8 w-4  lg:w-6 lg:h-10 " />
          </a>
          </div>
        </div>
        <div  className=" xl:w-[70%]     w-[80%]  mt-40 mx-auto">
          <div className="  xl:text-9xl   md:text-7xl  text-5xl">
            <motion.div
              variants={text1}
              initial="hidden"
              animate="visible"
              className=" xl:ml-20 md:ml-2  "
            >
              {sentence.map((text, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  whileHover={() => rubberBand}
                  variants={letter}
                >
                  {text}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div className="flex lg:flex-row  flex-col  xl:mx-20 gap-6 mt-10 justify-between">
            <div className=" xl:w-[50%] md:w-[70%]   w-[100%] lg:text-xl gap-6 flex text-white opacity-60   ">
              <div
                className="  lg:h-28  w-1"
                style={{ backgroundColor: active ? "orange" : "purple" }}
              ></div>
              My name is Khubaib fayaz Im a frontend developer in Pakistan. I
              am experienced in developing web  including
              full front end design I&#39;m here to help turn your dream amd ideas
              into focused clear products
            </div>

            <Projects active={active} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navigation;
