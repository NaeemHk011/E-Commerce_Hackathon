"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import CartButton from "@/app/components/cartButton";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import QuickReview from "../quickReview";
import Companies from "@/app/about/companies";
import { client } from "@/sanity/lib/client";
import { Tproduct } from "../../../../utils/componentType";
import { Bounce, ToastContainer , toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ProductDetail = ({ params }: { params: { id: string } }) => {
  const [productData, setProductData] = useState<Tproduct | null>(null);

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
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

      const product = data.find((item: Tproduct) => item.id.toString() === params.id);
      setProductData(product);
    };

    fetchProduct();
  }, [params.id]);

  // Handle adding to wishlist
  const addToWishlist = (product: Tproduct) => {
    const existingWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const updatedWishlist = [...existingWishlist, product];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
     const notify = () => {
            toast.success('Added To The Wishlist', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
          }
          notify()
  };

  if (!productData) {
    return <p>Loading...</p>; 
  }

  return (
    <>
    <ToastContainer />
      <Navbar style="bg-[#23856D]" />
      <div className="flex flex-col h-full mb-20 md:flex-row gap-6 p-6 mt-5 bg-[#FAFAFA] rounded-md shadow-lg">
        {/* Left: Product Images */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <Image
              src={productData.imageUrl}
              alt="Product Image"
              width={300}
              height={300}
              className="w-[506px] h-[450px] object-center rounded-md"
            />
            {/* Navigation Arrows */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-400">
              <IoIosArrowBack />
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-400">
              <IoIosArrowForward />
            </button>
          </div>
          {/* Thumbnails */}
        <div className="flex gap-2 mt-4">
              <Image
                src={productData.imageUrl}
                alt="Thumbnail"
                width={100}
                height={100}
                className="w-[100px] h-[100px]  object-center rounded-md cursor-pointer"/>

              <Image
                src={productData.imageUrl}
                alt="Thumbnail"
                width={100}
                height={100}
                className="w-[100px] h-[100px] object-center rounded-md cursor-pointer"/>
            </div>
        </div>
     

        {/* Right: Product Details */}
        <div className="flex flex-col gap-0 md:gap-4">
          <h4 className="text-2xl font-normal leading-7 text-[#252B42] mb-2">{productData.title}</h4>
          <div className="flex items-center gap-1 text-yellow-500 mb-2">{productData.rating}</div>
          <h3 className="text-xl font-bold leading-8 text-[#252B42] mb-2">${productData.discountedprice}</h3>
          <h6 className="text-sm font-bold leading-6 text-[#737373] mb-4">
            Availability: <span className="text-[#23A6F0] font-bold leading-6 text-sm">{productData.stock}</span>
          </h6>
          <p className="text-sm w-[300px] md:w-[464px] text-[#858585] font-normal leading-5 mb-4">
            {productData.longdescription}
          </p>
          <div className="flex flex-col-reverse md:flex-row items-center gap-4">
            <button
              onClick={() => addToWishlist(productData)}
              className="text-md text-white hover:text-slate-800 flex items-center gap-2 bg-slate-800 hover:bg-slate-400 rounded-lg py-3 md:py-4 px-4 md:px-5">
              <AiOutlineHeart /> Add to wishlist
            </button>
            <CartButton id={Number(params.id)} />
          </div>
        </div>
      </div>
      <Companies />
      <QuickReview />
      <Footer />
    </>
  );
};

export default ProductDetail;
