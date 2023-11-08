module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      fontFamily:{
              orbitron: ['Orbitron', 'sans-serif']
      }
    }
  }
};
