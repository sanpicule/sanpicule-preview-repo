/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAFAFA',      // primary light bg
        parchment: '#F2F2F2',  // alt section bg
        dark: '#0A0A0A',       // ink (footer / primary text)
        light: '#FAFAFA',      // text on dark surfaces
        muted: '#737373',      // secondary text
        warm: '#E5E5E5',       // borders / dividers
        accent: '#0A0A0A',     // unified with ink — no color accent
        ntext: '#0A0A0A',      // primary text on light bg
        surface: '#FFFFFF',    // card surface
        primary: '#0A0A0A',
        faint: '#A3A3A3',      // tertiary text
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
