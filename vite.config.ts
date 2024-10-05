import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tablerSvelteImportOptimizer from './vite-plugin-optimizer-tabler';
export default defineConfig({
	plugins: [tablerSvelteImportOptimizer(), sveltekit()]
});
