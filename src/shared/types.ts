import type { IconName } from '../components/icons/shared/types';
import type { IllustrationName } from '../components/illustrations/shared/types';
import type {
	LocalComponentName,
	LocalComponentPropsMap,
} from '../components/local/shared/types';

export interface Image {
	source: string;
	alt: string;
}

export interface IconLink {
	icon: IconName;
	source: string;
}

export interface Profile {
	name: string;
	title: string;
	bio: {
		short: string;
		full: string;
	};
	hero: Image;
	links: IconLink[];
}

export interface CardItem {
	header?: string;
	date?: string;
	body?: string;
	achievements?: string[];
	icons?: IllustrationName[];
}

export interface Card {
	header: string;
	links?: IconLink[];
	hero?: Image;
	items: CardItem[];
}

export interface SkillCard {
	icon: IllustrationName;
	header: string;
	experience: number;
	body: string;
	date: string;
}

export interface Contact {
	email: string;
	subject: string;
	emailPlaceholder: string;
	bodyPlaceholder: string;
	sendButton: string;
	links: IconLink[];
}

export type Section = {
	[K in LocalComponentName]: {
		type: K;
		name: string;
		props: LocalComponentPropsMap[K];
	};
}[LocalComponentName];
