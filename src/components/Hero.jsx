import React, { useRef } from "react";
import { cardData } from "../Constants.js";
import ProductCard from "./ProductCard";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

function Hero() {
  const textRef = useRef();
  const heroRef = useRef();
  const ctaRef = useRef();
  const glitter1Ref = useRef();
  const glitter2Ref = useRef();
  const chungwaRef = useRef();

  useGSAP(
    () => {
      const split = new SplitText(textRef.current, { type: "chars" });
      const chars = split.chars;

      gsap.from(chars, {
        duration: 1.2,
        opacity: 0,
        y: 100,
        rotationX: 720,
        scale: 0.5,
        ease: "power4.out",
        stagger: { each: 0.15, from: "center" },
      });

      gsap.from(heroRef.current, {
        opacity: 0,
        y: 1000,
        duration: 2,
        ease: "elastic",
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 1000,
        duration: 1.6,
        ease: "elastic",
      });

      gsap.from(chungwaRef.current, {
        opacity: 0,
        y: 1000,
        duration: 1.6,
        ease: "elastic",
      });

      gsap.to(glitter1Ref.current, {
        opacity: 0.3,
        x: -10,
        scale: 0.8,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut", // You can also try "sine.inOut", "expo.inOut", etc.
      });

      gsap.to(glitter2Ref.current, {
        opacity: 0.3,
        y: -20,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut", // You can also try "sine.inOut", "expo.inOut", etc.
      });

      return () => split.revert(); // Cleanup
    },
    { scope: textRef }
  );

  return (
    <>
      <div className="flex flex-col sm:flex-row pt-12 px-4 sm:px-8 ">
        {/* Text Section */}
        <div className="w-full lg:w-4/7 flex flex-col mb-10 lg:mb-0">
          <div className="flex flex-col items-start justify-start">
            <h1
              ref={textRef}
              className="font-bold font-hero text-4xl sm:text-6xl text-myYellow leading-tight"
            >
              Fruit That Loves Your Back 🍎
            </h1>
            <p
              ref={heroRef}
              className="text-myWhite text-base sm:text-lg md:text-xl lg:text-2xl mt-4"
            >
              A constellation consists of visible stars that form a perceived
              outline or pattern, usually representing an animal.
            </p>
            <button
              ref={ctaRef}
              className="mt-6 cursor-pointer border border-myWhite text-myWhite py-2 px-8 sm:px-12 md:px-16 rounded-full hover:bg-myWhite hover:text-[#022d28] transition-colors duration-300 text-sm sm:text-base"
            >
              Order Now
            </button>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 w-full">
              {cardData.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative hidden ml-16 sm:block w-full lg:w-3/7 h-[400px] sm:h-[500px] md:h-[600px]">
          <img
            ref={glitter1Ref}
            src="/images/gliter-1.png"
            alt="orange"
            className="absolute inset-0 z-20 w-12 h-12 object-cover"
          />
          <img
            ref={chungwaRef}
            src="/images/orange slices.png"
            alt="chungwa"
            className="absolute inset-0 z-10 ml-12 sm:ml-20 h-[300px] sm:h-[400px] md:h-[500px ]"
          />
          <img
            src="/images/behind orange.png"
            alt="fruit"
            className="absolute inset-0 z-0 mt-24 ml-12 sm:ml-20 h-[100px]  md:h-[360px] object-cover"
          />
          <img
            ref={glitter2Ref}
            src="/images/glitter-2.png"
            alt="glitter"
            className="absolute z-20 mt-[28rem] ml-[12rem] md:ml-[24rem] w-10 h-10 object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
