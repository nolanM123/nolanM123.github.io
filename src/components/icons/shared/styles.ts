import { tv } from 'tailwind-variants';

import { colorVariants } from '../../shared/styles';

export const iconStyles = tv({
	base: 'inline-block shrink-0',
	variants: {
		size: {
			xsmall: 'w-2 h-2',
			small: 'w-4 h-4',
			medium: 'w-6 h-6',
			large: 'w-8 h-8',
			xlarge: 'w-10 h-10',
		},
		color: colorVariants.color,
	},
	defaultVariants: {
		size: 'medium',
		color: 'contentPrimary',
	},
});
