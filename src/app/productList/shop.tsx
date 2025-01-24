"use client";

import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Tproduct } from "../../../utils/componentType";
import Card from "../components/card";


const items = [
    { id: 1, title: "SHIRTS", image: "/Home/men shirt.jpg" },
    { id: 2, title: "T-SHIRTS", image: "/Home/men tshirt.webp" },
    { id: 3, title: "JACKETS", image: "/Home/jacket.webp" },
    { id: 4, title: "HODDIES", image: "/Home/men hoddies.webp" },
    { id: 5, title: "SWEATER", image: "/Home/women swater.webp" },
];

const FilterProduct = () => {
    const [allProducts, setAllProducts] = useState([]); // Store all products
    const [filterproducts, setFilterProducts] = useState([]); // Store filtered products
    const [filter, setFilter] = useState<string>("All"); // Store selected filter

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await client.fetch(`*[_type == "product"]{
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
         }`)

        setAllProducts(data);
    };
        
        fetchProducts() 
    }, []);
 
    console.log(filterproducts)

    //filter products based on the category
    const handleFilter = (category: string) => {
        setFilter(category);

        const filtered = allProducts.filter((product: Tproduct) => product.category == category);
        setFilterProducts(filtered) 
        
       };

    const closehandler = ()=>{
        setFilterProducts([])
    }

    return (
        <div>
            <div className="w-full  mt-8 p-4">
                <div className="flex flex-wrap justify-around items-center gap-4 lg:gap-8">
                    
            <h1 className="text-2xl text-start font-semibold mb-4">Category</h1>
                            

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">

            <div onClick={() => handleFilter("shirt")} className="relative group rounded-lg overflow-hidden shadow-lg">
            <Image
            src={items[0].image}
            alt={items[0].title}
            priority
            height={200} width={200}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-white text-lg font-semibold">{items[0].title}</h2>

            </div>
            </div>

            <div onClick={() => handleFilter("tshirt")} className="relative group rounded-lg overflow-hidden shadow-lg">
            <Image
            src={items[1].image}
            alt={items[1].title}
            priority
            height={200} width={200}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-white text-lg font-semibold">{items[1].title}</h2>

            </div>
            </div>

            <div onClick={() => handleFilter("jacket")} className="relative group rounded-lg overflow-hidden shadow-lg">
            <Image
            src={items[2].image}
            alt={items[2].title}
            priority
            height={200} width={200}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-white text-lg font-semibold">{items[2].title}</h2>

            </div>
            </div>

            <div onClick={() => handleFilter("hoddie")} className="relative group rounded-lg overflow-hidden shadow-lg">
            <Image
            src={items[3].image}
            alt={items[3].title}
            priority
            height={200} width={200}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-white text-lg font-semibold">{items[3].title}</h2>

            </div>
            </div>

            <div onClick={() => handleFilter("sweater")} className="relative group rounded-lg overflow-hidden shadow-lg">
            <Image
            src={items[4].image}
            alt={items[4].title}
            priority
            height={200} width={200}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-white text-lg font-semibold">{items[4].title}</h2>

            </div>
            </div>

        </div>

           {filterproducts.map((item: Tproduct) => (
            <div key={item.id}>
            <Card
                title={item.title}
                description={item.description}
                discountedprice={item.discountedprice}
                price={item.price}
                imageUrl={item.imageUrl}
                id={item.id} />
            </div>
            ))}
        
            
            </div>
            </div>
                <div className=" w-full flex justify-end items-center gap-5 mt-8">
                <p className="text-sm text-gray-500">Showing all {filterproducts.length} results</p>
                <button onClick={closehandler} className="cursor-pointer py-2 px-3 text-white bg-blue-500 rounded-lg">hide</button>

                </div>
        </div>

    )};

export default FilterProduct;









{/* <div className="flex justify-between items-center mt-8">
<p className="text-sm text-gray-500">Showing all 12 results</p>
<div className="flex items-center gap-4">

  <select className="border p-2 rounded-md text-sm">
    <option>Popularity</option>
    <option>Price: Low to High</option>
    <option>Price: High to Low</option>
  </select>
  <button className="p-2 border rounded-md bg-blue-500 text-white">
    Filter
  </button>
</div>
</div>
 */}



