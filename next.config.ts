import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// Dynamically determine base path
const getBasePath = () => {
  if (!isProd) return '';
  
  // For GitHub Pages, use repository name from environment or fallback
  if (isGitHubPages) {
    const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
    return repoName ? `/${repoName}` : '';
  }
  
  // For other deployments, no base path needed
  return '';
};

const basePath = getBasePath();

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
