/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    unoptimized: false,
    remotePatterns: [],
  },

  // Ensure static exports work properly
  experimental: {
    // outputFileTracingIncludes: {
    //   '/': ['./public/**/*'],
    // },
  },
};

export default nextConfig;
