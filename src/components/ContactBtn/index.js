import React from 'react';
import PropTypes from 'prop-types';

import Conditional from 'components/Conditional';
import { Wrapper, LinkWrapper, Icon, Text } from './styles';

const ContactBtn = ({ text, icon, alt, to, className }) => (
	<Wrapper className={className}>
		<LinkWrapper as={to && Conditional} to={to}>
			<Icon isLink={!!to} src={icon.publicURL} alt={alt} draggable="false" />
		</LinkWrapper>
		<Text>{text}</Text>
	</Wrapper>
);

ContactBtn.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired,
	icon: PropTypes.shape().isRequired,
	alt: PropTypes.string,
	to: PropTypes.string,
};

ContactBtn.defaultProps = {
	className: null,
	alt: null,
	to: null,
};

export default ContactBtn;
