/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'franklin': ['"Franklin Gothic Condensed"', 'sans-serif'],
      },
      colors: {
        customGreen: '#a6e39d', // Agrega tu color personalizado
      },
    },
  },
  plugins: [],
}

