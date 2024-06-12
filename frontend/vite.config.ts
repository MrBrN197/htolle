import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from "path";
import { fileURLToPath } from 'url';

const dirname = fileURLToPath(path.dirname(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(dirname, "./src"),
    },
  },

});
