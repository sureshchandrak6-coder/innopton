import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/innopton",
  assetPrefix: "/innopton/",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: [
    "*.trycloudflare.com",
  ],
};

export default nextConfig;