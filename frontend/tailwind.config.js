module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        dark: 'var(--background)',
        light: 'var(--background)',
      },
      textColor: {
        dark: 'var(--text)',
        light: 'var(--text)',
      },
    },
  },
  plugins: [],
};