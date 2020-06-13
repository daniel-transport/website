import styled from 'styled-components';

export const Wrapper = styled.div.attrs(({ transform }) => ({
	style: {
		position: 'fixed',
		transform: `translateY(-${transform / 3}px)`,
	},
}))`
	z-index: -2;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	height: 100vh;
	will-change: transform;
`;

export default Wrapper;
