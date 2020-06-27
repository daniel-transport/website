import styled from 'styled-components';

const Alert = styled.p`
	display: flex;
	position: absolute;
	top: 50%;
	left: 50%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 1em;
	transform: translate(-50%, -50%);
	border: 5px solid transparent;
	border-radius: 0.25rem;
	font-weight: 500;
	line-height: 1.5;
	text-align: center;
`;

export const ErrorWrapper = styled(Alert)`
	width: 100%;
	min-height: 100%;
	border-color: #f5c6cb;
	background-color: #f8d7da;
	color: #721c24;
`;

export const SuccessWrapper = styled(Alert)`
	position: fixed;
	z-index: 1000;
	width: 85%;
	height: 75vh;
	border-color: #c3e6cb;
	background-color: #d4edda;
	color: #155724;
	font-size: 2em;
`;

export const Icon = styled.img`
	display: block;
	width: 2.5em;
	margin: 0 auto 0.5em;
	opacity: 0.5;
`;
