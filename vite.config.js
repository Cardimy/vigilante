<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

>>>>>>> 5e8b4869f22c1566e7023569dd13b0f9454309b3
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
<<<<<<< HEAD
      '@': path.resolve(__dirname, './src'),
    },
  },
})
=======
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
>>>>>>> 5e8b4869f22c1566e7023569dd13b0f9454309b3
