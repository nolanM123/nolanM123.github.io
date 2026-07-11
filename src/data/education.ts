import type { Card } from '../shared/types';

export const Education: Card[] = [
	{
		header: 'University of British Columbia',
		links: [
			{
				icon: 'Portal',
				source: 'https://ubc.ca/',
			},
		],
		items: [
			{
				header: 'Bachelors of Science, Computer Science',
				date: 'September 2019 — May 2024',
				body: 'Completed a comprehensive computing curriculum with a heavy focus on software engineering principles, full-stack web development, relational database systems, and algorithmic analysis.',
			},
			{
				header: 'Achievements',
				achievements: [
					'Dean‘s List Academic Achievement Award, May 2022',
					'Developed an interactive full-stack relational database system (COSC 360) as a capstone-level web development milestone.',
					'Mastered deep foundational competencies in advanced data structures, systems level programming, and object-oriented design patterns.',
				],
			},
		],
	},
	{
		header: 'Bowness High School',
		links: [
			{
				icon: 'Portal',
				source: 'https://bowness.cbe.ab.ca/',
			},
		],
		items: [
			{
				header: 'Highschool Diploma',
				date: 'September 2016 — June 2019',
				body: 'Graduated with an early academic specialization in technical systems, intermediate software development concepts, and computing sciences.',
			},
			{
				header: 'Achievements',
				achievements: [
					'Advanced Computer Science Academic Achievement, Bowness High School, June 2019',
					'Most Valuable Student, Bowness High School, May 2018',
					'Pride & Excellence in intermediate Computer Science, Bowness High School, December 2017',
				],
			},
		],
	},
] as const;
