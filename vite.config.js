import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from "node:path"
// https://vitejs.dev/config/

export default defineConfig({
  base: "/Prolanx-Frontend/",
  plugins: [react()],
  resolve: {
    alias: {
      'home': path.resolve(__dirname, "src/modules/home"),
      'assets': path.resolve(__dirname, "src/assets"),
    }
  }
})
