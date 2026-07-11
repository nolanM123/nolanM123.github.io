import type { ReactNode } from 'react';
import { tv } from 'tailwind-variants';

import { Flex, Text } from '../foundation';

// --- Styles ---

const sectionStyles = tv({
	slots: {
		baseContainer: 'px-m sm:px-l md:px-xl w-full max-w-240 scroll-mt-22',
	},
});

// --- Props ---

export interface SectionProps {
	id: string;
	header?: string | ReactNode;
	children?: ReactNode;
	className?: string;
}

// --- Components ---

export const Section = ({ id, header, children, className }: SectionProps) => {
	const styles = sectionStyles();

	return (
		<Flex
			as="section"
			id={id}
			justifyContent="start"
			gap="space2XL"
			marginY="spaceM"
			className={styles.baseContainer({ className })}
		>
			{header && typeof header === 'string' ? (
				<Text variant="display" size="large" wrap="nowrap" strong>
					{header}
				</Text>
			) : (
				header
			)}
			<Flex gap="spaceM">{children}</Flex>
		</Flex>
	);
};
