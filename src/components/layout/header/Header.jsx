import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black py-4">
      <ul className="flex justify-center space-x-8 text-white text-lg font-semibold">
        <li className="hover:text-gray-400 cursor-pointer">Home</li>
        <li className="hover:text-gray-400 cursor-pointer">About</li>
        <li className="hover:text-gray-400 cursor-pointer">Filmography</li>
        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        <li className="hover:text-gray-400 cursor-pointer">Blogs</li>
        <li className="hover:text-gray-400 cursor-pointer">Media</li>
      </ul>
    </nav>
  );
};

export default Navbar;
