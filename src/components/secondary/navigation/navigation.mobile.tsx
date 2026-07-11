import { useEffect, useRef, useState } from 'react';
import { tv } from 'tailwind-variants';

import type { Section } from '../../../shared/types';
import { Button, Flex, Text } from '../../foundation';
import { Lines } from '../../icons';

// --- Styles ---

const mobileNavigationStyles = tv({
	slots: {
		baseContainer: 'relative w-full',
		menuButton: 'p-2',
		drawerContainer: 'absolute top-full left-0 transition-all duration-300',
		navText: 'transition-all duration-500',
	},
	variants: {
		isOpen: {
			true: {
				drawerContainer:
					'visible opacity-100 shadow-md translate-y-0 scale-[1.01]',
			},
			false: {
				drawerContainer:
					'invisible opacity-0 shadow-none -translate-y-2 scale-100 pointer-events-none',
			},
		},
	},
});

// --- Props ---

export interface MobileNavigationProps {
	data: Section[];
	activeSectionId: string;
	className?: string;
}

// --- Components ---

export const MobileNavigation = ({
	data,
	activeSectionId,
	className,
}: MobileNavigationProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null); // Ref to track the wrapper

	const styles = mobileNavigationStyles({ isOpen });

	const toggleMenu = () => setIsOpen((prev) => !prev);
	const closeMenu = () => setIsOpen(false);

	// Handle clicking outside of the navigation container
	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				isOpen &&
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				closeMenu();
			}
		};

		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [isOpen]);

	return (
		<Flex
			ref={containerRef} // Attached ref here
			direction="row"
			alignItems="center"
			className={styles.baseContainer({ className })}
		>
			<Button
				variant="nav"
				onClick={toggleMenu}
				className={styles.menuButton()}
				aria-expanded={isOpen}
				aria-label="Toggle navigation menu"
			>
				<Lines />
			</Button>

			<Flex
				radius="xlarge"
				padding="spaceS"
				backgroundColor="surfaceSecondary"
				zIndex="layerSticky"
				className={styles.drawerContainer()}
			>
				{data.map((section, index) => {
					const isSelected = activeSectionId === section.props.id;
					return (
						<Button
							key={index}
							as="a"
							href={`#${section.props.id}`}
							variant="nav"
							onClick={closeMenu}
						>
							<Text
								as="span"
								variant={isSelected ? 'display' : 'body'}
								color={isSelected ? 'contentPrimary' : 'contentMuted'}
								className={styles.navText()}
							>
								{section.name}
							</Text>
						</Button>
					);
				})}
			</Flex>
		</Flex>
	);
};
