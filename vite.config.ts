import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.png'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}'],
        maximumFileSizeToCacheInBytes: 7 * 1024 * 1024,
      },
      manifest: {
        name: 'Sanshiro Hikawa Portfolio',
        short_name: 'Portfolio',
        description: 'The portfolio of Sanshiro Hikawa, a web developer.',
        theme_color: '#F9FAFB',
        background_color: '#F9FAFB',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icon.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'apple-touch-icon',
          },
          {
            src: '/icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
