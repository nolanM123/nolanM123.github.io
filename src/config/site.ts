export const siteConfig = {
	name: 'Nolan McAllister',
	title: 'Nolan McAllister | Software Engineer',
	description:
		'Software engineer and full-stack developer specializing in secure, scalable web applications. BSc in Computer Science from UBC. Experience at Neo Financial.',
	url: 'https://nolanm123.github.io/',
	locale: 'en_US',
	themeColor: '#f5f5f5',
	email: 'nolan.m.mcallister@gmail.com',
	github: 'https://github.com/nolanm123',
	linkedin: 'https://linkedin.com/in/nolan-mcallister',
	ogImage: '/og-image.png',
	keywords: [
		'Nolan McAllister',
		'software engineer',
		'full-stack developer',
		'web developer',
		'React',
		'TypeScript',
		'Neo Financial',
		'UBC Computer Science',
		'portfolio',
	],
} as const;

export function buildSeoMetaTags(baseUrl: string): string {
	const { title, description, url, locale, ogImage, keywords, name } =
		siteConfig;
	const imageUrl = new URL(ogImage, baseUrl).href;

	return `
		<title>${title}</title>
		<meta name="description" content="${description}" />
		<meta name="keywords" content="${keywords.join(', ')}" />
		<meta name="author" content="${name}" />
		<meta name="robots" content="index, follow" />
		<link rel="canonical" href="${url}" />
		<meta name="theme-color" content="${siteConfig.themeColor}" media="(prefers-color-scheme: light)" />
		<meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
		<meta property="og:type" content="website" />
		<meta property="og:site_name" content="${name}" />
		<meta property="og:title" content="${title}" />
		<meta property="og:description" content="${description}" />
		<meta property="og:url" content="${url}" />
		<meta property="og:locale" content="${locale}" />
		<meta property="og:image" content="${imageUrl}" />
		<meta property="og:image:alt" content="Portrait of ${name}" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content="${title}" />
		<meta name="twitter:description" content="${description}" />
		<meta name="twitter:image" content="${imageUrl}" />
		<meta name="twitter:image:alt" content="Portrait of ${name}" />
	`.trim();
}
