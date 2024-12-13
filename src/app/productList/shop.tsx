import React from 'react';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import Image from 'next/image';
import image1 from "../../../public/productlist/col-md-4.png";
import image2 from "../../../public/productlist/col-md-4 (1).png";
import image3 from "../../../public/productlist/col-md-4 (2).png";
import image4 from "../../../public/productlist/col-md-4 (3).png";
import image5 from "../../../public/productlist/col-md-4 (4).png";
import Button from '../components/button';

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

const Shop = () => {
  return (
    <div className="w-screen">
      <div className="w-screen h-auto flex flex-col gap-5 items-center  md:p-8">

        {/* Shop Line */}
        <div className={`${montserrat.className} w-[300px]  md:w-[1050px] flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center`}>
          <h3 className="text-2xl font-bold">Shop</h3>
          <h6 className="text-sm font-bold flex items-center gap-2">
            <Link href="/" className="text-[#252B42]">Home</Link>
            <IoIosArrowForward className="text-[#BDBDBD]" />
            <Link href="/" className="text-[#BDBDBD]">Shop</Link>
          </h6>
        </div>

        {/* Pictures Grid */}
        <div className={`${montserrat.className} w-[300px]  md:w-[1188px] flex flex-wrap gap-4 justify-center`}>
          <Image src={image1} alt="image" className="w-[205px] h-[223px] hover:scale-95 " />
          <Image src={image2} alt="image" className="w-[205px] h-[223px] hover:scale-95 " />
          <Image src={image3} alt="image" className="w-[205px] h-[223px] hover:scale-95 " />
          <Image src={image4} alt="image" className="w-[205px] h-[223px] hover:scale-95 " />
          <Image src={image5} alt="image" className="w-[205px] h-[223px] hover:scale-95 " />
        </div>

        {/* Filter Line */}
        <div className={`${montserrat.className}  w-[300px] md:w-[1000px] flex flex-wrap gap-4 justify-center md:justify-between items-center`}>
          <h6 className="text-sm font-bold text-[#737373]">Showing all 12 results</h6>
          <div className="w-full md:w-[177px] flex justify-center  md:justify-between items-center gap-4">
            <h6 className="text-sm font-bold text-[#737373]">Views:</h6>
            <IoGrid className="text-base" />
            <TfiMenuAlt className="text-base" />
          </div>

          {/* Buttons */}
          <div className="w-[300px] md:w-auto flex gap-4  justify-center">
            <Button title="Popularity" style="text-sm font-bold text-[#737373] bg-[#DDDDDD]" />
            <Button title="Filter" style="text-sm font-bold text-[#FFFFFF] bg-[#23A6F0]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
