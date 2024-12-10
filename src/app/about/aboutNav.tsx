"use client"

import React from 'react'
import Link from 'next/link';
import {Montserrat} from "next/font/google";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import Button from '../components/button';


const montserrat = Montserrat({
    weight: ['400', '700'],
    style: 'normal',
    subsets:['latin'],
    display: 'swap'
    })


const AboutNav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
        <div className='w-screen flex justify-center  '>
        <div className={`${montserrat.className} w-screen lg:w-[1322px] h-[91px] flex justify-center items-center  `}>
            <div className='w-[187px] h-[58px] py-[13px] gap-[10px]'>
                <h3 className={`  text-2xl font-bold leading-8 tracking-[0.100] ml-5 `}>Bandage</h3>
                </div>
                <div className='w-[250px] md:w-[815px] h-[58px] flex justify-between items-center py-[2px] '>
                    <div className=' hidden md:flex w-[361px] h-[25px]  gap-[15px] '>
                    <Link href="/home"className='text-sm font-bold leading-6 tracking-[0.200]' >Home</Link>
                    <Link href="/productList"className='text-sm font-bold leading-6 tracking-[0.200]' >Product</Link>
                    <Link href="/"className='text-sm font-bold leading-6 tracking-[0.200]' >Pricing</Link>
                    <Link href="/"className='text-sm font-bold leading-6 tracking-[0.200]' >Contact</Link>
                    </div>
                    <div className=' w-[150px] md:w-[250px] h-[52px] flex  items-center '>
                        <li className='hidden md:flex w-[106px] h-[54px]  items-center '><a href="" className=' flex  items-center gap-[2px]'><MdOutlineAccountCircle /><button className='rounded-[37px] text-sm font-bold leading-6 tracking-[0.200]'> Login</button></a></li>
                        <Button title='Become a member' style=' hidden md:flex w-[100px] md:w-[174px] bg-[#23A6F0] text-[14px] font-bold text-white h-[52px] px-[15px]'/>
                        <li className='md:hidden w-[46px] h-[46px] flex items-center'><a href="" className=''><button className='text-xs flex'><CiSearch className='text-base'/></button></a></li>
                            <li className=' md:hidden w-[46px] h-[46px] flex items-center'><a href="" className=''><button className='text-xs flex'><IoCartOutline className='text-base'/>1</button></a></li>
                            
            <button
            className="text-2xl md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle navigation">
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>

          {/* Menu */}
          {menuOpen && (
            <div className="md:hidden absolute top-16 z-10 left-0 flex w-screen justify-center items-center">
              <div className={`flex flex-col justify-center items-center w-[300px] h-[270] gap-7 ${montserrat.className} bg-white shadow-lg space-y-4 p-4`}>
                <Link href="/" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">Home</Link>
                <Link href="/productList" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">Product</Link>
                <Link href="/" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">Pricing</Link>
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

export default AboutNav