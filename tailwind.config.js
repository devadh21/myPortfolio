/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {    
    extend: {
      colors: {
        'primary': '#8af034',
        // 'primary': '#00adf4',
        // 'primary': '#ff8d11',
        // 'secondary': '#0092ff', 
        'secondary': '#ffac10', 
        //orange/ 'primary': '#FF896B',
        'primary-light': '#FF896B',

        'bg-color': '#636363',
        'bg-color2': '#4d4f53',
        // 'bg-color': '#333333',
        // 'bg-color-light': '#e5e7eb',
        
        'bg-color-light': '#e5e7eb',
        'bg-color2-light': '#f2f2f2',

        'color-text': '#c9cece',
        'color-text-light': '#000', 

      },
      // screens: {
      //   'sm': '576', // => @media (min-width: 576px) { ... }
      //   'md': '768', // => @media (min-width: 768px) { ... }
      //   'lg': '992', // => @media (min-width: 992px) { ... }
      //   'xl': '1200', // => @media (min-width: 1200px) { ... }
      //   '2xl': '1400', // => @media (min-width: 1400px) { ... }
      // },
    },
 

      
  },
  
  plugins: [
    require("flowbite/plugin"), 
  ],
}
