import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: {
			define: {
				'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID),
				'import.meta.env.VERCEL_GIT_COMMIT_SHA': JSON.stringify(process.env.VERCEL_GIT_COMMIT_SHA),
				'import.meta.env.VITE_SVELTEKIT_APP_VERSION': JSON.stringify(
					process.env.VITE_SVELTEKIT_APP_VERSION
				),
				'import.meta.env.GOOGLE_CLIENT_ID': JSON.stringify(process.env.GOOGLE_CLIENT_ID)
			},
			esbuild: {}
		}
	},
	preprocess: preprocess({
		postcss: true
	})
};

export default config;
