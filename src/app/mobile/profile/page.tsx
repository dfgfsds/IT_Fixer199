"use client";

import Link from "next/link";
import { User } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] px-4 pt-8">
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm p-6">



        {/* Title */}
        <h1 className="text-[22px] flex gap-5 items-center font-bold text-[#111827] mb-2">
          {/* Icon */}
          <div className="w-12 h-12 bg-[#6E42E5]/10 rounded-xl flex items-center justify-center mb-4">
            <User className="text-[#6E42E5]" size={22} />
          </div>
          Welcome to ItFixer@199
        </h1>

        {/* Description */}
        <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
          Log in to manage your PC & laptop services, track bookings,
          and get expert support from verified professionals.
        </p>

        {/* Button */}
        <Link href="/profile/login">
          <button className="w-full bg-[#6E42E5] text-white py-3 rounded-xl text-[15px] font-medium hover:bg-[#5c36d4] transition">
            Log in or sign up
          </button>
        </Link>
      </div>
    </div>
  );
}
