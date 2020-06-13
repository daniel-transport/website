import styled from 'styled-components';

export const SectionBright = styled.section`
	padding: 6em 0.5rem;
	background: ${({ theme }) => theme.color.bright};
	color: ${({ theme }) => theme.color.dark};
`;

export const SectionDark = styled.section`
	padding: 6em 0.5rem;
	background: ${({ theme }) => theme.color.dark};
	color: ${({ theme }) => theme.color.bright};
`;

export const SectionTitle = styled.h2`
	position: ${({ hide }) => (hide ? 'absolute' : 'static')};
	left: -999em;
	margin: 0 auto 2.5em;
	font-size: 1.75em;
	font-weight: 500;
	text-align: center;

	::after {
		content: '';
		display: block;
		width: 5em;
		height: 1px;
		margin: auto;
		transform: translateY(0.3em);
		background: ${({ theme }) => theme.color.primary};
		box-shadow: 0 0 5px ${({ theme }) => theme.color.primary};
	}
`;
