import React from 'react';
import PropTypes from 'prop-types';
import { Title, Icon, Text } from './styles';

const Card = ({ className, title, icon, alt, text }) => (
	<article className={className}>
		<Icon src={icon.publicURL} alt={alt} draggable="false" />
		<Title>{title}</Title>
		<Text>{text}</Text>
	</article>
);

Card.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
	icon: PropTypes.shape().isRequired,
	alt: PropTypes.string,
	text: PropTypes.string.isRequired,
};

Card.defaultProps = {
	className: null,
	alt: null,
};

export default Card;
