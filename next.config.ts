import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  // Descomente a linha abaixo e substitua 'seu-repositorio' pelo nome do seu repositório
  // basePath: '/seu-repositorio',
};

export default nextConfig;
