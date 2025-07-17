import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopularPicks from "../components/PopularPicks";
import HowItWorks from "../components/HowItWorks";
import NewsLetter from "../components/NewsLetter";

function Homepage() {
  return (
    <>
      <div className="flex flex-1 flex-col bg-myGreen min-h-screen px-4 sm:px-24 pt-4 overflow-x-hidden">
        {/* <Navbar /> */}
        <Hero />
        <PopularPicks/>
      </div>
      <HowItWorks/>
      <NewsLetter/>
    </>
  );
}

export default Homepage;

