import React, { useState } from "react";
import { Link } from "react-router-dom"; // if using React Router
import { navLinks } from "../Constants.js";
import { FiSearch, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between bg-[#022d28] text-white py-6 px-16 sm:px-32 items-center">
      <div className="sm:text-4xl text-2xl font-bold text-[#efe1b0]">
        Fr🍉itopia
      </div>
      <div className="flex space-x-4">
        <ul className="space-x-4 hidden sm:flex">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="text-[#efe1b0] hover:text-[#b19d57] cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Search + Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden sm:flex items-center border border-[#efe1b0] rounded-full px-2 py-1">
            <FiSearch className="text-[#efe1b0] cursor-pointer" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none px-2 text-sm placeholder-[#efe1b0] text-[#efe1b0] bg-transparent"
            />
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden text-2xl text-[#efe1b0] cursor-pointer hover:text-[#b19d57] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="text-[#efe1b0] cursor-pointer">✕</span>
            ) : (
              <FiMenu className="text-[#efe1b0]" />
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
                    className="block py-2 border-b border-gray-200 text-[#efe1b0] hover:text-[#b19d57] cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center mt-4 justify-center space-y-4">
              <button className="cursor-pointer border hover:border hover:border-[#efe1b0] hover:text-[#efe1b0] hover:bg-transparent py-2 px-4 sm:px-8 md:px-16 rounded-full bg-[#efe1b0] text-[#022d28] transition-colors duration-300 text-sm sm:text-base">
                Login
              </button>
              <button className="cursor-pointer border hover:border hover:border-[#efe1b0] hover:text-[#efe1b0] hover:bg-transparent py-2 px-4 sm:px-8 md:px-16 rounded-full bg-[#efe1b0] text-[#022d28] transition-colors duration-300 text-sm sm:text-base">
                sign up
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="hidden sm:flex items-center justify-center space-x-4">
        <button className="cursor-pointer border hover:border hover:border-[#efe1b0] hover:text-[#efe1b0] hover:bg-transparent py-2 px-4 rounded-full bg-[#efe1b0] text-[#022d28] transition-colors duration-300 text-sm sm:text-base">
          Login
        </button>
        <button className="cursor-pointer border hover:border hover:border-[#efe1b0] hover:text-[#efe1b0] hover:bg-transparent py-2 px-4 rounded-full bg-[#efe1b0] text-[#022d28] transition-colors duration-300 text-sm sm:text-base">
          get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
