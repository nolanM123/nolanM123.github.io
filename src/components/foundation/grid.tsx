import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { alignmentVariants, gapVariants, viewVariants } from './shared/styles';
import { type DynamicProps, type DynamicRef } from './shared/types';

// --- Styles ---

const gridStyles = tv({
	variants: {
		display: {
			grid: 'grid',
			inlineGrid: 'inline-grid',
			none: 'hidden',
		},
		columns: {
			1: 'grid-cols-1',
			2: 'grid-cols-2',
			3: 'grid-cols-3',
			4: 'grid-cols-4',
			5: 'grid-cols-5',
			6: 'grid-cols-6',
			7: 'grid-cols-7',
			8: 'grid-cols-8',
			9: 'grid-cols-9',
			10: 'grid-cols-10',
			11: 'grid-cols-11',
			12: 'grid-cols-12',
			none: 'grid-cols-none',
		},
		rows: {
			1: 'grid-rows-1',
			2: 'grid-rows-2',
			3: 'grid-rows-3',
			4: 'grid-rows-4',
			5: 'grid-rows-5',
			6: 'grid-rows-6',
			none: 'grid-rows-none',
		},
		autoFlow: {
			row: 'grid-flow-row',
			col: 'grid-flow-col',
			dense: 'grid-flow-dense',
			rowDense: 'grid-flow-row-dense',
			colDense: 'grid-flow-col-dense',
		},
		...alignmentVariants,
		...gapVariants,
		...viewVariants,
	},
});

// --- Props ---

type GridElement =
	| 'div'
	| 'section'
	| 'article'
	| 'aside'
	| 'main'
	| 'nav'
	| 'ul'
	| 'ol';

type GridVariants = VariantProps<typeof gridStyles>;

type GridDynamicProps<C extends GridElement = 'div'> = DynamicProps<
	C,
	GridVariants & {
		children?: React.ReactNode;
		className?: string;
	}
>;

export type GridProps<C extends GridElement = 'div'> = GridDynamicProps<C>;

// --- Component ---

const _Grid = React.forwardRef(
	<C extends GridElement = 'div'>(
		{
			as = 'div' as C,
			display = 'grid',
			columns = 1,
			rows,
			autoFlow,
			direction,
			alignItems,
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
		}: GridDynamicProps<C>,
		ref: DynamicRef<C>,
	) => {
		const Component = as as React.ElementType;

		const styles = gridStyles({
			display,
			direction,
			columns,
			rows,
			autoFlow,
			alignItems,
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

		return (
			<Component ref={ref} className={styles} {...props}>
				{children}
			</Component>
		);
	},
);

_Grid.displayName = 'Grid';

export const Grid = _Grid as <C extends GridElement = 'div'>(
	props: GridDynamicProps<C> & { ref?: DynamicRef<C> },
) => React.ReactElement | null;
