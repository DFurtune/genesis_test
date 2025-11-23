/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/booking-session' : '',
  assetPrefix: isProd ? '/booking-session' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;