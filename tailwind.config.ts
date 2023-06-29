import { Config } from "tailwindcss";

import { default as shadcnPlugin } from "./src/lib/shadcnPlugin";

const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{ts,tsx}"],
	plugins: [
		require("tailwindcss-animate"),
		shadcnPlugin,
	],
} satisfies Config;

export default config;
