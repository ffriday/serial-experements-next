import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Enables `'use cache'`, cacheLife/cacheTag, and PPR-style Cache Components.
  cacheComponents: true,
};

export default withNextIntl(nextConfig);
