import styled from 'styled-components';

export const Icon = styled.img`
	display: block;
	width: 6em;
	margin: 0 auto;
`;

export const Title = styled.h3`
	position: relative;
	margin: 1.5em 0;
	font-size: 1.5em;
	font-weight: 500;
	text-align: center;

	::after {
		content: '';
		display: block;
		width: 5em;
		height: 1px;
		margin: auto;
		transform: translateY(0.5em);
		background: ${({ theme }) => theme.color.primary};
		box-shadow: 0 0 5px ${({ theme }) => theme.color.primary};
	}
`;

export const Text = styled.p`
	line-height: 2;
`;
