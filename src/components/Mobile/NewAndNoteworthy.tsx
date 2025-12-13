"use client";

import Image from "next/image";

interface Item {
  title: string;
  image: string;
  isNew?: boolean;
}

const items: Item[] = [
  {
    title: "Laptop Repair",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop",
    isNew: true,
  },
  {
    title: "PC Repair",
    image:
      "https://i.pinimg.com/1200x/02/5a/f8/025af82baa5245cc363b219598b88b08.jpg",
  },
  {
    title: "Laptop Upgrade (SSD / RAM)",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "PC Cleaning",
    image:
      "https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Virus Removal",
    image:
      "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=600&auto=format&fit=crop",
    isNew: true,
  },
  {
    title: "OS Installation",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Data Recovery",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Custom PC Build",
    image:
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=600&auto=format&fit=crop",
  },
];

export default function NewAndNoteworthy() {
  return (
    <div className="px-4 py-4">
      {/* Title – exact match */}
      <h2 className="text-[20px] font-bold text-[#111827] mb-4 mt-5">
        New and noteworthy
      </h2>

      {/* Horizontal scroll – TWO ROWS */}
      <div className="overflow-x-auto scrollbar-hide">
        <div
          className="grid grid-rows-2 grid-flow-col gap-x-4 gap-y-6"
          style={{ gridAutoColumns: "120px" }}
        >
          {items.map((item, i) => (
            <div key={i} className="w-[120px]">
              {/* Card */}
              <div className="relative h-[120px] rounded-2xl overflow-hidden bg-[#F5F6F7]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {item.isNew && (
                  <span className="absolute top-2 left-2 bg-pink-600 text-white text-[10px] font-semibold px-2 py-[2px] rounded-md">
                    NEW
                  </span>
                )}
              </div>

              {/* Text – exact match */}
              <p className="mt-2 text-[12px] font-normal text-[#111827] leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
