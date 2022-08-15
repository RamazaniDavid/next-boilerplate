module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3840px',
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        },
        waves: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
      },

      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        waves: 'waves 1s ease-in-out infinite',
      },

      width: {
        128: '32rem',
        144: '36rem',
      },
      height: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '3xl': '2rem',
        '4xl': '3rem',
        '5xl': '5rem',
        '6xl': '10rem',
      },
    },
  },
};
