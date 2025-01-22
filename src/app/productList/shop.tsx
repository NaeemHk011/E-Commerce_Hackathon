
import React from "react";
import Link from "next/link";

const Shop = () => {
  const items = [
    { id: 1, title: "SHIRTS", image: "/Home/men shirt.jpg",link:"/category/shirts" },
    { id: 2, title: "T-SHIRTS", image: "/Home/men tshirt.webp", link:"/category/tshirts" },
    { id: 3, title: "JACKETS", image: "/Home/jacket.webp", link:"/category/jackets" },
    { id: 4, title: "HODDIES", image: "/Home/men hoddies.webp", link:"/category/hoddies" },
    { id: 5, title: "SWEATER", image: "/Home/women swater.webp", link:"/category/sweaters" },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold mb-4">Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {items.map((item) => (
          <Link key={item.id} href={item.link} passHref>
            <div className="relative group rounded-lg overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-lg font-semibold">{item.title}</h2>
                
              </div>
            </div>
          </Link>
        ))}
      </div>
       <div className="flex justify-between items-center mt-8">
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
    </div>
  );
};

export default Shop;
