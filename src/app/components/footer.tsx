import React from 'react';
import Button from './button';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

const Footer = () => {
  return (
    <footer className="bg-white py-10 ">
      <div className="w-full">
        {/* Top Section */}
        <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-0 md:justify-between items-center bg-gray-100 px-10 md:px-28  h-[142px]'>
          <div>
            <h3 className={`${montserrat.className} text-2xl font-bold text-[#252B42] `}>Bandage</h3>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-blue-600 text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-600 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-600 text-xl">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-300 my-10"></div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10 px-10 md:px-28 mb-10">
          {/* Company Info */}
          <div className={`${montserrat.className}`}>
            <h4 className="text-lg font-bold text-[#252B42] mb-4">Company Info</h4>
            <ul className="text-[#737373] font-bold space-y-2">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div className={`${montserrat.className}`} >
            <h4 className="text-lg font-bold text-[#252B42] mb-4">Legal</h4>
            <ul className="text-[#737373] font-bold space-y-2">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Features */}
          <div className={`${montserrat.className}`}>
            <h4 className="text-lg font-bold text-[#252B42] mb-4">Features</h4>
            <ul className="text-[#737373] font-bold space-y-2">
              <li>Business Marketing</li>
              <li>User Analytics</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Resources */}
          <div className={`${montserrat.className}`}>
            <h4 className="text-lg font-bold text-[#252B42] mb-4">Resources</h4>
            <ul className="text-[#737373] font-bold space-y-2">
              <li>iOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className={`${montserrat.className}`}>
            <h4 className="text-lg font-bold text-[#252B42] mb-4">Get in Touch</h4>
            <form className="flex flex-col md:flex-row gap-5">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-sm font-bold"
              />
              <Button title="Subscribe" style="bg-blue-600 text-white font-bold "/>
               
            </form>
            <p className="text-sm text-[#737373] mt-3 font-bold">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`${montserrat.className} text-center md:text-left  w-screen md:w-screen h-[74px] pl-10 md:pl-28 bg-[#FAFAFA] flex items-center text-[#737373] text-sm font-bold`}>
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
