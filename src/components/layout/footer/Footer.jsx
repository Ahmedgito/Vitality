import React from 'react';
import { ReactComponent as FacebookIcon } from '../../../assets/footer/facebook.png';
import { ReactComponent as InstagramIcon } from '../../../assets/footer/instagram.png';
import { ReactComponent as TwitterIcon } from '../../../assets/footer/twitter.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 flex justify-between items-center px-8 md:px-16">
      <div className="text-sm">
        © 2024 Shayan Khan.xyz All Rights Reserved. Designed and Developed by Mean3 Pvt Ltd.
      </div>
      <div className="flex space-x-4">
        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <FacebookIcon className="w-6 h-6 fill-current hover:text-gray-400" />
        </a>
        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="w-6 h-6 fill-current hover:text-gray-400" />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <TwitterIcon className="w-6 h-6 fill-current hover:text-gray-400" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
