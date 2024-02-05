import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path"

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      'home': path.resolve(__dirname, "src/modules/home"),
      'assets': path.resolve(__dirname, "src/assets"),
      'components': path.resolve(__dirname, "src/components"),
      'constants': path.resolve(__dirname, "src/constants"),
    }
  }
})
