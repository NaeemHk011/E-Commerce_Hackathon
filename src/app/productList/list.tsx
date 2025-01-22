"use client"; 
import React, { useEffect, useState } from "react";
import { Tproduct } from "../../../utils/componentType";
import Card from "../components/card";
import { client } from "@/sanity/lib/client";

const List = () => {
  const [data, setData] = useState<Tproduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await client.fetch(
        `*[_type == "product"]{
          id,
          title,
          description,
          price,
          discountedprice,
          "imageUrl":productImage.asset->url
        }
      `);
      setData(products);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="w-full mt-10 justify-center py-[80px] flex flex-col items-center gap-[80px]">
        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {data.slice(14, 26).map((product: Tproduct) => (
            <div key={product.id}>
              <Card
                title={product.title}
                description={product.description}
                discountedprice={product.discountedprice}
                price={product.price}
                imageUrl={product.imageUrl}
                id={product.id}
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="w-[300px] h-[75px] flex items-center rounded-[7px] border-[1.35px]">
          <div className="flex justify-center items-center w-[84px] h-[74px]">
            <h2 className="text-sm font-bold leading-6 p-[25px] text-[#BDBDBD] bg-[#F3F3F3]">First</h2>
          </div>
          <div className="flex justify-center items-center w-[46px] h-[74px]">
            <h2 className="text-sm font-bold leading-6 py-[25px] px-5 text-[#23A6F0]">1</h2>
          </div>
          <div className="flex justify-center items-center w-[46px] h-[74px]">
            <h2 className="text-sm font-bold leading-6 py-[25px] px-5 text-[#FFFFFF] bg-[#23A6F0]">2</h2>
          </div>
          <div className="flex justify-center items-center w-[46px] h-[74px]">
            <h2 className="text-sm font-bold leading-6 py-[25px] px-5 text-[#23A6F0]">3</h2>
          </div>
          <div className="flex justify-center items-center w-[84px] h-[74px]">
            <h2 className="text-sm font-bold leading-6 p-[25px] text-[#23A6F0]">Next</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
