import type { NextConfig } from "next";
import createMDX from "@next/mdx";

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

  experimental: {
    mdxRs: true,
    ppr: true,
    viewTransition: true,
  },

  pageExtensions: ['ts', 'tsx', 'mdx'],
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
