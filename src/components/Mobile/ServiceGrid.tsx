import React from "react";
import Image from "next/image";

interface ServiceItemProps {
  name: string;
  imageSrc: string;
  sale?: boolean;
}

/* ---------- Small Square Card (Top 6) ---------- */
const ServiceItem = ({ name, imageSrc, sale }: ServiceItemProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Card */}
      <div className="relative w-full h-[88px] bg-[#F5F6F7] rounded-2xl flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={name}
          width={56}
          height={56}
          className="object-contain"
        />

        {sale && (
          <span className="absolute top-2 right-2 bg-green-600 text-white text-[10px] font-semibold px-2 py-[2px] rounded-md">
            Sale
          </span>
        )}
      </div>

      {/* Text – EXACT match */}
      <p className="mt-2 text-[12px] font-medium text-[#111827] leading-snug">
        {name}
      </p>
    </div>
  );
};

/* ---------- Wide Card (Last 2) ---------- */
const ServiceItemWide = ({ name, imageSrc }: ServiceItemProps) => {
  return (
    <div className="flex items-center justify-between h-[88px] bg-[#F5F6F7] rounded-2xl px-4">
      <p className="text-[12px] font-medium text-[#111827] leading-snug max-w-[70%]">
        {name}
      </p>

      <Image
        src={imageSrc}
        alt={name}
        width={56}
        height={56}
        className="object-contain"
      />
    </div>
  );
};

/* ---------- Main Grid ---------- */
export default function ServiceGrid() {
const services = [
  {
    name: "PC Repair",
    imageSrc: "/image/PCRepair.png",
  },
  {
    name: "Laptop Repair",
    imageSrc: "/image/LaptopRepair.png",
  },
  {
    name: "PC Cleaning",
    imageSrc: "/image/PCCleaning.png",
  },
  {
    name: "Laptop Upgrade",
    imageSrc: "/image/LaptopUpgrade.png",
  },
  {
    name: "Virus Removal",
    imageSrc: "/image/VirusRemoval.png",
    sale: true,
  },
  {
    name: "OS Installation",
    imageSrc: "/image/OSInstallation.png",
  },
  {
    name: "Data Recovery",
    imageSrc: "/image/DataRecovery.png",
  },
  {
    name: "Custom PC Build",
    imageSrc: "/image/CustomPCBuild.png",
  },
];

  return (
    <div className="app-section">
      {/* Section title – EXACT match */}
      <h2 className="text-[16px] font-semibold text-[#111827] mb-4">
        Explore all services
      </h2>

      {/* Top 6 */}
      <div className="grid grid-cols-3 gap-x-3 gap-y-4">
        {services.slice(0, 6).map((item, i) => (
          <ServiceItem key={i} {...item} />
        ))}
      </div>

      {/* Last 2 */}
      <div className="grid grid-cols-2 gap-3 mt-5">
        {services.slice(6, 8).map((item, i) => (
          <ServiceItemWide key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
