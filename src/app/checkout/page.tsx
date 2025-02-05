"use client";

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCity, FaGlobe } from "react-icons/fa";
import { Tproduct } from "../../../utils/componentType";


const Checkout = () => {

  const [cartProducts, setCartProducts] = useState<Tproduct[]>([]);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checkout Data:", formData);
  };
  
  const handlePlaceOrder =async ()=>{
    const orderData = {
      _type: "order",
      fullname: formData.fullname,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zipcode: formData.zipcode,
      country: formData.country,
      items: cartProducts.map(item => ({
        _type: "reference", 
        _ref: item._id, 
      })),
      total: totalAmount(), 
      orderDate: new Date().toISOString(), 
    };
    
  
    try {
      await client.create(orderData)
      localStorage.removeItem("cart")
    } catch (error) {
      console.error("error creatig order",error)
      
    }

  }
   

  //for data from local storage
  useEffect(() => {
          const fetchProducts = async () => {
              const cart = JSON.parse(localStorage.getItem('cart')!);
              if (cart) {
                  const cartProduct = await client.fetch(
                      `*[_type == "product" && id in $cart]{
                          title,
                          price,
                          "imageUrl": productImage.asset->url,
                          _id
                      }`, { cart }
                  );
                  const productsWithQuantity = cartProduct.map((product: any) => ({ ...product, quantity: 1 }));
                  setCartProducts(productsWithQuantity)
              }
          };
          fetchProducts();
      }, []);


      cartProducts.forEach(product => console.log("Product ID:", product._id));
      
  
  const totalAmount = () => {
    return cartProducts.reduce((acc, product) => acc + product.quantity * product.price, 0);
};

// for stripe
const handleCheckout = async (cartProducts:any) => {
  const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json', 
      },
      body: JSON.stringify({ cartProducts }), 
  });

  const data = await response.json();
        window.location.href = data.url
        
        
};
 
const handleOrderAndCheckout = async()=>{
  await handlePlaceOrder();
  handleCheckout(cartProducts)
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">
          Billing Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              className="border pl-10 p-3 rounded-lg w-full outline-none focus:ring-1 focus:ring-blue-200"
              required
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border pl-10 p-3 rounded-lg w-full outline-none focus:ring-1 focus:ring-blue-200"
              required
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <FaPhone className="absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="border pl-10 p-3 rounded-lg w-full outline-none focus:ring-1 focus:ring-blue-200"
              required
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              className="border pl-10 p-3 rounded-lg w-full outline-none focus:ring-1 focus:ring-blue-200"
              required
              onChange={handleChange}
            />
          </div>

          {/* City & State */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <FaCity className="absolute left-3 top-4 text-gray-400" />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="border pl-10 p-3 rounded-lg w-full outline-none focus:ring-1 focus:ring-blue-200"
                required
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="state"
              placeholder="State"
              className="border p-3 rounded-lg w-full outline-none focus:ring-1 focus:ring-blue-200"
              required
              onChange={handleChange}
            />
          </div>

          {/* Zip Code & Country */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="zipcode"
              placeholder="Zip Code"
              className="border p-3 rounded-lg w-full outline-none focus:ring-1 focus:ring-blue-200"
              required
              onChange={handleChange}
            />
            <div className="relative">
              <FaGlobe className="absolute left-3 top-4 text-gray-400" />
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="border pl-10 p-3 rounded-lg w-full outline-none focus:ring-1 focus:ring-blue-200"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button onClick={handleOrderAndCheckout}
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md">
            Proceed to Payment
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Checkout;
