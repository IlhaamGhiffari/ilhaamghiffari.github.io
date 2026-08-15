import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		prerender: {
			// hash links like /#work target sections on the home page, not this page
			handleMissingId: 'ignore',
			// sitemap isn't linked from any page — the crawler won't discover it
			entries: ['/', '/sitemap.xml']
		}
	}
};

export default config;
