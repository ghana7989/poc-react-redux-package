import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'my-react-library': path.resolve(__dirname, '../my-react-library'),
		},
	},
	server: {
		fs: {
			allow: ['..'], // Allow serving files from one level up to resolve the symlink,
			cachedChecks: false,
		},
	},
})
