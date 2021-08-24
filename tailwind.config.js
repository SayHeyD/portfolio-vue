module.exports = {
  purge: {
    content: [
      './components/**/*.vue',
      './pages/**/*.vue'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'move-in': 'move-up 0.3s linear',
      },
      keyframes: {
        'move-up': {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0%',
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: '100%',
          },
        }
      },
      translate: {
        'navigation': '27rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
