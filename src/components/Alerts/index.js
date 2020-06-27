import React from 'react';
import PropTypes from 'prop-types';
import error from './error.svg';
import success from './success.svg';
import { ErrorWrapper, SuccessWrapper, Icon } from './styles';

const Error = ({ title }) => (
	<ErrorWrapper>
		<Icon src={error} draggable="false" />
		{title}
	</ErrorWrapper>
);

const Success = ({ title }) => (
	<SuccessWrapper>
		<Icon src={success} draggable="false" />
		{title}
	</SuccessWrapper>
);

Error.propTypes = {
	title: PropTypes.string.isRequired,
};

Success.propTypes = {
	title: PropTypes.string.isRequired,
};

export { Error, Success };
