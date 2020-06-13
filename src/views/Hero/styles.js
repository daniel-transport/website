import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	height: 100vh;
	padding: 0 0.75rem;
	overflow: hidden;

	::before {
		content: '';
		position: absolute;
		z-index: -1;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: linear-gradient(#000 5%, transparent 100%);
	}
`;

export const Header = styled.header`
	color: ${({ theme }) => theme.color.bright};
	font-size: 0.7em;
	text-align: center;
	text-transform: uppercase;
	${({ theme }) => theme.mq.desktop} {
		font-size: 1em;
		text-align: right;
	}
`;

export const H1 = styled.h1`
	margin: 0 0 0.5em;
	font-size: 3em;
	font-weight: 300;
`;

export const H2 = styled.h2`
	margin: 0;
	font-size: 1.75em;
	font-weight: 300;
`;
