/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "theme": {
    "extend": {
      "colors": {
          'boston-blue': {
            '50': '#f0faff',
            '100': '#e0f4fe',
            '200': '#baebfd',
            '300': '#7edcfb',
            '400': '#39cbf7',
            '500': '#0fb5e8',
            '600': '#038dbf',
            '700': '#0475a0',
            '800': '#086284',
            '900': '#0d516d',
            '950': '#083449',
        },
        'bermuda': {
          '50': '#f2fbf8',
          '100': '#d4f3e9',
          '200': '#a9e6d4',
          '300': '#73d0b9',
          '400': '#4bb69f',
          '500': '#319b85',
          '600': '#257c6c',
          '700': '#216459',
          '800': '#1f5049',
          '900': '#1d443d',
          '950': '#0c2725',
      },
      cod:{
        red: 'var(--cod-rouge)'
      }
      
      },
    },
  },
  plugins: [],
}

