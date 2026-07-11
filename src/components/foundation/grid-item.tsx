import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { layoutVariants } from './shared/styles';
import { type DynamicProps, type DynamicRef } from './shared/types';

// --- Styles ---

const gridItemStyles = tv({
	variants: {
		colSpan: {
			1: 'col-span-1',
			2: 'col-span-2',
			3: 'col-span-3',
			4: 'col-span-4',
			5: 'col-span-5',
			6: 'col-span-6',
			7: 'col-span-7',
			8: 'col-span-8',
			9: 'col-span-9',
			10: 'col-span-10',
			11: 'col-span-11',
			12: 'col-span-12',
			full: 'col-span-full',
			auto: 'col-auto',
		},
		rowSpan: {
			1: 'row-span-1',
			2: 'row-span-2',
			3: 'row-span-3',
			4: 'row-span-4',
			5: 'row-span-5',
			6: 'row-span-6',
			full: 'row-span-full',
			auto: 'row-auto',
		},
		colStart: {
			1: 'col-start-1',
			2: 'col-start-2',
			3: 'col-start-3',
			4: 'col-start-4',
			5: 'col-start-5',
			6: 'col-start-6',
			7: 'col-start-7',
			8: 'col-start-8',
			9: 'col-start-9',
			10: 'col-start-10',
			11: 'col-start-11',
			12: 'col-start-12',
			auto: 'col-start-auto',
		},
		justifySelf: {
			auto: 'justify-self-auto',
			start: 'justify-self-start',
			end: 'justify-self-end',
			center: 'justify-self-center',
			stretch: 'justify-self-stretch',
		},
		alignSelf: {
			auto: 'self-auto',
			start: 'self-start',
			end: 'self-end',
			center: 'self-center',
			stretch: 'self-stretch',
			baseline: 'self-baseline',
		},
		...layoutVariants,
	},
});

// --- Props ---

type GridItemElement = 'div' | 'section' | 'article' | 'aside' | 'li' | 'span';
type GridItemVariants = VariantProps<typeof gridItemStyles>;

type GridItemDynamicProps<C extends GridItemElement = 'div'> = DynamicProps<
	C,
	GridItemVariants & {
		children?: React.ReactNode;
		className?: string;
	}
>;

export type GridItemProps<C extends GridItemElement = 'div'> =
	GridItemDynamicProps<C>;

// --- Component ---

const _GridItem = React.forwardRef(
	<C extends GridItemElement = 'div'>(
		{
			as = 'div' as C,
			colSpan,
			rowSpan,
			colStart,
			alignSelf,
			justifySelf,
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
		}: GridItemDynamicProps<C>,
		ref: DynamicRef<C>,
	) => {
		const Component = as as React.ElementType;

		const styles = gridItemStyles({
			colSpan,
			rowSpan,
			colStart,
			alignSelf,
			justifySelf,
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

_GridItem.displayName = 'GridItem';

export const GridItem = _GridItem as <C extends GridItemElement = 'div'>(
	props: GridItemDynamicProps<C> & { ref?: DynamicRef<C> },
) => React.ReactElement | null;
