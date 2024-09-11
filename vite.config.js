import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/customer-api': {
        target: `http://localhost:9200`,
        secure: true,
      },
    },
  },

  plugins: [react()],
});
