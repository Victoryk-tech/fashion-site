import React from "react";
import { IoMdAppstore } from "react-icons/io";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";
import { RiBloggerLine } from "react-icons/ri";

export const Bills = () => {
  return (
    <div className="py-4 px-2 lg:px-14">
      <div className="grid grid-cols-2 md:grid-cols-5 items-start justify-start">
        <div className="flex items-center justify-center space-x-2 shadow-[0_7px_25px_rgba(0,0,0,0.08)] py-6 lg:py-5 px-10 lg:px-14 hover:scale-105 ease-in-out transition-all">
          <RiBloggerLine className="text-green-500" />
          <p className="text-sm">Kefa Blog</p>
        </div>
        <div className="flex items-center justify-center space-x-2 shadow-[0_7px_25px_rgba(0,0,0,0.08)] py-6 lg:py-5 px-10 lg:px-14 hover:scale-105 ease-in-out transition-all">
          <MdPayment className="text-green-500" />
          <p className="text-sm">pay bills</p>
        </div>
        <div className="flex items-center justify-center space-x-2 shadow-[0_7px_25px_rgba(0,0,0,0.08)] py-6 lg:py-5 px-10 lg:px-14 hover:scale-105 ease-in-out transition-all">
          <IoMdAppstore className="text-green-500" />
          <p className="text-sm">offline store</p>
        </div>
        <div className="hidden md:flex items-center justify-center space-x-2 shadow-[0_7px_25px_rgba(0,0,0,0.08)] py-6 lg:py-5 px-10 lg:px-14 hover:scale-105 ease-in-out transition-all">
          <IoStorefrontOutline className="text-green-500" />
          <p className="text-sm">Brand stores</p>
        </div>

        <div className="flex items-center justify-center md:space-x-2 shadow-[0_7px_25px_rgba(0,0,0,0.08)] py-6 lg:py-5 px-10 lg:px-14 hover:scale-105 ease-in-out transition-all">
          <PiTelevision className="text-green-500" />
          <p className="text-sm">Watch Kefa tv</p>
        </div>
      </div>
    </div>
  );
};
