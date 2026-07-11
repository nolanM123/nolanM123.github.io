import { iconStyles } from './shared/styles';
import type { BaseIconProps } from './shared/types';

export const Lines = ({ size, color, className, ...props }: BaseIconProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
		className={iconStyles({ size, color, className })}
		{...props}
  >
    <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="currentColor" />
  </svg>
);
