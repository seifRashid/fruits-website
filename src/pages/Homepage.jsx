import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopularPicks from "../components/PopularPicks";
import HowItWorks from "../components/HowItWorks";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <div className="flex flex-col bg-[#022d28] min-h-screen px-4 sm:px-24 pt-4 overflow-x-hidden">
        <Navbar />
        <Hero />
        <PopularPicks/>
      </div>
      <HowItWorks/>
      <NewsLetter/>
      <Footer/>
    </>
  );
}

export default Homepage;

