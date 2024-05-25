import React from "react";
import logo from "../../src/assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import profile from "../../src/assets/profile.png";
import arrow from "../../src/assets/arrowUp.png";
import cart from "../../src/assets/cart.png";
import flag from "../../src/assets/flag.png";
import { CiMenuBurger } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const NavBar = () => {
  return (
    <div className=" w-full px-4 py-2 lg:px-[72px] lg:py-[15px] bg-[#E3E6F3] z-[99] sticky top-0 left-0 shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between  py-6 px-4 md:px-10">
        <div className="flex items-center justify-center">
          <img src={logo} alt="" className="w-8 h-8 md:w-10 md:h-10" />
          {/* <h1 className="font-[itim] font-[600] text-[20px] md:text-[28px] text-nowrap">
            Sans Souci
          </h1> */}
        </div>
        <nav className="hidden md:flex items-center justify-center text-[18px] gap-8 text-center relative">
          <a
            href="#"
            className="transition-all ease-in-out duration-500 hover:text-[#088178] "
          >
            Home
          </a>
          <a
            href="#"
            className="transition-all ease-in-out duration-500 hover:text:[#088178] active:bg-white"
          >
            Shop
          </a>
          <a href="#">About</a>
          <a href="#">Reviews</a>
        </nav>

        <div className="flex  items-center justify-center gap-3">
          <div className="hidden md:flex items-center justify-center bg-[#E3E6F3] hover:border-2 hover:border-black rounded-md">
            <input
              type="text"
              className="border-none bg-transparent outline-none"
            />
            <CiSearch className="text-[28px] font-semibold" />
          </div>
          <div className="text-[24px]">
            <BsCart3 />
          </div>
          <div className="flex items-center justify-center h-8 w-8 rounded-full">
            <img
              src={profile}
              alt=""
              className="h-full w-full object-cover object-top rounded-full"
            />
            {/* <MdOutlineKeyboardArrowDown /> */}
          </div>
          <div className="md:hidden text-[24px]">
            <CiMenuBurger />
          </div>
        </div>
      </div>
    </div>
  );
};
