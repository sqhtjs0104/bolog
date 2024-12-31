import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/quotes",
        destination: "https://api.api-ninjas.com/v1/quotes",
      },
    ];
  },
};

export default nextConfig;
