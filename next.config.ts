import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ✅ Image optimization: allows images from your Vercel domain + other safe sources
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pout-polish.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'cdn.poutandpolish.com', // optional future CDN
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // if you use Unsplash images
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // for Cloudinary hosted images
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // ✅ Add caching + SEO headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // ✅ Build output optimized for Vercel
  output: 'standalone',

  // ✅ Optional CSS optimization
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
