"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Search, Wrench } from "lucide-react";
import NewAndNoteworthy from "@/components/Mobile/NewAndNoteworthy";
import MostBookedServices from "@/components/Mobile/MostBookedServices";
import PcServices from "@/components/Mobile/PcServices";
import LaptopService from "@/components/Mobile/LaptopService";
import Footer from "@/components/Footer";
import PcLaptopRepairServices from "@/components/Mobile/PcLaptopRepairServices";

const services = [
  {
    name: "PC Repair",
    image: "/image/PCRepair.png",
  },
  {
    name: "Laptop Repair",
    image: "/image/LaptopRepair.png",
  },
  {
    name: "PC Cleaning",
    image: "/image/PCCleaning.png",
  },
  {
    name: "Laptop Upgrade",
    image: "/image/LaptopUpgrade.png",
  },
  {
    name: "Virus Removal",
    image: "/image/VirusRemoval.png",
    sale: true,
  },
  {
    name: "OS Installation",
    image: "/image/OSInstallation.png",
  },
];


export default function PcIndex() {
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
            {/* HEADER */}
            <div className="sticky top-0 z-50 bg-white px-4 pt-4 pb-3">

                {/* TITLE – smooth hide */}
                <div
                    className={`flex items-center gap-2  transition-all duration-300 ease-in-out
      ${hideTitle ? "opacity-0 -translate-y-2 h-0 overflow-hidden mb-0" : "opacity-100 py-7 translate-y-0 h-auto"}
    `}
                >
                    {/* <Wrench className="w-5 h-5 text-purple-600 flex-shrink-0" /> */}
                    <div className="flex items-center gap-2">
                        <Wrench className="w-6 h-6 text-purple-600" />

                        <h1 className="text-[22px] font-bold leading-tight">
                            <span className="text-[#111827]">PC</span>{" "}
                            <span className="text-[#6B7280] font-semibold">services</span>
                        </h1>
                    </div>


                </div>

                {/* SEARCH – always visible */}
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                    <input
                        placeholder="Search for 'Electricians'"
                        className="w-full h-[44px] pl-10 pr-4 rounded-lg
               bg-white border border-gray-200
               text-[14px] text-gray-900
               outline-none focus:border-gray-300"
                    />
                </div>

            </div>


            {/* ⬇️ CONTENT */}
            <div className="px-4 pt-4 pb-6">
                <div className="grid grid-cols-3 gap-x-3 gap-y-4">
                    {services.map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="relative w-full h-[88px] bg-[#F5F6F7] rounded-2xl flex items-center justify-center">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={56}
                                    height={56}
                                    className="object-contain"
                                />

                                {item.sale && (
                                    <span className="absolute top-2 right-2 bg-green-600 text-white text-[10px] font-semibold px-2 py-[2px] rounded-md">
                                        Sale
                                    </span>
                                )}
                            </div>

                            <p className="mt-2 text-[12px] font-medium text-[#111827] leading-snug">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <NewAndNoteworthy />
            <div className="w-full h-[8px] bg-gray-100 mt-6" />
            <MostBookedServices />
            <PcServices />
            {/* <LaptopService /> */}
            <PcLaptopRepairServices />
            <Footer />
        </div>
    );
}
