import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	position: relative;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

export const Column = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	max-width: 450px;
	padding: 0 1em;
`;

export const Text = styled.p`
	font-size: 0.8em;
	font-weight: 300;
	line-height: 1.5;
`;

export const InfoWrapper = styled.div`
	position: relative;
	max-width: 1000px;
	margin: 2.5em auto;
	text-align: center;
`;

export const SubmitWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;
