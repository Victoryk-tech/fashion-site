import React from "react";

export const Orders = () => {
  return (
    <div className="w-full h-auto ">
      <div className="flex items-start justify-between py-4 px-4 space-x-6">
        <div className="flex flex-col justify-start items-start space-y-3 w-[80%]">
          <div className="grid grid-cols-4 items-center justify-center space-x-2 py-4">
            <div className=" grid col-span-2 row-span-1 justify-start items-start border-2 py-2 px-4 shadow-[0_7px_25px_rgba(0,0,0,0.08)]">
              <h1 className="text-lg font-bold">Your Orders</h1>
              <p className="text-sm font-semibold">
                Introducing our dynamic Orders Dashboard for seamless Management
                and insightfull analysis
              </p>
              <a
                href="#"
                className="bg-green-600 text-white py-2 px-2 w-36 text-sm mt-2 rounded-md"
              >
                Create New Orders
              </a>
            </div>
            <div className="flex flex-col justify-start items-start border-2 space-y-1 py-2 px-4 shadow-[0_7px_25px_rgba(0,0,0,0.08)]">
              <h3>This week</h3>
              <h1 className="text-3xl font-bold">$1329</h1>
              <p className="text-sm ">+25% from last week</p>
              <input type="range" min={0} max={100} step={5} className="" />
            </div>
            <div className="flex flex-col justify-start items-start border-2 space-y-1 py-2 px-4 shadow-[0_7px_25px_rgba(0,0,0,0.08)]">
              <h3>This week</h3>
              <h1 className="text-3xl font-bold">$5,329</h1>
              <p className="text-sm ">+10% from last month</p>
              <input type="range" min={0} max={100} step={5} className="" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-center space-x-1 bg-[#E3E6F3] text-black text-sm">
                <p>Week</p> <p>Month</p>
                <p>Year</p>
              </div>
              <div className="flex items-center justify-center">
                <div>Filter</div>
                <div>Export</div>
              </div>
            </div>
            <div>table</div>
          </div>
        </div>

        <div>right</div>
      </div>
    </div>
  );
};
