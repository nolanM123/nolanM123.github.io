import Portrait from '../assets/portrait.png';
import type { Profile as ProfileType } from '../shared/types';
import { Links } from './links';

export const Profile: ProfileType = {
	name: 'Nolan McAllister',
	title: 'Full-Stack @ Neo Financial',
	bio: {
		short:
			'Specializing in design and development of highly secure, scalable web applications.',
		full: 'Specializing in the architectural design and development of highly secure, scalable web applications tailored for modern software ecosystems. Proven track record of engineering robust solutions that seamlessly handle high traffic volumes while maintaining strict data integrity and compliance standards.',
	},
	hero: {
		source: Portrait,
		alt: 'Portrait of Nolan McAllister',
	},
	links: Links,
} as const;
