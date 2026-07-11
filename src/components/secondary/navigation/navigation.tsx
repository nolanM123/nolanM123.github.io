import { useEffect, useState } from 'react';
import { tv } from 'tailwind-variants';

import type { Section } from '../../../shared/types';
import { Flex } from '../../foundation';
import { DesktopNavigation } from './navigation.desktop';
import { MobileNavigation } from './navigation.mobile';

// --- Styles ---
const navigationStyles = tv({
	slots: {
		baseContainer:
			'sticky top-0 z-50 w-full bg-surface-primary/60 backdrop-blur-md',
		contentContainer: 'px-m sm:px-l md:px-xl w-full max-w-240',
		navText: 'transition-all duration-500',
	},
});

// --- Props ---

export interface NavigationProps {
	data: Section[];
	className?: string;
}

// --- Components ---

export const Navigation = ({ data, className }: NavigationProps) => {
	const styles = navigationStyles({});
	const [activeSectionId, setActiveSectionId] = useState<string>('');

	useEffect(() => {
		const handleIntersection = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSectionId(entry.target.id);
				}
			});
		};
		const observer = new IntersectionObserver(handleIntersection, {
			rootMargin: '-20% 0px -60% 0px',
			threshold: 0,
		});

		data.forEach((section) => {
			const element = document.getElementById(section.props.id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, [data]);

	return (
		<Flex
			as="nav"
			zIndex="layerSticky"
			direction="row"
			justifyContent="center"
			paddingY="spaceM"
			className={styles.baseContainer({ className })}
		>
			<Flex className={styles.contentContainer()}>
				<MobileNavigation
					data={data}
					activeSectionId={activeSectionId}
					className="md:hidden"
				/>
				<DesktopNavigation
					data={data}
					activeSectionId={activeSectionId}
					className="hidden md:flex"
				/>
			</Flex>
		</Flex>
	);
};
