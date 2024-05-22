import React from "react";
import trend1 from "../../src/assets/Trend1.png";
import trend2 from "../../src/assets/trend2.png";
import trend3 from "../../src/assets/Trend3.png";

export const Trending = () => {
  return (
    <div className="bg-[#EAFCCB] py-10 px-10 w-full h-full flex justify-start items-start">
      <div className="w-[40%] h-full flex flex-col items-start justify-center pt-16">
        <h1 className="text-[32px] font-[700]">
          Today's trending outfit of the day
        </h1>
        <p className="text-[20px] font-[400] pb-4">
          Today's trending outfit of the day showcases bold patterns and vibrant
          colors for a standout look.
        </p>
        <a
          href="#"
          className="py-2 px-16 bg-[#60A20E] text-white rounded-[10px]"
        >
          Explore
        </a>
      </div>
      <div className="flex items-start w-[60%] pl-8">
        <img src={trend1} alt="" className="h-[60%] w-[30%]" />
        <img src={trend2} alt="" className="h-[60%] w-[30%]" />
        <img src={trend3} alt="" className="h-[60%] w-[30%]" />
      </div>
    </div>
  );
};
