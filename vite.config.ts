import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { fileURLToPath, URL } from "node:url"

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  publicDir: false,
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  resolve: { alias: { "@": fileURLToPath(new URL(".", import.meta.url)) } },
  build: {
    outDir: "assets/react",
    emptyOutDir: false,
    minify: "esbuild",
    cssCodeSplit: false,
    rollupOptions: {
      input: { intro: "ui/intro.tsx", sections: "ui/bootstrap.ts", admin: "ui/admin.ts" },
      output: { entryFileNames: "[name].js", chunkFileNames: "[name]-[hash].js", assetFileNames: "sections.[ext]" }
    }
  }
})
