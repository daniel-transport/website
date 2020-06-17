import React from 'react';
import PropTypes from 'prop-types';

import ConditionalLink from 'components/Conditional';
import { Wrapper, Text } from './styles';

const CTA = ({ title, to, submit, className }) => (
	<Wrapper
		as={!submit && ConditionalLink}
		type={submit && 'submit'}
		to={to}
		className={className}
	>
		<Text>{title}</Text>
	</Wrapper>
);

CTA.propTypes = {
	title: PropTypes.string.isRequired,
	to: PropTypes.string,
	submit: PropTypes.bool,
	className: PropTypes.string,
};

CTA.defaultProps = {
	to: null,
	submit: false,
	className: null,
};

export default CTA;
