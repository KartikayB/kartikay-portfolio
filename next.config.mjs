/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/kartikay-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kartikay-portfolio/' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig; 