import styled from 'styled-components';

export const Wrapper = styled.footer`
	background: ${({ theme }) => theme.color.bright};
`;

export const Copyright = styled.p`
	max-width: 1360px;
	margin: 0 auto;
	padding: 1em 0.5rem;
	color: ${({ theme }) => theme.color.dark};
	font-size: 0.85em;
	line-height: 2;
	text-align: center;
`;
