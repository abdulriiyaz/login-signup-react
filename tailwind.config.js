module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
       'sans': ['Poppins', '-JetBrains Mono'],
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
