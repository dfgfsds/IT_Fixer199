// components/Modal.jsx
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaX } from "react-icons/fa6";
import { LuLocateFixed } from "react-icons/lu";
import LocationMapModal from "./LocationMapModal";
import Image from "next/image";

interface LocationSearchModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

export default function LocationSearchModal({ isOpen, onClose }: LocationSearchModalProps) {
    const [isMapOpen, setMapOpen] = useState(false);

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                {/* Modal Box */}
                <div className="bg-white rounded-lg w-full max-w-md shadow-lg relative">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute cursor-pointer top-0.5 right-2 text-gray-500 hover:text-black text-xl"
                    >
                        {/* &times; */}
                        <FaX size={12} />
                    </button>
                    <div className="px-5 pt-6">
                        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 mb-4">
                            <BiSearch className="w-4 h-4 text-gray-500 mr-2" />
                            <input
                                type="text"
                                placeholder="Search for your location/society/apartment"
                                className="w-full outline-none text-sm placeholder-gray-300"
                            />
                        </div>
                    </div>
                    <div className="px-5 mb-5"
                        onClick={() => setMapOpen(!isMapOpen)}
                    >
                        <div className="flex  gap-2 text-primary font-semibold text-sm cursor-pointer mt-auto">
                            <LuLocateFixed className="w-4 h-4" />
                            Use current location
                        </div>
                    </div>
                    <div className="h-2 bg-gray-100">

                    </div>
                    <div className="flex justify-center py-10 text-xs text-gray-400">
                        {/* <span>powered by </span> */}
                        <Image 
                         width={48} height={48}
                        src="data:image/png;base64,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"

                            alt="Google" className="w-16 h-auto ml-1" />
                    </div>
                </div>
            </div>

            <LocationMapModal
                isOpen={isMapOpen} onClose={() => setMapOpen(false)}
            />
        </>
    );
};

// export default Modal;
