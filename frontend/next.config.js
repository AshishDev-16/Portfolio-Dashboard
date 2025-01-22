/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'portfolio-dashboard-h7ho.onrender.com',
        port: '',
        pathname: '/uploads/**',
      }
    ],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig; 