/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isProd ? '/Portfolio' : '');

const nextConfig = {
  output: 'export',
  // GitHub Pages deployment with subdirectory support
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,

  images: {
    unoptimized: true, // Image optimization is not available on GitHub Pages
  },

  // Compiler optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.log in production
  },

  // Performance optimization
  swcMinify: true, // Use SWC minification

  // Compression settings
  compress: true,

  // Disable source maps in production (security and size reduction)
  productionBrowserSourceMaps: false,

  // React strict mode
  reactStrictMode: true,

  // Logging settings
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

export default nextConfig;

