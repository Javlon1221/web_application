import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // iconlar uchun (sizning kodingizda lucide-react bor)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
            MyLogo
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a
            href="#home"
            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a href="#contact" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
