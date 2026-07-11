import type { FormEvent } from 'react';

import type { Contact as ContactType } from '../../shared/types';
import { Button, Flex, Input } from '../foundation';
import { IconLinks, Section } from '../secondary';
import type { LocalComponentProps } from './shared/types';

// --- Props ---
export interface ContactProps extends LocalComponentProps {
	header: string;
	data: ContactType;
	className?: string;
}

// --- Components ---
export const Contact = ({
	id,
	header,
	data: {
		email,
		subject,
		emailPlaceholder,
		bodyPlaceholder,
		sendButton,
		links,
	},
	className,
}: ContactProps) => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const body = formData.get('body') as string;

		const emailSubject = encodeURIComponent(subject);
		const emailBody = encodeURIComponent(body);

		window.location.href = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`;
	};

	return (
		<Section id={id} header={header} className={className}>
			<Flex as="form" alignItems="end" gap="spaceS" onSubmit={handleSubmit}>
				<Input
					type="email"
					name="email"
					id="contact-email-input"
					placeholder={emailPlaceholder}
					required
				/>
				<Input
					as="textarea"
					name="body"
					id="contact-body-input"
					placeholder={bodyPlaceholder}
					required
				/>
				<Button
					type="submit"
					endIcon="Send"
					marginTop="spaceM"
					className="w-fit shadow-md"
				>
					{sendButton}
				</Button>
			</Flex>
			<Flex paddingY="spaceXL">
				<IconLinks links={links} />
			</Flex>
		</Section>
	);
};
