import type { FC } from 'react';

import * as Components from '..';
import type { LocalComponentName, LocalComponentPropsMap } from './types';

export const localComponentMap: {
	[K in LocalComponentName]: FC<LocalComponentPropsMap[K]>;
} = Components;
