"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import CartButton from "@/app/components/cartButton";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import BestProduct from "../bestProduct";
import QuickReview from "../quickReview";
import Companies from "@/app/about/companies";
import { client } from "@/sanity/lib/client";
import { Tproduct } from "../../../../utils/componentType";

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
    alert(`${product.title} has been added to your wishlist!`);
  };

  if (!productData) {
    return <p>Loading...</p>; // Loading state
  }

  return (
    <>
      <Navbar style="bg-[#23856D]" />
      <div className="flex flex-col md:flex-row gap-6 p-6 mt-5 bg-[#FAFAFA] rounded-md shadow-lg">
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
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button
              onClick={() => addToWishlist(productData)}
              className="text-md text-white hover:text-slate-800 flex items-center gap-2 bg-slate-800 hover:bg-slate-400 rounded-lg py-2 md:py-3 px-4 md:px-5"
            >
              <AiOutlineHeart /> Add to wishlist
            </button>
            <CartButton id={Number(params.id)} />
          </div>
        </div>
      </div>
      <BestProduct />
      <Companies />
      <QuickReview />
      <Footer />
    </>
  );
};

export default ProductDetail;
