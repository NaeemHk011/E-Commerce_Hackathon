"use client"


import { useRouter } from "next/navigation"
import { IoCartOutline } from "react-icons/io5";
import { Bounce, ToastContainer , toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCartBtn = ({ id }: { id: number }) => {
    

    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart")!);

        if (cart === null) {
            localStorage.setItem("cart", JSON.stringify([]));
            cart = JSON.parse(localStorage.getItem("cart")!);
        }
        if (Array.isArray(cart)) {
            const isProductPresent = cart.find((item: number) => item === id);
            isProductPresent ? alert("This product is already in cart") : cart.push(id);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
}
  
      const notify = () => {
        toast.success('Added To The Cart', {
            position: "top-right",
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

    return (
        <button
            className="py-3 md:py-4 px-8 bg-slate-300 flex items-center gap-x-2 rounded-lg text-center text-black hover:bg-slate-400 "
            onClick={addToCart}
        >
            <IoCartOutline/>
            <p onClick={notify}>Add to Cart</p>
            <ToastContainer />
        </button>
    )
}

export default AddToCartBtn