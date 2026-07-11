import type { ComponentType } from 'react';

import { localComponentMap } from './components/local/shared/constants';
import { Navigation } from './components/secondary';
import { JsonLd } from './components/seo/json-ld';
import { Sections } from './data';

export const App = () => {
	return (
		<>
			<JsonLd />
			<Navigation data={Sections} />
			<main>
				{Sections.map((section) => {
					const Section = localComponentMap[section.type] as ComponentType<
						typeof section.props
					>;

					return <Section key={section.props.id} {...section.props} />;
				})}
			</main>
		</>
	);
};
