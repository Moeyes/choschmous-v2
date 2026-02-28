import type { NextConfig } from "next";
import path from "node:path";

const backendApiBaseUrl = process.env.BACKEND_API_BASE_URL?.replace(/\/$/, "");

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  async rewrites() {
    if (!backendApiBaseUrl) return [];

    // `beforeFiles` ensures proxying happens before local `app/api/*` handlers.
    return {
      beforeFiles: [
        {
          source: "/api/:path*",
          destination: `${backendApiBaseUrl}/:path*`,
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
