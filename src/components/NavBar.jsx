import React from "react";
import logo from "../../src/assets/Logo.png";
import search from "../../src/assets/search.png";
import profile from "../../src/assets/profile.png";
import arrow from "../../src/assets/arrowUp.png";
import cart from "../../src/assets/cart.png";
import flag from "../../src/assets/flag.png";
export const NavBar = () => {
  return (
    <div className="">
      <div className="flex items-start justify-between  py-6 px-10">
        <div className="flex items-center justify-center">
          <img src={logo} alt="" className="w-[3rem] h-[2rem]" />
          <h1 className="font-[itim] font-[600] text-[26px]">Sans Souci</h1>
        </div>
        <nav className="flex items-center justify-center text-[18px] gap-8 text-center">
          <a href="#" className="hover:text-[#60A20E]">
            Shop
          </a>
          <a href="#">New Arrivals</a>
          <a href="#">Top Brands</a>
          <a href="#">Special offers</a>
        </nav>
        <div className="flex items-center justify-center  text-[18px] gap-7">
          <img src={search} alt="" className="w-5 h-5" />
          <div className="flex items-center">
            <img src={profile} alt="" className="w-5 h-5" />
            <img src={arrow} alt="" className="w-3 h-2" />
          </div>
          <img src={cart} alt="" className="w-5 h-5" />
          <div className="flex items-center gap-1">
            <img src={flag} alt="" className="w-5 h-5" />
            <img src={arrow} alt="" className="w-3 h-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
