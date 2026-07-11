import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { buildSeoMetaTags } from './src/config/site';

// https://vite.dev/config/
export default defineConfig({
	base: '/',
	plugins: [
		react(),
		{
			name: 'inject-seo-meta',
			transformIndexHtml(html, ctx) {
				const baseUrl =
					ctx.server?.config.base ?? 'https://nolanm123.github.io/';
				const resolvedBaseUrl = baseUrl.startsWith('http')
					? baseUrl
					: `https://nolanm123.github.io${baseUrl}`;

				return html.replace(
					'<!-- SEO -->',
					buildSeoMetaTags(resolvedBaseUrl),
				);
			},
		},
	],
});
