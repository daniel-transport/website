import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { SectionDark, SectionTitle } from 'components/Share';
import { Error } from 'components/Alerts';
import CTA from 'components/CTA';
import { StyledSection, ErrorWrapper } from './styles';

const NotFound = () => {
	const { contentYaml } = useStaticQuery(graphql`
		{
			contentYaml {
				notFound {
					title
					text
					button {
						title
						to
					}
				}
			}
		}
	`);

	const { title, text, button } = contentYaml.notFound;

	return (
		<StyledSection as={SectionDark}>
			<SectionTitle hide>{title}</SectionTitle>
			<ErrorWrapper>
				<Error title={text} />
			</ErrorWrapper>
			<CTA to={button.to} title={button.title} />
		</StyledSection>
	);
};

export default NotFound;
