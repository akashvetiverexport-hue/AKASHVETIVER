import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { fileURLToPath, URL } from "node:url"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: false,
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  resolve: { alias: { "@": fileURLToPath(new URL(".", import.meta.url)) } },
  build: {
    outDir: "assets/react",
    emptyOutDir: false,
    lib: {
      entry: "ui/main.tsx",
      formats: ["es"],
      fileName: () => "sections.js",
      cssFileName: "sections"
    }
  }
})
