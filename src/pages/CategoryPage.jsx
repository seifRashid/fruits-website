// CategoryPage.js
import React from 'react';
import { FaAppleAlt, FaLemon, FaSeedling } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const categories = [
  {
    id: 1,
    name: 'Citrus Fruits',
    icon: <FaLemon className="text-yellow-400 text-4xl" />,
    description: 'Juicy and rich in vitamin C 🍋',
    bg: 'bg-yellow-100',
  },
  {
    id: 2,
    name: 'Tropical Fruits',
    icon: <aLemo className="text-pink-500 text-4xl" />,
    description: 'Sweet and exotic fruits 🌴',
    bg: 'bg-pink-100',
  },
  {
    id: 3,
    name: 'Berries',
    icon: <FaSeedling className="text-purple-500 text-4xl" />,
    description: 'Tiny fruits, big flavor 🍓',
    bg: 'bg-purple-100',
  },
  {
    id: 4,
    name: 'Apples & Pears',
    icon: <FaAppleAlt className="text-red-500 text-4xl" />,
    description: 'Crunchy, fresh and classic 🍏',
    bg: 'bg-red-100',
  },
];

const CategoryPage = () => {
  useGSAP(() => {
    gsap.from('.category-card', {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-green-950 text-white px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-12">🍊 Fruit Categories</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {categories.map(cat => (
          <div key={cat.id} className={`category-card ${cat.bg} text-green-900 rounded-xl p-6 shadow-xl text-center hover:scale-105 transition-transform duration-300`}>
            <div className="mb-4">{cat.icon}</div>
            <h2 className="text-xl font-bold mb-2">{cat.name}</h2>
            <p className="text-sm">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
