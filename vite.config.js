import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    importToCDN({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'https://unpkg.com/vue@3.5.26/dist/vue.global.prod.js',
        },
        {
          name: 'gsap',
          var: 'gsap',
          path: 'https://unpkg.com/gsap@3.14.2/dist/gsap.min.js',
        },
      ],
    }),
  ],
})
