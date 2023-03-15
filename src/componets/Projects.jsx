import React from "react";

const Projects = ({ active }) => {
  return (
    <div>
      <div className="text-4xl mb-10 mt-10">Projects</div>
      <div className=" absolute  ">
        <div
          className="relative  -top-4     h-[2px]   w-24 "
          style={{ backgroundColor: active ? "orange" : "white" }}
        ></div>
        <div
          className="relative  -top-4     h-24   w-[2px] "
          style={{ backgroundColor: active ? "orange" : "white" }}
        ></div>
      </div>
      <div className="text-xl text-white opacity-60   lg:w-[100%]  md:w-[20%]  w-[35%] text-center ml-6 ">
        <div>
          <p className=" mt-4  border-orange-50 ">AtomPad</p>
          <div
            className=" mt-2  justify-items-center  h-[1px]  "
            style={{ backgroundColor: active ? "orange" : "white" }}
          ></div>
        </div>
        <div>
          <p className=" mt-4   border-orange-50 ">MtvSwap</p>
          <div
            className=" mt-2  justify-items-center  h-[1px]  "
            style={{ backgroundColor: active ? "orange" : "white" }}
          ></div>
        </div>
        <div>
          <p className=" mt-4  border-orange-50 ">WayPay</p>
          <div
            className=" mt-2  justify-items-center  h-[1px]  "
            style={{ backgroundColor: active ? "orange" : "white" }}
          ></div>
        </div>
        <div>
          <p className=" mt-4   border-orange-50 ">Self</p>
          <div
            className=" mt-2  justify-items-center  h-[1px]  "
            style={{ backgroundColor: active ? "orange" : "white" }}
          ></div>
        </div>
      </div>

      {/* <div  className="absolute right-60   rotate-180"> 
          <div className="relative bg-white   h-2   w-40 "></div>
          <div className="relative bg-white   h-40   w-2 "></div>
      </div> */}
    </div>
  );
};

export default Projects;
