import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "node:path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@services": path.resolve(__dirname, "./src/services"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@pages": path.resolve(__dirname, "./src/components/pages"),
      "@layout": path.resolve(__dirname, "./src/components/layout"),
      "@components": path.resolve(__dirname, "./src/components")
    }
  }
})
