"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import PCandLaptopRepairBanner from '../../../public/image/PCandLaptopRepairBanner.png'

interface ServiceItem {
  title: string;
  image: string;
  rating: number;
  reviews: string;
  price: string;
}

const services: ServiceItem[] = [
  {
    title: "Laptop general service",
    image: "https://i.pinimg.com/1200x/ff/bc/51/ffbc5104374ddf2a31afbf6b3428590b.jpg",
    rating: 4.78,
    reviews: "283K",
    price: "₹599",
  },
  {
    title: "Laptop deep cleaning",
    image: "https://i.pinimg.com/736x/0d/7a/ea/0d7aead312525745d053228d12ed0860.jpg",
    rating: 4.73,
    reviews: "152K",
    price: "₹499",
  },
  {
    title: "Laptop overheating check-up",
    image: "https://i.pinimg.com/736x/4a/bf/a0/4abfa017326b368025af701b02dab58c.jpg",
    rating: 4.81,
    reviews: "96K",
    price: "₹349",
  },
  {
    title: "PC hardware diagnostics",
    image: "https://i.pinimg.com/736x/43/68/11/436811dcdc7bf3e8a85b2f9cb3050526.jpg",
    rating: 4.76,
    reviews: "88K",
    price: "₹249",
  },
  {
    title: "Laptop OS installation",
    image: "https://i.pinimg.com/1200x/97/27/c3/9727c3f3c04155f0bd5d09f2369ae715.jpg",
    rating: 4.84,
    reviews: "120K",
    price: "₹699",
  },
];

export default function PcLaptopRepairServices() {
  return (
    <div className="app-section">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="app-section-title">
          PC & Laptop repair & service
        </h2>
        <button className="text-[14px] font-medium text-blue-600">
          See all
        </button>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {services.map((item, i) => (
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
                  src={PCandLaptopRepairBanner}
                  alt="Banner"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
    </div>
  );
}
