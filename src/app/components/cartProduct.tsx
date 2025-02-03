"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Tproduct } from "../../../utils/componentType";
import { SignInButton, useAuth} from "@clerk/nextjs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

const CartProducts = () => {
    const [products, setProducts] = useState<Tproduct[]>([]);
    const { isSignedIn } = useAuth(); // Check user authentication

    useEffect(() => {
        const fetchProducts = async () => {
            const cart = JSON.parse(localStorage.getItem('cart')!);
            if (cart) {
                const cartProducts = await client.fetch(
                    `*[_type == "product" && id in $cart]{
                        title,
                        price,
                        "imageUrl": productImage.asset->url,
                        id
                    }`, { cart }
                );
                const productsWithQuantity = cartProducts.map((product: any) => ({ ...product, quantity: 1 }));
                setProducts(productsWithQuantity);
            }
        };
        fetchProducts();
    }, []);

    console.log(products)

    const increment = (i: number) => {
        const updatedProducts = [...products];
        updatedProducts[i].quantity++;
        setProducts(updatedProducts);
    };

    const decrement = (i: number) => {
        const updatedProducts = [...products];
        if (updatedProducts[i].quantity > 1) updatedProducts[i].quantity--;
        setProducts(updatedProducts);
    };

    const totalAmount = () => {
        return products.reduce((acc, product) => acc + product.quantity * product.price, 0);
    };

     const router = useRouter()
    const handleCheckout =  () => {
        // const response = await fetch("/api/checkout", {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json', 
        //     },
        //     body: JSON.stringify({ products }), 
        // });
    
        // const data = await response.json();
        //       window.location.href = data.url
        //       console.log(data);
              router.push("/checkout")
    };
    
    const isCartEmpty = products.length === 0;

    const removeFromCart = (id: number) => {
        const updatedCart = products.filter((item) => item.id !== id);
        setProducts(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      };

    return (
        <>
            <table className="mt-12 w-full">
                <thead className="max-sm:hidden">
                    <tr className="border-b border-[--border-gray] *:pb-4 body-sm">
                        <td>Product</td>
                        <td>Quantity</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i) => (
                        <tr key={product.id}>
                            <td>
                                <div className="flex gap-x-[21px] sm:items-center">
                                    <Image src={product.imageUrl} alt={product.title} width={80} height={80} />
                                    <div className="space-y-2 max-sm:mt-[19px]">
                                        <h4 className="text-[16px] leading-[20px]">{product.title}</h4>
                                        <p>${product.price}</p>
                                        <button onClick={() => removeFromCart(product.id)}
                                          className="text-red-500 font-bold text-2xl">
                                          <RiDeleteBin6Line />
                                         </button>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 px-4 max-sm:hidden flex items-center gap-x-8">
                                <button onClick={() => increment(i)}>+</button>
                                <span>{product.quantity}</span>
                                <button onClick={() => decrement(i)}>-</button>
                            </td>
                            <td className="max-sm:hidden text-center sm:w-28">${product.quantity * product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pt-7 pb-[55px] sm:pb-[48px] w-fit ml-auto">
                <div className="space-y-3">
                    <div className="flex gap-x-4 items-center w-fit ml-auto">
                        <h4 className="">Subtotal</h4>
                        <h3 className="">${totalAmount()}</h3>
                    </div>
                    <p className="max-sm:whitespace-nowrap text-sm ">
                        Taxes and shipping are calculated at checkout
                    </p>
                </div>

                {!isCartEmpty && (
                    <>
                        {!isSignedIn ? (
                            <SignInButton mode="redirect">
                                <button
                                    className="bg-slate-700 hover:bg-slate-900 text-white py-4 mt-8 sm:mt-4 px-[117px] sm:px-[48px]">
                                    Sign in to Checkout
                                </button>
                            </SignInButton>
                        ) : (
                            <button
                                onClick={()=>handleCheckout()}
                                className="bg-green-600 hover:bg-green-800 text-white py-4 mt-8 sm:mt-4 px-[117px] sm:px-[48px]">
                                Proceed to Payment
                            </button>
                        )}
                        </>
                )}


            </div>
        </>
    );
};

export default CartProducts;
