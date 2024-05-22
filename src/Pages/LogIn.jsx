import React from "react";
import Login from "../../src/assets/login.jpg";
import google from "../../src/assets/google.png";
import facebook from "../../src/assets/facebook.png";
import apple from "../../src/assets/apple.png";
import microsoft from "../../src/assets/microsoft.png";

export const LogIn = () => {
  return (
    <div>
      <div className="w-full h-full">
        <div className="w-full h-screen relative">
          <img src={Login} alt="" />

          <div className="modal fixed w-full h-full bg-[#C4C4C46B] right-0 top-0 flex flex-col justify-center md:justify-end items-center md:items-end">
            {/* modal for items */}
            <div className="flex flex-col justify-start top-12 right-10 rounded-[15px] absolute md:justify-start items-start gap-4 py-8 px-4 w-[35%] h-[86%] bg-white text-black">
              <p>Step 1 0f 2</p>
              <h2>Create an account</h2>
              <div className="flex space-x-10 justify-center items-center">
                <img src={google} alt="" />
                <img src={facebook} alt="" />
                <img src={apple} alt="" />
                <img src={microsoft} alt="" />
              </div>
              <div className=" w-full flex items-center justify-center gap-2">
                <p className="border-[1px] border-grey w-[40%]"></p>
                <p>or</p>
                <p className="border-[1px]  w-[40%]"></p>
              </div>
              <div>
                <h2 className="font-bold text-[14px] gap-2">
                  Sign Up with email
                </h2>
                <div className="flex items-center">
                  <p>Already have an account?</p>
                  <a href="#"> Sign in</a>
                </div>
              </div>

              <form action="form" className="space-y-4 w-full">
                <div className="flex flex-col items-start justify-start gap-1 py-1 pl-2 pr-24 border-b-[2px] border-black hover:border-2 hover:border-blue-100">
                  <label htmlFor="form" className="font-bold text-[13px]">
                    Email Address
                  </label>
                  <input
                    className="outline-none"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-1 py-1 pl-2 pr-24 border-b-[2px] border-black hover:border-2 hover:border-blue-100">
                  <label htmlFor="form" className="font-bold text-[13px]">
                    Password
                  </label>
                  <input
                    className="outline-none"
                    type="password"
                    name="password"
                    required
                  />
                </div>

                <div className="flex justify-end items-end pt-6">
                  <button
                    type="submit"
                    className="bg-[#b9d97d] text-white py-2 px-4 rounded-md"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
