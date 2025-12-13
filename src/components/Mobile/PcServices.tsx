"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import PCRepairBanner from '../../../public/image/PCRepairBanner.png'
interface Item {
  title: string;
  image: string;
  rating: number;
  reviews: string;
  price: string;
}

const items: Item[] = [
  {
    title: "Laptop General Service",
    image:
      "https://i.pinimg.com/736x/08/17/a1/0817a19cb4a56b5e6751358c95265844.jpg",
    rating: 4.81,
    reviews: "92K",
    price: "₹699",
  },
  {
    title: "Laptop Cleaning & Thermal Paste",
    image:
      "https://i.pinimg.com/736x/8c/08/24/8c0824afadafb154cdbd2a722d07cf63.jpg",
    rating: 4.76,
    reviews: "61K",
    price: "₹899",
  },
  {
    title: "PC Hardware Diagnostics",
    image:
      "https://i.pinimg.com/1200x/0c/7c/3b/0c7c3b7b11b36fbff6581f48609df1db.jpg",
    rating: 4.84,
    reviews: "48K",
    price: "₹499",
  },
  {
    title: "OS Installation (Windows / Linux)",
    image:
      "https://i.pinimg.com/736x/05/73/55/057355d00bbadf2cae72d5481170f9b9.jpg",
    rating: 4.79,
    reviews: "71K",
    price: "₹699",
  },
  {
    title: "Virus & Malware Removal",
    image:
      "https://i.pinimg.com/736x/4e/b3/23/4eb3235381b3227c6478275a9242b74a.jpg",
    rating: 4.83,
    reviews: "55K",
    price: "₹599",
  },
];

export default function PcServices() {
  return (
    <div className="app-section">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-[20px] font-bold text-[#111827] mb-0 mt-5">
            PC Services
          </h2>
          <p className="text-[13px] text-gray-500">
            Repair & support at your doorstep
          </p>
        </div>

        <button className="text-[14px]  font-medium text-blue-600">
          See all
        </button>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {items.map((item, i) => (
          <div key={i} className="flex-shrink-0 w-[180px]">
            {/* Image */}
            <div className="h-[130px] w-full bg-[#F5F6F7] rounded-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={180}
                height={130}
                className="object-cover h-full w-full"
              />
            </div>

            {/* Content */}
            <div className="mt-2">
              <p className="text-[13px] text-gray-900 leading-snug">
                {item.title}
              </p>

              <div className="flex items-center gap-1 mt-1 text-[12px] text-gray-700">
                <Star size={12} fill="#111" strokeWidth={0} />
                <span>{item.rating}</span>
                <span className="text-gray-500">
                  ({item.reviews})
                </span>
              </div>

              <div className="mt-1 text-[14px] font-semibold text-black">
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </div>

       <div className="px-2 pt-10 mb-2">
              <div className="w-full rounded-lg overflow-hidden">
                <Image
                  src={PCRepairBanner}
                  alt="Banner"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
    </div>
  );
}
