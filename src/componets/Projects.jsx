import React from "react";

const Projects = ({ active }) => {
  return (
    <div>
      <div className="text-4xl mb-10 mt-10">Skills <span className="text-xs">
        Scroll me
      </span></div>
      <div className=" absolute  ">
        <div
          className="relative  -top-4     h-[2px]   w-24 "
          style={{ backgroundColor: active ? "orange" : "purple" }}
        ></div>
        <div
          className="relative  -top-4     h-24   w-[2px] "
          style={{ backgroundColor: active ? "orange" : "purple" }}
        ></div>
      </div>
      <div className="  scrollbar-none scrollbar-thumb-slate-100   h-96 overflow-x-auto  text-sm lg:text-xl text-white opacity-60   lg:w-[100%]  md:w-[20%]  w-[40%] text-center ml-6 ">
        <div>
          <p className=" mt-4  border-orange-50 ">HTML</p>
          <div
            className=" mt-2  justify-items-center  h-[1px]  "
            style={{ backgroundColor: active ? "orange" : "purple" }}
          ></div>
        </div>
        <div>
          <p className=" mt-4   border-orange-50 ">JavaScript</p>
          <div
            className=" mt-2  justify-items-center  h-[1px]  "
            style={{ backgroundColor: active ? "orange" : "purple" }}
          ></div>
        </div>
        <div>
          <p className=" mt-4  border-orange-50 ">CSS</p>
          <div
            className=" mt-2  justify-items-center  h-[1px]  "
            style={{ backgroundColor: active ? "orange" : "purple" }}
          ></div>
        </div>
        <div>
          <p className=" mt-4   border-orange-50 ">React</p>
          <div
            className=" mt-2  justify-items-center  h-[1px]  "
            style={{ backgroundColor: active ? "orange" : "purple" }}
          ></div>
        </div>
        <div>
          <p className=" mt-4   border-orange-50 ">Type-script</p>
          <div
            className=" mt-2  justify-items-center  h-[1px]  "
            style={{ backgroundColor: active ? "orange" : "purple" }}
          ></div>
        </div>
        <div>
          <p className=" mt-4   border-orange-50 ">Next.js</p>
          <div
            className=" mt-2  justify-items-center  h-[1px]  "
            style={{ backgroundColor: active ? "orange" : "purple" }}
          ></div>
        </div>
        <div>
          <p className=" mt-4   border-orange-50 ">Tailwind</p>
          <div
            className=" mt-2  justify-items-center  h-[1px]  "
            style={{ backgroundColor: active ? "orange" : "purple" }}
          ></div>
        </div>
        <div>
          <p className=" mt-4   border-orange-50 ">Chakra ui</p>
          <div
            className=" mt-2  justify-items-center  h-[1px]  "
            style={{ backgroundColor: active ? "orange" : "purple" }}
          ></div>
        </div>
        <div>
          <p className=" mt-4   border-orange-50 ">Material ui</p>
          <div
            className=" mt-2  justify-items-center  h-[1px]  "
            style={{ backgroundColor: active ? "orange" : "purple" }}
          ></div>
        </div>
        <div>
          <p className=" mt-4   border-orange-50 ">Framer motion</p>
          <div
            className=" mt-2  justify-items-center  h-[1px]  "
            style={{ backgroundColor: active ? "orange" : "purple" }}
          ></div>
        </div>
      </div>

      
    </div>
  );
};

export default Projects;
