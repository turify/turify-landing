import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/turify-landing' : '',
  assetPrefix: isProd ? '/turify-landing/' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
