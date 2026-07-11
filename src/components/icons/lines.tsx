import { iconStyles } from './shared/styles';
import type { BaseIconProps } from './shared/types';

export const Lines = ({ size, color, className, ...props }: BaseIconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="currentColor"
		className={iconStyles({ size, color, className })}
		{...props}
	>
		<mask
			id="a"
			width={24}
			height={24}
			x={0}
			y={0}
			maskUnits="userSpaceOnUse"
			style={{
				maskType: 'alpha',
			}}
		>
			<path fill="#D9D9D9" d="M0 0h24v24H0z" />
		</mask>
		<g mask="url(#a)">
			<path
				fill="#1C1B1F"
				d="M4 18a.967.967 0 0 1-.712-.288A.968.968 0 0 1 3 17c0-.283.096-.52.288-.712A.967.967 0 0 1 4 16h16c.283 0 .52.096.712.288.192.191.288.429.288.712s-.096.52-.288.712A.968.968 0 0 1 20 18H4Zm0-5a.967.967 0 0 1-.712-.287A.968.968 0 0 1 3 12c0-.283.096-.52.288-.713A.967.967 0 0 1 4 11h16c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.713A.968.968 0 0 1 20 13H4Zm0-5a.968.968 0 0 1-.712-.287A.968.968 0 0 1 3 7c0-.283.096-.52.288-.713A.968.968 0 0 1 4 6h16c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.713A.968.968 0 0 1 20 8H4Z"
			/>
		</g>
	</svg>
);
