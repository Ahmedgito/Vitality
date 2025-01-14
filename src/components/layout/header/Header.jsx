import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import logo from '../../../assets/header/vitality.svg';
import img from '../../../assets/header/00.webp';

const HeaderWithTransparentNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop View */}
      <div className="relative md:block hidden">
        {/* Header */}
        <header className="sticky top-0 left-0 w-full z-50 bg-transparent">
          <div className="flex justify-between items-center px-12 py-8">
            {/* Logo */}
            <div className="bg-[#065565]/80 animate-slideInLeft backdrop-blur-lg rounded-lg p-4">
              <img src={logo} alt="Logo" className="w-24" />
            </div>

            {/* Menu Icon */}
            <div className="text-[#e9debf] animate-slideInRight text-3xl focus:outline-none">
              <Hamburger
                size={40}
                toggled={menuOpen}
                toggle={setMenuOpen}
              />
            </div>
          </div>
        </header>

        {/* Sidebar Navigation */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-[40%] bg-black bg-opacity-30 backdrop-blur-lg transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300`}
        >
          <div className="flex flex-col justify-center text-right items-end uppercase pr-10 pt-12 h-full text-[#e9debf] text-xl space-y-3">
            <a href="/" className="hover:text-gray-300 transition duration-300">
              Coming Soon
            </a>
            <a href="/brand" className="hover:text-gray-300 transition duration-300">
              Coming Soon
            </a>
            <a href="/collections" className="hover:text-gray-300 transition duration-300">
              Coming Soon
            </a>
            <a href="/collections" className="hover:text-gray-300 transition duration-300">
             Coming Soon
            </a>
            <a href="/releases" className="hover:text-gray-300 transition duration-300">
            Coming Soon
            </a>
           
          </div>
        </div>

        {/* Main Content */}
        <main>
          <div className="relative -mt-60 h-[120vh]">
            <img
              src={img}
              alt="Building Image"
              className="w-full h-full object-cover"
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="sticky bottom-0 left-0 w-full animate-slide-in-top bg-black bg-opacity-60 backdrop-blur-lg p-6">
          <div className="flex justify-center space-x-6">
            {/* Download Brochure Button */}
            <a
              href="/path-to-brochure.pdf"
              download
              className="bg-[#e9debf] text-black uppercase px-6 py-3 rounded-lg hover:bg-[#d1c4a1] transition duration-300"
            >
              Download Brochure
            </a>
            {/* Register Interest Button */}
            <a
              href="/register-interest"
              className="bg-transparent border border-[#e9debf] text-[#e9debf] uppercase px-6 py-3 rounded-lg hover:bg-[#e9debf] hover:text-black transition duration-300"
            >
              Register Your Interest
            </a>
          </div>
        </footer>
      </div>

      {/* Mobile View */}
      <div className="relative block md:hidden">
        {/* Header */}
        <header className="sticky top-0 left-0 w-full z-50 bg-transparent">
          <div className="flex justify-between items-center px-6 py-4">
            {/* Logo */}
            <div className="bg-[#065565]/80 animate-slideInLeft backdrop-blur-lg rounded-lg p-2">
              <img src={logo} alt="Logo" className="w-20" />
            </div>

            {/* Menu Icon */}
            <div className="text-[#e9debf] animate-slideInRight text-2xl focus:outline-none">
              <Hamburger
                size={30}
                toggled={menuOpen}
                toggle={setMenuOpen}
              />
            </div>
          </div>
        </header>

        {/* Sidebar Navigation for Mobile */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-[100%] bg-black bg-opacity-90 backdrop-blur-lg transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300`}
        >
          <div className="flex flex-col justify-center text-left items-start uppercase pl-6 pt-12 h-full text-[#e9debf] text-lg space-y-4">
            <a href="/" className="hover:text-gray-300 transition duration-300">
            Coming Soon
            </a>
            <a href="/brand" className="hover:text-gray-300 transition duration-300">
            Coming Soon
            </a>
            <a href="/collections" className="hover:text-gray-300 transition duration-300">
            Coming Soon
            </a>
            <a href="/collections" className="hover:text-gray-300 transition duration-300">
            Coming Soon
            </a>
            <a href="/releases" className="hover:text-gray-300 transition duration-300">
            Coming Soon
            </a>
          
          </div>
        </div>

        {/* Main Content */}
        <main>
          <div className="relative -mt-60 h-[120vh]">
            <img
              src={img}
              alt="Building Image"
              className="w-full h-full object-cover"
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="sticky bottom-0 left-0 w-full animate-slide-in-top bg-black bg-opacity-60 backdrop-blur-lg p-4">
          <div className="flex justify-center space-x-4">
            {/* Download Brochure Button */}
            <a
              href="/path-to-brochure.pdf"
              download
              className="bg-[#e9debf] text-black uppercase px-4 py-2 rounded-lg hover:bg-[#d1c4a1] transition duration-300"
            >
              Download Brochure
            </a>
            {/* Register Interest Button */}
            <a
              href="/register-interest"
              className="bg-transparent border border-[#e9debf] text-[#e9debf] uppercase px-4 py-2 rounded-lg hover:bg-[#e9debf] hover:text-black transition duration-300"
            >
              Register Your Interest
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HeaderWithTransparentNav;
