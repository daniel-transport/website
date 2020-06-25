import styled from 'styled-components';

export const Wrapper = styled.p`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0;
	margin-bottom: 1.5em;
`;

export const Label = styled.label`
	margin: 0 0.5rem 1em;
	font-size: 0.9em;
`;

export const Input = styled.input`
	flex: 1;
	padding: 0.5em 1.5rem;
	border: 5px solid transparent;
	border-radius: 0.5em;
	outline: none;
	background: ${({ theme }) => theme.color.bright};
	font: inherit;
	font-size: 1rem;
	line-height: 1.5;

	&:focus {
		border-color: ${({ theme }) => theme.color.primary};
		filter: drop-shadow(0 0 5px ${({ theme }) => theme.color.primary});
	}
`;
