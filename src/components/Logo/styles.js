import styled from 'styled-components';

export const LogoWrapper = styled.div`
	display: block;
	max-width: 18em;
	transition: transform 0.3s ease-in, filter 0.3s ease-in;
	outline: none;

	:hover,
	:focus {
		transform: scale(1.02);
		filter: drop-shadow(0 0 3px ${({ theme }) => theme.color.primary});
	}
`;

export const LogoImg = styled.img`
	display: block;
	width: 100%;
`;
