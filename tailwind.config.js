/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		colors: {
			...colors,
		},
		extend: {
			fontFamily: {
				display: ["Lexend Deca", "sans-serif"],
			},
		},
	},
	plugins: [],
};
