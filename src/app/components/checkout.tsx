// "use client";

// import { useState } from "react";

// const Checkout = ({ products, totalAmount }: { products: any[]; totalAmount: number }) => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     billingAddress: "",
//     shippingAddress: "",
//     paymentMethod: "",
//     cardNumber: "",
//     expiryDate: "",
//     cvv: "",
//   });

//   const handleNext = () => {
//     if (step < 4) setStep(step + 1);
//   };

//   const handleBack = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = () => {
//     alert("Order placed successfully!");
//     // Handle order submission logic here
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
//       <h1 className="text-2xl font-bold mb-6">Checkout</h1>

//       <div className="mb-6">
//         <ul className="flex justify-between text-sm font-medium">
//           <li className={`step ${step >= 1 ? "active" : ""}`}>Billing</li>
//           <li className={`step ${step >= 2 ? "active" : ""}`}>Shipping</li>
//           <li className={`step ${step >= 3 ? "active" : ""}`}>Payment</li>
//           <li className={`step ${step >= 4 ? "active" : ""}`}>Review</li>
//         </ul>
//       </div>

//       {step === 1 && (
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
//           <input
//             type="text"
//             name="billingAddress"
//             placeholder="Enter your billing address"
//             value={formData.billingAddress}
//             onChange={handleInputChange}
//             className="w-full border p-2 rounded-md mb-4"
//           />
//           <button onClick={handleNext} className="bg-blue-600 text-white py-2 px-4 rounded-md">
//             Next
//           </button>
//         </div>
//       )}

//       {step === 2 && (
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
//           <input
//             type="text"
//             name="shippingAddress"
//             placeholder="Enter your shipping address"
//             value={formData.shippingAddress}
//             onChange={handleInputChange}
//             className="w-full border p-2 rounded-md mb-4"
//           />
//           <div className="flex justify-between">
//             <button onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 rounded-md">
//               Back
//             </button>
//             <button onClick={handleNext} className="bg-blue-600 text-white py-2 px-4 rounded-md">
//               Next
//             </button>
//           </div>
//         </div>
//       )}

//       {step === 3 && (
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
//           <input
//             type="text"
//             name="cardNumber"
//             placeholder="Card Number"
//             value={formData.cardNumber}
//             onChange={handleInputChange}
//             className="w-full border p-2 rounded-md mb-4"
//           />
//           <input
//             type="text"
//             name="expiryDate"
//             placeholder="Expiry Date (MM/YY)"
//             value={formData.expiryDate}
//             onChange={handleInputChange}
//             className="w-full border p-2 rounded-md mb-4"
//           />
//           <input
//             type="text"
//             name="cvv"
//             placeholder="CVV"
//             value={formData.cvv}
//             onChange={handleInputChange}
//             className="w-full border p-2 rounded-md mb-4"
//           />
//           <div className="flex justify-between">
//             <button onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 rounded-md">
//               Back
//             </button>
//             <button onClick={handleNext} className="bg-blue-600 text-white py-2 px-4 rounded-md">
//               Next
//             </button>
//           </div>
//         </div>
//       )}

//       {step === 4 && (
//         <div>
//           <h2 className="text-xl font-semibold mb-4">Review Order</h2>
//           <ul className="mb-4">
//             {products.map((product, index) => (
//               <li key={index} className="flex justify-between border-b pb-2 mb-2">
//                 <span>{product.title}</span>
//                 <span>£{product.price} x {product.quantity}</span>
//               </li>
//             ))}
//           </ul>
//           <p className="font-bold mb-4">Total: ${totalAmount}</p>
//           <div className="flex justify-between">
//             <button onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 rounded-md">
//               Back
//             </button>
//             <button onClick={handleSubmit} className="bg-green-600 text-white py-2 px-4 rounded-md">
//               Place Order
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Checkout;

