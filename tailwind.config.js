module.exports = {
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {   
    fontFamily: {
      'sans': ['Segoe UI', 'Arial'],
      'serif': ['Times New Roman'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Verdana'],
     }, 
    extend: {      
      colors: {
        blue: {
          light: '#85d7ff',
          DEFAULT: '#337ab7',
          dark: '#009eeb',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
