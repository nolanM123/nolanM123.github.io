import { iconStyles } from './shared/styles';
import type { BaseIconProps } from './shared/types';

export const Linkedin = ({
	size,
	color,
	className,
	...props
}: BaseIconProps) => (
	<svg
		xmlns="http://w3.org"
		viewBox="0 0 24 24"
		width={24}
		height={24}
		fill="currentColor"
		className={iconStyles({ size, color, className })}
		{...props}
	>
		<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .58 1 1.42v4.7zM6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.13H5.2V18.5z" />
	</svg>
);
