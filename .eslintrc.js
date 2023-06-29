module.exports = {
	$schema: "https://json.schemastore.org/eslintrc",
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		"next/core-web-vitals",
		"prettier",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:tailwindcss/recommended"
	],
	overrides: [
		{
			"files": ["*.ts", "*.tsx"],
			"parser": "@typescript-eslint/parser"
		}
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: [
		"react",
		"@typescript-eslint",
		"tailwindcss"
	],
	rules: {
		indent: [
			"error",
			"tab"
		],
		quotes: [
			"error",
			"double"
		],
		semi: [
			"error",
			"always"
		],
		"no-console": "warn",
		"no-unused-vars": "warn",
		"tailwindcss/no-custom-classname": "off",
		"react/react-in-jsx-scope": "off"
	},
	settings: {
		tailwindcss: {
			callees: ["cn"],
			config: "tailwind.config.ts"
		},
		next: {
			rootDir: ["./"]
		}
	},
	ignorePatterns: [
		"node_modules/",
		".next/",
		"out/",
		"public/",
		"dist/",
		".cache/",
	]
};
