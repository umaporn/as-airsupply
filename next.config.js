/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [''],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=15552000, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
