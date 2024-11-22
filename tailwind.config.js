/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-blake': 'var(--color-blake-gray)',
        'gray-light': 'var(--color-light-gray)',
        'gray-dark': 'var(--color-dark-gray)',
        gray: 'var(--color-gray)',
        red: 'var(--color-red)',
        yellow: 'var(--color-yellow)',
        purple: 'var(--color-purple)',
        green: 'var(--color-green)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    backgroundImage: {
      'home-project-pattern': "url('/images/projects/project-image-1.png')",
      'home-project-pattern-2': "url('/images/projects/project-image-2.png')",
      'home-project-pattern-3': "url('/images/projects/project-image-3.png')",
      'home-project-pattern-4': "url('/images/projects/project-image-4.png')",
      'home-logo': "url('/images/identty-logo.svg')",
      'home-logo-hover': "url('/images/identty-logo-hover.svg')",
      'home-logo-white': "url('/images/identty-logo-white.svg')",
      'home-our-site': "url('/images/A4-Urban-Poster-Mockup1.png')",
      'arrow-right': "url('/images/arrow-right.svg')",
      'arrow-left': "url('/images/arrow-left.svg')",
      'arrow-right-white': "url('/images/arrow-right-white.svg')",
      'red-bar': "url('/images/red-bar.svg')",
    },
    keyframes: {
      fade: {
        '0%': { opacity: 0 },
        '60%': { opacity: 1 },
        '100%': { opacity: 0 },
      },
      fade1: {
        '0%': { opacity: 1 },
        '60%': { opacity: 1 },
        '100%': { opacity: 0 },
      },
      fade2: {
        '0%': { opacity: 0 },
        '60%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      fade6: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      fade7: {
        from: { opacity: 1 },
        to: { opacity: 0 },
      },
      increase: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(50%)' },
      },
      decrease: {
        '0%': { transform: 'translateX(50%)' },
        '100%': { transform: 'translateX(0)' },
      },
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(calc(250px * 7))' },
      },
      fader: {
        '0%': {
          opacity: 0
        },
        '11%': {
          opacity: 1
        },
        '16.6%': {
          opacity: 0
        },
        '100%': {
          opacity: 0
        }
      }
    },
    animation: {
      textFader: 'fader 10s ease-in-out',
      fade0: 'fade 2s both',
      fade1: 'fade1 2s',
      fade2: 'fade2 2s',
      fade7: 'fade7 0.1s',
      fade6: 'fade6 10s',
      increase: 'increase 3s',
      decrease: 'decrease 3s',
      scroll: 'scroll 40s linear infinite',
    },
  },
  plugins: [require('tailwindcss-convert-px-to-rem'), require('@tailwindcss/forms')],
};
