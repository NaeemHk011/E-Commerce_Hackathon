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

    type NavbarType = {
      style?:string
  }

const Navbar = (props:NavbarType) => {
  const {style} =props

    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
     <div className='w-screen h-[136px] flex flex-col  gap-2 '>
        {/* Topline */}
     <div className={`hidden md:flex justify-between items-center w-screen h-[58px]  ${style} ${montserrat.className}`}>
        <div className={`w-auto md:w-[415px] h-[46px] flex gap-[10px]`}>
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
        <div className={`w-screen h-[58px] mx-auto md:px-10 flex justify-between items-center ${montserrat.className} text-[#252B42]`}>
            <div className='w-[150px] h-[58px] py-[13px] gap-[10px] '>
                <h3 className={`text-2xl font-bold pl-2 leading-8 tracking-[0.100] text-[#252B42] `}>Bandage</h3>
                </div>
                <div className='hidden md:flex md:w-[500px] h-[58px]  items-center py-[2px] '>
                    <div className='flex w-[361px] h-[25px]  gap-[15px] '>
                    <Link href="/"className='text-sm font-bold leading-6 tracking-[0.200] hover:text-[#23A6F0]' >Home</Link>
                    <Link href="/productList"className='text-sm font-bold leading-6 tracking-[0.200] hover:text-[#23A6F0] flex items-center ' >Shop <RiArrowDropDownLine className='text-[20px]'/></Link>
                    <Link href="/about"className='text-sm font-bold leading-6 tracking-[0.200] hover:text-[#23A6F0]' >About</Link>
                    <Link href="/product"className='text-sm font-bold leading-6 tracking-[0.200] hover:text-[#23A6F0]' >Blog</Link>
                    <Link href="/contact"className='text-sm font-bold leading-6 tracking-[0.200] hover:text-[#23A6F0]' >Contact</Link>
                    <Link href="/team"className='text-sm font-bold leading-6 tracking-[0.200] hover:text-[#23A6F0]' >Pages</Link>
                    </div>
                    </div>
                    <div className=''>
                    <div className='w-[150px] md:w-[324px] h-[54px] flex justify-center items-center list-none text-[#23A6F0] '>
                        <li className='hidden md:flex w-[166px] h-[54px]  items-center hover:text-[#252B42]'><a href="" className=' flex  items-center gap-[2px]'><MdOutlineAccountCircle /><button className='rounded-[37px] text-sm font-bold leading-6 tracking-[0.200]'> Login / Register</button></a></li>
                            <li className='w-[46px] h-[46px] flex items-center hover:text-[#252B42]'><a href="" className=''><button className='text-xs flex'><CiSearch className='text-base'/></button></a></li>
                            <li className='w-[46px] h-[46px] flex items-center hover:text-[#252B42]'><a href="" className=''><button className='text-xs flex'><IoCartOutline className='text-base'/>1</button></a></li>
                            <li className='hidden md:flex w-[46px] h-[46px]  items-center hover:text-[#252B42]'><a href="" className=''><button className='text-xs flex'><CiHeart className='text-base'/>1</button></a></li>

                            <button
            className="text-2xl md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>

          {/* Menu */}
          {menuOpen && (
            <div className="md:hidden absolute top-16 z-10 right-0 flex w-screen justify-center items-center">
              <div className={`flex flex-col justify-center items-center w-[300px] h-[270] gap-7 ${montserrat.className} bg-white bg-opacity-80 shadow-lg space-y-4 p-4`}>
                <Link href="/" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">Home</Link>
                <Link href="/productList" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">Shop</Link>
                <Link href="/about" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">About</Link>
                <Link href="/product" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">Product</Link>
                <Link href="/pricing" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">Pricing</Link>
                <Link href="/contact" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">Contact</Link>
              </div>
            </div>)}
            </div>
            </div>
        </div>
           
    </div>  
    </div>
  )
}

export default Navbar