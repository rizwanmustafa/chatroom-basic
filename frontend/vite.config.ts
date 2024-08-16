import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // To allow for easier testing on mobile devices
    host: true,
    port: 3000,
  },
  plugins: [react()],
})
