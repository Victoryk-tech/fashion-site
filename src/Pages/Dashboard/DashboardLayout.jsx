import React from "react";
import { SideBar } from "../../components/SideBar";
import { Home } from "./Home";

export const DashboardLayout = () => {
  return (
    <div className="relative grid grid-cols-12 min-h-screen text-[#e7bbbb] w-full h-full">
      <SideBar />
      <Home />
    </div>
  );
};
