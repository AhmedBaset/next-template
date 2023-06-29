import { Config } from "tailwindcss"

import shadcnPlugin from "@/lib/shadcnPlugin"

const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{ts,tsx}"],
	plugins: [
		require("tailwindcss-animate"),
		shadcnPlugin,
	],
} satisfies Config

export default config
