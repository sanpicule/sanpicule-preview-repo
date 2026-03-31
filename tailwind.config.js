/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#090B0F',       // main dark bg
        parchment: '#0D1117',   // section/surface bg
        dark: '#1A1917',        // keep for subtle elements
        light: '#F9F7F3',       // keep for contrast on accent
        muted: '#7A8899',       // secondary text (cool tone)
        warm: '#1C2433',        // borders
        accent: '#00D4C8',      // cyan teal
        ntext: '#E6EDF3',       // primary text on dark bg
        surface: '#111827',     // elevated card surface
        primary: '#00D4C8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      height: { 'screen-dynamic': '100dvh' },
      minHeight: { 'screen-dynamic': '100dvh' },
    },
  },
  plugins: [],
}
