import type { SkillCard as SkillCardType } from '../../shared/types';
import { Marquee } from '../foundation';
import { Section } from '../secondary';
import { SkillCard } from '../secondary';
import type { LocalComponentProps } from './shared/types';

// --- Props ---

export interface SkillCardsProps extends LocalComponentProps {
	header: string;
	data: SkillCardType[];
	className?: string;
}

// --- Components ---

export const SkillCards = ({
	id,
	header,
	data,
	className,
}: SkillCardsProps) => {
	return (
		<Section id={id} header={header} className={className}>
			<Marquee padding="space2XS">
				{data.map((skill) => (
					<SkillCard key={skill.header} {...skill} />
				))}
			</Marquee>
		</Section>
	);
};
