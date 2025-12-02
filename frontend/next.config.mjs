import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix for monorepo deployments
  output: 'standalone',

  // Specify the tracing root for monorepo
  outputFileTracingRoot: path.join(__dirname, '../'),

  // Image optimization
  images: {
    unoptimized: false,
    remotePatterns: [],
  },

  // Ensure static exports work properly
  experimental: {
    outputFileTracingIncludes: {
      '/': ['./public/**/*'],
    },
  },
};

export default nextConfig;
