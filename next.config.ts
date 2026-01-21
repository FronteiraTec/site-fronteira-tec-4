import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProduction && isGitHubPages ? '/site-fronteira-tec-4' : '',
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif']
  },
  compiler: {
    removeConsole: isProduction,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react', '@radix-ui/react-dialog']
  },
  turbopack: {}
};

export default nextConfig;
