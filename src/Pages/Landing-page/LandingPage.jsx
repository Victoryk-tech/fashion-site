import React from "react";

import { Unleash } from "../../components/Unleash";
import { Footer } from "../../components/Footer.jsx";
import { Trending } from "../../components/Trending";
import { Faq } from "../../components/Faq";
import { Subscribe } from "../../components/Subscribe";
import { NewArrivals } from "../../components/NewArrivals";
import { Hero } from "../../components/Hero";
import { Features } from "../../components/Features";
import { About } from "../../components/About.jsx";
import { Bills } from "../../components/Bills.jsx";
import { NavBar } from "../../components/NavBar.jsx";

export const LandingPage = () => {
  return (
    <div className="w-[100%] h-auto bg-white !scroll-smooth">
      <NavBar />
      <Hero />

      <Trending />
      <Bills />
      <NewArrivals />
      <Features />
      <About />
      <Faq />
      <Unleash />
      <Subscribe />
      <Footer />
    </div>
  );
};
