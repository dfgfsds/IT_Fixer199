import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const ACServiceUI = () => {
  return (
    <div className="utility-spacing bg-white text-gray-800">


      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left - Service Menu */}
        <div className="lg:col-span-4 ">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold leading-snug text-black">AC Service & Repair</h1>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs">
                <FaStar className="text-[10px]" />
              </div>
              <div className="border-b border-dashed border-gray-400 pb-1 text-[15px]  leading-tight inline-block">
                <span className="text-base text-gray-600">4.76</span>
                <span className="text-gray-600 text-sm font-medium ml-1">(11.0 M bookings)</span>
              </div>


            </div>


          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h2 className="text-sm font-semibold mb-4">Select a service</h2>
            <div className="grid grid-cols-3 gap-5 p-1">
              {[
                { label: "Super saver packages", img: "https://cdn-icons-png.flaticon.com/128/1828/1828919.png" },
                { label: "Service", img: "https://cdn-icons-png.flaticon.com/128/1046/1046857.png" },
                { label: "Repair & gas refill", img: "https://cdn-icons-png.flaticon.com/128/1046/1046882.png" },
                { label: "Installation/uninstallation", img: "https://cdn-icons-png.flaticon.com/128/1828/1828970.png" }
              ].map((item, index) => (
                <div
                key={index}
                >
                <div
                  key={index}
                  className="flex flex-col items-center p-1 bg-slate-50 rounded hover:bg-gray-200 cursor-pointer"
                >
                  <Image src={item.img} height={400} width={400} alt={item.label} className="w-10 h-10 mb-2" />
             
                </div>
                <span className="flex justify-center text-[10px] text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle - Service Info */}
        <div className="lg:col-span-5 bg-white border border-gray-100 p-5 border-b">
          <h2 className="text-2xl font-bold mb-4 text-black">Super saver packages</h2>

          {/* Service Card */}
          <div className="overflow-hidden rounded-md">
            <Image
            height={400} width={400}
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1745822870879-984cbd.jpeg"
              alt="Foam Jet Service"
              className="w-full h-auto"
            />
            <div className="mt-3">
              <h3 className="text-sm font-semibold text-black">Foam-jet AC service</h3>

              <div className="flex items-center space-x-1 text-[10px] py-2">
              <div className="w-4 h-4 flex items-center justify-center rounded-full bg-purple-600 text-white ">
                <FaStar className="text-[10px]" />
              </div>
              <div className="border-b border-dashed border-gray-400 pb-1  leading-tight inline-block">
                <span className=" text-gray-600">4.76</span>
                <span className="text-gray-600  font-medium ml-1">(11.0 M bookings)</span>
              </div>
            </div>

              <div className="text-xs text-gray-600 mb-2">
              <span className="font-semibold text-black mr-2">₹998</span>
                <span className="line-through ">₹1,198</span>
                <span className="mx-2">•</span>
                <span>1 hr 30 mins</span>
              </div>
              <p className="text-green-600 border-gray-300 text-xs mb-2 border-b border-dashed pb-4">₹499 per AC</p>

              <ul className="list-disc text-[10px] list-inside text-xs text-gray-500 mb-2">
                <li>Applicable for both window or split ACs</li>
                <li>Indoor unit deep cleaning with foam & jet spray</li>
              </ul>
              <button className="font-bold text-[#8A2BE2] hover:text-[#af8ece] cursor-pointer">
       <span className="text-xs"> View details</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right - Cart + Promise */}
        <div className="lg:col-span-3 space-y-3">
          {/* Cart */}
          <div className="bg-white border border-gray-200 rounded-md p-5  text-center">
            {/* <img
              src="https://www.svgrepo.com/show/21432/cart.svg"
              alt="Cart"
              className="w-12 h-12 mx-auto mb-2 opacity-40"
            /> */}
           <FiShoppingCart 
                         className="w-12 h-12 mx-auto mb-2 opacity-40"
           />
            <p className="text-xs text-gray-400">No items in your cart</p>
          </div>

          {/* Offer */}
          <div className=" border border-gray-200  rounded-md p-4">
            <p className="text-black font-bold text-xs">Save 10% on every order</p>
            <p className="text-xs text-gray-600 font-medium py-1">Get Plus now</p>
            <p className="text-xs text-[#8A2BE2] mt-1 font-bold cursor-pointer flex gap-1">View More Offers <IoIosArrowDown /></p>
          </div>

          {/* UC Promise */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex justify-between gap-3">
            <div>
            <h3 className="text-sm font-semibold mb-3">UC Promise</h3>
            <ul className="text-xs text-gray-800 space-y-1">
              <li>✔ Verified Professionals</li>
              <li>✔ Hassle Free Booking</li>
              <li>✔ Transparent Pricing</li>
            </ul>
            </div>
            <Image
            height={400} width={400}
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1702985608819-4a9ba6.jpeg"
              alt="Quality assured"
              className="w-12 h-12 mt-4 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACServiceUI;
