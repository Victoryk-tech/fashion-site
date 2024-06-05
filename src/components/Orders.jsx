import React from "react";

export const Orders = () => {
  return (
    <div className="w-full h-auto ">
      <div className="flex items-start justify-between py-4 px-4 space-x-6">
        <div className="flex flex-col justify-start items-start space-y-3 w-[80%]">
          <div className="grid grid-cols-3 items-center justify-center">
            <div className="flex flex-col justify-start items-start py-2 px-4 shadow-[0_7px_25px_rgba(0,0,0,0.08)]">
              <h1 className="text-lg font-bold">Your Orders</h1>
              Introducing our dynamic Orders Dashboard for seamless Management
              and insightfull analysis
              <a
                href="#"
                className="bg-green-600 text-white py-2 px-2 text-sm mt-3 rounded-md"
              >
                Create New Orders
              </a>
            </div>
            <div className="flex flex-col justify-start items-start space-y-2 py-2 px-4 shadow-[0_7px_25px_rgba(0,0,0,0.08)]">
              <h3>This week</h3>
              <h1 className="text-3xl font-bold">$1329</h1>
              <p>+25% from last week</p>
              <input type="range" min={0} max={100} step={5} className="" />
            </div>
            <div className="flex flex-col justify-start items-start py-2 px-4 shadow-[0_7px_25px_rgba(0,0,0,0.08)]">
              <h1 className="text-lg font-bold">Your Orders</h1>
              Introducing our dynamic Orders Dashboard for seamless Management
              and insightfull analysis
              <a
                href="#"
                className="bg-green-600 text-white py-2 px-2 text-sm mt-3 rounded-md"
              >
                Create New Orders
              </a>
            </div>
          </div>
          <div>bottom</div>
        </div>

        <div>right</div>
      </div>
    </div>
  );
};
