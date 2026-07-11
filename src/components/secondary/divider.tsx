import { tv } from 'tailwind-variants';

import { Flex } from '../foundation';

// --- Styles ---

const dividerStyles = tv({
	slots: {
		baseContainer: 'w-full',
		divider: 'w-0.5 h-6 sm:h-8 md:h-12 bg-border-base',
	},
});

// --- Props ---

export interface DividerProps {
	className?: string;
}

// --- Components ---

export const Divider = ({ className }: DividerProps) => {
	const styles = dividerStyles();

	return (
		<Flex alignItems="center" className={styles.baseContainer({ className })}>
			<Flex radius="full" className={styles.divider()}></Flex>
		</Flex>
	);
};
