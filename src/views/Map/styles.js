import styled from 'styled-components';

export const StyledMap = styled.div`
	z-index: 1;
	width: 100%;
	height: 60vh;

	.leaflet-tile-pane {
		filter: grayscale(100%);
	}
`;

export default StyledMap;
