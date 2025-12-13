"use client";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="px-4 pt-6">
      <h1 className="text-[22px] font-bold text-black mb-4">
        Profile
      </h1>

      <Link href="profile/login">
        <button className="bg-[#6E42E5] text-white px-6 py-3 rounded-xl text-[15px] font-medium">
          Log in or sign up
        </button>
      </Link>

    </div>
  );
}
