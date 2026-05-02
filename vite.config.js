import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'    // <-- ADD THIS
 
export default defineConfig({
  plugins: [react(), tailwindcss()],        	// <-- ADD 
})

export default {

base: "/my-first-react-app/"
}