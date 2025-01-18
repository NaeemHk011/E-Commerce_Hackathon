
import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaEye } from "react-icons/fa6";
import Image from "next/image";
import CartButton from "@/app/components/cartButton";
import ColorCircles from "@/app/components/colors";
import { Montserrat } from "next/font/google";
import { client } from "@/sanity/lib/client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

interface Tproduct {
  title: string;
  description: string;
  discountedprice: number;
  price: number;
  imageUrl: string;
  id:number;
}

const ProductDetail = async ({params}:{params:{id:string}}) => {
   const data = await client.fetch(`*[_type == "product"]{
  id,
  title,
  description,
  price,
  discountedprice,
  longdescription,
  stock,
  rating,
  "imageUrl":productImage.asset->url
}`);

const productData = data.filter((items:Tproduct) => items.id.toString() == params.id)
  
   
    
  return (
  <>
   <Navbar style='bg-[#23856D]'/>
    <div className="flex flex-col md:flex-row gap-6 p-6 mt-5 bg-[#FAFAFA] rounded-md shadow-lg">
      {/* Left: Product Images */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <Image
            src={productData[0].imageUrl}
            alt="Floating Phone"
            width={300} height={300}
            className="w-[506px] h-[450px] object-cover rounded-md"
          />
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-400  ">
          <IoIosArrowBack />
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-400 ">
          <IoIosArrowForward />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2">
          <Image
            src={productData[0].imageUrl}
            alt="Thumbnail 1"
            width={300} height={300}
            className="w-[60px] h-[60px] object-cover rounded-md border border-gray-300 cursor-pointer"
          />
          <Image
            src={productData[0].imageUrl}
            alt="Thumbnail 2"
            width={300} height={300}
            className="w-[60px] h-[60px] object-cover rounded-md border border-gray-300 cursor-pointer"
          />
        </div>
      </div>

      {/* Right: Product Details */}
      <div className={`${montserrat.className} flex flex-col gap-0 md:gap-4  `}>
        {/* Title */}
        <h4 className="text-2xl font-normal leading-7 text-[#252B42]  mb-2">{productData[0].title}</h4>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 mb-2">
         {productData[0].rating}
        </div>

        {/* Price */}
        <h3 className="text-xl font-bold leading-8 text-[#252B42] mb-2">${productData[0].discountedprice}</h3>

        {/* Availability */}
        <h6 className="text-sm  font-bold leading-6 text-[#737373] mb-4">
          Availability: <span className="text-[#23A6F0] font-bold leading-6 text-sm ">{productData[0].stock}</span>
        </h6>

        {/* Description */}
        <p className="text-sm w-[300px] md:w-[464px] text-[#858585] font-normal leading-5 mb-4">
          {productData[0].longdescription}
        </p>
        <div className="border border-[#BDBDBD] w-[300px] md:w-[510px] m-3"></div>
        <ColorCircles/>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <CartButton id={Number(params.id)}/>
            <AiOutlineHeart className="text-xl text-[#252B42]" />
            <AiOutlineShoppingCart className="text-xl text-[#252B42]" />
            <FaEye className="text-xl text-[#252B42]" />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProductDetail;


