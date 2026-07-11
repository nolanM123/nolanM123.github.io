import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import {
	alignmentVariants,
	flexBehaviorVariants,
	gapVariants,
	viewVariants,
} from './shared/styles';
import { type DynamicProps, type DynamicRef } from './shared/types';

// --- Styles ---

const flexStyles = tv({
	variants: {
		display: {
			flex: 'flex',
			none: 'hidden',
		},
		...alignmentVariants,
		...flexBehaviorVariants,
		...gapVariants,
		...viewVariants,
	},
});

// --- Props ---

type FlexElement =
	| 'div'
	| 'section'
	| 'article'
	| 'aside'
	| 'main'
	| 'nav'
	| 'header'
	| 'footer'
	| 'form'
	| 'fieldset'
	| 'ul'
	| 'ol';

type FlexVariants = VariantProps<typeof flexStyles>;

type FlexDynamicProps<C extends FlexElement = 'div'> = DynamicProps<
	C,
	FlexVariants & {
		children?: React.ReactNode;
		className?: string;
	}
>;

export type FlexProps<C extends FlexElement = 'div'> = FlexDynamicProps<C>;

// --- Component ---

const _Flex = React.forwardRef(
	<C extends FlexElement = 'div'>(
		{
			as = 'div' as C,
			display = 'flex',
			direction = 'col',
			alignItems,
			justifyContent,
			flexGrow,
			flexShrink,
			flexWrap,
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
		}: FlexDynamicProps<C>,
		ref: DynamicRef<C>,
	) => {
		const Component = as as React.ElementType;
		const styles = flexStyles({
			display,
			direction,
			alignItems,
			justifyContent,
			flexGrow,
			flexShrink,
			flexWrap,
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
			className,
		});

		return (
			<Component ref={ref} className={styles} {...props}>
				{children}
			</Component>
		);
	},
);

_Flex.displayName = 'Flex';

export const Flex = _Flex as <C extends FlexElement = 'div'>(
	props: FlexDynamicProps<C> & { ref?: DynamicRef<C> },
) => React.ReactElement | null;
