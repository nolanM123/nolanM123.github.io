import { useEffect, useRef, useState } from 'react';
import { tv } from 'tailwind-variants';

import type { SkillCard as SkillCardType } from '../../shared/types';
import { Flex, Text } from '../foundation';
import { illustrationMap } from '../illustrations/shared/types';

// --- Styles ---

const skillCardStyles = tv({
	slots: {
		base: 'w-80 shadow-md transition-all duration-500 ease-out transform-gpu',
		iconSection: 'w-14 h-14',
		progressTrack: 'h-2 w-full overflow-hidden',
		progressBar:
			'h-full bg-content-primary transition-all duration-500 ease-out',
	},
	variants: {
		aboveHalf: {
			true: {
				base: 'opacity-100 -translate-y-2 scale-[1.01]',
			},
			false: {
				base: 'opacity-50 translate-y-0 scale-100',
			},
		},
	},
	defaultVariants: {
		aboveHalf: false,
	},
});

// --- Props ---

export interface SkillCardProps extends SkillCardType {
	className?: string;
}

// --- Component ---

export const SkillCard = ({
	icon,
	header,
	body,
	date,
	experience,
	className,
}: SkillCardProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isPastHalfway, setIsPastHalfway] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			setIsPastHalfway(rect.top < window.innerHeight / 2);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const styles = skillCardStyles({ aboveHalf: isPastHalfway });
	const Icon = illustrationMap[icon];
	const progressPercent = Math.min(Math.max(experience * 100, 0), 100);

	return (
		<Flex
			ref={containerRef}
			as="article"
			direction="row"
			alignItems="start"
			gap="spaceS"
			flexShrink="noshrink"
			radius="xlarge"
			marginX="space2XS"
			padding="spaceS"
			backgroundColor="surfaceSecondary"
			className={styles.base({ className })}
		>
			<Flex
				alignItems="center"
				justifyContent="center"
				flexShrink="noshrink"
				radius="large"
				backgroundColor="surfacePrimary"
				className={styles.iconSection()}
			>
				<Icon className="text-content-brand h-8 w-8" />
			</Flex>
			<Flex gap="spaceXS">
				<Flex>
					<Text variant="header" size="small" strong>
						{header}
					</Text>
					<Text size="xsmall" color="contentMuted">
						{date}
					</Text>
				</Flex>
				<Flex gap="space3XS">
					<Flex direction="row" alignItems="center" justifyContent="between">
						<Text size="xsmall" color="contentMuted">
							Proficiency
						</Text>
						<Text size="xsmall" strong>
							{progressPercent.toFixed(0)}%
						</Text>
					</Flex>
					<Flex
						radius="full"
						backgroundColor="surfacePrimary"
						className={styles.progressTrack()}
					>
						<Flex
							radius="full"
							className={styles.progressBar()}
							style={{ width: isPastHalfway ? `${progressPercent}%` : '0%' }}
						/>
					</Flex>
				</Flex>
				<Text size="small" color="contentMuted">
					{body}
				</Text>
			</Flex>
		</Flex>
	);
};
