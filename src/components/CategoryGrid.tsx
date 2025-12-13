// components/CategoryGrid.jsx
import Image from 'next/image';
import React from 'react';
interface CategoryItem {
    name: string;
    image: string; // if using static imports, can be StaticImageData
}

interface CategoryGridProps {
    title: string;
    items: CategoryItem[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ title, items }) => {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-4 text-black">{title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {items?.map((it: CategoryItem, i: number) => (
                    // Modified card for "name on top" style
                    // <div
                    //     key={i}
                    //     className="group cursor-pointer  rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition relative"
                    // >
                    //     {/* Title at top-left */}
                    //     <div className="absolute top-2 left-3 z-10">
                    //         <div className="text-md font-bold text-black ">{it.name}</div>
                    //     </div>

                    //     {/* Image fills the card */}
                    //     <div className="w-full aspect-[3/3]">
                    //         <Image
                    //             src={it.image}
                    //             alt={it.name}
                    //             className="w-full h-full object-cover"
                    //             width={600} 
                    //             height={208} 
                    //         />
                    //     </div>
                    // </div>

                    <div
  key={i}
  className="group cursor-pointer rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition relative"
>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/5 to-transparent z-10" />

  {/* Title */}
  <div className="absolute top-3 left-4 z-20">
    <h3 className="text-base font-bold text-black drop-shadow-sm">
      {it.name}
    </h3>
  </div>

  {/* Image */}
  <div className="w-full aspect-[3/3]">
    <Image
      src={it.image}
      alt={it.name}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      width={600}
      height={600}
    />
  </div>
</div>


                ))}
            </div>
        </div>
    );
};

export default CategoryGrid;
