import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone', // <- ESSENCIAL para o Render empacotar corretamente
};

export default nextConfig;
