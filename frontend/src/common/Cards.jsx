import React from "react";
import { MdOutlineBarChart } from "react-icons/md";

const Cards = (props) => {
  return (
    <div className="!z-5 shadow-3xl shadow-shadow-500   relative flex flex-grow !flex-row items-center rounded-[20px] bg-white bg-clip-border ">
      <div className="m-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F7FE] ">
        <MdOutlineBarChart className=" h-6 w-6    text-[#422AFB]" />
      </div>
      <div>
        <p className="text-sm font-medium text-[#A3AED0]">{props.name}</p>
        <p className="text-xl font-bold ">{props.value}</p>
      </div>
    </div>
  );
};

export default Cards;
