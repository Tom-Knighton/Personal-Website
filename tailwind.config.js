module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkgray: '#121212',
        darkgraylight: '#1a1a1a',
        contextdark: '#22262c',
        contextdarktext: '#cad1d8',
        grpurple: '#8E2DE2',
        grpurple2: '#4A00E0',
        grpink: '#8A2387',
        grredorange: '#E94057',
        grorange: '#EB5757',
        grblue: '#4568DC',
        grpink2: '#B06AB3',
        grblue2: '#0B486B',
        grorange2: '#F56217',
        grblue3: '#0F2027',
        grblue4: '#203A43',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
