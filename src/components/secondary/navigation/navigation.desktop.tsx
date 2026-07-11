import { tv } from 'tailwind-variants';

import type { Section } from '../../../shared/types';
import { Button, Flex, Text } from '../../foundation';

// --- Styles ---

const desktopNavigationStyles = tv({
	slots: {
		baseContainer: 'w-full',
		navText: 'transition-all duration-500',
	},
});

// --- Props ---

export interface DesktopNavigationProps {
	data: Section[];
	activeSectionId: string;
	className?: string;
}

// --- Components ---

export const DesktopNavigation = ({
	data,
	activeSectionId,
	className,
}: DesktopNavigationProps) => {
	const styles = desktopNavigationStyles({});

	return (
		<Flex
			direction="row"
			alignItems="end"
			className={styles.baseContainer({ className })}
		>
			{data.map((section, index) => {
				const isSelected = activeSectionId === section.props.id;

				return (
					<Button
						key={index}
						as="a"
						href={`#${section.props.id}`}
						variant="nav"
					>
						<Text
							as="span"
							variant={isSelected ? 'display' : 'body'}
							color={isSelected ? 'contentPrimary' : 'contentMuted'}
							className={styles.navText()}
						>
							{section.name}
						</Text>
					</Button>
				);
			})}
		</Flex>
	);
};
