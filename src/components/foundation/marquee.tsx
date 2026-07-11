import React, { useEffect, useRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { Flex } from './flex';
import {
	gapVariants,
	layoutVariants,
	slotVariants,
	viewVariants,
} from './shared/styles';
import { type DynamicProps, type DynamicRef } from './shared/types';

/// --- Styles ---

const marqueeStyles = tv({
	slots: {
		base: 'relative w-full overflow-hidden',
		viewport:
			'relative w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing select-none',
		fadeLeft:
			'absolute top-0 bottom-0 left-0 z-10 pointer-events-none w-[4.5rem] bg-[linear-gradient(to_right,var(--color-surface-primary),transparent)]',
		fadeRight:
			'absolute top-0 bottom-0 right-0 z-10 pointer-events-none w-[4.5rem] bg-[linear-gradient(to_left,var(--color-surface-primary),transparent)]',
		track: 'flex flex-row w-max pointer-events-none [&>*]:pointer-events-auto',
		itemContainer: 'flex-shrink-0',
	},
	variants: {
		...slotVariants(viewVariants, 'base'),
		...slotVariants(layoutVariants, 'track'),
		...slotVariants(gapVariants, 'itemContainer'),
	},
});

// --- Props ---

type MarqueeElement = 'div' | 'section' | 'ul' | 'ol';
type MarqueeVariants = VariantProps<typeof marqueeStyles>;

type MarqueeDynamicProps<C extends MarqueeElement = 'div'> = DynamicProps<
	C,
	MarqueeVariants & {
		children?: React.ReactNode;
		className?: string;
		speed?: number;
		fadeColor?: string;
		fadeSize?: string;
	}
>;

export type MarqueeProps<C extends MarqueeElement = 'div'> =
	MarqueeDynamicProps<C>;

// --- Component ---

const _Marquee = React.forwardRef(
	<C extends MarqueeElement = 'div'>(
		{
			as = 'div' as C,
			speed = 1,
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
		}: MarqueeDynamicProps<C>,
		forwardedRef: DynamicRef<C>,
	) => {
		const Component = as as React.ElementType;
		const viewportRef = useRef<HTMLDivElement | null>(null);
		const animationFrameRef = useRef<number | null>(null);

		const isHoveredRef = useRef(false);
		const isDraggingRef = useRef(false);
		const hasDraggedRef = useRef(false);
		const startXRef = useRef(0);
		const scrollLeftRef = useRef(0);

		const styles = marqueeStyles({
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
			gap,
			gapX,
			gapY,
		});

		useEffect(() => {
			const viewport = viewportRef.current;
			if (!viewport) return;

			const renderLoop = () => {
				const firstChild = viewport.querySelector(
					'.flex-shrink-0',
				) as HTMLElement;
				if (!firstChild) {
					animationFrameRef.current = requestAnimationFrame(renderLoop);
					return;
				}

				const halfWidth = firstChild.offsetWidth;

				if (viewport.scrollLeft >= halfWidth) {
					viewport.scrollLeft -= halfWidth;
				} else if (viewport.scrollLeft <= 0) {
					viewport.scrollLeft += halfWidth;
				}

				if (
					!isHoveredRef.current &&
					!isDraggingRef.current &&
					!hasDraggedRef.current
				) {
					viewport.scrollLeft += speed;
				}

				animationFrameRef.current = requestAnimationFrame(renderLoop);
			};

			animationFrameRef.current = requestAnimationFrame(renderLoop);
			return () => {
				if (animationFrameRef.current)
					cancelAnimationFrame(animationFrameRef.current);
			};
		}, [speed]);

		const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
			const viewport = viewportRef.current;
			if (!viewport) return;

			isDraggingRef.current = true;
			hasDraggedRef.current = false;
			startXRef.current = e.pageX - viewport.offsetLeft;
			scrollLeftRef.current = viewport.scrollLeft;
		};

		const handleMouseUp = () => {
			if (isDraggingRef.current) {
				isDraggingRef.current = false;
				hasDraggedRef.current = true;
			}
		};

		const handleMouseLeave = () => {
			isDraggingRef.current = false;
			isHoveredRef.current = false;
			hasDraggedRef.current = false;
		};

		const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
			if (!isDraggingRef.current) return;
			const viewport = viewportRef.current;
			const firstChild = viewport?.querySelector(
				'.flex-shrink-0',
			) as HTMLElement;
			if (!viewport || !firstChild) return;

			e.preventDefault();

			const halfWidth = firstChild.offsetWidth;
			const x = e.pageX - viewport.offsetLeft;
			const walk = (x - startXRef.current) * 1.5;
			let newScrollLeft = scrollLeftRef.current - walk;

			if (newScrollLeft >= halfWidth) {
				newScrollLeft -= halfWidth;
				scrollLeftRef.current -= halfWidth;
				startXRef.current =
					x - (scrollLeftRef.current - viewport.scrollLeft) / 1.5;
			} else if (newScrollLeft <= 0) {
				newScrollLeft += halfWidth;
				scrollLeftRef.current += halfWidth;
				startXRef.current =
					x - (scrollLeftRef.current - viewport.scrollLeft) / 1.5;
			}

			viewport.scrollLeft = newScrollLeft;
		};

		return (
			<Component
				ref={(node: HTMLElement | null) => {
					const targetRef = forwardedRef as
						| React.ForwardedRef<HTMLElement>
						| null
						| undefined;
					if (!targetRef) return;
					if (typeof targetRef === 'function') {
						targetRef(node);
					} else if ('current' in targetRef) {
						targetRef.current = node;
					}
				}}
				className={styles.base({ className })}
				{...props}
			>
				<div className={styles.fadeLeft()} />
				<div className={styles.fadeRight()} />
				<div
					ref={viewportRef}
					className={styles.viewport()}
					onMouseEnter={() => {
						if (!hasDraggedRef.current) isHoveredRef.current = true;
					}}
					onMouseLeave={handleMouseLeave}
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}
					onMouseMove={handleMouseMove}
				>
					<Flex direction="row" className={styles.track()}>
						<Flex direction="row" className={styles.itemContainer()}>
							{children}
						</Flex>
						<Flex
							direction="row"
							aria-hidden="true"
							className={styles.itemContainer()}
						>
							{children}
						</Flex>
					</Flex>
				</div>
			</Component>
		);
	},
);

_Marquee.displayName = 'Marquee';

export const Marquee = _Marquee as <C extends MarqueeElement = 'div'>(
	props: MarqueeDynamicProps<C> & { ref?: DynamicRef<C> },
) => React.ReactElement | null;
