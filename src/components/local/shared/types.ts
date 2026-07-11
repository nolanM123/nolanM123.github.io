import type React from 'react';

import * as Components from '..';

export type LocalComponentName = keyof typeof Components;

export interface LocalComponentProps {
	id: string;
}

export type LocalComponentPropsMap = {
	[K in LocalComponentName]: React.ComponentPropsWithoutRef<
		(typeof Components)[K]
	>;
};
