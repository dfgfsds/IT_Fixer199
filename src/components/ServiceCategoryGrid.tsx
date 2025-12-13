// components/CategoryGrid.jsx
import Image from 'next/image';
import React from 'react';

type Item = {
  name: string;
  image: string;
};

interface Props {
  title: string;
  items: Item[];
}

const ServiceCategoryGrid: React.FC<Props> = ({ title, items }) => {
  return (
    <div className=" bg-white">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-3xl font-bold text-black">{title}</h2>
        <button className="text-sm font-medium text-[#6e42e5] border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 whitespace-nowrap">
          See all
        </button>

      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {items.map((it, i) => (
          // <div
          //   key={i}
          //   className="group cursor-pointer rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition relative"
          // >
          //   <div className="absolute top-2 left-3 z-10">
          //     <div className="text-md font-bold text-black">{it.name}</div>
          //   </div>

          //   <div className="w-full aspect-[5/7]">
          //     <Image
          //     height={400}
          //     width={300}
          //       src={it.image}
          //       alt={it.name}
          //       className="w-full h-full object-cover"
          //     />
          //   </div>
          // </div>
          <div
            key={i}
            className="group cursor-pointer rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition relative"
          >
            {/* Top white overlay for readability */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/90 to-transparent z-10" />

            {/* Title */}
            <div className="absolute top-2 left-3 z-20">
              <div className="text-md font-semibold text-black">
                {it.name}
              </div>
            </div>

            {/* Image */}
            <div className="w-full aspect-[5/7]">
              <Image
                height={400}
                width={300}
                src={it.image}
                alt={it.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default ServiceCategoryGrid;
