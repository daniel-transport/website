import styled from 'styled-components';

export const Wrapper = styled.article`
	position: relative;
	width: 100%;
	height: 100%;
	perspective: 1000px;
	cursor: pointer;
`;

const Face = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 1em;
	backface-visibility: hidden;
	transition: transform 1s ease-in-out;
	border: 2px solid ${({ theme }) => theme.color.bright};
	border-radius: 0.5em;
`;

export const FrontFace = styled(Face)`
	background: ${({ theme }) => theme.color.bright};
	color: ${({ theme }) => theme.color.dark};

	${Wrapper}:hover & {
		transform: rotateY(-180deg);
	}

	::before {
		content: '';
		position: absolute;
		top: 1px;
		right: 1px;
		bottom: 1px;
		left: 1px;
		border: 4px solid ${({ theme }) => theme.color.dark};
		border-radius: 0.5em;
	}
`;

export const BackFace = styled(Face)`
	overflow: hidden;
	transform: rotateY(180deg);

	${Wrapper}:hover & {
		transform: rotateY(0);
	}
`;

export const Icon = styled.img`
	display: block;
	width: 10em;
	margin: -1em auto;
	filter: drop-shadow(0 0 3px ${({ theme }) => theme.color.primary});
`;

export const Title = styled.h3`
	font-size: 1.15em;
	font-weight: 500;
	text-align: center;
`;

export const Text = styled.p`
	font-weight: 300;
`;
