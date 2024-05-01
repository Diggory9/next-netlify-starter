/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost:7249',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true
};

module.exports = nextConfig;