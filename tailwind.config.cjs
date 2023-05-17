/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes:{ 
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 }
			  	}
			},
			animation:{
				fadeIn: 'fadeIn 1s'
			}
			
		},
	},
	plugins: [],
}
