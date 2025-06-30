import React, { useRef } from "react";
import { GiBananaBunch, GiOrange } from "react-icons/gi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function PopularPicks() {
  const cardRefs = useRef([]);
  const popularPickRef = useRef();
  const popularPickRef2 = useRef();
  const pinSectionRef = useRef();


  const fruits = [
    {
      name: "Banana",
      description: "Rich in potassium, bananas are a great snack.",
      icon: <GiBananaBunch className="text-5xl text-[#b2bd34]" />,
    },
    {
      name: "Banana",
      description: "Rich in potassium, bananas are a great snack.",
      icon: <GiBananaBunch className="text-5xl text-yellow-500" />,
    },
    {
      name: "Orange",
      description: "Zesty and fresh oranges packed with vitamin C.",
      icon: <GiOrange className="text-5xl text-orange-500" />,
    },
    {
      name: "Orange",
      description: "Zesty and fresh oranges packed with vitamin C.",
      icon: <GiOrange className="text-5xl text-orange-500" />,
    },
  ];

  useGSAP(() => {
    cardRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
          scale: 0.5,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.2,
          ease: "elastic",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true,
            toggleActions: "play none none reverse",
            stagger: {
              amount: 0.2,
              //   from: "start",
            },
            // pin: true,
            // pinSpacing: false,
          },
          //   delay: i * 0.2,
        }
      );
    });

    gsap.from(popularPickRef.current, {
      opacity: 0,
      x: 1000,
      scale: 0.5,
      duration: 4,
      ease: "elastic",
      scrollTrigger: {
        trigger: popularPickRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(popularPickRef2.current, {
      opacity: 0,
      x: -1000,
      scale: 0.5,
      duration: 4,
      ease: "elastic",
      scrollTrigger: {
        trigger: popularPickRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(pinSectionRef.current, {
      scrollTrigger: {
        trigger: pinSectionRef.current,
        start: "top top",
        zindex: 0,
        end: "+=1000",
        toggleActions: "play none none reverse",
        pin: true,
        // pinSpacing: true,
      },
    });
  }, []);

  return (
    <section ref={pinSectionRef} className="mt-16 mb-16 px-4">
      <h2
        ref={popularPickRef}
        className="text-4xl sm:text-5xl md:text-6xl text-center font-bold text-[#efe1b0] mb-4"
      >
        Popular Picks
      </h2>
      <p ref={popularPickRef2} className="text-center text-[#efe1b0] text-base sm:text-lg mb-10">
        Discover our most loved fruits, handpicked just for you!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {fruits.map((fruit, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-[#efe1b0] p-6 rounded-xl z-0 hover:bg-orange-300 shadow-xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
          >
            <div className="mb-4">{fruit.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {fruit.name}
            </h3>
            <p className="text-gray-600 mt-2">{fruit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularPicks;
