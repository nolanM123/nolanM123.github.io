import { useEffect, useRef, useState } from 'react';
import { tv } from 'tailwind-variants';

import type { Card as CardType } from '../../shared/types';
import { Flex, Text } from '../foundation';
import { illustrationMap } from '../illustrations/shared/types';
import { IconLinks } from './icon-links';

// --- Styles ---

const cardStyles = tv({
	slots: {
		baseContainer:
			'relative p-m sm:p-l md:p-xl bg-surface-primary overflow-hidden transition-all duration-500 ease-out transform-gpu',
		textContainer: 'w-full z-10 transition-opacity duration-500',
		heroContainer:
			'hidden md:block absolute top-[10%] left-6/7 h-[80%] min-w-max pointer-events-none overflow-hidden transition-all duration-500 ease-out',
		heroImage: 'w-auto h-full object-contain',
	},
	variants: {
		aboveHalf: {
			true: {
				baseContainer:
					'opacity-100 bg-surface-secondary shadow-md -translate-y-2 scale-[1.01]',
				heroContainer: 'left-5/7 opacity-100 shadow-md scale-[1.01]',
				textContainer: 'opacity-100',
			},
			false: {
				baseContainer: 'opacity-50 shadow-none translate-y-0 scale-100',
				heroContainer: 'translate-x-0 opacity-20 scale-100',
				textContainer: 'opacity-90',
			},
		},
		hasHero: {
			true: {
				textContainer: 'md:w-3/5',
			},
			false: {
				textContainer: 'w-full',
			},
		},
	},
	defaultVariants: {
		aboveHalf: false,
		hasHero: false,
	},
});

// --- Props ---

export interface CardProps extends CardType {
	className?: string;
}

// --- Components ---

export const Card = ({ header, links, hero, items, className }: CardProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isPastHalfway, setIsPastHalfway] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return;

			const rect = containerRef.current.getBoundingClientRect();
			const midpoint = window.innerHeight / 2;

			setIsPastHalfway(rect.top < midpoint);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const styles = cardStyles({
		aboveHalf: isPastHalfway,
		hasHero: !!hero,
	});

	return (
		<Flex
			ref={containerRef}
			as="article"
			direction="row"
			radius="xlarge"
			className={styles.baseContainer({ className })}
		>
			<Flex className={styles.textContainer()}>
				<Flex direction="row" alignItems="center" justifyContent="between">
					<Text variant="header" size="large">
						{header}
					</Text>
					{links && <IconLinks links={links} />}
				</Flex>
				<Flex gap="spaceS">
					{items.map((item, index) => (
						<Flex key={index} gap="space2XS">
							{(item.header || item.date) && (
								<Flex>
									{item.header && (
										<Text as="h3" variant="header" size="small">
											{item.header}
										</Text>
									)}
									{item.date && <Text size="small">{item.date}</Text>}
								</Flex>
							)}
							<Flex gap="space4XS">
								{item.body && <Text>{item.body}</Text>}
								{item.achievements && (
									<Flex as="ul" paddingLeft="space3XS" className="list-disc">
										{item.achievements.map((achievement, achIndex) => (
											<Text key={achIndex} as="li" size="small">
												{achievement}
											</Text>
										))}
									</Flex>
								)}
								{item.icons && (
									<Flex direction="row" flexWrap gap="spaceS">
										{item.icons.map((icon, iconIndex) => {
											const Icon = illustrationMap[icon];
											return (
												<Icon
													key={iconIndex}
													className="h-6 w-6 sm:h-8 sm:w-8"
												/>
											);
										})}
									</Flex>
								)}
							</Flex>
						</Flex>
					))}
				</Flex>
			</Flex>
			{hero && (
				<Flex radius="xlarge" className={styles.heroContainer()}>
					<img
						src={hero.source}
						alt={hero.alt}
						className={styles.heroImage()}
					/>
				</Flex>
			)}
		</Flex>
	);
};
