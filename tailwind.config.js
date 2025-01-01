/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#9d2aeb',
				secondary: '#6B12A6',
				background: '#180326',
				card: '#380759',
			},
		},
	},
	plugins: [],
};
