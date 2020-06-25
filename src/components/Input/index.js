import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Label, Input } from './styles';

const typeChecker = (isTextArea, name) => {
	if (isTextArea) return null;
	if (name === 'email') return name;
	return 'text';
};

const FormInput = ({
	title,
	name,
	value,
	onChange,
	isRequired,
	isTextArea,
}) => (
	<Wrapper>
		<Label htmlFor={name}>
			{title}
			{isRequired && '*'}
		</Label>
		<Input
			as={isTextArea && 'textarea'}
			id={name}
			name={name}
			type={typeChecker(isTextArea, name)}
			value={value}
			rows={isTextArea ? '5' : null}
			onChange={onChange}
			required={isRequired}
		/>
	</Wrapper>
);

FormInput.propTypes = {
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	isRequired: PropTypes.bool,
	isTextArea: PropTypes.bool,
};

FormInput.defaultProps = {
	isRequired: false,
	isTextArea: false,
};

export default FormInput;
