import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import CTA from 'components/CTA';
import Input from 'components/Input';
import { Success, Error } from 'components/Alerts';
import initialState from './state';
import formReducer from './reducer';
import formHandler from './formHandler';

import { Wrapper, Column, Text, InfoWrapper, SubmitWrapper } from './styles';

const Form = ({ info }) => {
	const [state, dispatch] = useReducer(formReducer, initialState);
	const { name, email, phone, msg, isLoading, err, success, botField } = state;

	const onSubmit = async e => {
		e.preventDefault();
		dispatch({ type: 'verifying' });
		try {
			const successMsg = await formHandler(state);
			dispatch({
				type: 'success',
				success: successMsg,
			});
			setTimeout(() => dispatch({ type: 'finish' }), 2000);
		} catch (error) {
			dispatch({
				type: 'error',
				error: error.message,
			});
		}
	};

	const onChange = e => {
		dispatch({
			type: 'field',
			field: e.target.name,
			value: e.currentTarget.value,
		});

		if (err) {
			dispatch({
				type: 'error',
				error: '',
			});
		}
	};

	return (
		<form
			name="contact"
			method="post"
			data-netlify="true"
			data-netlify-honeypot="botField"
			onSubmit={onSubmit}
		>
			<Wrapper>
				<input type="hidden" name="form-name" value="contact" />
				<p hidden>
					<label htmlFor="botField">Nie zaznaczaj tego</label>
					<input
						id="botField"
						name="botField"
						value={botField}
						onChange={onChange}
					/>
				</p>
				<Column>
					<Input
						title="firma/imię"
						name="name"
						value={name}
						onChange={onChange}
						isRequired
					/>
					<Input
						title="e-mail"
						name="email"
						value={email}
						onChange={onChange}
						isRequired
					/>
					<Input
						title="telefon"
						name="phone"
						value={phone}
						onChange={onChange}
						isRequired
					/>
				</Column>
				<Column>
					<Input
						title="treść wiadomości"
						name="msg"
						value={msg}
						onChange={onChange}
						isTextArea
						isRequired
					/>
				</Column>
				{success && <Success title={success} />}
			</Wrapper>
			<InfoWrapper>
				<Text>{info}</Text>
				{err && <Error title={err} />}
			</InfoWrapper>
			<SubmitWrapper>
				<CTA submit title={isLoading ? 'wysyłam' : 'wyślij wiadomość'} />
			</SubmitWrapper>
		</form>
	);
};

Form.propTypes = {
	info: PropTypes.string,
};

Form.defaultProps = {
	info: null,
};

export default Form;
