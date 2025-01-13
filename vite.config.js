import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [
		react({
			fastRefresh: true, // Ensure Fast Refresh is enabled
		}),
	],
	server: {
		port: 3000,
	},
	build: {
		outDir: 'build',
		emptyOutDir: true,
	},
});