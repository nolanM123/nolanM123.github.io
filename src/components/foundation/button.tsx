import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { iconMap, type IconName } from '../icons/shared/types';
import { alignmentVariants, gapVariants, viewVariants } from './shared/styles';
import { type DynamicProps, type DynamicRef } from './shared/types';

// --- Styles ---

const buttonStyles = tv({
	base: 'inline-flex rounded-md transition-all duration-300 cursor-pointer select-none outline-none focus-visible:ring-1 focus-visible:ring-accent-100 active:scale-[0.94] disabled:pointer-events-none disabled:opacity-50',
	variants: {
		variant: {
			base: 'shadow-md  bg-surface-secondary text-content-primary hover:bg-surface-tertiary',
			nav: 'bg-transparent hover:text-content-primary',
		},
		size: {
			base: 'h-10 px-4 py-2 text-sm',
			small: 'h-8 px-3 text-xs',
			square: 'aspect-square w-12',
		},
		...alignmentVariants,
		...gapVariants,
		...viewVariants,
	},
});

// --- Props ---

type ButtonElement = 'button' | 'a' | 'input';
type ButtonVariants = VariantProps<typeof buttonStyles>;

type ButtonDynamicProps<C extends ButtonElement = 'button'> = DynamicProps<
	C,
	ButtonVariants & {
		startIcon?: IconName;
		endIcon?: IconName;
		children?: React.ReactNode;
		className?: string;
	}
>;

export type ButtonProps<C extends ButtonElement = 'button'> =
	ButtonDynamicProps<C>;

// --- Component ---

const _Button = React.forwardRef(
	<C extends ButtonElement = 'button'>(
		{
			as = 'button' as C,
			startIcon,
			endIcon,
			variant = 'base',
			size = 'base',
			direction,
			alignItems = 'center',
			justifyContent = 'center',
			gap,
			gapX,
			gapY,
			borderWidth,
			borderWidthX,
			borderWidthY,
			borderWidthTop,
			borderWidthRight,
			borderWidthBottom,
			borderWidthLeft,
			radius,
			borderColor,
			zIndex,
			opacity,
			backgroundColor,
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
		}: ButtonDynamicProps<C>,
		ref: DynamicRef<C>,
	) => {
		const Component = as as React.ElementType;

		const hasIcons = Boolean(startIcon || endIcon);
		const hasGap =
			gap !== undefined || gapX !== undefined || gapY !== undefined;
		const calculatedGap = !hasGap && hasIcons ? 'space2XS' : gap;

		const styles = buttonStyles({
			variant,
			size,
			direction,
			alignItems,
			justifyContent,
			gap: calculatedGap,
			gapX,
			gapY,
			borderWidth,
			borderWidthX,
			borderWidthY,
			borderWidthTop,
			borderWidthRight,
			borderWidthBottom,
			borderWidthLeft,
			radius,
			borderColor,
			zIndex,
			opacity,
			backgroundColor,
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
			...props,
		});

		const StartIcon = startIcon ? iconMap[startIcon] : null;
		const EndIcon = endIcon ? iconMap[endIcon] : null;

		return (
			<Component ref={ref} className={styles} {...props}>
				{StartIcon && <StartIcon />}
				{children}
				{EndIcon && <EndIcon />}
			</Component>
		);
	},
);

_Button.displayName = 'Button';

export const Button = _Button as <C extends ButtonElement = 'button'>(
	props: ButtonDynamicProps<C> & { ref?: DynamicRef<C> },
) => React.ReactElement | null;
