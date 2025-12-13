"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeft, FiX } from "react-icons/fi";
import Logo from '../../../../../public/image/Logo.png'
import Image from "next/image";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const canContinue = phone.length === 10;

  return (
    <div className="min-h-screen bg-white">
      {/* TOP BAR */}
      <div className="flex items-center px-4 py-4 border-b">
        <button onClick={() => router.back()}>
          <FiArrowLeft size={22} />
        </button>
      </div>

      <div className="px-6 pt-6">
        {/* UC BRAND */}
        <div className="flex items-center gap-2 mb-6">
          <Image
                   src={Logo}
                   alt='logo'
                   width={56}
                   height={56}
                   className="object-contain"
                 />
        </div>

        {/* TITLE */}
        <h2 className="text-[22px] font-bold text-black mb-2">
          Enter your phone number
        </h2>

        <p className="text-[14px] text-gray-600 mb-6 leading-relaxed">
          We’ll send you a text with a verification code.
          Standard tariff may apply.
        </p>

        {/* PHONE INPUT */}
        <div className="flex items-center border rounded-lg border-gray-200 overflow-hidden mb-4">
          {/* COUNTRY */}
          <div className="flex items-center gap-1 px-4 py-3 border-r border-gray-200">
            <span className="text-[14px]">+91</span>
            <span className="text-gray-400">▼</span>
          </div>

          {/* NUMBER */}
          <input
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
            }
            placeholder="Enter your phone number"
            className="flex-1 px-4 py-3 text-[15px] outline-none"
          />

          {/* CLEAR */}
          {phone && (
            <button
              onClick={() => setPhone("")}
              className="px-3 text-gray-400"
            >
              <FiX />
            </button>
          )}
        </div>

        {/* CONTINUE */}
        <button
          disabled={!canContinue}
        onClick={() => router.push(`otp?phone=${phone}`)}
          className={`w-full py-3 rounded-xl text-[15px] font-medium
            ${
              canContinue
                ? "bg-[#6E42E5] text-white"
                : "bg-gray-200 text-gray-400"
            }
          `}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
