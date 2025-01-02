import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      // Proxy for local backend
      '/api': {
        target: 'http://localhost:5000', // Change to local backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Adjust the path if needed
      },
      // Proxy for external IGDB API
      '/igdb-api': {
        target: 'https://api.igdb.com/v4',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/igdb-api/, ''), // Adjust the path for IGDB API
      },
    },
  },
});
