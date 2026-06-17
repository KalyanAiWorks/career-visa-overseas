/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#e6eaf2',
          100: '#c0cce0',
          200: '#8fa5c4',
          300: '#5e7ea8',
          400: '#3a608e',
          500: '#0a1628',
          600: '#091220',
          700: '#070e19',
          800: '#050b13',
          900: '#03070c',
          DEFAULT: '#0a1628',
        },
        navy: '#0a1628',
        accent: {
          DEFAULT: '#f5a623',
          dark:    '#d4891a',
          light:   '#f7b84e',
        },
        surface: '#f4f6f9',
        muted:   '#64748b',
        border:  '#e2e8f0',
      },
      fontFamily: {
        heading: ['Roboto', 'sans-serif'],
        body:    ['Lato', 'sans-serif'],
      },
      fontSize: {
        'body-base': ['16px', { lineHeight: '1.6' }],
      },
      boxShadow: {
        card:    '0 2px 8px rgba(0,0,0,.06)',
        float:   '0 8px 24px rgba(0,0,0,.12)',
        glow:    '0 0 20px rgba(245,166,35,.35)',
        overlay: '0 16px 48px rgba(0,0,0,.18)',
        glass:   '0 4px 24px rgba(0,0,0,.12), inset 0 1px 0 rgba(255,255,255,.1)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.4s ease-out forwards',
        'ticker':     'ticker 35s linear infinite',
        'gradient':   'gradientShift 8s ease infinite',
        'count-pulse':'countPulse 0.3s ease-out',
        'spin-slow':  'spin 3s linear infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        'slide-fade': 'slideFade 0.5s ease-out forwards',
        'bounce-sm':  'bounceSm 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        countPulse: {
          '0%':   { transform: 'scale(1.3)', color: '#f5a623' },
          '100%': { transform: 'scale(1)',   color: 'inherit' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(1)',   opacity: '0.8' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        slideFade: {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSm: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
