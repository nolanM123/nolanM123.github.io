import React from 'react';

import type { Card as CardType } from '../../shared/types';
import { Card, Divider, Section } from '../secondary';
import type { LocalComponentProps } from './shared/types';

// --- Props ---

export interface CardsProps extends LocalComponentProps {
	header: string;
	data: CardType[];
	className?: string;
}

// --- Components ---

export const Cards = ({ id, header, data, className }: CardsProps) => {
	return (
		<Section id={id} header={header} className={className}>
			<>
				{data.map((card, index) => (
					<React.Fragment key={card.header}>
						<Card {...card} />
						{index + 1 < data.length && <Divider />}
					</React.Fragment>
				))}
			</>
		</Section>
	);
};
