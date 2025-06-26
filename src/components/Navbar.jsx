import React, { useState } from "react";
import { Link } from "react-router-dom"; // if using React Router
import {navLinks} from "../Constants.js";
import { FiSearch, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between bg-[#022d28] text-white py-4">
      <div className="text-xl font-bold text-[#efe1b0]">Logo</div>
      <ul className="flex space-x-4">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              to={link.path}
              className="text-[#efe1b0] hover:text-[#b19d57] cursor-pointer"
            >
              {link.name}
            </a>
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
          className="md:hidden text-2xl text-[#efe1b0] hover:text-[#b19d57] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu />
        </button>
      </div>
      {/* </div> */}

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-2 px-4 space-y-2">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                to={link.path}
                className="block py-2 border-b border-gray-200 text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
