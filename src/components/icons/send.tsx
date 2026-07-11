import { iconStyles } from './shared/styles';
import type { BaseIconProps } from './shared/types';

export const Send = ({ size, color, className, ...props }: BaseIconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		className={iconStyles({ size, color, className })}
		{...props}
	>
		<path
			fill="currentColor"
			d="M4.4 19.425a.99.99 0 0 1-.95-.088c-.3-.191-.45-.47-.45-.837V14l8-2-8-2V5.5c0-.367.15-.646.45-.838a.99.99 0 0 1 .95-.087l15.4 6.5c.417.183.625.492.625.925 0 .433-.208.742-.625.925l-15.4 6.5Z"
		/>
	</svg>
);
