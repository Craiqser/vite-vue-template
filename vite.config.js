import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'~/': `${resolve('./', 'src')}/`,
			'@/': `${resolve('./', 'src')}/components/`
		}
	},
	server: {
		port: 3000
	}
});
