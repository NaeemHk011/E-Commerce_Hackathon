"use client"
import { useEffect, useState } from "react";
import Card from "../components/card";
import { client } from "@/sanity/lib/client";
import { Tproduct } from "../../../utils/componentType";




const BestSeller = () => {
    const [data, setData] = useState<Tproduct[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await client.fetch(
          `*[_type == "product"]{
            id,
            title,
            description,
            price,
            discountedprice,
            "imageUrl":productImage.asset->url
          }`
        );
        setData(result);
      };
  
      fetchData();
    }, []);
  

  return (
    <div className="w-screen mt-10 flex justify-center">
      <div className="w-[328px] md:w-[1124px] py-[80px] flex flex-col items-center gap-[80px]">
        {/* Text Section */}
        <div className={`  w-[300px] md:w-[500px] text-center`}>
          <h4 className="font-normal text-[20px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-bold text-[24px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-normal text-[14px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {data.slice(0,8).map((product: Tproduct, index: number) => (
            <div key={index}>

              <Card
                      title={product.title}
                      description={product.description}
                      discountedprice={product.discountedprice}
                      price={product.price}
                      imageUrl={product.imageUrl}
                      id={product.id} quantity={undefined} />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
