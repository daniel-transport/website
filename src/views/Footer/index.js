import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import { Wrapper, Copyright } from './styles';

const Footer = ({ id }) => {
	const {
		contentYaml: { footer },
	} = useStaticQuery(graphql`
		{
			contentYaml {
				footer {
					file {
						publicURL
					}
				}
			}
		}
	`);
	const actualDate = new Date();

	return (
		<Wrapper id={id}>
			<Copyright>
				© 1989 - {actualDate.getFullYear()} Daniel S.C. All Rights Reserved |
				Developed by las media |{' '}
				<a
					rel="noopener noreferrer"
					href={footer.file.publicURL}
					target="_blank"
				>
					Polityka danych osobowych
				</a>
			</Copyright>
		</Wrapper>
	);
};

Footer.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Footer;
