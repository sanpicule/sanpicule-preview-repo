/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#EDEAE2',
        parchment: '#E4E0D6',
        dark: '#1A1917',
        light: '#F9F7F3',
        muted: '#7A7570',
        warm: '#CAC5BB',
        accent: '#6B7280',
        primary: '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      height: {
        'screen-dynamic': '100dvh',
      },
      minHeight: {
        'screen-dynamic': '100dvh',
      },
    },
  },
  plugins: [],
}
