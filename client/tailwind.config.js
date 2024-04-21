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
        'saira': ["Saira", 'sans-serif']
      }
    },
  },
  plugins: [
    scrollbarHide,
  ],
}

