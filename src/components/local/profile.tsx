import { tv } from 'tailwind-variants';

import type { Profile as ProfileType } from '../../shared/types';
import { Flex, Text } from '../foundation';
import { Section } from '../secondary';
import { IconLinks } from '../secondary/icon-links';
import type { LocalComponentProps } from './shared/types';

// --- Styles ---

const profileStyles = tv({
	slots: {
		headerContainer: 'gap-m sm:gap-4xl',
		bioShortText: 'block sm:hidden',
		bioFullText: 'hidden sm:block',
		portraitContainer:
			'overflow-hidden w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32',
		portraitImage: 'w-full h-full',
	},
});

// --- Props ---

export interface ProfileProps extends LocalComponentProps {
	data: ProfileType;
	className?: string;
}

// --- Components ---

export const Profile = ({
	id,
	data: { name, title, bio, hero, links },
	className,
}: ProfileProps) => {
	const styles = profileStyles();

	const Header = (
		<Flex
			direction="row"
			justifyContent="between"
			className={styles.headerContainer({ className })}
		>
			<Flex gap="spaceL">
				<Flex gap="space4XS">
					<Text variant="display" size="large" wrap="nowrap" strong>
						{name}
					</Text>
					<Text
						variant="header"
						size="xsmall"
						wrap="nowrap"
						color="contentMuted"
					>
						{title}
					</Text>
				</Flex>
				<Text size="small" className={styles.bioShortText()}>
					{bio.short}
				</Text>
				<Text size="small" className={styles.bioFullText()}>
					{bio.full}
				</Text>
			</Flex>
			<Flex
				alignItems="center"
				justifyContent="center"
				flexShrink="noshrink"
				radius="full"
				className={styles.portraitContainer()}
			>
				<img
					src={hero.source}
					alt={hero.alt}
					className={styles.portraitImage()}
				/>
			</Flex>
		</Flex>
	);

	return (
		<Section id={id} header={Header}>
			<Flex paddingY="spaceXL">
				<IconLinks links={links} />
			</Flex>
		</Section>
	);
};
