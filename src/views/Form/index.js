import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Form from 'components/Form';
import { SectionDark, SectionTitle } from 'components/Share';
import { Wrapper } from './styles';

const About = ({ id }) => {
	const { contentYaml } = useStaticQuery(graphql`
		{
			contentYaml {
				form {
					title
					text
				}
			}
		}
	`);

	const { title, text } = contentYaml.form;

	return (
		<SectionDark id={id}>
			<Wrapper>
				<SectionTitle>{title}</SectionTitle>
				<Form info={text} />
			</Wrapper>
		</SectionDark>
	);
};

About.propTypes = {
	id: PropTypes.string.isRequired,
};

export default About;
