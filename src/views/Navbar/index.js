import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Logo from 'components/Logo';
import Menu from 'components/Menu';
import Burger from 'components/Burger';
import { Wrapper, Nav, StyledLogo, StyledMenu, StyledBurger } from './styles';

const Navbar = ({ id }) => {
	const [isOpen, setIsOpen] = useState(false);
	const navbar = useRef(null);

	const {
		contentYaml: { menu, logo },
	} = useStaticQuery(graphql`
		{
			contentYaml {
				menu {
					title
					to
				}
				logo {
					title
					to
					cover {
						alt
						file {
							publicURL
						}
					}
				}
			}
		}
	`);

	const disableBurger = () => {
		setIsOpen(false);
	};

	const toggleBurger = () => {
		setIsOpen(!isOpen);
	};

	const handleClickOutside = e => {
		if (navbar && !navbar.current.contains(e.target)) {
			disableBurger();
		}
	};

	useEffect(() => {
		if (!isOpen) return undefined;
		window.addEventListener('click', handleClickOutside);
		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	}, [isOpen]);

	useEffect(() => {
		window.addEventListener('orientationchange', disableBurger);
		return () => {
			window.removeEventListener('orientationchange', disableBurger);
		};
	}, []);

	return (
		<Wrapper id={id} ref={navbar}>
			<Nav>
				<StyledLogo
					as={Logo}
					to={logo.to}
					title={logo.title}
					image={logo.cover.file.publicURL}
					alt={logo.cover.alt}
					click={disableBurger}
				/>
				<StyledMenu
					as={Menu}
					items={menu}
					isOpen={isOpen}
					click={disableBurger}
				/>
				<StyledBurger as={Burger} click={toggleBurger} isOpen={isOpen} />
			</Nav>
		</Wrapper>
	);
};

Navbar.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Navbar;
