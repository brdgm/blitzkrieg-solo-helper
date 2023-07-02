import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'
import { description } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/blitzkrieg/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'prompt',
      manifestFilename: 'manifest.json',
      includeAssets: [
        'adaptto-favicon.svg',
        'favicon.ico',
        'img/apple-touch-icon-180x180.png',
        'img/maskable-icon-512x512.png'
      ],
      manifest: {
        name: description,
        short_name: description,
        description: description,
        theme_color: '#333',
        icons: [
          {
            src: 'img/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'img/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'img/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    VueI18nPlugin({
      include: [path.resolve(__dirname, './src/locales/**')],
      strictMessage: false
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8080
  }
})
