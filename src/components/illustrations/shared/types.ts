import type { ReactNode, SVGProps } from 'react';
import type { VariantProps } from 'tailwind-variants';

import * as Illustrations from '..';
import { illustrationStyles } from './styles';

export interface BaseIllustrationProps
	extends
		Omit<SVGProps<SVGSVGElement>, 'color'>,
		VariantProps<typeof illustrationStyles> {}

export type IllustrationName = keyof typeof Illustrations;

export type IllustrationComponent = (
	props: BaseIllustrationProps,
) => ReactNode;

export const illustrationMap: Record<IllustrationName, IllustrationComponent> =
	Illustrations;
