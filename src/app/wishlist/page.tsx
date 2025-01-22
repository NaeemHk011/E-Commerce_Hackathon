"use client"
import React, { useEffect, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import Image from 'next/image';
import { Tproduct } from '../../../utils/componentType';
import Card from '../components/card';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

interface WishlistItem {
  id: number;
  title: string;
  description: string;
  discountedprice: number;
  imageUrl: string;
}

const WishlistComponent = () => {
  const [wishlist, setWishlist] = useState<Tproduct[]>([]);

  useEffect(() => {
    // Get wishlist from localStorage when the component mounts
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (id: number) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <>
    <Navbar style='bg-slate-800'/>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul className='flex'>
          {wishlist.map((item) => (
            <li key={item.id} className="flex flex-col items-center gap-4 mb-4 p-4 border rounded-md">
              <Card title={item.title}
               description={item.description}
               discountedprice={item.discountedprice}
               price={item.price}
               imageUrl={item.imageUrl}
               id={item.id}/>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="text-red-500 font-bold"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default WishlistComponent;

