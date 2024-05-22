import React from "react";
import shoe1 from "../../src/assets/shoe3.jpg";
import shoe2 from "../../src/assets/shoe7.jpg";
import shoe12 from "../../src/assets/shoe14.jpg";
import shoe4 from "../../src/assets/shoe4.jpg";
import shoe5 from "../../src/assets/shoe5.jpg";
import shoe8 from "../../src/assets/shoe8.jpg";
export const ArrivalData = [
  {
    id: 1,
    image: shoe1,
    names: "Shoe",
    color: "Color Black",
    amount: 2800,
  },
  {
    id: 2,
    image: shoe2,
    names: "Shoe",
    color: "Color Black",
    amount: 2800,
  },
  {
    id: 3,
    image: shoe12,
    names: "Shoe",
    color: "Color Black",
    amount: 2600,
  },
  {
    id: 4,
    image: shoe4,
    names: "Shoe",
    color: "Color Black",
    amount: 2600,
  },
  {
    id: 5,
    image: shoe5,
    names: "Shoe",
    color: "Color Black",
    amount: 2600,
  },
  {
    id: 6,
    image: shoe8,
    names: "Shoe",
    color: "Color Black",
    amount: 2600,
  },
];
export const NewArrivals = () => {
  return (
    <div className="py-10 px-10 w-full h-full">
      <div>
        <div className="flex items-center justify-between pb-4">
          <h1>New Arrivals</h1>
          <p>See All</p>
        </div>
        <div className="grid grid-cols-3 items-center justify-center h-auto w-full">
          {ArrivalData.map((data) => {
            return (
              <div className="flex flex-col items-start justify-start mb-4 rounded-md p-2 bg-white w-[70%] h-auto">
                <div className="block items-center w-[15rem] h-[15rem]">
                  <img src={data.image} alt="" className="" />
                </div>
                <div className="w-full h-full pr-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p>{data.color}</p>
                      <p>{data.names}</p>
                    </div>
                    <div>
                      <p>4.5</p>
                    </div>
                  </div>

                  <div className="flex items-start justify-between">
                    <p>{data.amount}</p>
                    <p>Cart</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
