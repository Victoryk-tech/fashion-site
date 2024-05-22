import React from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Unleash } from "../../components/Unleash";
import { Collections } from "../../components/Collections";
import { Trending } from "../../components/Trending";
import { Faq } from "../../components/Faq";
import { Subscribe } from "../../components/Subscribe";
import { NewArrivals } from "../../components/NewArrivals";
import { Feedback } from "../../components/Feedback.jsx";

export const LandingPage = () => {
  return (
    <div className="w-[100%] h-auto bg-[#F3F3F3]">
      <NavBar />
      <Unleash />
      <Collections />
      <Trending />
      <NewArrivals />
      <Faq />
      <Feedback />
      <Subscribe />
      <Footer />
    </div>
  );
};
