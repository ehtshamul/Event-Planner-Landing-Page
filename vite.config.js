// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Event-Planner-Landing-Page/', // <-- your repo name here
  plugins: [react()],
})
