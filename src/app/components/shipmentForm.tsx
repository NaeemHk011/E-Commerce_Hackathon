// "use client"
// import React, { useRef } from 'react'

// const ShipmentForm = () => {
//     const getName = useRef<HTMLInputElement>(null);
//   const getPhone = useRef<HTMLInputElement>(null);
//   const getAddressLine1 = useRef<HTMLInputElement>(null);
//   const getAddressLine2 = useRef<HTMLInputElement>(null);
//   const getCityLocality = useRef<HTMLInputElement>(null);
//   const getStateProvince = useRef<HTMLInputElement>(null);
//   const getPostalCode = useRef<HTMLInputElement>(null);
//   const getCountryCode = useRef<HTMLInputElement>(null);
//   const getAddressResidentialIndicator = useRef<HTMLSelectElement>(null);

//   const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
    
//     const payload ={
//         shipToAddress:{
//             name: getName.current?.value,
//             phone: getPhone.current?.value,
//             addressline: getAddressLine1.current?.value,
//             addressline2: getAddressLine2.current?.value,
//             citylocality: getCityLocality.current?.value,
//             stateprovince: getStateProvince.current?.value,
//             postalcode: getPostalCode.current?.value,
//             countrycode: getCountryCode.current?.value,
//             addressresidentialindicator: getAddressResidentialIndicator.current?.value,
//         },
//     };

//     try {
//         const res = await fetch("http://localhost:3000/api/shipengine",{
//             method:"POST",
//             headers:{
//                 "Content-type":"application/json"
//             },
//             body: JSON.stringify(payload)
//         });

//         const data = await res.json();
//         console.log("response from api",data);
//     } catch (error) {
//         console.log("Error");
        
//     }    
//   }


//   return (
//     <div className="max-w-sm mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-200">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Shipping Address</h2>
//       <form onSubmit={handleSubmit} className="space-y-3">
//         <input ref={getName} type="text" placeholder="Full Name" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm" />
//         <input ref={getPhone} type="tel" placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm" />
//         <input ref={getAddressLine1} type="text" placeholder="Address Line 1" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm" />
//         <input ref={getAddressLine2} type="text" placeholder="Address Line 2" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm" />
//         <input ref={getCityLocality} type="text" placeholder="City / Locality" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm" />
//         <input ref={getStateProvince} type="text" placeholder="State / Province" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm" />
//         <input ref={getPostalCode} type="text" placeholder="Postal Code" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm" />
//         <input ref={getCountryCode} type="text" placeholder="Country Code" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm" />
//         <select ref={getAddressResidentialIndicator} className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm">
//           <option value="">Select Address Type</option>
//           <option value="residential">Residential</option>
//           <option value="business">Business</option>
//         </select>
//         <button  className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold text-base hover:bg-blue-600 transition-all duration-300 shadow-md">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default ShipmentForm