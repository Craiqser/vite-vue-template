import { URL, fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	build: {
		commonjsOptions: {
			include: []
		}
	},
	optimizeDeps: {
		disabled: false
	},
	plugins: [vue()],
	resolve: {
		alias: {
			'~': fileURLToPath(new URL('./src', import.meta.url)),
			'@': fileURLToPath(new URL('./src/components', import.meta.url))
		}
	},
	server: {
		port: 3000
	}
});
