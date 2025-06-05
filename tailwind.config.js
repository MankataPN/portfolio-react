// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure your files are included here
  theme: {
    extend: {
      animation: {
        typing: 'typing 8s steps(30, end) infinite',
        blinkCaret: 'blinkCaret 0.75s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%, 49%, 100%': { width: '0', opacity: '0' },
          '10%, 45%': { width: '100%', opacity: '1' },
        },
        blinkCaret: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
      },
    },
  },
  plugins: [], // Ensure this array is present, even if empty
};


