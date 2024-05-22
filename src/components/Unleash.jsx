import React from "react";

export const Unleash = () => {
  return (
    <div className="py-10 px-10 w-full h-full">
      <div className="flex items-start justify-between pb-10">
        <div className="w-[50%]">
          <h1 className="text-[40px] font-[700] leading-12 ">
            Unleash Your Potential with Sans Souci
          </h1>
        </div>
        <div className="w-[50%] pl-2">
          <p className="text-[26px] font-[400]">
            Explore our premium products for inspiration and empowerment.
            Elevate your everyday with quality, style, and innovation.
          </p>
        </div>
      </div>

      <div className="flex items-start justify-start gap-2">
        <a
          href="#"
          className="py-3 px-14 bg-[#60A20E] text-white rounded-[12px]"
        >
          Shop Now
        </a>
        <a
          href="#"
          className="py-3 px-14 border-[#60A20E]  border-solid border-[2px] text-[#60A20E] rounded-[12px]"
        >
          Watch Video
        </a>
      </div>
    </div>
  );
};
