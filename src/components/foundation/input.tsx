import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { iconMap, type IconName } from '../icons/shared/types';
import { Flex } from './flex';
import {
	alignmentVariants,
	gapVariants,
	slotVariants,
	viewVariants,
} from './shared/styles';
import { type DynamicProps, type DynamicRef } from './shared/types';

// --- Styles ---

const inputStyles = tv({
	slots: {
		base: 'w-full',
		input:
			'border-none w-full appearance-none outline-none bg-transparent focus:ring-0',
	},
	variants: {
		variant: {
			base: { base: 'bg-surface-secondary shadow-md' },
		},
		as: {
			input: {},
			textarea: { input: 'min-h-20' },
		},
		size: {
			base: { base: 'text-md' },
			small: { base: 'text-sm' },
		},
		isDisabled: {
			true: {
				base: 'bg-surface-primary cursor-not-allowed pointer-events-none',
			},
			false: {},
		},
		...slotVariants(alignmentVariants, 'base'),
		...slotVariants(gapVariants, 'base'),
		...slotVariants(viewVariants, 'base'),
	},
});

// --- Props ---

type InputElement = 'input' | 'textarea';
type InputVariants = VariantProps<typeof inputStyles>;

type InputDynamicProps<C extends InputElement = 'input'> = DynamicProps<
	C,
	InputVariants & {
		startIcon?: IconName;
		endIcon?: IconName;
		className?: string;
	}
>;

export type InputProps<C extends InputElement = 'input'> = InputDynamicProps<C>;

// --- Component ---

const _Input = React.forwardRef(
	<C extends InputElement = 'input'>(
		{
			as = 'input' as C,
			startIcon,
			endIcon,
			variant = 'base',
			size = 'base',
			direction,
			alignItems = as === 'textarea' ? 'start' : 'center',
			justifyContent,
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
			radius = 'xlarge',
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
			padding = 'spaceXS',
			paddingX,
			paddingY,
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft,
			className,
			...props
		}: InputDynamicProps<C>,
		ref: DynamicRef<C>,
	) => {
		const Component = as as React.ElementType;

		const hasIcons = Boolean(startIcon || endIcon);
		const hasGap =
			gap !== undefined || gapX !== undefined || gapY !== undefined;
		const calculatedGap = !hasGap && hasIcons ? 'spaceXS' : gap;

		const styles = inputStyles({
			as: as as 'input' | 'textarea',
			variant,
			size,
			isDisabled: props.disabled,
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
			className,
		});

		const StartIcon = startIcon ? iconMap[startIcon] : null;
		const EndIcon = endIcon ? iconMap[endIcon] : null;

		return (
			<Flex className={styles.base()}>
				{StartIcon && (
					<StartIcon
						className={`text-content-secondary shrink-0 ${as === 'textarea' ? 'mt-0.5' : ''}`}
					/>
				)}
				<Component ref={ref} className={styles.input()} {...props} />
				{EndIcon && (
					<EndIcon
						className={`text-content-secondary shrink-0 ${as === 'textarea' ? 'mt-0.5' : ''}`}
					/>
				)}
			</Flex>
		);
	},
);

_Input.displayName = 'Input';

export const Input = _Input as <C extends InputElement = 'input'>(
	props: InputDynamicProps<C> & { ref?: DynamicRef<C> },
) => React.ReactElement | null;
