/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./**/*.{html,js}"],
	darkMode: "class",
	theme: {
		extend: {},
		colors: {
			primary: {
				DEFAULT: colors.purple["500"],
				dark: colors.purple["600"],
			},
			secondary: {
				DEFAULT: colors.indigo["500"],
				dark: colors.indigo["600"],
			},
			dark: colors.slate["800"],
			facebook: colors.blue["500"],
			instagram: colors.violet["600"],
			whatsapp: colors.green["400"],
			linkedin: colors.sky["600"],
			github: colors.slate["800"],
			gmail: colors.red["500"],
			dotnet: colors.purple["500"],
			react: colors.sky["500"],
			muted: colors.gray["500"],
			white: colors.white,
			black: colors.black,
		},
	},
	plugins: [],
};
