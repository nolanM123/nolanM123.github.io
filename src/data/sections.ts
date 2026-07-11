import type { Section } from '../shared/types';
import { Contact } from './contact';
import { Education } from './education';
import { Experience } from './experience';
import { Profile } from './profile';
import { Projects } from './projects';
import { Skills } from './skills';

export const Sections: Section[] = [
	{
		type: 'Profile',
		name: 'Profile',
		props: {
			id: 'profile-section',
			data: Profile,
		},
	},
	{
		type: 'Cards',
		name: 'Projects',
		props: {
			id: 'projects-section',
			header: 'My Projects',
			data: Projects,
		},
	},
	{
		type: 'SkillCards',
		name: 'Skills',
		props: {
			id: 'skills-section',
			header: 'My Skills',
			data: Skills,
		},
	},
	{
		type: 'Cards',
		name: 'Experience',
		props: {
			id: 'experiences-section',
			header: 'My Experience',
			data: Experience,
		},
	},
	{
		type: 'Cards',
		name: 'Education',
		props: {
			id: 'education-section',
			header: 'My Education',
			data: Education,
		},
	},
	{
		type: 'Contact',
		name: 'Contact',
		props: {
			id: 'contact-section',
			header: 'Let’s Connect',
			data: Contact,
		},
	},
] as const;
