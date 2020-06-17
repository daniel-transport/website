import styled from 'styled-components';

export const Wrapper = styled.div`
	display: inline-block;
	padding: 1em;
	color: ${({ theme }) => theme.color.dark};
	text-align: center;
	text-decoration: none;
`;

export const LinkWrapper = styled.div`
	display: inline-block;
	transition: transform 0.3s ease-in-out;
	outline: none;

	:hover,
	:focus {
		transform: ${({ to }) => (to ? 'scale(1.15) ' : 'none')};
	}
`;

export const Icon = styled.img`
	display: block;
	width: 3em;
	transition: filter 0.3s ease-in-out;

	${LinkWrapper}:hover &,
	${LinkWrapper}:focus & {
		filter:
			${({ isLink,
		theme }) => isLink ? `drop-shadow(0 0 3px ${theme.color.primary}) ` : 'none'};
	}
`;

export const Text = styled.p`
	margin: 0 auto;
	font-weight: 300;
	line-height: 2.5;
	white-space: pre-wrap;
`;
