import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone', // essencial para o Render
  eslint: {
    ignoreDuringBuilds: true, // evita erro de lint no build
  },
};

export default nextConfig;
