/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				backgroundImage: "url('/menu__background.svg')",
			},
			colors: {
				_gray: "rgb(30,40,43)",
				_yellow: "rgb(226, 136, 21)",
			},
		},
	},
	plugins: [],
};
