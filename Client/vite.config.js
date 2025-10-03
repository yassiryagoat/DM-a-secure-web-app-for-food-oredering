import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      REACT_APP_PAYPAL_CLIENT: JSON.stringify('ATtMww_JrVzMRDgf8pBGXHZ0lObewJ3RftVQtZE5O1mEuCMmO6fgKfbnHNq53Kd8zqVyy2uv_-6dsuq8'),
    },
  },
})
