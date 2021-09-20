module.exports = {
   // These paths are just examples, customize them to match your project structure
   mode: 'jit',
   purge: [
     './public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
       'sans': ['Poppins', 'JetBrains Mono'],
       'serif': ['ui-serif', 'Georgia'],
       'mono': ['ui-monospace', 'SFMono-Regular'],
       'display': ['Oswald'],
       'body': ['"Open Sans"'],
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
