import type { Card } from '../shared/types';

export const Experience: Card[] = [
	{
		header: 'Neo Financial',
		links: [
			{
				icon: 'Portal',
				source: 'https://neofinancial.com/',
			},
		],
		items: [
			{
				header: 'Junior Software Developer',
				date: 'October 2025 — Present',
				body: 'Collaborate within a high-velocity agile engineering team to build, maintain, and scale customer-facing web platforms and digital financial solutions.',
			},
			{
				header: 'Achievements',
				achievements: [
					'Architected high-performance web interfaces using Next.js, React, and TailwindCSS to support seamless consumer financial workflows.',
					'Engineered modular content delivery pipelines by coupling PayloadCMS with MongoDB, reducing marketing turnaround times for promotional web content.',
					'Built and optimized type-safe backend API endpoints and data resolvers utilizing Node.js and GraphQL.',
				],
			},
		],
	},
	{
		header: 'The Mustard Seed',
		links: [
			{
				icon: 'Portal',
				source: 'https://theseed.ca/',
			},
		],
		items: [
			{
				header: 'IT Systems Developer',
				date: 'April 2025 — October 2025',
				body: 'Designed, built, and launched internal web software to automate operations, security protocols, and logistics across organization locations.',
			},
			{
				header: 'Achievements',
				achievements: [
					'Independently engineered, tested, and deployed "SeedParks," a lightweight parking management application utilizing FastAPI and PostgreSQL.',
					'Successfully onboarded and managed over 800 active platform users, integrating Microsoft SSO for secure, enterprise-wide authentication.',
					'Optimized operational tracking efficiency by configuring live data caching streams using Redis.',
				],
			},
			{
				header: 'Service Desk Technician',
				date: 'October 2024 — April 2025',
				body: 'Provided comprehensive technical hardware, software, and network infrastructure support across a fast-paced enterprise environment.',
			},
			{
				header: 'Achievements',
				achievements: [
					'Resolved high-volume technical support tickets, minimizing operational downtime for staff across multiple regional hubs.',
					'Identified persistent software pain points within organization logistics, sparking the initiative to transition into internal systems development.',
					'Managed secure active directory updates, employee hardware provisioning, and system permissions profiles.',
				],
			},
		],
	},
	{
		header: 'Grey Eagle Resort & Casino',
		links: [
			{
				icon: 'Portal',
				source: 'https://greyeagleresortandcasino.ca/',
			},
		],
		items: [
			{
				header: 'Usher',
				date: 'September 2023 — January 2024',
				body: 'Delivered high-quality customer service, guest routing, and logistics management during major events at the resort event center.',
			},
			{
				header: 'Achievements',
				achievements: [
					'Managed rapid guest crowds under strict timelines while maintaining an organized, highly professional presence.',
					'De-escalated seating conflicts and operational bottlenecks on the floor through quick critical thinking and effective communication.',
					'Collaborated closely with security and venue operations teams to ensure complete compliance with facility safety regulations.',
				],
			},
		],
	},
	{
		header: 'College Pro',
		links: [
			{
				icon: 'Portal',
				source: 'https://collegepro.com/',
			},
		],
		items: [
			{
				header: 'Window Technician',
				date: 'May 2022 — September 2022',
				body: 'Operated within a physical, client-facing service team execution model delivering exterior structural window maintenance and detailing.',
			},
			{
				header: 'Achievements',
				achievements: [
					'Maintained an accident-free safety record while operating specialized machinery, high rigging, and industrial scaling equipment.',
					'Boosted client satisfaction metrics by ensuring thorough inspection routines and pristine service standard delivery.',
					'Coordinated directly with property owners to finalize quotes, clarify timelines, and secure client sign-offs.',
				],
			},
		],
	},
	{
		header: 'Shoppers Drug Mart',
		links: [
			{
				icon: 'Portal',
				source: 'https://www.shoppersdrugmart.ca/',
			},
		],
		items: [
			{
				header: 'Cashier',
				date: 'July 2021 — September 2021',
				body: 'Managed front-end customer transactions, point-of-sale systems, and inventory tracking in a busy retail pharmacy environment.',
			},
			{
				header: 'Achievements',
				achievements: [
					'Balanced cash registers and processed high-volume point-of-sale transactions with precision and zero discrepancies.',
					'Addressed customer inquiries regarding store promotions, digital rewards programs, and generic inventory layout.',
					'Optimized shelf presentation and maintained inventory tracking logs during peak floor operational hours.',
				],
			},
		],
	},
] as const;
