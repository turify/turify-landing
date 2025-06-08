import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed static export configuration
  // This creates a standard Next.js build for platforms like Vercel
  images: {
    unoptimized: false // Enable Next.js image optimization
  }
};

export default nextConfig;
