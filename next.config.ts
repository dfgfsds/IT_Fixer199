import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
        unoptimized: true,
    domains: ['images.pexels.com','res.cloudinary.com','images.pexels.com','cdn-icons-png.flaticon.com','i.pinimg.com',], // Add your allowed image domain here
  },
  /* config options here */
};

export default nextConfig;
