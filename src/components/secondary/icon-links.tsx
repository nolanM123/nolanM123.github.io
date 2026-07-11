import { tv } from 'tailwind-variants';

import type { IconLink as IconLinkType } from '../../shared/types';
import { Button, Flex } from '../foundation';
import { iconMap } from '../icons/shared/types';

// --- Styles ---

const iconLinksStyles = tv({
	base: 'gap-xs',
});

// --- Props ---

export interface IconLinksProps {
	links: IconLinkType[];
	className?: string;
}

// --- Components ---

const isExternalLink = (source: string) =>
	source.startsWith('http://') || source.startsWith('https://');

export const IconLinks = ({ links, className }: IconLinksProps) => {
	const styles = iconLinksStyles({ className });

	if (!links.length) {
		return null;
	}

	return (
		<Flex direction="row" justifyContent="center" className={styles}>
			{links.map((link) => {
				const Icon = iconMap[link.icon];
				const external = isExternalLink(link.source);

				return (
					<Button
						key={link.source}
						as="a"
						href={link.source}
						target={external ? '_blank' : undefined}
						rel={external ? 'noopener noreferrer' : undefined}
						aria-label={link.icon}
						size="square"
					>
						<Icon />
					</Button>
				);
			})}
		</Flex>
	);
};
