import React from "react";
import shoe from "../../src/assets/shoe2.jpg";
import { MdStarRate } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
export const newArrivs = [
  {
    id: 1,
    title: "Standard skit",
    images: shoe,
    brand: "guch",
    rating: 454,
    price: 67.89,
  },
  {
    id: 2,
    title: "Standard Skit",
    images: shoe,
    brand: "guch",
    rating: 454,
    price: 67.89,
  },
  {
    id: 3,
    title: "Standard Skit",
    images: shoe,
    brand: "guch",
    rating: 454,
    price: 67.89,
  },
  {
    id: 4,
    title: "Standard skit",
    images: shoe,
    brand: "guch",
    rating: 454,
    price: 120000,
  },
  {
    id: 5,
    title: "Standard skit",
    images: shoe,
    brand: "guch",
    rating: 774,
    price: 10500,
  },

  {
    id: 6,
    title: "Standard skit",
    images: shoe,
    brand: "guch",
    rating: 214,
    price: 92000,
  },
];
export const NewArrivals = () => {
  return (
    <div className="px-4 py-5 lg:py-10 lg:px-4  w-full h-full space-y-4 bg-white">
      <div className="w-full text-start text-[20px] pl-8  font-semibold">
        <h1>Recommended for you</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center px-2 lg:px-8  space-y-6 md:space-y-0 w-full">
        {newArrivs.map((data, index) => {
          return (
            <div
              key={index}
              className="flex justify-start items-start border hover:shadow-[0_7px_25px_rgba(0,0,0,0.08)] hover:scale-105 ease-in-out transition-all py-1 bg-white rounded-lg w-50 md:w-[10.8rem] lg:w-96 h-32 md:h-72 lg:h-40"
            >
              {/* left */}
              <div className="flex items-center justify-center py-4 pl-3 w-[70%]">
                <img
                  src={data.images}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              {/* right */}
              <div className=" w-full h-1/3 px-8 md:px-4 lg:py-8 space-y-2">
                <p className="text-lg font-[500]">{data.title}</p>
                <p className="font-bold text-2xl rounded-md">${data.price}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="flex items-center justify-center">
                      {" "}
                      <MdStarRate className="text-[rgba(243,181,25)]" />
                      <MdStarRate className="text-[rgba(243,181,25)]" />
                      <MdStarRate className="text-[rgba(243,181,25)]" />(
                      {data.rating})
                    </p>
                  </div>
                  <div className="text-[24px] text-green-500">
                    <BsCart3 />
                  </div>
                </div>

                <div className="flex items-start justify-between"></div>
                <div className=" h-10 flex items-center w-full justify-center"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
