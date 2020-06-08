import styled from 'styled-components';

export const MenuList = styled.ul`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const MenuItem = styled.li`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	margin: 0 0.25em;
`;

export const MenuLink = styled.a`
	display: block;
	padding: 1.5em 0;
	transition: transform 0.3s ease-in;
	outline: none;
	color: ${({ theme }) => theme.color.bright};
	font-size: 1em;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;

	::after {
		content: '';
		display: block;
		height: 2px;
		margin: auto;
		transform: translateY(5px) scale(0, 1);
		transition: transform 0.5s ease;
		background: ${({ theme }) => theme.color.primary};
		box-shadow: 0 0 5px ${({ theme }) => theme.color.primary};
	}

	:hover::after,
	:focus::after {
		transform: translateY(5px) scale(1, 1);
	}
`;
