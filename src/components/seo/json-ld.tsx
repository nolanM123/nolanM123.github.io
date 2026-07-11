import { siteConfig } from '../../config/site';
import { Profile } from '../../data/profile';

const personSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: siteConfig.name,
	url: siteConfig.url,
	image: new URL(siteConfig.ogImage, siteConfig.url).href,
	email: siteConfig.email,
	jobTitle: Profile.title,
	description: siteConfig.description,
	sameAs: [siteConfig.github, siteConfig.linkedin],
} as const;

export const JsonLd = () => (
	<script
		type="application/ld+json"
		dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
	/>
);
