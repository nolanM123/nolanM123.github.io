import type { Contact as ContactType } from '../shared/types';
import { Links } from './links';

export const Contact: ContactType = {
	email: 'nolan.m.mcallister@gmail.com',
	subject: 'Portfolio Inquiry',
	emailPlaceholder: 'Your email',
	bodyPlaceholder: 'Your message',
	sendButton: 'Send',
	links: Links,
} as const;
