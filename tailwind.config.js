/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				playLeft: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(calc(-250px*6))' },
				},
				playRight: {
					'0%': { transform: 'translateX(calc(-250px*6))' },
					'100%': { transform: 'translateX(0)' },
				},
			},
			animation: {
				playLeft: 'playLeft 40s linear infinite',
				playRight: 'playRight 40s linear infinite',
			},
		},
	},
	plugins: [],
}
