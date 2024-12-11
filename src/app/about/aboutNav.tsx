"use client";

import React from 'react';
import Link from 'next/link';
import { Montserrat } from "next/font/google";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import Button from '../components/button';

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

const AboutNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      {/* Navigation Wrapper */}
      <div className="w-screen flex justify-center">
        <div className={`${montserrat.className} w-screen lg:w-[1322px] h-[91px] flex justify-between items-center px-4 md:px-0`}>
          {/* Brand Name */}
          <div className="w-[187px] h-[58px] py-[13px]">
            <h3 className="text-2xl font-bold leading-8 tracking-[0.100] ml-5">Bandage</h3>
          </div>

          {/* Links and Menu */}
          <div className="hidden md:flex w-[815px] h-[58px] justify-between items-center">
            <div className="flex gap-[15px]">
              <Link href="/home" className="text-sm font-bold leading-6 tracking-[0.200]">Home</Link>
              <Link href="/product" className="text-sm font-bold leading-6 tracking-[0.200]">Product</Link>
              <Link href="/pricing" className="text-sm font-bold leading-6 tracking-[0.200]">Pricing</Link>
              <Link href="/" className="text-sm font-bold leading-6 tracking-[0.200]">Contact</Link>
            </div>
            <div className="flex items-center gap-4">
              <li className="flex items-center gap-[2px]">
                <MdOutlineAccountCircle />
                <button className="rounded-[37px] text-sm font-bold leading-6 tracking-[0.200]">Login</button>
              </li>
              <Button title="Become a member" style="w-[174px] bg-[#23A6F0] text-[14px] font-bold text-white h-[52px] px-[15px]" />
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-4">
            <button className="text-base"><CiSearch /></button>
            <button className="text-base flex items-center"><IoCartOutline />1</button>
            <button
              className="text-2xl"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[91px] right-0 z-10 w-full bg-white shadow-lg">
          <div className={`flex flex-col justify-center items-center w-full py-6 ${montserrat.className} space-y-4`}>
            <Link href="/home" className="text-[#737373] text-[18px] font-normal leading-[27px] tracking-[0.200] hover:text-blue-500">Home</Link>
            <Link href="/product" className="text-[#737373] text-[18px] font-normal leading-[27px] tracking-[0.200] hover:text-blue-500">Product</Link>
            <Link href="/pricing" className="text-[#737373] text-[18px] font-normal leading-[27px] tracking-[0.200] hover:text-blue-500">Pricing</Link>
            <Link href="/" className="text-[#737373] text-[18px] font-normal leading-[27px] tracking-[0.200] hover:text-blue-500">Contact</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutNav;
