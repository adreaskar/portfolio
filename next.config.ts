import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {
      allowedOrigins: ["dashboard.ai4gov-project.eu", "localhost:3000"],
    },
  },
  reactStrictMode: false,
};

export default nextConfig;
