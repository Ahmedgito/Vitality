import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // You can use FontAwesome icons for the menu
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Icons for dropdown

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilmographyOpen, setIsFilmographyOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleFilmography = () => {
    setIsFilmographyOpen(!isFilmographyOpen);
  };

  return (
    <nav className="bg-[#0F0F0F] h-20 w-full px-4 md:px-8 flex items-center justify-end md:justify-center sticky top-0 z-50">
      {/* Hamburger Icon for mobile */}
      <div className="text-white text-base md:hidden" onClick={toggleMenu}>
        <FaBars />
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-8 justify-center text-white tracking-widest  text-sm font-medium">
        <li className="hover:text-gray-400  cursor-pointer">Home</li>
        <li className="hover:text-gray-400 cursor-pointer">About</li>
        <li className="hover:text-gray-400 cursor-pointer">Filmography</li>
        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        <li className="hover:text-gray-400 cursor-pointer">Blogs</li>
        <li className="hover:text-gray-400 cursor-pointer">Media</li>
      </ul>

      {/* Mobile menu (dropdown) with sliding down animation */}
      <div className={`absolute top-20 left-0 w-full bg-white uppercase text-black text-sm font-medium z-50 md:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <ul>
          <li className="pt-4 pb-2 mx-6 pl-1 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">Home</li>
          <li className="pt-4 pb-2 mx-6 pl-1 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">About</li>

          {/* Filmography with dropdown */}
          <li onClick={toggleFilmography} className="pt-4 pb-2 pl-1 mx-6 border-b border-gray-200 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
            Filmography
            {isFilmographyOpen ? <FaChevronUp /> : <FaChevronDown />}
          </li>

          {/* Filmography sublist */}
          {isFilmographyOpen && (
            <ul className="pl-10 uppercasebg-gray-100">
              <li className="py-2 hover:text-gray-400 border-b border-gray-200 cursor-pointer">Money Back Guarantee</li>
              <li className="py-2 hover:text-gray-400 border-b border-gray-200 cursor-pointer">Na Band Na Baraati</li>
              <li className="py-2 hover:text-gray-400 border-b border-gray-200 cursor-pointer">Be Someone</li>
            </ul>
          )}

          <li className="pt-4 pb-2 mx-6 pl-1 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">Contact</li>
          <li className="pt-4 pb-2 mx-6 pl-1 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">Blogs</li>
          <li className="pt-4 pb-2 mx-6 pl-1 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">Media</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

