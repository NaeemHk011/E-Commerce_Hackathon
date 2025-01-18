import CartProducts from "../components/cartProduct"
import Footer from "../components/footer";
import Navbar from "../components/Navbar";


export default function Cart() {


    return (
        <>
            <Navbar />


            <main>
                <section className="pt-9 sm:pt-16 pl-6 sm:pl-[188px] pr-6 sm:pr-[193px] bg-[--light-gray]">
                    <h1 className="max-sm:text-[24px]">Your shopping cart</h1>

                    <CartProducts />
                </section>
            </main>


            <Footer />
        </>
    );
}





// "use client";
// import React, { useEffect, useState } from "react";
// import { remove } from "../redux/cartslice";
// import { useDispatch } from "react-redux";
// import { RootState } from "../redux/store";
// import Image from "next/image";

// interface CartItem {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
//   size: string;
//   color: string;
//   quantity: number;
// }

// export default function Cart() {
//   const dispatch = useDispatch();

//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     // Load cart items from localStorage when the component mounts
//     const storedCartItems = localStorage.getItem("cart");
//     if (storedCartItems) {
//       setCartItems(JSON.parse(storedCartItems));
//     }
//   }, []);

//   useEffect(() => {
//     // Save cart items to localStorage whenever it changes
//     if (cartItems.length > 0) {
//       localStorage.setItem("cart", JSON.stringify(cartItems));
//     }
//   }, [cartItems]);

//   const handleRemove = (id: number) => {
//     const updatedCartItems = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCartItems);
//   };

//   const handleQuantityChange = (id: number, change: number) => {
//     const updatedCartItems = cartItems.map((item) =>
//       item.id === id ? { ...item, quantity: item.quantity + change } : item
//     );
//     setCartItems(updatedCartItems);
//   };

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   const discount = subtotal * 0.2; // Example: 20% discount
//   const deliveryFee = 15;
//   const total = subtotal - discount + deliveryFee;

//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center w-full px-5 sm:px-10 py-10 gap-5">
//       {/* Cart Items */}
//       <div className="w-full md:w-[60%]">
//         <h1 className="text-2xl font-bold text-slate-800 mb-5">YOUR CART</h1>

//         {cartItems.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-center justify-between gap-5 p-5 border rounded-lg mb-5"
//           >
//             {/* Product Image */}
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={100}
//               height={100}
//               className="w-20 h-auto rounded-lg"
//             />

//             {/* Product Details */}
//             <div className="flex-1">
//               <h2 className="text-lg font-semibold text-slate-800">{item.title}</h2>
//               <p className="text-sm text-slate-600">Size: {item.size}</p>
//               <p className="text-sm text-slate-600">Color: {item.color}</p>
//               <p className="text-lg font-bold text-slate-800">${item.price * item.quantity}</p>
//             </div>

//             {/* Quantity Controls */}
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => handleQuantityChange(item.id, -1)}
//                 className="px-3 py-1 bg-gray-200 rounded-lg"
//                 disabled={item.quantity <= 1}
//               >
//                 -
//               </button>
//               <span className="font-semibold">{item.quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(item.id, 1)}
//                 className="px-3 py-1 bg-gray-200 rounded-lg"
//               >
//                 +
//               </button>
//             </div>

//             {/* Remove Button */}
//             <button
//               onClick={() => handleRemove(item.id)}
//               className="text-red-500 text-xl"
//             >
//               🗑️
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Order Summary */}
//       <div className="w-full md:w-[35%] border rounded-lg p-5">
//         <h2 className="text-xl font-bold text-slate-800 mb-5">Order Summary</h2>
//         <div className="flex justify-between mb-2">
//           <p className="text-slate-600">Subtotal</p>
//           <p className="font-semibold">${subtotal.toFixed(2)}</p>
//         </div>
        
//         <div className="flex justify-between mb-2">
//           <p className="text-slate-600">Delivery Fee</p>
//           <p className="font-semibold">${deliveryFee.toFixed(2)}</p>
//         </div>

//         <div className="flex justify-between font-bold text-xl mb-5">
//           <p>Total</p>
//           <p>${total.toFixed(2)}</p>
//         </div>

//         {/* Promo Code */}
//         <div className="flex items-center gap-2 mb-5">
//           <input
//             type="text"
//             placeholder="Add promo code"
//             className="flex-1 px-4 py-2 border rounded-lg"
//           />
//           <button className="bg-black text-white px-4 py-2 rounded-lg">
//             Apply
//           </button>
//         </div>

//         <button className="w-full bg-black text-white py-3 rounded-lg text-center font-semibold">
//           Go to Checkout →
//         </button>
//       </div>
//     </div>
//   );
// }


// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/footer'
// import CartCard from '../components/cartCard'

// const Cart = () => {
//   return (
//     <>
//     <Navbar style='bg-[#252B42]'/>
//     <div className='mt-20 mb-40'>
//       <div className='grid lg:grid-cols-3 grid-cols-1'>
        
//         <div className='col-span-2'>
//           <CartCard  
//     src="/Home/product-cover-5 (4).png"
//     title="gents Coat"
//     description=""
//     price={200}
//     />
//         </div>

//         <div className='bg-gray-200 p-5 rounded-lg'>
//           <h1 className='scroll-m-20 text-lg font-medium tracking-tight uppercase text-slate-800 '>Order Summary</h1>
//           <div className="w-full h-[2px] bg-gray-400 mt-0 mb-1"></div>
//           <div className='text-sm font-medium tracking-tight text-slate-800'>
//             <div className='flex items-center justify-between capitalize'>
//               <h2>Sub Total</h2>
//               <h2>$1200</h2>
//             </div>
//             <div className='flex items-center justify-between capitalize'>
//               <h2>Delivery Charges</h2>
//               <h2>TBD</h2>
//             </div>
//             <div className='flex items-center justify-between capitalize'>
//               <h2>Sales Tax</h2>
//               <h2>TBD</h2>
//             </div>
//             <div className="w-full h-[2px] bg-gray-400  my-3"></div>

//             <div className='flex items-center justify-between uppercase font-semibold text-sm tracking-tight text-slate-800'>
//               <h2>estimated Total</h2>
//               <h2>$1200</h2>
//             </div>
//             <div className="w-full h-[2px] bg-gray-400  my-3"></div>

//             <div className='flex items-center justify-center w-full'>
//               <button className='bg-slate-800 hover:bg-transparent duration-300 text-white hover:text-slate-800 scroll-m-20 uppercase font-semibold tracking-tight hover:shadow-md py-2 px-3 rounded-md'>Proceed to checkout</button>
//             </div>
//             <div className="w-full h-[2px] bg-gray-400  my-3"></div>
//             <p className='text-sm font-semibold tracking-tight text-slate-800 w-[97%] text-center italic'>
//               {`* Delivery charges and the Sales Tax will be calulated in the checkout`}
//             </p>
           
//           </div>

//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   )
// }

// export default Cart
