"use client";

import Link from "next/link";
import { User } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0F19] px-6">

      {/* Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#6E42E5]/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#22D3EE]/20 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center text-white">

        {/* Icon */}
        <div className="mx-auto mb-8 w-20 h-20 bg-white/10 backdrop-blur rounded-3xl flex items-center justify-center border border-white/10">
          <User size={30} className="text-[#8B5CF6]" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          Fix your tech.
          <br />
          <span className="bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] bg-clip-text text-transparent">
            Without the stress.
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto mb-12">
          ItFixer@199 helps you manage PC & laptop services, track repairs,
          and connect with verified experts — fast, reliable & affordable.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="profile/login">
            <button className="px-10 py-4 rounded-2xl text-base font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#6E42E5] hover:opacity-90 transition shadow-xl">
              Get Started
            </button>
          </Link>

          <button className="px-10 py-4 rounded-2xl text-base font-semibold border border-white/20 hover:bg-white/10 transition">
            Learn More
          </button>
        </div>

        {/* Trust Line */}
        <p className="mt-10 text-sm text-gray-400">
          Trusted by 1000+ customers • Same-day service • Transparent pricing
        </p>
      </div>
    </div>



  );
}
