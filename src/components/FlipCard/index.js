import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, FrontFace, BackFace, Title, Icon, Text } from './styles';

const FlipCard = ({ title, icon, text, className }) => (
	<Wrapper className={className}>
		<FrontFace as="header">
			<Icon src={icon.file.publicURL} alt={icon.alt} draggable="false" />
			<Title>{title}</Title>
		</FrontFace>
		<BackFace>
			<Text>{text}</Text>
		</BackFace>
	</Wrapper>
);

FlipCard.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.shape({
		file: PropTypes.object.isRequired,
		alt: PropTypes.string,
	}).isRequired,
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
};

FlipCard.defaultProps = {
	className: null,
};

export default FlipCard;
