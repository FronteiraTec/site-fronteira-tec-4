import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProduction && isGitHubPages ? '/site-fronteira-tec-4' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
