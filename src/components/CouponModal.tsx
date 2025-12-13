import { useState } from "react";
import { FaX } from "react-icons/fa6";

interface CouponModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

export default function CouponModal({ isOpen, onClose }: CouponModalProps) {
    const [couponCode, setCouponCode] = useState('');

    if (!isOpen) {
        return null;
    }
    const handleApply = () => {
        onClose();
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="relative bg-white rounded-lg shadow-xl w-[90%] max-w-md">
                <button
                    onClick={onClose}
                    className="absolute cursor-pointer top-3 right-3 text-gray-600 hover:text-gray-800"
                >
                    <FaX className="h-4 w-4" />
                </button>
                <h2 className="text-xl font-semibold px-6 mt-4">
                Coupons & Offers
                </h2>
                <div className="">
                    {/* <h2 className="text-lg font-semibold mb-4"></h2> */}

                    {/* Apply Coupon */}
                    <div className="flex mb-4 p-6">
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter coupon code"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button
                            onClick={handleApply}
                            className="bg-[#6e42e5] cursor-pointer hover:bg-[#9c79ff] text-white font-semibold py-2 px-4 rounded-md text-sm ml-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Apply
                        </button>
                    </div>

                    {/* Payment Offers */}
                    <div className="mb-1 border-t border-gray-200 pt-4 p-6">
                        <h3 className="text-md font-semibold mb-1">Payment offers</h3>
                        <p className="text-sm text-gray-500 mb-3">No code required</p>

                        {/* Amazon Pay Offer */}
                        <div className="flex items-center mb-5">
                            <div className="rounded-full bg-yellow-500 w-8 h-8 flex items-center justify-center mr-3">
                                {/* You can replace this with an actual Amazon Pay logo */}
                                <span className="text-black font-bold text-xs">Pay</span>
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Amazon cashback upto ₹100</p>
                                <p className="text-xs text-gray-600 py-0.5">Via Amazon Pay balance</p>
                                <button className="text-xs text-black underline font-medium">View T&C</button>
                            </div>
                        </div>

                        {/* Paytm Offer */}
                        <div className="flex items-center">
                            <div className="rounded-full bg-blue-500 w-8 h-8 flex items-center justify-center mr-3">
                                {/* You can replace this with an actual Paytm logo */}
                                <span className="text-white font-bold text-xs">Paytm</span>
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Up to ₹150 Cashback</p>
                                <p className="text-xs text-gray-600">Valid For Paytm UPI only</p>
                                <button className="text-xs text-black underline font-medium">View T&C</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
