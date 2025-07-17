import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";


const testimonials = [
  {
    name: "Jane Doe",
    image: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "men" : "women"}/${Math.floor(Math.random() * 100)}.jpg`,
    text: "This fruit shop is amazing! Fresh produce and fast delivery every time. Highly recommend!",
  },
  {
    name: "John Smith",
    image: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "men" : "women"}/${Math.floor(Math.random() * 100)}.jpg`,
    text: "I love how juicy and sweet the oranges are. The website is easy to navigate too!",
  },
  {
    name: "Sarah Kim",
    image: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "men" : "women"}/${Math.floor(Math.random() * 100)}.jpg`,
    text: "Great service, affordable prices, and the best mangoes I've ever tasted.",
  },
];

function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const imageRef = useRef(null);
  const textRef = useRef(null);

  const animateIn = () => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: "power2.out" }
    );
  };

  useEffect(() => {
    animateIn();
  }, [current]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-myGreen-800 rounded-4xl my-16 sm:mx-auto mx-8 py-8 px-16 overflow-hidden">
      <h2 className="text-3xl sm:text-5xl font-bold font-hero text-center text-myYellow mb-10">
        What Our Customers Say
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center sm:gap-10 gap-5 max-w-5xl mx-auto">
        {/* Image & Name */}
        <div className="flex flex-col items-center text-center">
          <img
            ref={imageRef}
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-32 h-32 rounded-full object-cover shadow-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-[#efe1b0]">
            {testimonials[current].name}
          </h3>
        </div>

        {/* Testimony Text */}
        <div className="max-w-xl text-center lg:text-left relative">
          <p
            ref={textRef}
            className="sm:text-lg text-md italic text-[#efe1b0] transition-all duration-500"
          >
            “{testimonials[current].text}”
          </p>

          {/* Navigation Buttons */}
          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            <button
              onClick={prev}
              className="px-4 py-2 bg-myYellow text-myGreen-800 rounded-full hover:bg-myYellow-600 transition-color transform duration-150 cursor-pointer"
            >
              Previous
            </button>
            <button
              onClick={next}
              className="px-4 py-2 bg-myYellow text-myGreen-800 rounded-full hover:bg-myYellow-600 transition-color transform duration-150 cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
