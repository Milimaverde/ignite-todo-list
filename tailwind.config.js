/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'product-bluedark': '#1E6F9F',
      'product-blue': '#4EA8DE',
      'product-purpledark': '#5E60CE',
      'product-purple': '#8284FA',

      'base-gray-700': '#0D0D0D',
      'base-gray-600': '#1A1A1A',
      'base-gray-500': '#262626',
      'base-gray-400': '#333333',
      'base-gray-300': '#808080',
      'base-gray-200': '#D9D9D9',
      'base-gray-100': '#F2F2F2',

      'danger-red': '#E25858',
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
