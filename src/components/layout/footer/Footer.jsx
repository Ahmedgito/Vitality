import React from 'react';
import FacebookIcon from '../../../assets/footer/facebook.png';
import InstagramIcon from '../../../assets/footer/instagram.png';
import TwitterIcon from '../../../assets/footer/twitter.png';

const Footer = () => {
  return (

    <>

    <footer className="bg-[#065565] font-sans  text-[#e9debf] py-4 md:flex hidden justify-between items-center h-20 px-8 md:px-16">
      <div className="text-sm   ">
        © 2024 Vitality Residence.All Rights Reserved.
      </div>
      <div className="flex space-x-8">
        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <img src={FacebookIcon} alt="Facebook" className="w-5 h-5 hover:opacity-70" />
        </a>
        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" className="w-5 h-5 hover:opacity-70" />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <img src={TwitterIcon} alt="Twitter" className="w-5 h-5 hover:opacity-70" />
        </a>
      </div>
    </footer>

    <footer className="bg-[#0F0F0F] font-sans text-[#e9debf] py-4 md:hidden flex flex-col items-center space-y-4">
     
      
      {/* Social Media Icons */}
      <div className="flex mb-6 space-x-6">
        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <img src={FacebookIcon} alt="Facebook" className="w-4 h-4 hover:opacity-70" />
        </a>
        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" className="w-4 h-4 hover:opacity-70" />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <img src={TwitterIcon} alt="Twitter" className="w-4 h-4 hover:opacity-70" />
        </a>
      </div>

     {/* Text */}
     <div className="text-sm text-center leading-loose px-4">
        © 2024 Shayan Khan. All Rights<br /> Reserved. 
        Designed and Developed <br /> by Mean3 Pvt Ltd.
      </div>


    </footer>

    
</>
  );
};

export default Footer;

