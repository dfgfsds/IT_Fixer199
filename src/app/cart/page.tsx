// pages/CartPage.jsx or CartPage.tsx
"use client";
import CouponModal from "@/components/CouponModal";
import LocationSearchModal from "@/components/Modals/LocationSearchModal";
import SlotModal from "@/components/Modals/SlotModal/SlotModal";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePercentage } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import {  FaPhoneAlt } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import { HiMiniTag } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { MdPayment } from "react-icons/md";

export default function CartPage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [openSlot, setOpenSlot] = useState(false);
    const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);

    const checkScroll = () => {
        const el = scrollRef.current;
        if (el) {
            setCanScrollLeft(el.scrollLeft > 0);
            setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
        }
    };

    const scroll = (direction: "left" | "right") => {
        const el = scrollRef.current;
        if (el) {
            const amount = 200;
            el.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        checkScroll();
        el.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);

        return () => {
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    const items = [
        {
            title: "Anti-rust spray", subtitle: "(avoid gas leak)", price: "₹249"
            , image: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1745822870879-984cbd.jpeg'
        },
        {
            title: "Gas refill & check", subtitle: "", price: "₹2,700"
            , image: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1745822870879-984cbd.jpeg'

        },
        {
            title: "Outdoor unit cleaning", subtitle: "", price: "₹399"
            , image: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1745822870879-984cbd.jpeg'

        },
        {
            title: "Filter replacement", subtitle: "", price: "₹199"
            , image: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1745822870879-984cbd.jpeg'

        },
        {
            title: "Coolant top-up", subtitle: "", price: "₹1,299"
            , image: 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1745822870879-984cbd.jpeg'

        },
    ];
    return (
        <div className="utility-spacing">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:px-10">
                {/* Left Side */}
                <div className="lg:col-span-7 space-y-4">
                    <div className=" text-sm font-bold mb-5 flex gap-2"><HiMiniTag className="text-green-800 text-xl" />Saving ₹100 on this order</div>

                    <div className="rounded-md border border-gray-300 ">
                        <div className="flex items-center mb-4 p-5 border-b border-gray-300">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-gray-200 flex items-center justify-center  shadow-md">
                                    <FaPhoneAlt size={20} className="text-gray-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold mb-1">Send booking details to</p>
                                    <p className="text-gray-600 font-medium">+91 9715250774</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-2 p-3 border-b border-gray-300">
                            <div className="flex items-center mb-4 gap-4">
                                <div className="w-8 h-8 bg-gray-200 flex items-center justify-center  shadow-md">
                                    <FaLocationDot size={20} className="text-gray-500" />
                                </div>
                                <p className="text-sm font-semibold text-gray-600">Address</p>
                            </div>
                            <button className="w-full bg-[#6e42e5] hover:bg-[#6932ff] text-white py-4 rounded-md font-bold text-sm shadow-md cursor-pointer"
                                onClick={() => setSearchOpen(!isSearchOpen)}
                            >
                                Select an address
                            </button>
                        </div>


                        <div className="mb-2 p-3 border-b border-gray-300">
                            <div className="flex items-center mb-4 gap-4">
                                <div className="w-8 h-8 bg-gray-200 flex items-center justify-center  shadow-md">
                                    <CiCalendarDate size={20} className="text-gray-500" />
                                </div>
                                <p className="text-sm font-semibold text-gray-600">Slot</p>
                            </div>
                            <button className="w-full bg-[#6e42e5] hover:bg-[#6932ff] text-white py-4 rounded-md font-bold text-sm shadow-md cursor-pointer"
                                onClick={() => setOpenSlot(!openSlot)}
                            >
                                Select time & date
                            </button>
                        </div>


                        {/* <div className="flex items-center gap-2 mb-4 opacity-50 p-3 border-b border-gray-300">
                            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center  shadow-md">
                                <CiCalendarDate size={20} className="text-gray-500" />
                            </div>
                            <span className="text-sm font-medium text-gray-600">Slot</span>
                        </div> */}

                        <div className="flex items-center gap-2 opacity-50 p-3 border-b border-gray-300">
                            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center  shadow-md">
                                <MdPayment size={20} className="text-gray-500" />
                            </div>
                            <span className="text-sm font-medium text-gray-600">Payment Method</span>
                        </div>
                    </div>

                    <div className="p-2  ">
                        <h2 className="font-semibold text-black mb-2 text-xl">Cancellation policy</h2>
                        <p className="mb-2 text-xs text-gray-600 font-medium">
                            Free cancellations if done more than 12 hrs before the service or if a professional isn’t assigned. A fee will be charged otherwise.
                        </p>
                        <a href="#" className="text-black text-sm font-bold underline hover:text-gray-700">Read full policy</a>
                    </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                    <div className="p-4 rounded-md border border-gray-300 ">

                        <div className="flex items-center justify-between mb-3 p-2 border-b border-gray-300 pb-4">
                            <div>
                                <p className="font-medium">Foam-jet service (2 ACs)</p>
                            </div>

                            <div className="flex items-center border bg-[#efecf8] border-[#beaee8] rounded-md overflow-hidden">
                                <button className="px-3 py-1 focus:outline-none hover:bg-[#cec6e5] text-primary" >
                                    -
                                </button>
                                <div className="px-2 py-1  font-medium select-none text-primary">
                                    1
                                </div>
                                <button className="px-3 py-1 focus:outline-none hover:bg-[#cec6e5] text-primary" >
                                    +
                                </button>
                            </div>

                            <div className="text-right">
                                <p className="font-medium text-md">₹1,498</p>
                                <p className="text-gray-400 line-through text-sm">₹1,598</p>
                            </div>
                        </div>

                        {/* Frequently Added */}
                        <div>
                            <p className="font-extrabold mb-2 text-lg">Frequently added together</p>
                            <div className="relative">
                                {/* Left Arrow */}
                                {canScrollLeft && (
                                    <button
                                        onClick={() => scroll("left")}
                                        className="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 z-10 border border-gray-300 rounded-full p-2 bg-white"
                                    >
                                        <FaArrowLeftLong />
                                    </button>
                                )}

                                {/* Scrollable Cards */}
                                <div
                                    ref={scrollRef}
                                    className="flex gap-4 overflow-x-auto px-4 py-4 scroll-smooth no-scrollbar"
                                    style={{ overflowX: "hidden", overflowY: "hidden" }} // Hide both scrollbars
                                >
                                    {items?.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex-shrink-0 w-auto gap-10 bg-white border border-gray-300 rounded-lg  flex justify-between p-4"
                                        >
                                            {/* Image */}
                                            {/* <div className="w-full h-28 mb-3 flex items-center justify-center rounded-md overflow-hidden bg-gray-100">
        <img
          src={item?.image}
          alt={item.title}
          className="object-cover w-full h-full"
        />
      </div> */}
                                            <div>
                                                <h3 className="text-sm">{item.title}</h3>

                                                <p className="text-base font-bold  mb-2">{item.price}</p>
                                            </div>
                                            {/* Add Button */}
                                            <button className="text-primary text-sm px-3 py-1 rounded border border-gray-300">
                                                Add
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Right Arrow */}
                                {canScrollRight && (
                                    <button
                                        onClick={() => scroll("right")}
                                        className="absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2 z-10 border border-gray-300 rounded-full p-2 bg-white"
                                    >
                                        <FaArrowRightLong />
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="border-t border-dashed border-gray-200 w-full"></div>

                        {/* Avoid Calling Checkbox */}
                        <div className="mt-4">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2 text-sm text-gray-700">Avoid calling before reaching the location</span>
                            </label>
                        </div>
                    </div>

                    {/* Coupons */}
                    <div className="p-4 rounded-md border-gray-300 border flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            {/* <span className="text-green-600">🏷️</span> */}
                            <div className="w-6 h-6 bg-green-700 flex items-center justify-center rounded-full">
                                <AiOutlinePercentage size={20} className="text-white p-0.5 font-bold" />
                            </div>
                            <span className="text-sm font-bold">Coupons and offers</span>
                        </div>
                        <span className="text-sm text-violet-800 hover:text-violet-600 font-bold flex gap-2 cursor-pointer"
                            onClick={() => setIsCouponModalOpen(!isCouponModalOpen)}
                        >2 offers <IoIosArrowForward className="my-auto" /></span>
                    </div>

                    {/* Payment Summary */}
                    <div className="bg-white p-4 rounded-md shadow-sm text-sm">
                        <p className="font-bold mb-2 text-lg">Payment summary</p>

                        <div className="flex justify-between mb-2">
                            <span className="text-gray-900 ">Item total</span>
                            <div className="flex gap-1">
                                <span className="text-gray-500 line-through">₹1,598</span>
                                <span className="text-black">₹1,498</span>
                            </div>
                        </div>

                        <div className="flex justify-between mt-1">
                            <span className="text-gray-900 border-b border-dashed border-gray-400 pb-1 text-[15px]  leading-tight inline-block">Taxes and Fee</span>
                            <span>₹189</span>
                        </div>

                        <hr className="my-3 border-t border-gray-200" />

                        <div className="flex justify-between font-extrabold">
                            <span>Total amount</span>
                            <span>₹1,687</span>
                        </div>

                        <hr className="my-2 border-t border-gray-200" />


                        <div className="flex justify-between mt-1 font-semibold">
                            <span>Amount to pay</span>
                            <span>₹1,687</span>
                        </div>

                        <hr className="mt-5 border-t border-gray-200" />


                        {/* Tip Section */}
                        <div className="mt-4">
                            <p className="font-semibold text-sm mb-3">Add a tip to thank the Professional</p>

                            <div className="flex gap-3 text-sm flex-wrap">
                                {/* ₹50 */}
                                <button className="px-4 border border-gray-300 rounded-lg text-gray-800 h-8">
                                    ₹50
                                </button>

                                {/* ₹75 with POPULAR */}
                                <button className="relative px-4 pt-2 pb-4 border-2 border-green-600 rounded-lg text-gray-800 h-8">
                                    ₹75
                                    <span className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-green-700 bg-green-100 px-2 py-[2px] rounded-md leading-none">
                                        POPULAR
                                    </span>
                                </button>

                                {/* ₹100 */}
                                <button className="px-4  border border-gray-300 rounded-lg text-gray-800 h-8">
                                    ₹100
                                </button>

                                {/* Custom */}
                                <button className="px-4  border border-gray-300 rounded-lg text-gray-800 h-8">
                                    Custom
                                </button>
                            </div>

                            <p className="text-[11px] text-gray-500 mt-5">100% of the tip goes to the professional.</p>
                        </div>



                    </div>
                    <div className="bg-white rounded-xl shadow-sm p-4 w-full max-w-md">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-semibold text-sm text-gray-900">Amount to pay</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-lg text-gray-900">₹1,687</p>
                                <button className="text-sm text-gray-800 font-semibold underline underline-offset-[3px] decoration-dotted mt-1">
                                    View breakup
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <LocationSearchModal isOpen={isSearchOpen} onClose={() => setSearchOpen(!isSearchOpen)} />
            <SlotModal isOpen={openSlot} onClose={() => setOpenSlot(!openSlot)} />
            <CouponModal isOpen={isCouponModalOpen} onClose={() => setIsCouponModalOpen(!isCouponModalOpen)} />
        </div>
    );
}
