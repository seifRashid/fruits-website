import React from "react";
import { GiBananaBunch, GiOrange} from "react-icons/gi";

function PopularPicks() {
  const fruits = [
    // {
    //   name: "Mango",
    //   description: "Sweet and juicy mangoes, perfect for summer.",
    //   icon: <GiMango className="text-5xl text-[#b2bd34]" />,
    // },
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
    // {
    //   name: "Apple",
    //   description: "Crisp and refreshing apples, a classic favorite.",
    //   icon: <GiApple className="text-5xl text-[#b2bd34]" />,
    // },
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

  return (
    <section className="mt-16 mb-16 px-4">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold text-[#efe1b0] mb-4">
        Popular Picks
      </h2>
      <p className="text-center text-[#efe1b0] text-base sm:text-lg mb-10">
        Discover our most loved fruits, handpicked just for you!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {fruits.map((fruit, index) => (
          <div
            key={index}
            className="bg-[#efe1b0] p-6 rounded-xl hover:bg-orange-300 shadow-xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
          >
            <div className="mb-4">{fruit.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{fruit.name}</h3>
            <p className="text-gray-600 mt-2">{fruit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularPicks;
