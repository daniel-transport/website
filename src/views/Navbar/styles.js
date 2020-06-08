import styled from 'styled-components';

export const Wrapper = styled.div`
	position: fixed;
	z-index: 1000;
	top: 0;
	right: 0;
	left: 0;
	background: ${({ theme }) => theme.color.transparentBlack};
`;

export const Nav = styled.nav`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: space-between;
	max-width: 1360px;
	margin: 0 auto;
	padding: 1rem 0.75rem;
`;

export const StyledLogo = styled.div`
	flex: 1 0 200px;
	margin-right: 4em;
`;

export const StyledMenu = styled.div`
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	position: absolute;
	top: 100%;
	right: 0;
	left: 0;
	flex: 15;
	padding: 1em 0;
	transition: opacity 0.35s ease-out, visibility 0.35s;
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
	background: ${({ theme }) => theme.color.transparentBlack};
	will-change: opacity;
	${({ theme }) => theme.mq.tabletMid} {
		visibility: visible;
		position: static;
		flex-direction: row;
		padding: 0;
		opacity: 1;
		background: transparent;
	}
`;

export const StyledBurger = styled.div`
	width: 3em;
	height: 3em;
	${({ theme }) => theme.mq.tabletMid} {
		display: none;
	}
`;
