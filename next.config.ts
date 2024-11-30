import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static exports for your Next.js app
  // Add other configuration options here if needed
  images: {
    unoptimized: true, // Disables image optimization
  },
};

export default nextConfig;
