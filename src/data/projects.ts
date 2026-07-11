import GracefulHero from '../assets/graceful.png';
import MediHelpHero from '../assets/medihelp.png';
import NeoHero from '../assets/neo.png';
import NeofinancialHero from '../assets/neofinancial.png';
import SeedParksHero from '../assets/seedparks.png';
import type { Card } from '../shared/types';

export const Projects: Card[] = [
	{
		header: 'Neo Financial',
		links: [
			{
				icon: 'GitHub',
				source: 'https://github.com/neofinancial',
			},
			{
				icon: 'Portal',
				source: 'https://apps.apple.com/ca/app/neo-financial/id1495268044',
			},
		],
		hero: {
			source: NeoHero,
			alt: 'Neo Financial Application Hero',
		},
		items: [
			{
				date: 'March 2026 — Present',
				body: 'A high-performance mobile and web application engineered to deliver modern digital banking services, real-time transaction processing, and personalized financial insights.',
			},
			{
				header: 'Achievements',
				achievements: [
					'Architected scalable server-side features and API endpoints using Node.js and Next.js to handle secure financial transactions.',
					'Designed and implemented complex, type-safe data schemas and real-time queries using GraphQL.',
					'Built a highly responsive and polished user interface utilizing React/React-Native and TailwindCSS, prioritizing cross-platform consistency and speed.',
				],
			},
			{
				header: 'Stack',
				icons: ['React', 'TailwindCSS', 'NodeJS', 'NextJS', 'GraphQL'],
			},
		],
	},
	{
		header: 'neofinancial.com',
		links: [
			{
				icon: 'GitHub',
				source: 'https://github.com/neofinancial',
			},
			{
				icon: 'Portal',
				source: 'https://neofinancial.com',
			},
		],
		hero: {
			source: NeofinancialHero,
			alt: 'Neo Financial Website Hero',
		},
		items: [
			{
				date: 'October 2025 — March 2026',
				body: 'The public-facing marketing platform and content ecosystem for Neo Financial, optimized for search engine visibility, rapid user conversion, and seamless asset updates.',
			},
			{
				header: 'Achievements',
				achievements: [
					'Deconstructed content silos by integrating PayloadCMS with MongoDB to empower marketing teams to push real-time landing page updates.',
					'Leveraged Next.js Server-Side Rendering (SSR) to dramatically cut down Initial Server Response Times and maximize SEO performance.',
					'Styled reusable, production-ready interface components following strict design-system token standards using TailwindCSS.',
				],
			},
			{
				header: 'Stack',
				icons: [
					'React',
					'TailwindCSS',
					'NodeJS',
					'PayloadCMS',
					'NextJS',
					'MongoDB',
				],
			},
		],
	},
	{
		header: 'SeedParks',
		hero: {
			source: SeedParksHero,
			alt: 'SeedParks Application Hero',
		},
		items: [
			{
				date: 'April 2025 — October 2025',
				body: 'Seedparks is a lightweight, high-performance web app designed to simplify parking management for The Mustard Seed. It provides a seamless booking experience, real-time monitoring, and powerful administrative tools.',
			},
			{
				header: 'Achievements',
				achievements: [
					'Independently built and deployed Seedparks, used by 800+ users to manage parking across all Mustard Seed locations.',
					'Integrated Microsoft SSO for security, api integrations and easy login.',
					'Built with FastAPI for speed, efficiency, and scalability.',
					'Enabled live tracking of parking space availability.',
					'Designed for accessibility on any device, allowing users to manage bookings on the go.',
				],
			},
			{
				header: 'Stack',
				icons: [
					'HTML',
					'CSS',
					'JavaScript',
					'JQuery',
					'Python',
					'FastAPI',
					'PostgreSQL',
					'Redis',
				],
			},
		],
	},
	{
		header: 'Discussion Forum',
		links: [
			{
				icon: 'GitHub',
				source: 'https://github.com/nolanM123/COSC_360_Project',
			},
		],
		items: [
			{
				date: 'January 2024 — April 2024',
				body: 'A full-stack, secure web application designed to act as an online discussion board, enabling users to create threads, post comments, and interact in real time.',
			},
			{
				header: 'Achievements',
				achievements: [
					'Developed robust, procedural PHP backend logic to process user authorization, forum post creation, and categorical thread filtering.',
					'Designed and optimized a relational MySQL database to securely handle user profiles, password hashing, and text content.',
					'Created dynamic frontend interactions, input validation handling, and seamless AJAX data fetching using jQuery and vanilla JavaScript.',
				],
			},
			{
				header: 'Stack',
				icons: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP', 'MySQL'],
			},
		],
	},
	{
		header: 'Graceful',
		links: [
			{ icon: 'GitHub', source: 'https://github.com/nolanM123/graceful' },
			{ icon: 'Portal', source: 'https://pypi.org/project/graceful-web/' },
		],
		hero: {
			source: GracefulHero,
			alt: '',
		},
		items: [
			{
				date: 'September 2024 — December 2024',
				body: 'A lightweight, open-source Python framework published to PyPI, engineered to ease the creation of clean, modular, and developer-friendly web applications.',
			},
			{
				header: 'Achievements',
				achievements: [
					'Packaged, tested, and distributed a custom framework directly onto the official PyPI registry for public installation.',
					'Engineered an intuitive API routing structure allowing developers to spin up functional web services with minimal boilerplate.',
					'Enforced codebase reliability through thorough unit-testing strategies and clean, PEP-8 compliant formatting documentation.',
				],
			},
			{
				header: 'Stack',
				icons: ['Python'],
			},
		],
	},
	{
		header: 'MediHelp',
		hero: {
			source: MediHelpHero,
			alt: '',
		},
		items: [
			{
				date: 'September 2022 — April 2023',
				body: 'Led the development of a web application that recommends over-the-counter medicine based on personalized surveys, featuring an admin interface with advanced logic and form flow.',
			},
			{
				header: 'Achievements',
				achievements: [
					'Integrated data and formulas from clients Excel prototype into the platform, ensuring accurate and 1-1 mapping of recommendations',
					'Developed a user-friendly, survey based recommendation system that provides tailored based on individual needs.',
					'Created an extensive admin page for managing logic, product information and form flow.',
				],
			},
			{
				header: 'Stack',
				icons: ['React', 'TailwindCSS', 'Python', 'FastAPI', 'SQLite'],
			},
		],
	},
	{
		header: 'ChatBot',
		links: [{ icon: 'GitHub', source: 'https://github.com/nolanM123/ChatBot' }],
		items: [
			{
				date: 'September 2022 — December 2022',
				body: 'An interactive chatbot implementation focused on natural language parsing, state tracking, and fast response generation based on predefined rules or conversational triggers.',
			},
			{
				header: 'Achievements',
				achievements: [
					'Engineered the underlying script algorithms to properly parse user intent strings and map them to targeted contextual responses.',
					'Maintained user state trees across conversational turns to simulate realistic, multi-step dialogue flows.',
					'Optimized the application payload footprint to ensure fast execution and lightning-quick response delivery.',
				],
			},
			{
				header: 'Stack',
				icons: ['Python'],
			},
		],
	},
] as const;
