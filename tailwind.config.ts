import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				highlight: {
					header: "rgb(74,146,234)",
					content: "rgb(255, 48, 60)",
				},
				text: {
					basic: "rgb(227,218,201)",
					dimmed: "rgb(60,60,60)",
				},
			},
		},
	},
	plugins: [],
};
export default config;
