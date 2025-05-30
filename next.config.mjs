/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kartikay-portfolio',
  assetPrefix: '/kartikay-portfolio/',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig; 