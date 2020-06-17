import styled from 'styled-components';

export const Wrapper = styled.button`
	display: inline-block;
	position: relative;
	padding: 1em 1.5rem;
	border: 3px solid ${({ theme }) => theme.color.primary};
	border-radius: 0.5em;
	outline: none;
	background: ${({ theme }) => theme.color.primary};
	color: ${({ theme }) => theme.color.bright};
	font: inherit;
	text-align: center;
	text-decoration: none;
	cursor: pointer;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transition: transform 0.3s ease-in-out;
		border-radius: 0.25em;
		background: ${({ theme }) => theme.color.dark};
		will-change: transform;
	}

	&::after {
		content: '';
		position: absolute;
		top: -3px;
		right: -3px;
		bottom: -3px;
		left: -3px;
		transition: opacity 0.3s ease-in-out;
		border-radius: 0.5em;
		opacity: 0;
		background: ${({ theme }) => theme.color.primary};
		filter: drop-shadow(0 0 3px ${({ theme }) => theme.color.primary});
	}

	&:hover,
	&:focus {
		&::before {
			transform: scaleX(0);
		}

		&::after {
			opacity: 1;
		}
	}
`;

export const Text = styled.span`
	position: relative;
	z-index: 1;
	font-size: 1.1em;
	font-weight: 700;
`;
