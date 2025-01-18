"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { IoCartOutline } from "react-icons/io5";

const AddToCartBtn = ({ id }: { id: number }) => {
    const router = useRouter();

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

        router.push("/cart");
    }

    return (
        <button
            className="py-4 px-10 bg-slate-300 flex items-center gap-x-2 rounded-lg text-black hover:bg-slate-400 max-sm:w-full"
            onClick={addToCart}
        >
            <IoCartOutline/>
            <p>Add to Cart</p>
        </button>
    )
}

export default AddToCartBtn