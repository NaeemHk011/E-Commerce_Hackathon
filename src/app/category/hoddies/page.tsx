"use client";
import React, { useEffect, useState } from "react";
import { Tproduct } from "../../../../utils/componentType";
import Card from "@/app/components/card";
import { client } from "@/sanity/lib/client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";

const HoddieCategory = () => {
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
          longdescription,
          stock,
          rating,
          "imageUrl":productImage.asset->url,
          category
        }
        `);

        const hoddies =products.filter((item:Tproduct) => item.category == "hoddie")
        setData(hoddies);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar style='bg-[#23856D]'/>
      <div className="w-full mt-10 justify-center py-[80px] flex flex-col items-center gap-[80px]">
        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {data.map((product: Tproduct) => (
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
      </div>
      <Footer/>
    </div>
  );
};

export default HoddieCategory;
