import type { NextConfig } from 'next';
import path from 'node:path';

const backendApiBaseUrl = process.env.BACKEND_API_BASE_URL?.replace(/\/$/, '');

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    }
  },
  async rewrites() {
    if (!backendApiBaseUrl) return [];
    return {
      beforeFiles: [],
      afterFiles: [
        {
          source: '/api/:path*',
          destination: `${backendApiBaseUrl}/api/:path*`,
        },
      ],
      fallback: [],
    };
  },
};

export default nextConfig;
