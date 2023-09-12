// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    typedRoutes: true,
  },
};

module.exports = nextConfig;

/**
 * To make your app PWA:
 * 1. Run `pnpm add @imbios/next-pwa`
 * 2. Uncomment the code below
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withPWA = require("@imbios/next-pwa")({
// 	dest: "public",
// });
// module.exports = withPWA(nextConfig);
