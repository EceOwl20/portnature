/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        customGray: '#233038',
        customGray80:'#233038cc'
      },
      inset: {
        'fullreverse': '-100%', // left: -100% için özel sınıf
      },
      minHeight: {
        'content': 'fit-content',
      },
      fontFamily: {
        monserrat: ['Montserrat', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(161, 161, 161, 0.00) 0%, rgba(217, 217, 217, 0.00) 6.25%, rgba(217, 217, 217, 0.00) 12.5%, rgba(217, 217, 217, 0.01) 18.75%, rgba(217, 217, 217, 0.03) 25%, rgba(216, 216, 216, 0.08) 31.25%, rgba(215, 215, 215, 0.16) 37.5%, rgba(214, 214, 214, 0.29) 43.75%, rgba(212, 212, 212, 0.50) 50%, rgba(210, 210, 210, 0.71) 56.25%, rgba(209, 209, 209, 0.84) 62.5%, rgba(208, 208, 208, 0.92) 68.75%, rgba(207, 207, 207, 0.97) 75%, rgba(207, 207, 207, 0.99) 81.25%, rgba(207, 207, 207, 1.00) 87.5%, rgba(207, 207, 207, 1.00) 93.75%, #CFCFCF 100%)',
        'custom-gradient-reverse': 'linear-gradient(-90deg, rgba(161, 161, 161, 0.00) 0%, rgba(217, 217, 217, 0.00) 6.25%, rgba(217, 217, 217, 0.00) 12.5%, rgba(217, 217, 217, 0.01) 18.75%, rgba(217, 217, 217, 0.03) 25%, rgba(216, 216, 216, 0.08) 31.25%, rgba(215, 215, 215, 0.16) 37.5%, rgba(214, 214, 214, 0.29) 43.75%, rgba(212, 212, 212, 0.50) 50%, rgba(210, 210, 210, 0.71) 56.25%, rgba(209, 209, 209, 0.84) 62.5%, rgba(208, 208, 208, 0.92) 68.75%, rgba(207, 207, 207, 0.97) 75%, rgba(207, 207, 207, 0.99) 81.25%, rgba(207, 207, 207, 1.00) 87.5%, rgba(207, 207, 207, 1.00) 93.75%, #CFCFCF 100%)',
      },
    },
  },
  plugins: [],
}

