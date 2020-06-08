import styled from 'styled-components';

const lineWidth = '25px';
const lineHeight = '3px';
const lineGap = '10px';
const transition = 'transform 0.25s ease-out';

export const BurgerWrapper = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	border: none;
	outline: none;
	background: transparent;
	cursor: pointer;
`;

export const BurgerLines = styled.span`
	position: relative;
	width: ${lineWidth};
	height: ${lineHeight};
	transform: ${({ isOpen }) => isOpen && 'rotate(225deg)'};
	transition: ${transition};
	background: ${({ theme }) => theme.color.bright};
	cursor: pointer;

	::after,
	::before {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		height: ${lineHeight};
		transition: ${transition};
		background: inherit;
		box-shadow:
			${({ theme,
		isOpen }) => isOpen ? `0 0 5px ${theme.color.primary}` : 'none'};
	}

	::before {
		transform: ${({ isOpen }) => !isOpen ? `translatey(-${lineGap}) ` : 'rotate(90deg)'};
	}

	::after {
		transform: ${({ isOpen }) => !isOpen ? `translatey(${lineGap}) ` : 'translateY(0)'};
	}
`;
