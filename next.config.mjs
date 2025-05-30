/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    loader: 'custom',
    loaderFile: './src/image-loader.ts'
  },
  basePath: process.env.NODE_ENV === 'production' ? '/kartikay-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kartikay-portfolio/' : '',
  // Add metadata configuration
  env: {
    siteUrl: process.env.NODE_ENV === 'production' 
      ? 'https://kartikayb.github.io/kartikay-portfolio'
      : 'http://localhost:3000'
  }
};

export default nextConfig; 