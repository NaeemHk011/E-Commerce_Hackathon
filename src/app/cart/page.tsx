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
