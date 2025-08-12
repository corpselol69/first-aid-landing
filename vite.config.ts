import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // for gh-pages project pages
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api/gratitudes": {
        target: "https://mgsindikat.ru",
        changeOrigin: true,
        secure: true,
        rewrite: (path) =>
          path.replace(/^\/api\/gratitudes$/, "/pp/gratitude.json"),
      },
    },
  },
  preview: { port: 5173 },
  build: { outDir: "dist" },
});
