"use client"

import React from 'react'
import Link from 'next/link';
import {Montserrat} from "next/font/google";
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';


const montserrat = Montserrat({
    weight: ['400', '700'],
    style: 'normal',
    subsets:['latin'],
    display: 'swap'
    })

const ProductNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
     <div className='w-[400px] md:w-screen h-20 md:h-[136px] flex flex-col gap-2  '>
        {/* Topline */}
     <div className={`hidden md:flex justify-between items-center w-screen h-[58px]  bg-[#23856D] ${montserrat.className} `}>
        <div className={`w-[415px] h-[46px] flex gap-[10px]`}>
            <button className='w-[145px] h-[44px] flex items-center p-[10px] gap-[5px] rounded-[5px] text-white'>
                <LuPhone /> <h6 className='text-sm font-bold leading-6 tracking-[0.200]'>(225) 555-0118</h6></button>
                <button className='w-[260px] h-[44px] flex items-center p-[10px] gap-[5px] rounded-[5px] text-white'>
                <TfiEmail /> <h6 className='text-sm font-bold leading-6 tracking-[0.200]'>michelle.rivera@example.com</h6></button>
        </div>
        <div className='w-[332px] h-[44px] p-[10px] gap-[10px] text-white'>
            <h6 className='text-sm font-bold leading-6 tracking-[0.200]'>Follow Us  and get a chance to win 80% off</h6>
        </div>
        <div className='w-[233px] h-[46px] p-[10px] flex items-center gap-[10px] text-white'>
        <h6 className='text-sm font-bold leading-6 tracking-[0.200]'>Follow Us:</h6>
        <div className='w-[120px] h-[26px] flex'>
        <a href="" className='w-[26px] h-[26px] p-[5px]'><FaInstagram className='w-4 h-4'/></a>
        <a href="" className='w-[26px] h-[26px] p-[5px]'><FaYoutube className='w-4 h-4'/></a>
        <a href="" className='w-[26px] h-[26px] p-[5px]'><FaFacebook className='w-4 h-4'/></a>
        <a href="" className='w-[26px] h-[26px] p-[5px]'><FaTwitter className='w-4 h-4'/></a>
        </div>
        </div>
     </div>

           {/* navbar */}
        <div className={`w-screen md:w-screen h-[58px] mx-auto flex justify-between items-center ${montserrat.className} text-[#252B42]`}>
            <div className='w-[187px] h-[58px] py-[13px] gap-[10px]'>
                <h3 className={`  text-2xl font-bold leading-8 tracking-[0.100] ml-5 `}>Bandage</h3>
                </div>
                <div className='w-[250px] md:w-[1155px] h-[58px] flex justify-between items-center py-[2px] '>
                    <div className=' hidden md:flex w-[361px] h-[25px]  gap-[15px] '>
                    <Link href="/"className='text-sm font-bold leading-6 tracking-[0.200]' >Home</Link>
                    <Link href="/"className='text-sm font-bold leading-6 tracking-[0.200] flex items-center ' >Shop <RiArrowDropDownLine className='text-[20px]'/></Link>
                    <Link href="/about"className='text-sm font-bold leading-6 tracking-[0.200]' >About</Link>
                    <Link href="/"className='text-sm font-bold leading-6 tracking-[0.200]' >Blog</Link>
                    <Link href="/"className='text-sm font-bold leading-6 tracking-[0.200]' >Contact</Link>
                    <Link href="/"className='text-sm font-bold leading-6 tracking-[0.200]' >Pages</Link>
                    </div>
                    <div className='w-[250px] md:w-[324px] h-[54px] flex justify-center items-center list-none text-[#23A6F0] '>
                        <li className='hidden md:flex w-[166px] h-[54px]  items-center'><a href="" className=' flex  items-center gap-[2px]'><MdOutlineAccountCircle /><button className='rounded-[37px] text-sm font-bold leading-6 tracking-[0.200]'> Login / Register</button></a></li>
                            <li className='w-[46px] h-[46px] flex items-center'><a href="" className=''><button className='text-xs flex'><CiSearch className='text-base'/></button></a></li>
                            <li className='w-[46px] h-[46px] flex items-center'><a href="" className=''><button className='text-xs flex'><IoCartOutline className='text-base'/>1</button></a></li>
                            <li className='hidden md:flex w-[46px] h-[46px]  items-center'><a href="" className=''><button className='text-xs flex'><CiHeart className='text-base'/>1</button></a></li>

                            <button
            className="text-2xl md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>

          {/* Menu */}
          {menuOpen && (
            <div className="md:hidden absolute top-16 z-10 left-0 flex w-screen justify-center items-center">
              <div className={`flex flex-col justify-center items-center w-[300px] h-[270] gap-7 ${montserrat.className} bg-white shadow-lg space-y-4 p-4`}>
                <Link href="/" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">Home</Link>
                <Link href="/about" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">About</Link>
                <Link href="/product" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">Product</Link>
                <Link href="/pricing" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">Pricing</Link>
                <Link href="/" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">Contact</Link>
              </div>
            </div>)}
            </div>
            </div>
        </div>
           
    </div>  
    </div>
  )
}

export default ProductNav