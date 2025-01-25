"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Tproduct } from "../../../utils/componentType";

const CartProducts = () => {
    const [products, setProducts] = useState<Tproduct[]>([]);

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

    const handleCheckout = () => {
        localStorage.removeItem('cart');
        setProducts([]);
    };

    const isCartEmpty = products.length === 0;

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
                                    <Image src={product.imageUrl} alt="Failed to load" width={64} height={64} />
                                    <div className="space-y-2 max-sm:mt-[19px]">
                                        <h4 className="text-[16px] leading-[20px]">{product.title}</h4>
                                        <p>${product.price}</p>
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
                        <h4 className="text-[--primary]">Subtotal</h4>
                        <h3 className="text-[--dark-primary]">${totalAmount()}</h3>
                    </div>
                    <p className="max-sm:whitespace-nowrap text-sm text-[--primary]">
                        Taxes and shipping are calculated at checkout
                    </p>
                </div>

                {!isCartEmpty && (
                    <Link href="/">
                        <button
                            type="button"
                            onClick={handleCheckout}
                            className="bg-[--dark-primary] max-sm:w-full block w-fit ml-auto bg-slate-700 hover:bg-slate-900 text-white py-4 mt-8 sm:mt-4 px-[117px] sm:px-[48px]"
                        >
                            Go to checkout
                        </button>
                    </Link>
                )}
            </div>
        </>
    );
};

export default CartProducts;
