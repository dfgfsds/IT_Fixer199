"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import LaptopServiceBanner from '../../../public/image/LaptopServiceBanner.png';

interface Item {
  title: string;
  image: string;
  rating: number;
  reviews: string;
  price: string;
  oldPrice?: string;
}

const items: Item[] = [
  {
    title: "Laptop deep cleaning",
    image:
      "https://i.pinimg.com/1200x/d4/a7/43/d4a74344a1b99defb12b47e335072875.jpg",
    rating: 4.79,
    reviews: "3.8M",
    price: "₹1,016",
    oldPrice: "₹1,098",
  },
  {
    title: "Laptop general service",
    image:
      "https://i.pinimg.com/1200x/ff/bc/51/ffbc5104374ddf2a31afbf6b3428590b.jpg",
    rating: 4.82,
    reviews: "1.5M",
    price: "₹905",
    oldPrice: "₹978",
  },
  {
    title: "Laptop performance optimization",
    image:
      "https://i.pinimg.com/736x/63/71/e9/6371e997d73058f61683259376e69ee0.jpg",
    rating: 4.79,
    reviews: "3.8M",
    price: "₹1,483",
    oldPrice: "₹1,647",
  },
];

export default function LaptopService() {
  return (
    <div className="app-section">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="app-section-title">
            Laptop Service
          </h2>
          <p className="text-[13px] text-gray-500">
            Regular laptop repair & maintenance
          </p>
        </div>

        <button className="text-[14px] font-medium text-blue-600">
          See all
        </button>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {items.map((item, i) => (
          <div key={i} className="flex-shrink-0 w-[170px]">
            {/* Image */}
            <div className="h-[120px] w-full bg-[#F5F6F7] rounded-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={170}
                height={120}
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

              <div className="mt-1 flex items-center gap-2">
                <span className="text-[14px] font-semibold text-black">
                  {item.price}
                </span>
                {item.oldPrice && (
                  <span className="text-[12px] text-gray-400 line-through">
                    {item.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="px-2 pt-10 mb-2">
        <div className="w-full rounded-lg overflow-hidden">
          <Image
            src={LaptopServiceBanner}
            alt="Banner"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
