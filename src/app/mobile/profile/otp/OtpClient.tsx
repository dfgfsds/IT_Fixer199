"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";

export default function OtpClient() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone");
  const router = useRouter();

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const isComplete = otp.every((d) => d !== "");

  return (
    <div className="px-6 pt-5 pb-24">
      <button onClick={() => router.back()} className="mb-6">
        <FiArrowLeft size={22} />
      </button>

      <div className="mb-5">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <BsChatDots className="text-blue-600" size={20} />
        </div>
      </div>

      <h2 className="text-[22px] font-bold text-black mb-2">
        Enter verification code
      </h2>

      <p className="text-[14px] text-gray-600 mb-6">
        A 6-digit verification code has been sent to{" "}
        <span className="font-medium text-black">
          +91 {phone}
        </span>
      </p>

      <div className="flex gap-3 mb-6">
        {otp.map((digit, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            value={digit}
            onChange={(e) => handleChange(e.target.value, i)}
            maxLength={1}
            className={`w-12 h-12 rounded-xl border text-center text-[18px] outline-none
              ${digit ? "border-[#6E42E5]" : "border-gray-300"}
            `}
          />
        ))}
      </div>

      <p className="text-[14px] text-gray-500 mb-3">
        Resend the code on
      </p>

      <button
        disabled={!isComplete}
        className={`w-full py-3 rounded-xl text-[15px] font-medium
          ${
            isComplete
              ? "bg-[#6E42E5] text-white"
              : "bg-gray-200 text-gray-400"
          }
        `}
      >
        Login
      </button>
    </div>
  );
}
