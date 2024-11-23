const colorScheme = require('./src/shared/style/colorScheme.ts');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: { ...colorScheme },
		},
	},
	plugins: [],
};
