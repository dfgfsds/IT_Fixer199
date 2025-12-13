import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function NavMobileFooter() {
  return (
    <footer className="bg-[#ebebeb] text-gray-300">
      <div className="app-section max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-6">
          <Image src="/image/Logo.png" width={130} height={50} alt="IT Fixer Logo" />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {/* Company */}
          <div>
            <h4 className="text-black font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-[#595858]">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Terms & conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy policy</a></li>
              <li><a href="#" className="hover:underline">Anti-discrimination policy</a></li>
              <li><a href="#" className="hover:underline">ESG Impact</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          {/* Customers */}
          <div>
            <h4 className="text-black font-semibold mb-4">For customers</h4>
            <ul className="space-y-2 text-sm text-[#595858]">
              <li><a href="#" className="hover:underline">IT Fixer reviews</a></li>
              <li><a href="#" className="hover:underline">Categories near you</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
            </ul>
          </div>

          {/* Professionals */}
          <div>
            <h4 className="text-black font-semibold mb-4">For professionals</h4>
            <ul className="space-y-2 text-sm text-[#595858]">
              <li>
                <a href="#" className="hover:underline">
                  Register as a professional
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-black font-semibold mb-4">Social links</h4>

            <div className="flex space-x-4 mb-5 text-[#595858]">
              {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-full p-3 cursor-pointer hover:shadow"
                  >
                    <Icon className="text-lg" />
                  </div>
                )
              )}
            </div>

            <div className="space-y-4">
              <Image
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1648463870745-38fece.png"
                alt="App Store"
                width={135}
                height={40}
              />
              <Image
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696419732772-28cd3d.jpeg"
                alt="Play Store"
                width={135}
                height={40}
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          © Copyright 2025 IT Fixer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
