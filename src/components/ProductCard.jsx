import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white cursor-pointer rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
          <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;