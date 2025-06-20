import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  root: "client",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-toast'],
          icons: ['lucide-react']
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./client/src"),
      "@shared": resolve(__dirname, "./shared"),
    },
  },
});