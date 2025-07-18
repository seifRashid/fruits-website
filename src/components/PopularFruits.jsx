import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

const products = [
  { id: 1, name: "Mango", image: "https://media.istockphoto.com/id/529964085/photo/mango.webp?a=1&b=1&s=612x612&w=0&k=20&c=26dCPyBW3FR-CBmjBmVQjw9xHu0rVCGLHH6vij2vRNk=", price: "$2.99" },
  { id: 2, name: "Strawberry", image: "https://media.istockphoto.com/id/1412854156/photo/strawberries-isolated-strawberry-whole-and-a-half-on-white-background-strawberry-slice-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=A3NktoJT3YXhfJ-_xi-K4psP3KHdqvnnjkwp2fk2FEM=", price: "$3.50" },
  { id: 3, name: "Blueberry", image: "https://media.istockphoto.com/id/2032627757/photo/blueberry-isolated-blueberry-with-leaves-on-white-background-three-blueberries-with-clipping.webp?a=1&b=1&s=612x612&w=0&k=20&c=I8RyITv_KAsqqSJ-hIv6_7kZso46__LhKMoDO2lXuN8=", price: "$4.20" },
  { id: 4, name: "Apple", image: "https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGV8ZW58MHx8MHx8fDA%3D", price: "$1.80" },
];

export default function PopularFruits() {
  const sectionRef = useRef();
  const cardsRef = useRef([]);

//   useGSAP(() => {
//     gsap.from(sectionRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       ease: "power2.out",
//     });

//     gsap.from(cardsRef.current, {
//       opacity: 0,
//       scale: 0.8,
//       stagger: 0.2,
//       duration: 1,
//       ease: "back.out(1.7)",
//     });
//   }, []);

  return (
    <section ref={sectionRef} className="py-12 my-12 bg-myGreen-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-myGreen-900 mb-8">Popular Picks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-myYellow-700 rounded-xl shadow-md border border-myYellow-800 overflow-hidden hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-myGreen-800">{product.name}</h3>
                <p className="text-myGreen-200">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
