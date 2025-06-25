import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    base: '/Blog-App/',  // <-- set this to your repo name

  plugins: [
    tailwindcss(),
  ],
})