import { Config } from "tailwindcss";

import { shadcnPlugin } from "./src/lib/shadcn-plugin";

// import { tailwindAnimate } from "tailwindcss-animate";

/**
 * We use require() here because tailwindcss-animate doesn't have a declaration file.
 * @see https://github.com/jamiebuilds/tailwindcss-animate/issues/44
 * TODO: Remove this when the issue is resolved.
 */
const tailwindAnimate = require("tailwindcss-animate");

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [tailwindAnimate, shadcnPlugin],
} satisfies Config;

export default config;
