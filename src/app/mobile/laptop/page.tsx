"use client";

// import Footer from "@/components/Footer";
import LaptopService from "@/components/Mobile/LaptopService";
import MostBookedServices from "@/components/Mobile/MostBookedServices";
import NavMobileFooter from "@/components/Mobile/NavMobileFooter";
import NewAndNoteworthy from "@/components/Mobile/NewAndNoteworthy";
import PcLaptopRepairServices from "@/components/Mobile/PcLaptopRepairServices";
import ServiceGrid from "@/components/Mobile/ServiceGrid";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { BiLaptop } from "react-icons/bi";

export default function LaptopIndex() {
    const [hideTitle, setHideTitle] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setHideTitle(window.scrollY > 40);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="relative">

            {/* 🔝 HEADER (TITLE + SEARCH) */}
            <div className="sticky top-0 z-50 bg-white px-4 pt-4 pb-3">

                {/* TITLE – smooth hide */}
                <div
                    className={`flex items-center gap-2  transition-all duration-300 ease-in-out
            ${hideTitle
                            ? "opacity-0 -translate-y-2 h-0 overflow-hidden mb-0"
                            : "opacity-100 translate-y-0 py-7 h-auto"
                        }
          `}
                >
                    <BiLaptop className="w-6 h-6 text-purple-600 flex-shrink-0" />

                    <h1 className="text-[22px] font-bold leading-tight">
                        <span className="text-[#111827]">Laptop</span>{" "}
                        <span className="text-[#6B7280] font-semibold">services</span>
                    </h1>
                </div>

                {/* SEARCH – always visible */}
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        placeholder="Search for 'Laptop repair'"
                        className="w-full h-[44px] pl-10 pr-4 rounded-xl
                       bg-white border border-gray-200
                       text-[14px] text-gray-900
                       outline-none focus:border-gray-300"
                    />
                </div>
            </div>

            <ServiceGrid />
            <div className="w-full h-[8px] bg-gray-100 mt-6" />
            <NewAndNoteworthy />
            <div className="w-full h-[8px] bg-gray-100 mt-6" />
            <MostBookedServices />
            <LaptopService />
            <PcLaptopRepairServices />
            <NavMobileFooter />
        </div>
    );
}
