import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base:process.env.VITE_BASE_PATH || "/Portfolio",
  
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes('three')) return 'three';
            if (id.includes('@mui')) return 'mui';
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('gsap')) return 'gsap';
            if (id.includes('@react-spring')) return 'spring';
            if (id.includes('react-vertical-timeline-component')) return 'timeline';
            return 'vendor';
          }
        },
      },
    },
  },
});
