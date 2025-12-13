"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import LaptopCleanBanner from '../../../public/image/LaptopCleanBanner.png';

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
    title: "Laptop Repair & Diagnosis",
    image:
      "https://i.pinimg.com/1200x/02/5a/f8/025af82baa5245cc363b219598b88b08.jpg",
    rating: 4.82,
    reviews: "1.9M",
    price: "₹499",
    oldPrice: "₹699",
  },
  {
    title: "PC Cleaning & Dust Removal",
    image:
      "https://i.pinimg.com/1200x/7b/85/7d/7b857df6cdd0839005404da7a0d81841.jpg",
    rating: 4.79,
    reviews: "1.2M",
    price: "₹399",
    oldPrice: "₹549",
  },
  {
    title: "OS Installation (Windows / Linux)",
    image:
      "https://i.pinimg.com/1200x/ef/5d/3e/ef5d3ec38ef26ae15e955289be863472.jpg",
    rating: 4.85,
    reviews: "2.3M",
    price: "₹699",
  },
  {
    title: "Laptop Upgrade (SSD / RAM)",
    image:
      "https://i.pinimg.com/1200x/6a/5c/b3/6a5cb3e8225e2ee3dabfaf7c7d6bf2cc.jpg",
    rating: 4.81,
    reviews: "980K",
    price: "₹999",
    oldPrice: "₹1,299",
  },
  {
    title: "Virus & Malware Removal",
    image:
      "https://i.pinimg.com/1200x/fd/e4/3e/fde43e7eefd21b6639f127f0bf3d6f7c.jpg",
    rating: 4.76,
    reviews: "860K",
    price: "₹599",
  },
];

export default function MostBookedServices() {
  return (
    <div className="app-section">
      <h2 className="text-[20px] font-bold text-[#111827] mb-4 mt-5">
        Most booked services
      </h2>

      {/* Horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {items.map((item, i) => (
          <div key={i} className="flex-shrink-0 w-[170px]">
            {/* Image */}
            <div className="h-[120px] w-full bg-[#F5F6F7] rounded-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={160}
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
            src={LaptopCleanBanner}
            alt="Banner"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

    </div>
  );
}
