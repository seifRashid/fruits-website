import React from "react";
import { GiOrange } from "react-icons/gi"; // Fruit icon
import { FaArrowRight } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi"; // Arrow icon
import { FaTruck } from "react-icons/fa"; // Arrow icon
import TestimonialSection from "./Testimonials";

function HowItWorks() {
  return (
    <>
      <section className="flex flex-col items-center w-full mx-auto bg-myWhite">
        <h1 className="text-4xl sm:text-5xl mt-8 md:text-6xl text-center font-bold font-hero text-myGreen py-8">
          How It Works
        </h1>
        <div className="flex items-center justify-center space-x-16 px-6 py-4 max-w-md mx-auto">
          {/* Fruit */}
          <div className="flex items-center space-x-16 justify-between">
            <div className="flex flex-col space-y-1 items-center justify-center text-center">
              <GiOrange className="text-8xl text-orange-500" />
              <h3 className="text-lg font-bold text-gray-800">Orange</h3>
              <p className="text-sm text-gray-600">Packed with Vitamin C</p>
            </div>
            <FaArrowRight className="text-4xl text-gray-700 ml-4" />
          </div>

          {/* Shopping Bag */}
          <div className="flex items-center space-x-16 justify-between">
            <div className="flex flex-col space-y-1 items-center justify-center text-center">
              <FiShoppingBag className="text-8xl text-myGreen" />
              <h3 className="text-lg font-bold text-gray-800">Orange</h3>
              <p className="text-sm text-gray-600">Packed with Vitamin C</p>
            </div>
            <FaArrowRight className="text-4xl text-gray-700 ml-4" />
          </div>

          {/* Delivery Truck */}
          <div className="flex flex-col space-y-1 items-center justify-center text-center">
            <FaTruck className="text-8xl text-yellow-500" />
            <h3 className="text-lg font-bold text-gray-800">Orange</h3>
            <p className="text-sm text-gray-600">Packed with Vitamin C</p>
          </div>
        </div>

        <TestimonialSection />
      </section>
    </>
  );
}

export default HowItWorks;
