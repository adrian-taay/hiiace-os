/** @type {import('tailwindcss').Config} */

import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ["Ubuntu Mono", 'monospace'],
        'saira': ["Saira", 'sans-serif'],
        'bowlby': ["Bowlby One SC", "sans-serif"],
        'mansalva': ["Mansalva", 'sans-serif'],
        'bungee': ["Bungee Shade", 'sans-serif']
      }
    },
  },
  plugins: [
    scrollbarHide,
  ],
}

