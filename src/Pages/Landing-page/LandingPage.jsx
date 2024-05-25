import React from "react";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Unleash } from "../../components/Unleash";

import { Trending } from "../../components/Trending";
import { Faq } from "../../components/Faq";
import { Subscribe } from "../../components/Subscribe";
import { NewArrivals } from "../../components/NewArrivals";
import { Hero } from "../../components/Hero";
import { Features } from "../../components/Features";

export const LandingPage = () => {
  return (
    <div className="w-[100%] h-auto bg-white">
      <NavBar />
      <Hero />

      <Trending />
      <NewArrivals />
      <Features />
      <Faq />
      <Unleash />
      <Subscribe />
      <Footer />
    </div>
  );
};
