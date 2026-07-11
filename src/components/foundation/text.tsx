import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { colorVariants } from '../shared/styles';
import { layoutVariants } from './shared/styles';
import { type DynamicProps, type DynamicRef } from './shared/types';

// --- Styles ---

const variantDefs = {
	display: 'font-light tracking-tight text-content-primary',
	header: 'font-semibold tracking-tight text-content-primary',
	body: 'font-normal leading-relaxed text-content-primary',
	label: 'font-medium uppercase tracking-wider text-content-primary',
} as const;
type Variant = keyof typeof variantDefs;

const textStyles = tv({
	variants: {
		variant: variantDefs,
		size: {
			xsmall: '',
			small: '',
			medium: '',
			large: '',
			xlarge: '',
		},
		strong: {
			true: 'font-bold',
		},
		color: colorVariants.color,
		align: {
			left: 'text-left',
			center: 'text-center',
			right: 'text-right',
			justify: 'text-justify',
		},
		tracking: {
			tight: 'tracking-tight',
			normal: 'tracking-normal',
			wide: 'tracking-wide',
		},
		transform: {
			uppercase: 'uppercase',
			lowercase: 'lowercase',
			capitalize: 'capitalize',
			none: 'normal-case',
		},
		lineClamp: {
			1: 'line-clamp-1',
			2: 'line-clamp-2',
			3: 'line-clamp-3',
			4: 'line-clamp-4',
			5: 'line-clamp-5',
			6: 'line-clamp-6',
		},
		wrap: {
			true: 'text-wrap',
			nowrap: 'text-nowrap',
			balance: 'text-balance',
			pretty: 'text-pretty',
		},
		...layoutVariants,
	},
	compoundVariants: [
		{ variant: 'display', size: 'xlarge', class: 'text-5xl md:text-6xl' },
		{ variant: 'display', size: 'large', class: 'text-3xl md:text-4xl' },
		{ variant: 'display', size: 'medium', class: 'text-xl md:text-2xl' },
		{ variant: 'display', size: 'small', class: 'text-lg md:text-xl' },
		{ variant: 'header', size: 'large', class: 'text-xl md:text-2xl' },
		{ variant: 'header', size: 'medium', class: 'text-lg' },
		{ variant: 'header', size: 'small', class: 'text-md' },
		{ variant: 'header', size: 'xsmall', class: 'text-xs md:text-sm' },
		{ variant: 'body', size: 'xlarge', class: 'text-xl' },
		{ variant: 'body', size: 'large', class: 'text-lg' },
		{ variant: 'body', size: 'medium', class: 'text-base' },
		{ variant: 'body', size: 'small', class: 'text-sm' },
		{ variant: 'body', size: 'xsmall', class: 'text-xs' },
		{ variant: 'label', size: 'medium', class: 'text-sm' },
		{ variant: 'label', size: 'small', class: 'text-xs' },
	],
});

// --- Props ---

type TextElement =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'p'
	| 'span'
	| 'label'
	| 'legend'
	| 'figcaption'
	| 'blockquote'
	| 'cite'
	| 'time'
	| 'li';

type TextVariants = VariantProps<typeof textStyles>;

type TextDynamicProps<C extends TextElement = 'p'> = DynamicProps<
	C,
	TextVariants & {
		children?: React.ReactNode;
		className?: string;
	}
>;

export type TextProps<C extends TextElement = 'p'> = TextDynamicProps<C>;

// --- Component ---

const variantMap: Record<Variant, React.ElementType> = {
	display: 'h1',
	header: 'h2',
	body: 'p',
	label: 'span',
} as const;

const _Text = React.forwardRef(
	<C extends TextElement = 'p'>(
		{
			as,
			variant = 'body',
			size = 'medium',
			strong,
			color = 'contentPrimary',
			align,
			tracking,
			transform,
			lineClamp,
			wrap = true,
			margin,
			marginX,
			marginY,
			marginTop,
			marginRight,
			marginBottom,
			marginLeft,
			padding,
			paddingX,
			paddingY,
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft,
			children,
			className,
			...props
		}: TextDynamicProps<C>,
		ref: DynamicRef<C>,
	) => {
		const Component = (as ?? variantMap[variant]) as React.ElementType;
		const styles = textStyles({
			variant,
			size,
			strong,
			color,
			align,
			tracking,
			transform,
			lineClamp,
			wrap,
			margin,
			marginX,
			marginY,
			marginTop,
			marginRight,
			marginBottom,
			marginLeft,
			padding,
			paddingX,
			paddingY,
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft,
			className,
		});

		return (
			<Component ref={ref} className={styles} {...props}>
				{children}
			</Component>
		);
	},
);

_Text.displayName = 'Text';

export const Text = _Text as <C extends TextElement = 'p'>(
	props: TextDynamicProps<C> & { ref?: DynamicRef<C> },
) => React.ReactElement | null;
