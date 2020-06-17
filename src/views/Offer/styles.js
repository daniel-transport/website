import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1360px;
	margin: 0 auto;
`;

export const Paragraph = styled.p`
	max-width: 900px;
	margin: 0 auto 4em;
	padding: 0 0.75rem;
	line-height: 2;
	text-align: center;
`;

export const CardHeader = styled.p`
	margin: 0 0.75rem 1.5em;
	font-weight: 500;
	line-height: 2;
	text-align: center;
`;

export const CardList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin: 0 0 4em;
	padding: 0;
	list-style: none;
`;

export const CardItem = styled.li`
	display: flex;
	position: relative;
	width: 15em;
	height: 16em;
	margin: 2em;
`;

export const BtnWrapper = styled.div`
	display: flex;
	justify-content: center;
`;
