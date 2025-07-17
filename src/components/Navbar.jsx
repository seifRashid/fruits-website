import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // if using React Router
import { navLinks } from "../Constants.js";
import { FiSearch, FiMenu } from "react-icons/fi";
import { FaShoppingBasket } from "react-icons/fa";
import { useCart } from "../Contexts/CartContext.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {toggleCart} = useCart()
  const location = useLocation()
  const isActive = (path) => location.pathname === path


  return (
    <nav className="flex justify-between items-center sticky top-0 w-full z-50 bg-myGreen/90 backdrop-blur-sm text-white py-6 px-16 sm:px-32">
      <div className="sm:text-4xl text-2xl font-bold text-myWhite">
        Fr🍉itopia
      </div>
      <div className="flex space-x-4">
        <ul className="space-x-4 hidden sm:flex sm:items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className={`${isActive(link.path)?'text-myYellow' : 'text-myWhite'} hover:text-myYellow cursor-pointer`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Search + Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden sm:flex items-center border border-myWhite rounded-full px-2 py-1">
            <FiSearch className="text-myWhite cursor-pointer" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none px-2 text-sm placeholder-myWhite text-myWhite bg-transparent"
            />
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden text-2xl text-myWhite cursor-pointer hover:text-[#b19d57] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="text-myWhite cursor-pointer">✕</span>
            ) : (
              <FiMenu className="text-myWhite" />
            )}
          </button>
        </div>
        {/* </div> */}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col">
            <ul className="md:hidden mt-2 px-4 space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="block py-2 border-b border-gray-200 text-myWhite hover:text-[#b19d57] cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center mt-4 justify-center space-y-4">
              <button className="cursor-pointer border hover:border hover:border-myWhite hover:text-myWhite hover:bg-transparent py-2 px-4 sm:px-8 md:px-16 rounded-full bg-myWhite text-myGreen transition-colors duration-300 text-sm sm:text-base">
                <Link to={"/login"}>Login</Link>
              </button>
              <button className="cursor-pointer border hover:border hover:border-myWhite hover:text-myWhite hover:bg-transparent py-2 px-4 sm:px-8 md:px-16 rounded-full bg-myWhite text-myGreen transition-colors duration-300 text-sm sm:text-base">
                <Link to={"/signup"}>get started</Link>
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        {/* shopping cart icon from react icons */}
        <FaShoppingBasket onClick={toggleCart} className="text-white text-2xl cursor-pointer" />
      </div>
      <div className="hidden sm:flex items-center justify-center space-x-4">
        <button className="cursor-pointer border hover:border hover:border-myWhite hover:text-myWhite hover:bg-transparent py-2 px-4 rounded-full bg-myWhite text-myGreen transition-colors duration-300 text-sm sm:text-base">
          <Link to={"/login"}>Login</Link>
        </button>
        <button className="cursor-pointer border hover:border hover:border-myWhite hover:text-myWhite hover:bg-transparent py-2 px-4 rounded-full bg-myWhite text-myGreen transition-colors duration-300 text-sm sm:text-base">
          <Link to={"/signup"}>get started</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
