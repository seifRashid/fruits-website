import React, { useRef }  from "react";
import {cardData} from "../Constants.js";
import ProductCard from "./ProductCard";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

function Hero() {
  const textRef = useRef();
  const heroRef = useRef();

  useGSAP(() => {
    const split = new SplitText(textRef.current, { type: "chars" });
    const chars = split.chars;

    gsap.from(chars, {
      duration: 1.2,
      opacity: 0,
      y: 100,
      rotationX: 720,
      scale: 0.5,
      ease: "power4.out",
      stagger: { each: 0.15, from: "center" }

    });

    gsap.from(heroRef, {
      opacity:0,
      y:-1000,
      duration:2
    })

    return () => split.revert(); // Cleanup
  }, { scope: textRef });

  return (
    <>
      <div className="flex pt-12">
        <div className="flex flex-col w-4/7">
          <div className="flex flex-col items-start justify-start">
            <h1 ref={textRef} className="font-bold text-8xl text-[#b2bd34]">
              Fruit That Loves Your Back
            </h1>
            <p ref={heroRef} className="text-[#efe1b0] text-2xl mt-4">
              A constellation consists of visible stars that form a perceived
              outline or pattern, usually representing an animal.
            </p>
            <button className="mt-4 cursor-pointer border border-[#efe1b0] text-[#efe1b0] py-2 px-16 rounded-full hover:bg-[#efe1b0] hover:text-[#022d28] transition-colors duration-300">
              Order Now
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
              {cardData.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-3/7 relative">
          <img
            src="/images/gliter-1.png"
            alt="orange"
            className="absolute inset-0 z-20 h-20 object-cover"
          />
          <img
            src="/images/orange slices.png"
            alt="chungwa"
            className="absolute inset-0 z-10 ml-24 h-[500px]"
          />
          <img
            src="/images/behind orange.png"
            alt="fruit"
            className="absolute inset-0 z-0 h-[360px] mt-24 ml-24 object-cover"
          />
          <img
            src="/images/glitter-2.png"
            alt="glitter"
            className="absolute inset-0 mt-98 ml-[450px] z-20 h-10 object-cover"
          />
        </div>
            
      </div>
    </>
  );
}

export default Hero;
