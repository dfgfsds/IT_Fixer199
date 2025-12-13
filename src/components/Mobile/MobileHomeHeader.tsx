'use client';

import { Search, MapPin, ShoppingCart, ChevronDown } from "lucide-react";
import { useState } from "react";

interface PromoCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const PromoCard: React.FC<PromoCardProps> = ({
  title,
  subtitle,
  imageSrc,
}) => {
  return (
    <div
      className="relative aspect-[4/4.3] rounded-xl overflow-hidden cursor-pointer
      bg-gradient-to-b from-[#5a3b2e] to-[#3a241c]"
    >
      {/* TEXT */}
      <div className="absolute top-3 left-3 z-10">
        <p className="text-sm font-semibold text-white leading-tight">
          {title}
        </p>
        <p className="text-xs font-medium text-white opacity-90">
          {subtitle}
        </p>
      </div>

      {/* IMAGE */}
      <div className="absolute bottom-[-6px] right-[-6px]">
        <img
          src={imageSrc}
          alt={title}
          className="h-[95px] object-contain"
        />
      </div>
    </div>
  );
};

export default function MobileHeader() {
  // 🔴 ONE SINGLE BG COLOR
  const HEADER_BG_COLOR = "bg-[#5b3c2f]";

const [promoCards] = useState([
  {
    title: "PC repair",
    subtitle: "Diagnosis & fix",
    imageSrc: "/image/PCRepair.png",
  },
  {
    title: "Laptop repair",
    subtitle: "All brands",
    imageSrc: "/image/LaptopRepair.png",
  },
  {
    title: "PC cleaning",
    subtitle: "Dust & cooling",
    imageSrc: "/image/PCCleaning.png",
  },
  {
    title: "Laptop upgrade",
    subtitle: "SSD & RAM",
    imageSrc: "/image/LaptopUpgrade.png",
  },
  {
    title: "Virus removal",
    subtitle: "Safe & secure",
    imageSrc: "/image/VirusRemoval.png",
  },
  {
    title: "OS installation",
    subtitle: "Windows setup",
    imageSrc: "/image/OSInstallation.png",
  },
]);


  return (
    // ❌ shadow removed → fixes double color issue
    <div className={`relative ${HEADER_BG_COLOR} text-white`}>
      <div className="max-w-md mx-auto">

        {/* LOCATION + CART (SCROLLS AWAY) */}
        <div className="p-4 pt-6 pb-4">
          <div className="flex justify-between items-start">
            <div className="flex flex-col cursor-pointer">
              <div className="flex items-center text-2xl font-bold">
                <MapPin className="w-5 h-5 mr-2 text-white" />
                <h1>Nungambakkam</h1>
              </div>
              <div className="flex items-center text-sm font-light opacity-80 mt-1">
                <span>Chennai</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
            </div>

            <button
              aria-label="Shopping Cart"
              className="w-10 h-10 bg-white rounded-full
              flex items-center justify-center text-[#282C2D]"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* STICKY SEARCH (WHITE, SAME BG BEHIND) */}
        <div className={`sticky top-0 z-50 ${HEADER_BG_COLOR} p-4 pt-2 pb-4`}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search for 'AC service'"
              className="w-full py-3.5 pl-12 pr-4 text-sm
              rounded-lg bg-white text-gray-800
              focus:outline-none"
            />
          </div>
        </div>

        {/* WINTER CARE PACK */}
        <div className="p-4 pt-0 pb-6">
          <h2 className="text-3xl font-bold mb-1 text-[#F5E6C8]">
            Winter
          </h2>
          <p className="text-xl font-light tracking-widest mb-4 text-[#E6D3A3]">
            CARE PACK
          </p>

          {/* GRID */}
          <div className="grid grid-cols-3 gap-3">
            {promoCards.map((card, index) => (
              <PromoCard
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                imageSrc={card.imageSrc}
              />
            ))}
          </div>

          {/* VIEW ALL */}
          <div className="flex justify-center mt-5">
            <p className="text-white font-semibold flex items-center gap-2">
              View all <span>→</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
