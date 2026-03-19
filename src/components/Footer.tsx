import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import logo from "../../public/image /Logo.png";

function Footer() {

    return (
        <>
            <footer className="bg-[#ebebeb] text-gray-300">
                <div className="utility-spacing">
                    {/* Logo */}
                    {/* <div className="col-span-1 lg:col-span-1"> */}
                    <div className="flex items-center gap-2 mb-4">
                        {/* <Image className="h-24" src={logo} height={50} width={130} alt='la athulyam logo' /> */}
                        <Image src="/image/Logo.png" width={130} height={50} alt="" />


                        {/* <div className="text-2xl font-bold text-black">PC</div>
                        <div className="text-xs text-black font-semibold">PC care</div> */}
                    </div>
                    {/* </div> */}
                    {/* Top Section: Logo and Content Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">


                        {/* Column 1: Company */}
                        <div className="col-span-1">
                            <h4 className="text-black font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm text-[#595858]">
                                <li><a href="#" className="hover:underline">About us</a></li>
                                <li><a href="#" className="hover:underline">Investor Relations</a></li>
                                <li><a href="#" className="hover:underline"></a></li>
                                <li><Link href="/terms-conditions" className="hover:underline">Terms & conditions</Link></li>
                                <li><Link href="/privacy-policy" className="hover:underline">Privacy policy</Link></li>
                                <li><a href="#" className="hover:underline">Anti-discrimination policy</a></li>
                                <li><a href="#" className="hover:underline">ESG Impact</a></li>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                            </ul>
                        </div>

                        {/* Column 2: For customers */}
                        <div className="col-span-1">
                            <h4 className="text-black font-semibold mb-4">For customers</h4>
                            <ul className="space-y-2 text-sm text-[#595858]">
                                <li><a href="#" className="hover:underline">IT Fixer reviews</a></li>
                                <li><a href="#" className="hover:underline">Categories near you</a></li>
                                <li><a href="#" className="hover:underline">Contact us</a></li>
                            </ul>
                        </div>

                        {/* Column 3: For professionals */}
                        <div className="col-span-1">
                            <h4 className="text-black font-semibold mb-4">For professionals</h4>
                            <ul className="space-y-2 text-sm text-[#595858]">
                                <li><a href="#" className="hover:underline">Register as a professional</a></li>
                            </ul>
                        </div>

                        {/* Column 4: Social links */}
                        <div className="col-span-1">
                            <h4 className="text-black font-semibold mb-4">Social links</h4>
                            <div className="flex space-x-4 mb-4 text-[#595858]">
                                <div className="bg-white rounded-full p-3">
                                    <a href="#"><FaTwitter className="text-xl  hover:text-white" /></a>
                                </div>
                                <div className="bg-white rounded-full p-3">
                                    <a href="#"><FaFacebookF className="text-xl hover:text-white" /></a>
                                </div>
                                <div className="bg-white rounded-full p-3">
                                    <a href="#"><FaInstagram className="text-xl hover:text-white" /></a>
                                </div>
                                <div className="bg-white rounded-full p-3">
                                    <a href="#"><FaLinkedinIn className="text-xl hover:text-white" /></a>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <a href="#">
                                    {/* Replace with your own image paths */}
                                    <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1648463870745-38fece.png"
                                        alt="Download on the App Store" width={135} height={40} className="mb-5" />
                                </a>
                                <a href="#">
                                    {/* Replace with your own image paths */}
                                    <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696419732772-28cd3d.jpeg"
                                        alt="Get it on Google Play" width={135} height={40} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Separator and Legal Text */}
                    <hr className="border-gray-350 my-8" />

                    <div className="text-gray-500 text-xs space-y-2">
                        {/* <p className="italic">* As on December 31, 2024</p> */}
                        <p>
                            © Copyright 2025 IT Fixer. (formerly known as IT Fixer Technologies India Limited and IT Fixer Technologies India India Limited) All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;