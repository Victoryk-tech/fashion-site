import React from "react";
import wlog from "../../src/assets/Wlogo.png";

export const Footer = () => {
  return (
    <div className="bg-black w-full h-full text-white px-16 py-8">
      <div>
        <div className="flex items-start justify-between ">
          <div className="text-[13px] space-y-4">
            <div className="flex items-center gap-2">
              <img src={wlog} alt="" />
              <h1>Sans Souci</h1>
            </div>
            <p>Discover joy in every purchase with Sans Souci</p>
          </div>

          <div className="text-[13px] space-y-4">
            <h1>COMPANY</h1>
            <p>About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Careers</p>
          </div>

          <div className="text-[13px] space-y-4">
            <h1>HELP</h1>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>

          <div className="text-[13px] space-y-4">
            <h1>RESOURCES</h1>
            <p>Free ebooks</p>
            <p>Development Tutorial</p>
            <p>How to -Blog</p>
            <p>Youtube playlist</p>
          </div>
        </div>
      </div>
      <div className="w-full h-full border-[1px] border-white my-10"></div>
      <div className="flex items-center justify-center">
        <div>&copy; copyright 2024, All right Reserved by Sans Souci</div>
      </div>
    </div>
  );
};
