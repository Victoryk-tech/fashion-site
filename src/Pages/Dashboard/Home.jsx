import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import profile from "../../assets/profile.png";
import { CiSearch } from "react-icons/ci";
import { Orders } from "../../components/Orders";

export const Home = () => {
  return (
    <div className="col-span-12 md:col-span-10 md:py-2 px-1 md:px-4 ">
      <header className="flex justify-between items-start text-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="flex items-center justify-center space-x-2 text-[#E3E6F3]">
            <h3>Dashbord</h3>
            <MdOutlineArrowForwardIos className="text-sm" />
          </div>
          <div className="flex items-center justify-center space-x-2 text-[#E3E6F3]">
            <h3>Orders</h3>
            <MdOutlineArrowForwardIos className="text-sm" />
          </div>
          <h3>Recent Orders</h3>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <div className="md:flex items-center justify-center space-x-1 bg-white shadow-[0_7px_25px_rgba(0,0,0,0.08)]  border-[1px] border-black rounded-[8px]">
            <CiSearch className="text-[21px] font-semibold" />
            <input
              placeholder="search...."
              type="text"
              className="border-none bg-transparent outline-none py-1"
            />
          </div>

          <div className="flex items-center justify-center h-8 w-8 rounded-full">
            <img
              src={profile}
              alt=""
              className="h-full w-full object-cover object-top rounded-full"
            />
          </div>
        </div>
      </header>
      <div>
        <Orders />
      </div>
    </div>
  );
};
