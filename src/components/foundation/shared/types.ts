import type { ComponentPropsWithoutRef,ComponentPropsWithRef, ElementType, ReactNode } from 'react';

export type DynamicRef<C extends ElementType> =
	ComponentPropsWithRef<C>['ref'];

export type DynamicProps<C extends ElementType, Props = object> = Props &
	Omit<ComponentPropsWithoutRef<C>, keyof Props> & {
		as?: C;
		ref?: DynamicRef<C>;
	};

export interface BaseComponentProps {
	as?: ElementType;
	children?: ReactNode;
	className?: string;
}
