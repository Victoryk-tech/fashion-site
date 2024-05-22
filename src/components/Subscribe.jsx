import React from "react";

export const Subscribe = () => {
  return (
    <div className="w-full h-full py-10 px-6 md:px-32">
      <div className="bg-[#F6FEE7] flex flex-col items-center justify-center rounded-[18px] gap-10 py-8 pl-4">
        <h1 className="text-[26px] font-[600]">Subscribe to our newsletter</h1>

        <div className="flex items-center justify-center pb-8 ">
          <form action="form" className="space-y-4 md:space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="py-3 pl-4 pr-7 bg-transparent border-white border-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="py-3 pl-4 pr-7 bg-transparent border-white border-2"
            />
            <button className="font-[600] text-white bg-black rounded-md py-3 px-8">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
