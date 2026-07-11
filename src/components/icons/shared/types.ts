import type { ReactNode, SVGProps } from 'react';
import { type VariantProps } from 'tailwind-variants';

import * as Icons from '..';
import { iconStyles } from './styles';

export interface BaseIconProps
	extends
		Omit<SVGProps<SVGSVGElement>, 'color'>,
		VariantProps<typeof iconStyles> {}

export type IconName = keyof typeof Icons;

export type IconComponent = (props: BaseIconProps) => ReactNode;

export const iconMap: Record<IconName, IconComponent> = Icons;
