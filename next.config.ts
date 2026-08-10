import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Enables `'use cache'`, cacheLife/cacheTag, and PPR-style Cache Components.
  cacheComponents: true,
};

export default nextConfig;
