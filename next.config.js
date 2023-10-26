// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    // ppr: true,
  },
};

module.exports = nextConfig;

/**
 * To make your app PWA:
 * 1. Run `pnpm add @ducanhgh/next-pwa`
 * 2. Uncomment the code below
 * 3. create public/manifest.json
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withPWA = require("@imbios/next-pwa")({
// 	dest: "public",
// });
// module.exports = withPWA(nextConfig);
